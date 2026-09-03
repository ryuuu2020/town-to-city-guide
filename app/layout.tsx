import type { Metadata } from 'next';
import './globals.css';
import Script from "next/script";
import Link from "next/link";
import SchemaMarkup from '@/shared/SchemaMarkup';


export const metadata: Metadata = {
  title: {
    default: 'Town to City Guide — Complete City Builder Guide',
    template: '%s — Town to City Guide',
  },
  description: 'Complete Town to City guide covering city building, resource management, supply chains, layouts, research tree, citizen happiness tips, and Mediterranean town planning. Free 2026 city builder guide.',
  // 带尾斜杠的 metadataBase：所有相对 URL（og:image 等）都在它之下解析，
  // 与各页面写死的绝对 canonical 不冲突。
  metadataBase: new URL("https://towntocityguide.wiki/"),
  openGraph: {
    title: 'Town to City Guide',
    description: 'Complete Town to City guide covering city building, resource management, supply chains, layouts, research tree, citizen happiness tips, and Mediterranean town planning.',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Town to City Guide' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Town to City Guide',
    description: 'Complete Town to City guide covering city building, resource management, supply chains, layouts, research tree, citizen happiness tips, and Mediterranean town planning. Free 2026 city builder guide.',
    images: ['/og-image.png'],
  },
  verification: {
    google: 'google4cd6cdf221ea7b0b',
  },
};

const NAV_ITEMS = [
  { label: 'Layouts', href: '/layouts' },
  { label: 'Buildings', href: '/buildings' },
  { label: 'Resources', href: '/resources' },
  { label: 'Citizens', href: '/citizens' },
  { label: 'Economy', href: '/economy' },
  { label: 'Trade', href: '/trade' },
  { label: 'Beginner Guide', href: '/beginners' },
  { label: 'FAQ', href: '/faq' },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-8925824244664340" />
        <link rel="icon" href="/favicon.ico" sizes="16x16 32x32 48x48" />
        <link rel="icon" href="/icon.png" sizes="512x512" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <meta name="google-site-verification" content="google4cd6cdf221ea7b0b" />
        <Script strategy="lazyOnload" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8925824244664340" crossOrigin="anonymous" />
        <Script strategy="lazyOnload" src="https://www.googletagmanager.com/gtag/js?id=G-5QV5VL08HX" />
        <Script strategy="lazyOnload" id="gtag-init">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-5QV5VL08HX');`}
            </Script>
      
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{"@context": "https://schema.org", "@type": "WebSite", "name": "Town to City Guide", "url": "https://towntocityguide.wiki/"}`
          }}
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
            <Link href="/contact" className="hover:text-blueprint-accent transition-colors">Contact</Link>
            <a href="mailto:sonic6640@gmail.com" className="hover:text-blueprint-accent transition-colors">Email: sonic6640@gmail.com</a>
            <Link href="/terms" className="hover:text-blueprint-accent transition-colors">Terms</Link>
            
          </div>

          {/* Cross-site links */}
          <div className="border-t border-blueprint-border/50 pt-4 mb-3">
            <p className="text-xs text-blueprint-muted font-semibold uppercase tracking-wider mb-2">More Game Guides</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://menace.gguidehub.com" target="_blank" rel="noopener noreferrer" className="text-xs text-blueprint-muted hover:text-blueprint-accent transition-colors">
                MENACE Guide
              </a>
              <a href="https://oldenera.gguidehub.com" target="_blank" rel="noopener noreferrer" className="text-xs text-blueprint-muted hover:text-blueprint-accent transition-colors">
                Olden Era Guide
              </a>
              <a href="https://dispatch.gguidehub.com" target="_blank" rel="noopener noreferrer" className="text-xs text-blueprint-muted hover:text-blueprint-accent transition-colors">
                Dispatch Guide
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2">
            <p>© {new Date().getFullYear()} · Town to City Guide. Not affiliated with Galaxy Grove or Kwalee.</p>
            <p><a href="mailto:sonic6640@gmail.com" className="text-blueprint-accent hover:underline">Contact: sonic6640@gmail.com</a></p>
            <span className="font-body text-sm text-stone">
              Part of the <a href="https://gguidehub.com" className="text-stone hover:text-bark underline underline-offset-2 transition-colors">GameGuideHub</a> network
            </span>
          </div>
        
            </footer>
      </body>
    </html>
  );
}
