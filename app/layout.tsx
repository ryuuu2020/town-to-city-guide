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
      <body className="font-body min-h-screen flex flex-col bg-blueprint-bg">
        {/* Header with Nav */}
        <header className="border-b border-blueprint-border bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
            <div className="flex items-center gap-8">
              <a href="/" className="font-display text-lg font-bold text-blueprint-text hover:text-blueprint-accent transition-colors">
                Town to City Guide
              </a>
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
            <a href="/about" className="hover:text-blueprint-accent transition-colors">About</a>
            <a href="/faq" className="hover:text-blueprint-accent transition-colors">FAQ</a>
            <a href="/privacy" className="hover:text-blueprint-accent transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-blueprint-accent transition-colors">Terms</a>
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
        </footer>
      </body>
    </html>
  );
}
