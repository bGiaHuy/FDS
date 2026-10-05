import { ConflictException, ForbiddenException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { Role } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { UpdateProfileDto } from './profile.dto';
import catalog = require('./catalog.json');

const publicFields = { name: true, bio: true, major: true, cohort: true, skills: true, website: true, github: true, linkedin: true } as const;

@Injectable()
export class MembersService {
  constructor(private readonly prisma: PrismaService) {}
  private identifier(value: string) {
    if (!/^[1-9][0-9]*$/.test(value)) throw new UnauthorizedException('Tài khoản không hợp lệ.');
    return BigInt(value);
  }
  private async account(userId: string) {
    const user = await this.prisma.user.findUnique({ where: { id: this.identifier(userId) }, select: { ...publicFields, id: true, email: true, role: true, profileMemberId: true } });
    if (!user) throw new UnauthorizedException('Tài khoản không còn tồn tại.');
    return user;
  }
  async member(memberId: string) {
    const member = catalog.find(item => item.id === memberId);
    if (!member) throw new NotFoundException('Không tìm thấy thành viên.');
    const profile = await this.prisma.user.findUnique({ where: { profileMemberId: memberId }, select: { ...publicFields, role: true } });
    if (!profile || profile.role === Role.GUEST) return { member, profile: null };
    const { role, ...publicProfile } = profile;
    return { member, profile: publicProfile };
  }
  async me(userId: string) {
    const user = await this.account(userId);
    const member = user.role !== Role.GUEST ? catalog.find(item => item.id === user.profileMemberId) || null : null;
    return { user: { ...user, id: user.id.toString() }, member };
  }
  async update(userId: string, input: UpdateProfileDto) {
    const user = await this.account(userId);
    const data: UpdateProfileDto = {};
    for (const field of ['name', 'bio', 'major', 'cohort', 'website', 'github', 'linkedin'] as const) {
      if (input[field] !== undefined) data[field] = input[field]!.trim();
    }
    if (data.name !== undefined && data.name.length < 2) throw new ForbiddenException('Tên cần có ít nhất hai ký tự.');
    if (input.skills) data.skills = [...new Set(input.skills.map(skill => skill.trim()).filter(Boolean))];
    await this.prisma.user.update({ where: { id: user.id }, data });
    return this.me(userId);
  }
  async bind(adminId: string, memberId: string, email: string) {
    const admin = await this.account(adminId);
    if (admin.role !== Role.ADMIN) throw new ForbiddenException('Chỉ quản trị viên được gắn hồ sơ.');
    if (!catalog.some(item => item.id === memberId)) throw new NotFoundException('Không tìm thấy thành viên.');
    const target = await this.prisma.user.findUnique({ where: { email: email.trim() }, select: { id: true } });
    if (!target) throw new NotFoundException('Không tìm thấy tài khoản với email này.');
    const user = await this.account(target.id.toString());
    if (user.role === Role.GUEST) throw new ForbiddenException('Tài khoản cần được xác nhận là thành viên trước.');
    if (user.profileMemberId && user.profileMemberId !== memberId) throw new ConflictException('Tài khoản đã gắn với một hồ sơ khác.');
    try {
      await this.prisma.user.update({ where: { id: user.id }, data: { profileMemberId: memberId } });
    } catch (error) {
      if ((error as { code?: string }).code === 'P2002') throw new ConflictException('Hồ sơ đã gắn với một tài khoản khác.');
      throw error;
    }
    return { memberId, userId: user.id.toString() };
  }
}
