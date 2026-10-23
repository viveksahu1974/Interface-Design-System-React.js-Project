import { existsSync, readFileSync } from 'node:fs';
import assert from 'node:assert/strict';
const mustExist = [
  'index.html', 'vite.config.js', 'src/main.jsx', 'src/App.jsx', 'src/styles.css',
  'src/data/catalog.js', 'src/components/Previews.jsx', 'src/components/Templates.jsx',
  'src/utils/helpers.js', 'docs/PROJECT_REPORT.md', 'docs/DEMO_AND_VIVA.md'
];
for (const filename of mustExist) assert.ok(existsSync(filename), `Missing ${filename}`);
const catalog = readFileSync('src/data/catalog.js','utf8');
const count = (catalog.match(/\{ id: '/g) || []).length;
assert.equal(count,16,`Expected 16 components, found ${count}`);
console.log('✓ Project files are present');
console.log(`✓ ${count} component definitions available`);
console.log('Run npm run build to verify the React production bundle.');
