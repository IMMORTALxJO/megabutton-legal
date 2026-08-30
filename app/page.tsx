import Link from 'next/link';
import { SiteShell } from '@/components/site-shell';

const links = [
  { href: '/privacy', number: '01', title: 'Privacy Policy', copy: 'What MegaButton accesses, where it is stored, and how to disconnect Google.' },
  { href: '/terms', number: '02', title: 'Terms of Use', copy: 'The rules for using MegaButton and its optional Pro subscription.' },
  { href: '/support', number: '03', title: 'Support', copy: 'Quick answers, troubleshooting steps, and a direct support channel.' },
];

export default function Home() {
  return (
    <SiteShell>
      <main>
        <section className="home-hero">
          <p className="eyebrow">MegaButton · iPhone &amp; iPad</p>
          <h1>Small actions.<br /><em>Reliable records.</em></h1>
          <p className="hero-copy">MegaButton turns repeatable moments into structured entries in your own Google Sheets. Your data stays between your device, Google, and Apple billing.</p>
          <div className="trust-row" aria-label="Product principles"><span>No ads</span><span>No tracking</span><span>No MegaButton data server</span></div>
        </section>
        <section className="link-grid" aria-label="Legal documents and support">
          {links.map((item) => (
            <Link href={item.href} className="document-card" key={item.href}>
              <span className="card-number">{item.number}</span>
              <div><h2>{item.title}</h2><p>{item.copy}</p></div>
              <span className="card-arrow" aria-hidden="true">↗</span>
            </Link>
          ))}
        </section>
      </main>
    </SiteShell>
  );
}
