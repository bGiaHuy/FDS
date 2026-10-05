import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';
import ts from 'typescript';
const source = new URL('../lib/fds-members.ts', import.meta.url);
const target = new URL('../../backend/src/members/catalog.json', import.meta.url);
const js = ts.transpileModule(await readFile(source,'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
const context = { exports: {} };
vm.runInNewContext(js, context, { filename:fileURLToPath(source) });
const catalog = context.exports.fdsMembers.map(({sourceFile, ...member}) => member);
const output = JSON.stringify(catalog,null,2)+'\n';
if (process.argv.includes('--check')) {
  if (output !== await readFile(target,'utf8')) throw new Error('Member catalog differs. Run npm run members:catalog in frontend.');
} else await writeFile(target,output);
console.log(`Member catalog: ${catalog.length} profiles.`);
