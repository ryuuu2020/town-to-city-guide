import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://towntocityguide.wiki/updates',
  },
  title: 'Guide Updates | Changelog of Every Revision',
  description: 'Every revision to Town to City Guide, dated: new guides, corrected facts, merged pages, and site changes. See at a glance how current the guide is.',
};

const ENTRIES: { date: string; title: string; items: string[] }[] = [
  {
    date: 'September 5, 2026',
    title: 'Platform facts corrected',
    items: [
      'An earlier version of this guide described Town to City as a Windows-only release. The Steam store API lists Windows, macOS, and Linux builds, so the platform answers now reflect all three.',
      'Console availability is unchanged: no Xbox, PlayStation, or Switch version is listed anywhere.',
    ],
  },
  {
    date: 'September 4, 2026',
    title: 'Guide hub refresh, URL cleanup, and this changelog',
    items: [
      'Homepage guide cards and cross-links were rebuilt around the pages readers actually reach from search.',
      'Every canonical URL, sitemap entry, and structured-data link was unified to a single address form to stop mirror-domain confusion.',
      'Three overlapping guide pages were merged: the production chain, beginner walkthrough, and city layout references now each live on one authoritative page, with the old addresses redirecting.',
      'Added this changelog page. Every future revision gets logged here.',
    ],
  },
  {
    date: 'September 1, 2026',
    title: 'Contact page added',
    items: [
      'New contact page for corrections and questions, linked from the site footer.',
    ],
  },
  {
    date: 'August 26, 2026',
    title: 'Advertising and analytics readiness sweep',
    items: [
      'ads.txt was published and verified, an AdSense account meta tag was added, and a full readiness audit passed, covering contact links, indexing, and placeholder cleanup.',
      'Analytics moved to a dedicated measurement property.',
    ],
  },
  {
    date: 'August 25, 2026',
    title: 'Move to the towntocityguide.wiki domain + four new guides',
    items: [
      'The site switched to its final domain. All titles, canonical addresses, sitemap entries, and metadata were re-pointed, and the old subdomain and preview addresses now redirect here.',
      'Four new guides: the beach biome income loop, a building tier ranking, settlement upgrade milestones, and a performance optimization page.',
      'Favicons and a social share image were added.',
    ],
  },
  {
    date: 'July 9, 2026',
    title: 'Seasonal challenges guide',
    items: [
      'New guide covering spring, summer, autumn, and winter strategy: what each season changes and how to prepare for disasters and events.',
    ],
  },
  {
    date: 'July 6, 2026',
    title: 'Achievement guide and beginner walkthrough',
    items: [
      'An achievements page with unlock conditions went live alongside a step-by-step first-days walkthrough.',
      'Steam store links across the site were corrected to the right destination format.',
    ],
  },
  {
    date: 'July 1-5, 2026',
    title: 'Guide library expansion',
    items: [
      'Five deep-dive guides landed in one week: industry chains, the production chain reference, a building tier list, an expanded FAQ, and the citizen happiness guide.',
      'A homepage hero image was added and broken links were patched while their replacement pages were written.',
    ],
  },
  {
    date: 'June 25-30, 2026',
    title: 'Launch week',
    items: [
      'Town to City Guide went live with fifteen guide pages covering buildings, resources, citizens, economy, research, trade, and layouts.',
      'The dark blueprint theme, search-console verification, sitemap, and structured-data markup all shipped in the first week.',
      'An early content audit removed inaccurate claims and reworked the site architecture before more guides were layered on.',
    ],
  },
];

export default function UpdatesPage() {
  return (
    <div className="min-h-screen bg-blueprint-bg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Town to City Guide Updates | Changelog of Every Revision',
            description: 'Every revision to Town to City Guide, dated: new guides, corrected facts, merged pages, and site changes.',
            datePublished: '2026-09-04',
            dateModified: '2026-09-04',
            author: { '@type': 'Organization', name: 'Town to City Guide' },
            publisher: { '@type': 'Organization', name: 'Town to City Guide', url: 'https://towntocityguide.wiki' },
            url: 'https://towntocityguide.wiki/updates',
          }),
        }}
      />

      <div className="max-w-4xl mx-auto px-6 py-12">

        {/* Breadcrumb */}
        <div className="text-sm text-blueprint-muted mb-8">
          <a href="/" className="hover:text-blueprint-accent">Home</a>
          <span className="mx-2">/</span>
          <span>Guide Updates</span>
        </div>

        {/* Page Header */}
        <span className="bp-tag orange">Changelog</span>
        <h1 className="font-display text-4xl font-bold text-blueprint-text mt-3 mb-4">Guide Updates</h1>
        <p className="text-lg text-blueprint-muted mb-10 max-w-3xl">
          Town to City Guide is a living project: pages get revised whenever a fact gets verified in-game, a patch changes the numbers, or a reader flags a mistake. This page is the dated record of every revision, so you can see at a glance how current the guide is.
        </p>

        {/* Changelog entries */}
        <div className="space-y-6 mb-12">
          {ENTRIES.map((e) => (
            <div key={e.date} className="bluepr-card">
              <div className="flex flex-wrap items-baseline gap-3 mb-3">
                <time className="text-xs uppercase tracking-wider text-blueprint-accent font-semibold">{e.date}</time>
                <h2 className="font-display text-lg font-semibold text-blueprint-text">{e.title}</h2>
              </div>
              <ul className="list-disc list-inside space-y-1.5 text-sm text-blueprint-muted leading-relaxed">
                {e.items.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>

        {/* Editorial standards */}
        <section className="tip-box mb-12">
          <h2 className="font-display text-xl font-semibold text-blueprint-text mb-3">How Pages Get Written &amp; Revised</h2>
          <ul className="list-disc list-inside space-y-2 text-sm text-blueprint-muted leading-relaxed">
            <li><strong className="text-blueprint-text">The game itself comes first.</strong> Every factual claim traces back to gameplay in Town to City or the official Steam store listing: numbers like building costs, unlock requirements, and system specs are checked against the shipped game, not summarized from secondhand posts.</li>
            <li><strong className="text-blueprint-text">Unverified claims stay out.</strong> When something cannot be confirmed (a mechanic nobody has tested, a number that differs between reports), the page says so instead of printing a guess.</li>
            <li><strong className="text-blueprint-text">Revisions are public.</strong> Every guide revision is dated and logged on this page, so you can check how current any page is before trusting it.</li>
            <li><strong className="text-blueprint-text">Readers keep us honest.</strong> Spotted something wrong or outdated? <Link href="/contact" className="text-blueprint-accent hover:underline">Tell us</Link>. Verified fixes land quickly and get logged here.</li>
          </ul>
        </section>

        {/* Related guides */}
        <div className="bluepr-card">
          <h2 className="font-display text-lg font-semibold text-blueprint-text mb-3">Keep Reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/beginners" className="text-blueprint-accent hover:underline">Beginner&apos;s Guide | Your First Hour in Town to City</Link></li>
            <li><Link href="/buildings" className="text-blueprint-accent hover:underline">Buildings | Every Structure Explained</Link></li>
            <li><Link href="/layouts" className="text-blueprint-accent hover:underline">Layouts | Grid-Less City Planning</Link></li>
            <li><Link href="/faq" className="text-blueprint-accent hover:underline">Frequently Asked Questions</Link></li>
            <li><Link href="/about" className="text-blueprint-accent hover:underline">About Town to City Guide</Link></li>
          </ul>
        </div>

      </div>
    </div>
  );
}
