import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Town to City Guide — Complete City Builder Guide',
    template: '%s — Town to City Guide',
  },
  description: 'Complete Town to City guide covering city building, resource management, supply chains, layouts, research tree, citizen happiness tips, and Mediterranean town planning. Free 2026 city builder guide.',
  metadataBase: new URL('https://town-to-city-guide.vercel.app'),
  openGraph: {
    title: 'Town to City Guide',
    description: 'Complete Town to City guide covering city building, resource management, supply chains, layouts, research tree, citizen happiness tips, and Mediterranean town planning.',
    type: 'website',
  },
  verification: {
    google: 'google4cd6cdf221ea7b0b',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="google4cd6cdf221ea7b0b" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8925824244664340" crossOrigin="anonymous" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-ET6778V62K" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ET6778V62K');
            `,
          }}
        />
      </head>
      <body className="font-body min-h-screen bg-blueprint-bg">
        {children}
      </body>
    </html>
  );
}
