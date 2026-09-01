import { SiteShell } from '@/components/site-shell';

export const metadata = {
  title: 'Documentation · MegaButton',
  description: 'Step-by-step guides for sharing and using MegaButton.',
};

export default function DocumentationPage() {
  return (
    <SiteShell>
      <main className="documentation-page">
        <header className="legal-hero documentation-hero">
          <p className="eyebrow">Documentation</p>
          <h1>Make every button work for your people.</h1>
          <p>Practical guides for setting up MegaButton and using it together.</p>
        </header>

        <div className="documentation-layout">
          <aside className="documentation-index" aria-label="Documentation topics">
            <p>Guides</p>
            <a href="#share-a-button">Share a button</a>
          </aside>

          <article className="documentation-copy" id="share-a-button">
            <header className="guide-header">
              <p className="guide-label">Sharing · 5 steps</p>
              <h2>Share a button with other people</h2>
              <p>MegaButton buttons live inside Google Sheets. To let someone else discover and use a button, give their Google account edit access to the spreadsheet that owns it.</p>
            </header>

            <div className="documentation-note" role="note">
              <strong>Share the entire spreadsheet</strong>
              <p>Google Sheets permissions apply to the whole spreadsheet, not to one MegaButton button or worksheet. The person you invite can see and edit every worksheet in that spreadsheet, and MegaButton can discover every supported button stored there.</p>
            </div>

            <section>
              <h3>Before you start</h3>
              <ul>
                <li>Ask the other person which Google account they will connect to MegaButton.</li>
                <li>Make sure you are allowed to share every worksheet and its contents with them.</li>
              </ul>
            </section>

            <ol className="sharing-steps">
              <li>
                <div><span>1</span></div>
                <section><h3>Open the button’s spreadsheet</h3><p>In MegaButton, open the button menu and choose <strong>Open Spreadsheet</strong>. You can also open the spreadsheet directly in Google Sheets.</p></section>
              </li>
              <li>
                <div><span>2</span></div>
                <section><h3>Open sharing</h3><p>In Google Sheets, choose <strong>Share</strong>.</p></section>
              </li>
              <li>
                <div><span>3</span></div>
                <section><h3>Invite the other person as an Editor</h3><p>Enter the Google account they will use with MegaButton, set their role to <strong>Editor</strong>, then send the invitation. Viewer or Commenter access is not enough because pressing a button writes a new row.</p></section>
              </li>
              <li>
                <div><span>4</span></div>
                <section><h3>Connect that account to MegaButton</h3><p>On the other person’s iPhone or iPad, install MegaButton and connect the same Google account that received the invitation.</p></section>
              </li>
              <li>
                <div><span>5</span></div>
                <section><h3>Refresh the button list</h3><p>Pull down to refresh on the MegaButton home screen. The shared button will appear after Google makes the editable spreadsheet available to the invited account.</p></section>
              </li>
            </ol>

            <section className="after-sharing">
              <h3>What happens next</h3>
              <p>Each person presses the same shared button from their own device. New entries go to the same Google Sheets worksheet and include the connected Google account’s email address so collaborators can identify who recorded them.</p>
              <p>If the button does not appear, confirm that the invited account has <strong>Editor</strong> access, then refresh MegaButton again. Google sharing changes can take a short time to become visible.</p>
            </section>
          </article>
        </div>
      </main>
    </SiteShell>
  );
}
