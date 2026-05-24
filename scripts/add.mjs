/**
 * Usage: node scripts/add.mjs <component-name>
 *
 * Adds a component from both shadcn (web) and react-native-reusables (native).
 * If a component is only available in one ecosystem — it is not added (this library
 * only ships components that exist in both).
 */

import { spawnSync } from 'child_process';
import { existsSync, renameSync, readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

const name = process.argv[2];

if (!name) {
  console.error('Usage: node scripts/add.mjs <component-name>');
  process.exit(1);
}

const componentDir = join('src', 'components');
const webFile = join(componentDir, `${name}.tsx`);
const nativeFile = join(componentDir, `${name}.native.tsx`);

mkdirSync(componentDir, { recursive: true });

// --- Step 1: Add native component (rn-reusables) ---
console.log(`\n📱 Fetching native: ${name} (react-native-reusables)`);
const nativeResult = spawnSync(
  'npx',
  ['@react-native-reusables/cli@latest', 'add', name, '--yes', '--overwrite'],
  { stdio: 'pipe', encoding: 'utf8', shell: true }
);

const nativeFound = nativeResult.status === 0 && existsSync(webFile);

if (!nativeFound) {
  console.error(`✗ react-native-reusables does not have "${name}".`);
  console.error(`  This library only includes components available in both ecosystems.`);
  console.error(`  Add it manually if you want a web-only component.`);
  process.exit(1);
}

// rn-reusables created <name>.tsx — rename to <name>.native.tsx
renameSync(webFile, nativeFile);
console.log(`✓ ${name}.native.tsx`);

// --- Step 2: Add web component (shadcn) ---
console.log(`\n🌐 Fetching web: ${name} (shadcn)`);
const webResult = spawnSync(
  'npx',
  ['shadcn@latest', 'add', name, '--yes', '--overwrite'],
  { stdio: 'pipe', encoding: 'utf8', shell: true }
);

const webFound = webResult.status === 0 && existsSync(webFile);

if (!webFound) {
  // Undo native file since we can't complete the pair
  renameSync(nativeFile, webFile);
  console.error(`✗ shadcn does not have "${name}".`);
  console.error(`  This library only includes components available in both ecosystems.`);
  console.error(`  Add it manually if you want a native-only component.`);
  process.exit(1);
}

console.log(`✓ ${name}.tsx`);

// --- Step 3: Add exports to index files ---
addExportIfMissing('src/index.ts', name);
addExportIfMissing('src/index.native.ts', name);

console.log(`\n✅ Added ${name}`);
console.log(`   src/components/${name}.tsx        (web)`);
console.log(`   src/components/${name}.native.tsx  (native)`);

// --- Helper ---

function addExportIfMissing(filePath, componentName) {
  if (!existsSync(filePath)) return;
  const content = readFileSync(filePath, 'utf8');
  if (content.includes(`/components/${componentName}`)) return;
  writeFileSync(filePath, content.trimEnd() + `\nexport * from './components/${componentName}';\n`, 'utf8');
  console.log(`✓ Export added to ${filePath}`);
}
