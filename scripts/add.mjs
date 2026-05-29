/**
 * Usage: node scripts/add.mjs <component-name>
 *
 * Adds a web component via shadcn into src/shared/ui/ and updates src/index.ts exports.
 */

import { spawnSync } from 'child_process';
import { existsSync, readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

const name = process.argv[2];

if (!name) {
  console.error('Usage: node scripts/add.mjs <component-name>');
  process.exit(1);
}

const uiDir = join('src', 'shared', 'ui');
const webFile = join(uiDir, `${name}.tsx`);

mkdirSync(uiDir, { recursive: true });

console.log(`\n Fetching: ${name} (shadcn)`);
const result = spawnSync(
  'npx',
  ['shadcn@latest', 'add', name, '--yes', '--overwrite'],
  { stdio: 'pipe', encoding: 'utf8', shell: true }
);

if (result.status !== 0 || !existsSync(webFile)) {
  console.error(`✗ shadcn does not have "${name}".`);
  console.error(result.stderr || '');
  process.exit(1);
}

console.log(`✓ ${name}.tsx`);

addExportIfMissing('src/index.ts', name);

console.log(`\n✅ Added ${name}`);
console.log(`   src/shared/ui/${name}.tsx`);

function addExportIfMissing(filePath, componentName) {
  if (!existsSync(filePath)) return;
  const content = readFileSync(filePath, 'utf8');
  if (content.includes(`/shared/ui/${componentName}`)) return;
  writeFileSync(filePath, content.trimEnd() + `\nexport * from './shared/ui/${componentName}';\n`, 'utf8');
  console.log(`✓ Export added to ${filePath}`);
}
