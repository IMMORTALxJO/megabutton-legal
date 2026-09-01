import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://immortalxjo.github.io/megabutton-legal/'),
  title: 'MegaButton · Privacy, Terms & Support',
  description: 'Official privacy policy, terms of use, and support for MegaButton on iPhone and iPad.',
  verification: {
    google: 'rKe5JhpfX7En_Uh4NtsVJBt5wCdHzVSrWAxibxAo03U',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
