import { access, readFile } from 'node:fs/promises';
import path from 'node:path';

const output = path.resolve('out');
const requiredFiles = [
  'index.html',
  'privacy/index.html',
  'terms/index.html',
  'support/index.html',
  '.nojekyll',
];

await Promise.all(requiredFiles.map((file) => access(path.join(output, file))));

for (const page of requiredFiles.filter((file) => file.endsWith('.html'))) {
  const html = await readFile(path.join(output, page), 'utf8');
  if (!html.includes('MegaButton')) {
    throw new Error(`${page} does not contain the MegaButton brand`);
  }
}

console.log('GitHub Pages export contains every required route.');
