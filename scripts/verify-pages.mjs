import { access, readFile, stat } from 'node:fs/promises';
import path from 'node:path';

const output = path.resolve('out');
const requiredFiles = [
  'index.html',
  'favicon.ico',
  'robots.txt',
  'sitemap.xml',
  'styles.css',
  'megabutton-app-icon-small.webp',
  'megabutton-app-icon-hero.webp',
  'documentation/index.html',
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
  if (/(?:href|src)="\/megabutton-legal\//.test(html)) {
    throw new Error(`${page} still uses the retired GitHub project base path`);
  }
  if (/<script(?![^>]*type="application\/ld\+json")[^>]*>/i.test(html)) {
    throw new Error(`${page} contains executable browser JavaScript`);
  }
  if (html.includes('megabutton-app-icon.png') || html.includes('/_next/')) {
    throw new Error(`${page} still references a legacy Next.js asset`);
  }
}

const homeHTML = await readFile(path.join(output, 'index.html'), 'utf8');
if (!homeHTML.includes('MegaButton app icon')) {
  throw new Error('Home page does not use the product app icon');
}
if (!homeHTML.includes('href="/favicon.ico"')) {
  throw new Error('Home page does not reference the root favicon');
}
if (!homeHTML.includes('rel="preload" href="/megabutton-app-icon-hero.webp"')) {
  throw new Error('Home page does not preload its above-the-fold app icon');
}
if (homeHTML.includes('rel="preload" href="/megabutton-app-icon-small.webp"')) {
  throw new Error('The shared header/footer logo must not be preloaded');
}
if (!homeHTML.includes('src="/megabutton-app-icon-small.webp"') ||
    !homeHTML.includes('src="/megabutton-app-icon-hero.webp"')) {
  throw new Error('Home page does not use both responsive WebP app icons');
}
if (!homeHTML.includes('loading="lazy"')) {
  throw new Error('Home page footer logo is not lazy loaded');
}
if (!homeHTML.includes('application/ld+json') || !homeHTML.includes('SoftwareApplication')) {
  throw new Error('Home page does not contain MegaButton structured data');
}
if (!homeHTML.includes(
  '<meta name="google-site-verification" content="rKe5JhpfX7En_Uh4NtsVJBt5wCdHzVSrWAxibxAo03U">'
)) {
  throw new Error('Home page does not contain the Google Search Console verification tag');
}

const css = (await readFile(path.join(output, 'styles.css'), 'utf8')).toLowerCase();
for (const brandColor of ['#6752c7', '#faf6f0', '#272130', '#e4d8ff']) {
  if (!css.includes(brandColor)) {
    throw new Error(`GitHub Pages CSS is missing product color ${brandColor}`);
  }
}

for (const [file, maximumBytes] of [
  ['megabutton-app-icon-small.webp', 10_000],
  ['megabutton-app-icon-hero.webp', 20_000],
]) {
  const asset = await stat(path.join(output, file));
  if (asset.size > maximumBytes) {
    throw new Error(`${file} is too large for the instant-loading site budget`);
  }
}

const supportHTML = await readFile(path.join(output, 'support/index.html'), 'utf8');
if (!supportHTML.includes('github.com/IMMORTALxJO/megabutton-legal/issues/new')) {
  throw new Error('Support page does not link to the public support repository');
}

const documentationHTML = await readFile(path.join(output, 'documentation/index.html'), 'utf8');
for (const requiredCopy of [
  'Share a button with other people',
  'Share the entire spreadsheet',
  'Editor',
  'Load Existing',
  'Google Picker',
]) {
  if (!documentationHTML.includes(requiredCopy)) {
    throw new Error(`Documentation page is missing required guidance: ${requiredCopy}`);
  }
}

const privacyHTML = await readFile(path.join(output, 'privacy/index.html'), 'utf8');
for (const requiredDisclosure of [
  'Data protection and security',
  'Connections between MegaButton and Google are encrypted',
  'Apple Keychain',
  'does not operate a server',
  'Google credentials, spreadsheet contents, or recorded values',
  'not included in analytics',
  'diagnostic logs',
  'Disconnect Google and Delete Local Data',
  'limited <code>drive.file</code> permission',
  'including its email address',
  'entries waiting to be sent',
  'Effective September 10, 2026',
]) {
  if (!privacyHTML.includes(requiredDisclosure)) {
    throw new Error(`Privacy Policy is missing required data-protection disclosure: ${requiredDisclosure}`);
  }
}

for (const page of ['index.html', 'privacy/index.html', 'terms/index.html', 'support/index.html']) {
  const html = await readFile(path.join(output, page), 'utf8');
  if (!html.includes('href="/documentation/"')) {
    throw new Error(`${page} does not link to the documentation page`);
  }
}

const canonicalURLs = {
  'index.html': 'https://megabutton.immortalxjo.com/',
  'documentation/index.html': 'https://megabutton.immortalxjo.com/documentation/',
  'privacy/index.html': 'https://megabutton.immortalxjo.com/privacy/',
  'terms/index.html': 'https://megabutton.immortalxjo.com/terms/',
  'support/index.html': 'https://megabutton.immortalxjo.com/support/',
};
for (const [page, canonicalURL] of Object.entries(canonicalURLs)) {
  const html = await readFile(path.join(output, page), 'utf8');
  if (!html.includes(`<link rel="canonical" href="${canonicalURL}"`)) {
    throw new Error(`${page} does not contain its canonical URL`);
  }
  if (!html.includes('<meta property="og:title"') || !html.includes('<meta name="twitter:card"')) {
    throw new Error(`${page} does not contain social search metadata`);
  }
  if (page !== 'index.html' && html.includes('rel="preload"')) {
    throw new Error(`${page} preloads an image below the fold`);
  }
}

const robots = await readFile(path.join(output, 'robots.txt'), 'utf8');
if (!robots.includes('Allow: /') || !robots.includes('https://megabutton.immortalxjo.com/sitemap.xml')) {
  throw new Error('robots.txt does not allow indexing or advertise the sitemap');
}

const sitemap = await readFile(path.join(output, 'sitemap.xml'), 'utf8');
for (const canonicalURL of Object.values(canonicalURLs)) {
  if (!sitemap.includes(`<loc>${canonicalURL}</loc>`)) {
    throw new Error(`sitemap.xml is missing ${canonicalURL}`);
  }
}

console.log('GitHub Pages export contains every required route.');
