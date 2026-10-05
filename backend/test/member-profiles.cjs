// Real controllers, validation and signed JWTs; all database operations stay in memory.
require('reflect-metadata');
const assert = require('node:assert/strict');
const { Test } = require('@nestjs/testing');
const { ConfigModule } = require('@nestjs/config');
const { ValidationPipe } = require('@nestjs/common');
const { JwtService } = require('@nestjs/jwt');
const bcrypt = require('bcrypt');
const { MembersModule } = require('../dist/src/members/members.module');
const { PrismaService } = require('../dist/src/prisma.service');
const catalog = require('../src/members/catalog.json');

async function main() {
  process.env.JWT_SECRET = 'isolated-profile-test-secret';
  process.env.JWT_REFRESH_SECRET = 'isolated-profile-test-refresh';
  const [first, second, third] = catalog.filter(member => member.generation === '8').slice(0, 3);
  const defaults = { bio: '', major: '', cohort: '', skills: [], website: '', github: '', linkedin: '', profileMemberId: null };
  const passwordHash = await bcrypt.hash('ProfileTest123!', 4);
  const users = [
    { ...defaults, id: 1n, email: 'member1@example.test', name: first.name, role: 'MEMBER', profileMemberId: first.id, passwordHash },
    { ...defaults, id: 2n, email: 'member2@example.test', name: second.name, role: 'MEMBER', passwordHash },
    { ...defaults, id: 3n, email: 'admin@example.test', name: 'Quản trị viên thử nghiệm', role: 'ADMIN', passwordHash },
    { ...defaults, id: 4n, email: 'guest@example.test', name: 'Khách', role: 'GUEST', passwordHash },
  ];
  const project = (user, select) => !user ? null : !select ? { ...user } : Object.fromEntries(Object.keys(select).filter(key => select[key]).map(key => [key, user[key]]));
  const prisma = {
    user: {
      findUnique: async ({ where, select }) => project(users.find(user => Object.entries(where).every(([key, value]) => user[key] === value)), select),
      update: async ({ where, data }) => {
        const user = users.find(user => user.id === where.id);
        if (data.profileMemberId && users.some(other => other.id !== user.id && other.profileMemberId === data.profileMemberId)) throw { code: 'P2002' };
        Object.assign(user, data);return { ...user };
      },
    },
    session: { deleteMany: async () => ({ count: 0 }), create: async () => ({}) },
  };
  const module = await Test.createTestingModule({ imports: [ConfigModule.forRoot({ isGlobal: true, ignoreEnvFile: true }), MembersModule] }).overrideProvider(PrismaService).useValue(prisma).compile();
  const app = module.createNestApplication({ logger: false });
  app.use(require('cookie-parser')());
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  await app.listen(process.argv.includes('--serve') ? 4104 : 0, '127.0.0.1');
  const base = await app.getUrl();
  const jwt = new JwtService();
  const token = (sub, role = 'MEMBER') => jwt.sign({ sub: String(sub), role }, { secret: process.env.JWT_SECRET, expiresIn: '5m' });
  async function request(path, method = 'GET', body, auth) {
    const response = await fetch(`${base}${path}`, { method, headers: { 'Content-Type': 'application/json', ...(auth ? { Authorization: `Bearer ${auth}` } : {}) }, body: body === undefined ? undefined : JSON.stringify(body) });
    return { status: response.status, data: await response.json() };
  }
  try {
    assert.equal((await request('/members/me/profile', 'PATCH', { bio: 'x' })).status, 401);
    assert.equal((await request(`/members/${second.id}/owner`, 'PATCH', { email: users[1].email }, token(1, 'ADMIN'))).status, 403, 'Database role wins over JWT role');
    assert.equal((await request('/members/me/profile', 'PATCH', { bio: 'Thông tin thử nghiệm', id: '2', profileMemberId: second.id, role: 'ADMIN' }, token(1))).status, 200);
    assert.equal(users[0].bio, 'Thông tin thử nghiệm');assert.equal(users[1].bio, '');assert.equal(users[0].role, 'MEMBER');assert.equal(users[0].profileMemberId, first.id);
    assert.equal((await request('/members/me/profile', 'PATCH', { website: 'javascript:alert(1)' }, token(1))).status, 400);
    assert.equal((await request('/members/me/profile', 'PATCH', { bio: null }, token(1))).status, 400);
    assert.equal((await request('/members/me/profile', 'PATCH', { skills: Array(21).fill('Python') }, token(1))).status, 400);
    const publicProfile = (await request(`/members/${first.id}`)).data.profile;
    assert.equal(publicProfile.bio, 'Thông tin thử nghiệm');assert.equal(publicProfile.email, undefined);assert.equal(publicProfile.id, undefined);assert.equal(publicProfile.passwordHash, undefined);
    assert.equal((await request(`/members/${second.id}/owner`, 'PATCH', { email: users[1].email }, token(3))).status, 200);
    assert.equal(users[1].profileMemberId, second.id);
    assert.equal((await request(`/members/${first.id}/owner`, 'PATCH', { email: users[2].email }, token(3))).status, 409, 'A second account cannot claim an owned profile');
    assert.equal((await request(`/members/${third.id}/owner`, 'PATCH', { email: 'invalid' }, token(3))).status, 400);
    assert.equal((await request(`/members/${first.id}/owner`, 'PATCH', { email: users[1].email }, token(3))).status, 409);
    assert.equal((await request(`/members/${third.id}/owner`, 'PATCH', { email: users[3].email }, token(3))).status, 403);
    assert.equal((await request('/members/unknown')).status, 404);
    users[0].role = 'GUEST';
    assert.equal((await request(`/members/${first.id}`)).data.profile, null, 'Revoked membership is hidden immediately');
    users[0].role = 'MEMBER';users[0].bio = '';
    const login = await request('/auth/login', 'POST', { email: users[0].email, password: 'ProfileTest123!' });
    assert.equal(login.status, 201);assert.ok(login.data.accessToken);
    console.log('PASS: ownership, admin binding, public privacy, validation, role revocation and login.');
    if (process.argv.includes('--serve')) { console.log(`Isolated preview backend ready at ${base}; member ID: ${first.id}`);return; }
  } finally { if (!process.argv.includes('--serve')) await app.close(); }
}
main().catch(error => { console.error(error);process.exit(1); });
