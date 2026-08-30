import Link from 'next/link';
import { LegalPage } from '@/components/site-shell';

export const metadata = { title: 'Support · MegaButton' };
const issuesURL = 'https://github.com/IMMORTALxJO/iphone-magic-button/issues/new';

export default function SupportPage() {
  return (
    <LegalPage eyebrow="Support" title="Let’s get your button moving again." summary="Most issues are resolved by checking Google access, refreshing the app, or restoring the App Store purchase.">
      <section className="support-callout"><div><h2>Need help from a person?</h2><p>Open a support request and include your app version, iOS version, and the steps that led to the issue.</p></div><Link className="primary-link" href={issuesURL}>Open support request ↗</Link><p className="fine-print">Public channel: never post OAuth tokens, spreadsheet contents, email addresses, or other sensitive data.</p></section>
      <section><h2>Google won’t connect</h2><ol><li>Confirm that Safari can reach Google and that you selected the intended account.</li><li>Accept the permissions MegaButton needs for Google Drive metadata, Google Sheets, and account email.</li><li>If access was previously removed, reconnect from MegaButton and approve it again.</li></ol></section>
      <section><h2>A button or spreadsheet is missing</h2><ol><li>Pull down on the MegaButton home screen to refresh.</li><li>Confirm the connected Google account still has access to the spreadsheet.</li><li>Check that the button’s dedicated worksheet was not deleted in Google Sheets.</li></ol></section>
      <section><h2>An entry did not appear</h2><p>MegaButton queues supported operations while offline and retries when connectivity returns. Reopen the app, confirm the button is available, and verify the destination worksheet. For important records, always confirm the row in Google Sheets.</p></section>
      <section><h2>Pro is not unlocked</h2><p>Open MegaButton Settings and choose <strong>Restore Purchases</strong>. Confirm that the device uses the Apple Account that bought Pro and that the subscription is active in Apple subscription settings. You will never be charged for restoring a purchase.</p></section>
      <section><h2>Disconnect and delete local data</h2><p>In Settings, choose <strong>Disconnect Google and Delete Local Data</strong>. MegaButton revokes Google access and removes local credentials, caches, and pending entries from the device. Existing Google Sheets and their recorded rows are not deleted.</p></section>
    </LegalPage>
  );
}
