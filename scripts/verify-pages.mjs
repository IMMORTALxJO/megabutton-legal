import { access, readFile } from 'node:fs/promises';
import path from 'node:path';

const output = path.resolve('out');
const requiredFiles = [
  'index.html',
  'megabutton-app-icon.png',
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

const homeHTML = await readFile(path.join(output, 'index.html'), 'utf8');
if (!homeHTML.includes('MegaButton app icon')) {
  throw new Error('Home page does not use the product app icon');
}
if (!homeHTML.includes(
  '<meta name="google-site-verification" content="rKe5JhpfX7En_Uh4NtsVJBt5wCdHzVSrWAxibxAo03U"/>'
)) {
  throw new Error('Home page does not contain the Google Search Console verification tag');
}

const { readdir } = await import('node:fs/promises');
const nextDirectory = path.join(output, '_next');
const stylesheets = (await readdir(nextDirectory, { recursive: true }))
  .filter((file) => file.endsWith('.css'));
const css = (
  await Promise.all(stylesheets.map((file) => readFile(path.join(nextDirectory, file), 'utf8')))
).join('\n').toLowerCase();
for (const brandColor of ['#6752c7', '#faf6f0', '#272130', '#e4d8ff']) {
  if (!css.includes(brandColor)) {
    throw new Error(`GitHub Pages CSS is missing product color ${brandColor}`);
  }
}

const supportHTML = await readFile(path.join(output, 'support/index.html'), 'utf8');
if (!supportHTML.includes('github.com/IMMORTALxJO/megabutton-legal/issues/new')) {
  throw new Error('Support page does not link to the public support repository');
}

console.log('GitHub Pages export contains every required route.');
