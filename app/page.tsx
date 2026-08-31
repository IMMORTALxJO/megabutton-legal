import Link from 'next/link';
import Image from 'next/image';
import { SiteShell } from '@/components/site-shell';
import appIcon from '@/public/megabutton-app-icon.png';

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
          <div className="hero-layout">
            <div className="hero-message">
              <p className="eyebrow">MegaButton · iPhone &amp; iPad</p>
              <h1>Small actions.<br /><em>Reliable records.</em></h1>
              <p className="hero-copy">MegaButton turns repeatable moments into structured entries in your own Google Sheets. Your data stays between your device, Google, and Apple billing.</p>
              <div className="trust-row" aria-label="Product principles"><span>No ads</span><span>No tracking</span><span>No MegaButton data server</span></div>
            </div>
            <div className="hero-art" aria-label="MegaButton product identity">
              <span className="magic-orbit orbit-one" aria-hidden="true" />
              <span className="magic-orbit orbit-two" aria-hidden="true" />
              <Image className="app-icon-large" src={appIcon} alt="MegaButton app icon" priority />
              <span className="record-chip"><i aria-hidden="true">✓</i> Recorded in Google Sheets</span>
            </div>
          </div>
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
