import { LegalPage } from '@/components/site-shell';

export const metadata = { title: 'Terms of Use · MegaButton' };

export default function TermsPage() {
  return (
    <LegalPage eyebrow="Terms of Use" title="A clear agreement for a simple tool." summary="These terms govern your use of MegaButton and its optional auto-renewing Pro subscription.">
      <section><h2>1. Eligibility and acceptance</h2><p>By downloading or using MegaButton, you agree to these terms and Apple’s Standard Licensed Application End User License Agreement. You must be legally able to enter this agreement and comply with the terms for your Google and Apple accounts.</p></section>
      <section><h2>2. The service</h2><p>MegaButton helps you create controls that read from and write to Google Sheets you select. You are responsible for your sheets, button configuration, entries, collaborators, account security, and backups. Google Sheets and App Store services are provided by Google and Apple, not MegaButton.</p></section>
      <section><h2>3. Acceptable use</h2><p>Do not use MegaButton to violate law, another person’s rights, Google or Apple policies, or to store content you are not authorized to access. Do not interfere with the app, bypass usage limits, or attempt to extract credentials or source services.</p></section>
      <section><h2>4. Free and Pro plans</h2><p>The Free plan supports up to three magic buttons. MegaButton Pro unlocks unlimited buttons and spreadsheets. Current button types and Control Center access remain available on both plans. Available features may evolve, but paid access will not be removed during an active paid period without a lawful remedy.</p></section>
      <section><h2>5. Auto-renewing subscriptions</h2><p>Monthly and yearly Pro subscriptions are offered through Apple. The price shown in the app before purchase is the price that applies. Payment is charged to your Apple Account after confirmation. A subscription renews automatically unless you cancel at least 24 hours before the end of the current period. Apple may charge the renewal within 24 hours before that period ends. Manage or cancel in your Apple Account subscription settings. Any free trial, when offered, converts to a paid subscription unless cancelled before it ends. Refunds are handled by Apple under applicable law and App Store policies.</p></section>
      <section><h2>6. Availability and disclaimers</h2><p>MegaButton is provided “as is” and “as available.” Network outages, Google API changes, permissions, device state, or external services can delay or prevent an entry. Verify important records in Google Sheets. To the extent permitted by law, no warranty is made that the app will be uninterrupted, error-free, or suitable for medical, emergency, financial, legal, or other safety-critical recordkeeping.</p></section>
      <section><h2>7. Liability</h2><p>To the fullest extent permitted by applicable law, the developer is not liable for indirect, incidental, special, consequential, or lost-data damages arising from MegaButton. Nothing in these terms limits rights or liability that cannot legally be limited.</p></section>
      <section><h2>8. Suspension, termination, and changes</h2><p>You may stop using the app at any time. Access may be limited when reasonably necessary for security, legal compliance, or misuse. Updated terms will be posted here with a new effective date. Continued use after an update means you accept the revised terms where lawful.</p></section>
      <section><h2>9. Contact</h2><p>Questions about these terms can be submitted through the MegaButton support page.</p></section>
    </LegalPage>
  );
}
