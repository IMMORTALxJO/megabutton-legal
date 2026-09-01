import Link from 'next/link';
import Image from 'next/image';
import type { ReactNode } from 'react';
import appIcon from '@/public/megabutton-app-icon.png';

const navigation = [
  { href: '/documentation', label: 'Documentation' },
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
  { href: '/support', label: 'Support' },
];

export function Brand() {
  return (
    <Link className="brand" href="/" aria-label="MegaButton home">
      <Image className="brand-mark" src={appIcon} alt="" aria-hidden="true" priority />
      <span>MegaButton</span>
    </Link>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="site-shell">
      <header className="site-header">
        <Brand />
        <nav aria-label="Site navigation">
          {navigation.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
        </nav>
      </header>
      {children}
      <footer className="site-footer">
        <Brand />
        <p>Small actions. Reliable records.</p>
        <nav aria-label="Footer navigation">
          {navigation.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
        </nav>
        <p className="copyright">© 2026 MegaButton</p>
      </footer>
    </div>
  );
}

export function LegalPage({ eyebrow, title, summary, children }: {
  eyebrow: string;
  title: string;
  summary: string;
  children: ReactNode;
}) {
  return (
    <SiteShell>
      <main className="legal-page">
        <header className="legal-hero">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{summary}</p>
          <span>Effective August 30, 2026</span>
        </header>
        <article className="legal-copy">{children}</article>
      </main>
    </SiteShell>
  );
}
