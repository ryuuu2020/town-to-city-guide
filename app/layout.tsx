import type { Metadata } from 'next';
import './globals.css';
import Script from "next/script";
import Link from "next/link";

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

const NAV_ITEMS = [
  { label: 'Buildings', href: '/buildings' },
  { label: 'Crops & Farming', href: '/resources' },
  { label: 'Citizens', href: '/citizens' },
  { label: 'Economy', href: '/economy' },
  { label: 'Beginner Guide', href: '/beginners' },
  { label: 'Tips', href: '/tips' },
  { label: 'FAQ', href: '/faq' },
  { label: 'News', href: '/news' },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="google4cd6cdf221ea7b0b" />
        <Script strategy="lazyOnload" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8925824244664340" crossOrigin="anonymous" />
        <Script strategy="lazyOnload" src="https://www.googletagmanager.com/gtag/js?id=G-ET6778V62K" />
        <Script strategy="lazyOnload" id="gtag-init">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-ET6778V62K');`}
            </Script>
      
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={
            __html: `{"@context": "https://schema.org", "@type": "WebSite", "name": "Town to City Guide", "url": "https://town-to-city-guide.vercel.app"}`
          }
        />

      </head>
      <body className="font-body min-h-screen flex flex-col bg-blueprint-bg">
        {/* Header with Nav */}
        <header className="border-b border-blueprint-border bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
            <div className="flex items-center gap-8">
              <Link href="/" className="font-display text-lg font-bold text-blueprint-text hover:text-blueprint-accent transition-colors">
                Town to City Guide
              </Link>
              <nav className="hidden md:flex items-center gap-6">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="nav-link text-sm text-blueprint-muted hover:text-blueprint-accent transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
            <a
              href="https://afdian.com/a/gameguidehub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blueprint-muted hover:text-blueprint-accent transition-colors"
            >
              ❤️ Support Us
            </a>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-blueprint-border py-6 text-center text-sm text-blueprint-muted">
          <div className="flex flex-wrap justify-center gap-6 mb-4">
            <Link href="/about" className="hover:text-blueprint-accent transition-colors">About</Link>
            <Link href="/faq" className="hover:text-blueprint-accent transition-colors">FAQ</Link>
            <Link href="/privacy" className="hover:text-blueprint-accent transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-blueprint-accent transition-colors">Terms</Link>
            <a href="https://afdian.com/a/gameguidehub" target="_blank" rel="noopener noreferrer" className="hover:text-blueprint-accent transition-colors">❤️ Support Us</a>
          </div>

          {/* Cross-site links */}
          <div className="border-t border-blueprint-border/50 pt-4 mb-3">
            <p className="text-xs text-blueprint-muted font-semibold uppercase tracking-wider mb-2">More Game Guides</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://menace-guide.vercel.app" target="_blank" rel="noopener noreferrer" className="text-xs text-blueprint-muted hover:text-blueprint-accent transition-colors">
                MENACE Guide
              </a>
              <a href="https://olden-era-guide-tau.vercel.app" target="_blank" rel="noopener noreferrer" className="text-xs text-blueprint-muted hover:text-blueprint-accent transition-colors">
                Olden Era Guide
              </a>
              <a href="https://dispatch-guide-sigma.vercel.app" target="_blank" rel="noopener noreferrer" className="text-xs text-blueprint-muted hover:text-blueprint-accent transition-colors">
                Dispatch Guide
              </a>
            </div>
          </div>

          <p>&copy; {new Date().getFullYear()} Town to City Guide. Not affiliated with Galaxy Grove or Kwalee.</p>
        
              {/* E-E-A-T: Sources & Last Updated */}
              <div className="mt-4 pt-4 border-t border-clay/30">
                <p className="font-body text-xs text-stone text-center">
                  <strong>Sources:</strong> All guides are based on the <a href="https://store.steampowered.com/app/3115220/" target="_blank" rel="noopener noreferrer" className="text-terracotta hover:underline">Steam patch notes</a>, community testing, and gameplay experience.
                </p>
                <p className="font-body text-xs text-stone text-center mt-1">Last updated: June 2026</p>
              </div>

            </footer>
      </body>
    </html>
  );
}
