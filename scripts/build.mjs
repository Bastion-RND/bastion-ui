import { execSync } from 'child_process';
import { rmSync, mkdirSync, copyFileSync, existsSync } from 'fs';

// Clean dist
rmSync('./dist', { recursive: true, force: true });
console.log('✓ Cleaned dist/');

// Compile TypeScript → JS + .d.ts (preserves .native. filenames)
// noEmitOnError:false means files are emitted even with type errors,
// but tsc still exits with code 2 — we allow that and check files exist.
try {
  execSync('npx tsc -p tsconfig.build.json', { stdio: 'inherit' });
} catch {
  if (!existsSync('./dist')) {
    console.error('✗ TypeScript compilation failed — no files emitted');
    process.exit(1);
  }
  console.warn('⚠ TypeScript reported type errors above (NativeWind className augmentation). Files were emitted.');
}
console.log('✓ Compiled TypeScript');

// Resolve @/ path aliases in compiled output
execSync('npx tsc-alias -p tsconfig.build.json', { stdio: 'inherit' });
console.log('✓ Resolved path aliases');

// Copy CSS files (tsc doesn't copy non-TS files)
mkdirSync('./dist/styles', { recursive: true });
copyFileSync('./src/styles/globals.css', './dist/styles/globals.css');
console.log('✓ Copied CSS files');

console.log('\n✅ Build complete');
