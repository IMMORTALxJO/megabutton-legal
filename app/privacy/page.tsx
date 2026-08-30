import { LegalPage } from '@/components/site-shell';

export const metadata = { title: 'Privacy Policy · MegaButton' };

export default function PrivacyPage() {
  return (
    <LegalPage eyebrow="Privacy Policy" title="Your sheets stay yours." summary="MegaButton is designed without a developer-operated data backend. The app connects your device directly to Google and uses Apple for subscription billing.">
      <section><h2>1. What MegaButton accesses</h2><p>When you connect Google, MegaButton requests permission to:</p><ul>
        <li>read spreadsheet names and identifiers needed to show your spreadsheet picker;</li>
        <li>read and edit Google Sheets you choose to use with MegaButton; and</li>
        <li>read the email address of the connected Google account so recorded events can identify their source.</li>
      </ul><p>MegaButton does not request access to unrelated Google Drive files.</p></section>
      <section><h2>2. How information is used</h2><p>Spreadsheet content is used only to discover, create, edit, delete, and run the magic buttons you request. When you press a button, MegaButton writes the configured entry, time, unique operation identifier, and connected-account email into the Google Sheet you selected. People who can access that sheet may see those entries.</p></section>
      <section><h2>3. Where information is stored</h2><p>Google OAuth credentials are stored in Apple Keychain. Button metadata, spreadsheet references, preferences, and pending offline operations are stored locally on your device and in the app’s shared container so its Control Center control can work. Entries you record are stored in your Google Sheets.</p><p>MegaButton does not operate an account database or upload your spreadsheet content, credentials, or usage history to a MegaButton server.</p></section>
      <section><h2>4. Apple purchases</h2><p>Optional Pro subscriptions are processed by Apple through the App Store. MegaButton receives only the subscription entitlement needed to unlock Pro features. Apple handles your payment details under Apple’s privacy terms.</p></section>
      <section><h2>5. Tracking, analytics, and advertising</h2><p>MegaButton does not track you, serve ads, use advertising identifiers, or include third-party analytics SDKs.</p></section>
      <section><h2>6. Retention and deletion</h2><p>In Settings, choose <strong>Disconnect Google and Delete Local Data</strong> to revoke MegaButton’s Google access and delete its local credential, cached buttons, spreadsheet references, and pending operations from this device. This does not delete content already stored in Google Sheets. You control and can delete that content in Google Sheets. Deleting the app also removes its local data, subject to normal device backups managed by Apple.</p></section>
      <section><h2>7. Children and international use</h2><p>MegaButton is not directed to children under 13. Google and Apple may process data in countries other than yours according to their own terms and privacy policies.</p></section>
      <section><h2>8. Changes and contact</h2><p>Material changes will be published here with a new effective date. For privacy questions, use the MegaButton support page. Do not include OAuth tokens, spreadsheet contents, or other sensitive data in a public report.</p></section>
    </LegalPage>
  );
}
