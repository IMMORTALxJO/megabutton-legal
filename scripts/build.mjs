import { cp, mkdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectDirectory = fileURLToPath(new URL('../', import.meta.url));
const publicDirectory = path.join(projectDirectory, 'public');
const outputDirectory = path.join(projectDirectory, 'out');
const siteURL = 'https://megabutton.immortalxjo.com';
const socialImage = `${siteURL}/megabutton-app-icon-hero.webp`;
const googleVerification = 'rKe5JhpfX7En_Uh4NtsVJBt5wCdHzVSrWAxibxAo03U';

const navigation = [
  { href: '/documentation/', label: 'Documentation' },
  { href: '/privacy/', label: 'Privacy' },
  { href: '/terms/', label: 'Terms' },
  { href: '/support/', label: 'Support' },
];

function brand({ footer = false } = {}) {
  return `<a class="brand" href="/" aria-label="MegaButton home">
    <img class="brand-mark" src="/megabutton-app-icon-small.webp" alt="" aria-hidden="true" width="76" height="76" decoding="async"${footer ? ' loading="lazy"' : ''}>
    <span>MegaButton</span>
  </a>`;
}

function navigationLinks(label) {
  return `<nav aria-label="${label}">${navigation.map((item) => `<a href="${item.href}">${item.label}</a>`).join('')}</nav>`;
}

function siteShell(content) {
  return `<div class="site-shell">
    <header class="site-header">
      ${brand()}
      ${navigationLinks('Site navigation')}
    </header>
    ${content}
    <footer class="site-footer">
      ${brand({ footer: true })}
      <p>Small actions. Reliable records.</p>
      ${navigationLinks('Footer navigation')}
      <p class="copyright">© 2026 MegaButton</p>
    </footer>
  </div>`;
}

function legalPage({ eyebrow, title, summary, effectiveDate = 'September 10, 2026', content }) {
  return siteShell(`<main class="legal-page">
    <header class="legal-hero">
      <p class="eyebrow">${eyebrow}</p>
      <h1>${title}</h1>
      <p>${summary}</p>
      <span>Effective ${effectiveDate}</span>
    </header>
    <article class="legal-copy">${content}</article>
  </main>`);
}

function metadata({ title, description, path: route, preloadHero = false, structuredData }) {
  const canonical = new URL(route, siteURL).toString();
  return `<meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <meta name="application-name" content="MegaButton">
  <meta name="keywords" content="MegaButton, Google Sheets buttons, Google Sheets app, iPhone productivity app, iPad productivity app">
  <meta name="creator" content="MegaButton">
  <meta name="publisher" content="MegaButton">
  <meta name="category" content="productivity">
  <meta name="robots" content="index, follow">
  <meta name="google-site-verification" content="${googleVerification}">
  <link rel="canonical" href="${canonical}">
  <link rel="icon" href="/favicon.ico" sizes="32x32">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="en_US">
  <meta property="og:site_name" content="MegaButton">
  <meta property="og:url" content="${canonical}">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:image" content="${socialImage}">
  <meta property="og:image:width" content="600">
  <meta property="og:image:height" content="600">
  <meta property="og:image:alt" content="MegaButton app icon">
  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${description}">
  <meta name="twitter:image" content="${socialImage}">
  ${preloadHero ? '<link rel="preload" href="/megabutton-app-icon-hero.webp" as="image" type="image/webp" fetchpriority="high">' : ''}
  <link rel="stylesheet" href="/styles.css">${structuredData ? `
  <script type="application/ld+json">${JSON.stringify(structuredData).replace(/</g, '\\u003c')}</script>` : ''}`;
}

const siteDescription = 'MegaButton is an iPhone and iPad app that turns repeatable actions into simple buttons and records the results in your own Google Sheets.';
const homeStructuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${siteURL}/#website`,
      url: `${siteURL}/`,
      name: 'MegaButton',
      description: siteDescription,
      inLanguage: 'en',
    },
    {
      '@type': 'SoftwareApplication',
      '@id': `${siteURL}/#app`,
      name: 'MegaButton',
      url: `${siteURL}/`,
      image: socialImage,
      description: siteDescription,
      applicationCategory: 'ProductivityApplication',
      operatingSystem: 'iOS, iPadOS',
      featureList: [
        'Turn repeatable actions into Google Sheets records',
        'Create and share buttons through Google Sheets',
        'Use buttons from iPhone, iPad, and Control Center',
      ],
    },
  ],
};

const pages = [
  {
    path: '/',
    title: 'MegaButton — Simple Buttons for Google Sheets',
    description: siteDescription,
    preloadHero: true,
    structuredData: homeStructuredData,
    body: siteShell(`<main>
      <section class="home-hero">
        <div class="hero-layout">
          <div class="hero-message">
            <p class="eyebrow">MegaButton · iPhone &amp; iPad</p>
            <h1>Small actions.<br><em>Reliable records.</em></h1>
            <p class="hero-copy">MegaButton turns repeatable moments into structured entries in your own Google Sheets. Your sheet contents stay between your device and Google.</p>
            <div class="trust-row" aria-label="Product principles"><span>No ads</span><span>No tracking</span><span>No MegaButton data server</span></div>
          </div>
          <div class="hero-art" aria-label="MegaButton product identity">
            <span class="magic-orbit orbit-one" aria-hidden="true"></span>
            <span class="magic-orbit orbit-two" aria-hidden="true"></span>
            <img class="app-icon-large" src="/megabutton-app-icon-hero.webp" alt="MegaButton app icon" width="600" height="600" decoding="async" fetchpriority="high">
            <span class="record-chip"><i aria-hidden="true">✓</i> Recorded in Google Sheets</span>
          </div>
        </div>
      </section>
      <section class="link-grid" aria-label="Documentation, legal documents, and support">
        <a href="/documentation/" class="document-card"><span class="card-number">01</span><div><h2>Documentation</h2><p>Step-by-step guides for sharing and using your magic buttons.</p></div><span class="card-arrow" aria-hidden="true">↗</span></a>
        <a href="/privacy/" class="document-card"><span class="card-number">02</span><div><h2>Privacy Policy</h2><p>What MegaButton accesses, where it is stored, and how to disconnect Google.</p></div><span class="card-arrow" aria-hidden="true">↗</span></a>
        <a href="/terms/" class="document-card"><span class="card-number">03</span><div><h2>Terms of Use</h2><p>The rules for using MegaButton and its optional Pro subscription.</p></div><span class="card-arrow" aria-hidden="true">↗</span></a>
        <a href="/support/" class="document-card"><span class="card-number">04</span><div><h2>Support</h2><p>Quick answers, troubleshooting steps, and a direct support channel.</p></div><span class="card-arrow" aria-hidden="true">↗</span></a>
      </section>
    </main>`),
  },
  {
    path: '/documentation/',
    title: 'MegaButton Documentation — Setup, Sharing &amp; Google Sheets',
    description: 'Learn how to set up, share, and use MegaButton with Google Sheets on iPhone and iPad, including access through Google Picker.',
    body: siteShell(`<main class="documentation-page">
      <header class="legal-hero documentation-hero">
        <p class="eyebrow">Documentation</p>
        <h1>Make every button work for your people.</h1>
        <p>Practical guides for setting up MegaButton and using it together.</p>
      </header>
      <div class="documentation-layout">
        <aside class="documentation-index" aria-label="Documentation topics"><p>Guides</p><a href="#share-a-button">Share a button</a></aside>
        <article class="documentation-copy" id="share-a-button">
          <header class="guide-header"><p class="guide-label">Sharing · 5 steps</p><h2>Share a button with other people</h2><p>MegaButton buttons live inside Google Sheets. To let someone else discover and use a button, give their Google account edit access to the spreadsheet that owns it, then have them select that spreadsheet for MegaButton through Google Picker.</p></header>
          <div class="documentation-note" role="note"><strong>Share the entire spreadsheet</strong><p>Google Sheets permissions apply to the whole spreadsheet, not to one MegaButton button or worksheet. The person you invite can see and edit every worksheet in that spreadsheet. MegaButton’s limited Google permission does not automatically gain access when you share the file: the invited person must explicitly select it through Google Picker.</p></div>
          <section><h3>Before you start</h3><ul><li>Ask the other person which Google account they will connect to MegaButton.</li><li>Make sure you are allowed to share every worksheet and its contents with them.</li></ul></section>
          <ol class="sharing-steps">
            <li><div><span>1</span></div><section><h3>Open the button’s spreadsheet</h3><p>In MegaButton, open the button menu and choose <strong>Open Spreadsheet</strong>. You can also open the spreadsheet directly in Google Sheets.</p></section></li>
            <li><div><span>2</span></div><section><h3>Open sharing</h3><p>In Google Sheets, choose <strong>Share</strong>.</p></section></li>
            <li><div><span>3</span></div><section><h3>Invite the other person as an Editor</h3><p>Enter the Google account they will use with MegaButton, set their role to <strong>Editor</strong>, then send the invitation. Viewer or Commenter access is not enough because pressing a button writes a new row.</p></section></li>
            <li><div><span>4</span></div><section><h3>Connect that account to MegaButton</h3><p>On the other person’s iPhone or iPad, install MegaButton and connect the same Google account that received the invitation.</p></section></li>
            <li><div><span>5</span></div><section><h3>Select the shared spreadsheet</h3><p>On the MegaButton home screen, tap <strong>Add</strong>, choose <strong>Load Existing</strong>, then select the shared spreadsheet in Google Picker. MegaButton refreshes automatically and shows every supported button in that spreadsheet.</p></section></li>
          </ol>
          <section class="after-sharing"><h3>What happens next</h3><p>Each person presses the same shared button from their own device, and new entries go to the same Google Sheets worksheet. Depending on the button type, an entry can include the time, the connected account’s email, text, and a number.</p><p>If the button does not appear, confirm that the invited account has <strong>Editor</strong> access and selected the spreadsheet through <strong>Load Existing</strong>, then pull down to refresh. Google sharing changes can take a short time to become visible.</p></section>
        </article>
      </div>
    </main>`),
  },
  {
    path: '/privacy/',
    title: 'MegaButton Privacy Policy — Google Sheets &amp; Device Data',
    description: 'Learn how MegaButton accesses selected Google Sheets, stores data on your device, uses limited Google permissions, and protects your privacy.',
    body: legalPage({
      eyebrow: 'Privacy Policy',
      title: 'Your sheets stay yours.',
      summary: 'MegaButton is designed without a developer-operated data backend. The app connects your device directly to Google and uses Apple for subscription billing.',
      content: `
        <section><h2>1. What MegaButton accesses</h2><p>When you connect Google, MegaButton requests permission to:</p><ul><li>access Google Sheets files created by MegaButton or explicitly selected by you through Google Picker;</li><li>read and edit those selected spreadsheet files to discover, create, edit, delete, and run the buttons you request; and</li><li>read basic information about the connected Google account, including its email address, to keep the connection tied to the correct account and identify the source of Timestamp entries.</li></ul><p>MegaButton requests only the limited <code>drive.file</code> permission. This lets the app work with files it creates or that you choose through Google Picker, but not unrelated files in your Google Drive.</p></section>
        <section><h2>2. How information is used</h2><p>MegaButton uses selected spreadsheet content only to find and manage your buttons and perform the actions you request. Depending on the button type, an entry may include the time, connected-account email, text, and number you submit. People who can access the spreadsheet may see its buttons and entries.</p></section>
        <section><h2>3. Where information is stored</h2><p>Your Google sign-in credentials are stored securely on your device. Button information, spreadsheet references, preferences, and entries waiting to be sent are also stored locally. Completed entries and button configuration remain in your Google Sheets.</p><p>MegaButton does not operate an account database or upload your spreadsheet content, credentials, or recorded values to a MegaButton server.</p></section>
        <section><h2>4. Data protection and security</h2><p>Connections between MegaButton and Google are encrypted. Google credentials are protected by Apple Keychain, and other local data is protected by iOS.</p><p>MegaButton does not operate a server that receives or stores Google credentials, spreadsheet contents, or recorded values. Google user data is not included in analytics or diagnostic logs. In Settings, <strong>Disconnect Google and Delete Local Data</strong> asks Google to revoke access and removes MegaButton’s local data from the device.</p></section>
        <section><h2>5. Apple purchases</h2><p>Optional Pro subscriptions are processed by Apple through the App Store. MegaButton receives only the subscription entitlement needed to unlock Pro features. Apple handles your payment details under Apple’s privacy terms.</p></section>
        <section><h2>6. Tracking, analytics, and advertising</h2><p>MegaButton uses TelemetryDeck to understand general app usage. It receives an anonymized app-installation identifier, basic device and app information, and events such as creating or pressing a button.</p><p>Analytics never include your Google identity or email, spreadsheet or button names, recorded entries, Google credentials, or spreadsheet contents. MegaButton does not use analytics for tracking or advertising. See <a href="https://telemetrydeck.com/privacy">TelemetryDeck’s privacy information</a>.</p></section>
        <section><h2>7. Retention and deletion</h2><p>In Settings, choose <strong>Disconnect Google and Delete Local Data</strong> to ask Google to revoke MegaButton’s access and remove its credentials, cached buttons, spreadsheet references, and unsent entries from this device. You can also remove MegaButton in your Google Account settings.</p><p>Disconnecting does not delete your Google Sheets or entries already recorded there. You can manage or delete them in Google Sheets. Use the in-app disconnect action before deleting the app to ensure MegaButton removes its local data.</p></section>
        <section><h2>8. Children and international use</h2><p>MegaButton is not directed to children under 13. Google and Apple may process data in countries other than yours according to their own terms and privacy policies.</p></section>
        <section><h2>9. Changes and contact</h2><p>Material changes will be published here with a new effective date. For privacy questions, use the MegaButton support page. Do not include OAuth tokens, spreadsheet contents, or other sensitive data in a public report.</p></section>`,
    }),
  },
  {
    path: '/terms/',
    title: 'MegaButton Terms of Use — Free &amp; Pro Plans',
    description: 'Read the terms for using MegaButton, including Free and Pro plans, App Store subscriptions, availability, and acceptable use.',
    body: legalPage({
      eyebrow: 'Terms of Use',
      title: 'A clear agreement for a simple tool.',
      summary: 'These terms govern your use of MegaButton and its optional auto-renewing Pro subscription.',
      content: `
        <section><h2>1. Eligibility and acceptance</h2><p>By downloading or using MegaButton, you agree to these terms and Apple’s Standard Licensed Application End User License Agreement. You must be legally able to enter this agreement and comply with the terms for your Google and Apple accounts.</p></section>
        <section><h2>2. The service</h2><p>MegaButton helps you create controls that read from and write to specific Google Sheets it creates for you or that you select through Google Picker. You are responsible for your sheets, button configuration, entries, collaborators, account security, and backups. Google Sheets and App Store services are provided by Google and Apple, not MegaButton.</p></section>
        <section><h2>3. Acceptable use</h2><p>Do not use MegaButton to violate law, another person’s rights, Google or Apple policies, or to store content you are not authorized to access. Do not interfere with the app, bypass usage limits, or attempt to extract credentials or source services.</p></section>
        <section><h2>4. Free and Pro plans</h2><p>The Free plan lets you use one magic button. Additional existing buttons remain visible but require MegaButton Pro to execute, including from Control Center. MegaButton Pro unlocks unlimited buttons and spreadsheets. Available features may evolve, but paid access will not be removed during an active paid period without a lawful remedy.</p></section>
        <section><h2>5. Auto-renewing subscriptions</h2><p>Monthly and yearly Pro subscriptions are offered through Apple. The price shown in the app before purchase is the price that applies. Payment is charged to your Apple Account after confirmation. A subscription renews automatically unless you cancel at least 24 hours before the end of the current period. Apple may charge the renewal within 24 hours before that period ends. Manage or cancel in your Apple Account subscription settings. Any free trial, when offered, converts to a paid subscription unless cancelled before it ends. Refunds are handled by Apple under applicable law and App Store policies.</p></section>
        <section><h2>6. Availability and disclaimers</h2><p>MegaButton is provided “as is” and “as available.” Network outages, Google API changes, permissions, device state, or external services can delay or prevent an entry. Verify important records in Google Sheets. To the extent permitted by law, no warranty is made that the app will be uninterrupted, error-free, or suitable for medical, emergency, financial, legal, or other safety-critical recordkeeping.</p></section>
        <section><h2>7. Liability</h2><p>To the fullest extent permitted by applicable law, the developer is not liable for indirect, incidental, special, consequential, or lost-data damages arising from MegaButton. Nothing in these terms limits rights or liability that cannot legally be limited.</p></section>
        <section><h2>8. Suspension, termination, and changes</h2><p>You may stop using the app at any time. Access may be limited when reasonably necessary for security, legal compliance, or misuse. Updated terms will be posted here with a new effective date. Continued use after an update means you accept the revised terms where lawful.</p></section>
        <section><h2>9. Contact</h2><p>Questions about these terms can be submitted through the MegaButton support page.</p></section>`,
    }),
  },
  {
    path: '/support/',
    title: 'MegaButton Support — Google Sheets &amp; App Help',
    description: 'Get help with MegaButton, Google connection, shared spreadsheets, missing entries, Pro access, and deleting local data.',
    body: legalPage({
      eyebrow: 'Support',
      title: 'Let’s get your button moving again.',
      summary: 'Most issues are resolved by checking Google access, refreshing the app, or restoring the App Store purchase.',
      effectiveDate: 'August 30, 2026',
      content: `
        <section class="support-callout"><div><h2>Need help from a person?</h2><p>Open a support request and include your app version, iOS version, and the steps that led to the issue.</p></div><a class="primary-link" href="https://github.com/IMMORTALxJO/megabutton-legal/issues/new">Open support request ↗</a><p class="fine-print">Public channel: never post OAuth tokens, spreadsheet contents, email addresses, or other sensitive data.</p></section>
        <section><h2>Google won’t connect</h2><ol><li>Confirm that Safari can reach Google and that you selected the intended account.</li><li>Accept MegaButton’s single, limited Google Drive file permission.</li><li>If access was previously removed or expired, reconnect from MegaButton and approve it again.</li></ol></section>
        <section><h2>A button or spreadsheet is missing</h2><ol><li>If the spreadsheet was not created in MegaButton, tap <strong>Add</strong>, choose <strong>Load Existing</strong>, and select it through Google Picker.</li><li>Confirm the connected Google account has <strong>Editor</strong> access to the spreadsheet.</li><li>Pull down on the MegaButton home screen to refresh.</li><li>Check that the button’s dedicated worksheet was not deleted in Google Sheets.</li></ol></section>
        <section><h2>An entry did not appear</h2><p>MegaButton queues supported operations while offline and retries when connectivity returns. Reopen the app, confirm the button is available, and verify the destination worksheet. For important records, always confirm the row in Google Sheets.</p></section>
        <section><h2>Pro is not unlocked</h2><p>Open MegaButton Settings and choose <strong>Restore Purchases</strong>. Confirm that the device uses the Apple Account that bought Pro and that the subscription is active in Apple subscription settings. You will never be charged for restoring a purchase.</p></section>
        <section><h2>Disconnect and delete local data</h2><p>In Settings, choose <strong>Disconnect Google and Delete Local Data</strong>. MegaButton asks Google to revoke access and removes local credentials, caches, and pending entries from the device. Existing Google Sheets and their recorded rows are not deleted. You can also remove MegaButton from your Google Account’s third-party access settings.</p></section>`,
    }),
  },
];

await rm(outputDirectory, { recursive: true, force: true });
await mkdir(outputDirectory, { recursive: true });
await cp(publicDirectory, outputDirectory, { recursive: true });

for (const page of pages) {
  const pageDirectory = page.path === '/'
    ? outputDirectory
    : path.join(outputDirectory, page.path.slice(1));
  await mkdir(pageDirectory, { recursive: true });
  const html = `<!doctype html>
<html lang="en">
<head>
  ${metadata(page)}
</head>
<body>
  ${page.body}
</body>
</html>
`;
  await writeFile(path.join(pageDirectory, 'index.html'), html);
}

console.log(`Generated ${pages.length} static pages in ${outputDirectory}`);
