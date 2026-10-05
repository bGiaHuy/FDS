import { Body, Controller, Get, Param, Patch, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { BindProfileDto, UpdateProfileDto } from './profile.dto';
import { MembersService } from './members.service';

@Controller('members')
export class MembersController {
  constructor(private readonly members: MembersService) {}
  @UseGuards(JwtAuthGuard) @Get('me/profile')
  me(@Req() req: { user: { sub: string } }) { return this.members.me(req.user.sub); }
  @UseGuards(JwtAuthGuard) @Patch('me/profile')
  update(@Req() req: { user: { sub: string } }, @Body() dto: UpdateProfileDto) { return this.members.update(req.user.sub, dto); }
  @Get(':memberId')
  member(@Param('memberId') id: string) { return this.members.member(id); }
  @UseGuards(JwtAuthGuard) @Patch(':memberId/owner')
  bind(@Req() req: { user: { sub: string } }, @Param('memberId') id: string, @Body() dto: BindProfileDto) { return this.members.bind(req.user.sub, id, dto.email); }
}
