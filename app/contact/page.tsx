import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: "https://towntocityguide.wiki/contact",
  },
  title: 'Contact | Town to City Guide',
  description:
    'Contact the Town to City Guide to report a wrong building stat, a stale production-chain note, a broken page, or an advertising and privacy question.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-blueprint-bg">
      <div className="max-w-5xl mx-auto px-6 py-12">

        {/* Breadcrumb */}
        <div className="text-sm text-blueprint-muted mb-8">
          <a href="/" className="hover:text-blueprint-accent">Home</a>
          <span className="mx-2">/</span>
          <span>Contact</span>
        </div>

        <h1 className="font-display text-4xl font-bold text-blueprint-text mb-4">Contact</h1>
        <p className="text-lg text-blueprint-muted mb-8 max-w-3xl">
          Town to City Guide is maintained by one editor. If a number on this site does not
          match your game, that is worth telling us about.
        </p>

        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-2">Email</h2>
          <p className="text-blueprint-muted leading-relaxed mb-6">
            <a href="mailto:sonic6640@gmail.com" className="text-blueprint-accent hover:underline font-semibold">
              sonic6640@gmail.com
            </a>
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-2">What to send</h2>
          <div className="space-y-4 text-blueprint-muted leading-relaxed">
            <p>
              <strong className="text-blueprint-text">Wrong or outdated values.</strong> Building
              costs, upkeep, happiness and pollution effects, and production-chain ratios are
              the numbers that move between patches. The pages most affected are{' '}
              <a href="/best-buildings" className="text-blueprint-accent hover:underline">best buildings</a>,{' '}
              <a href="/production-chain-guide" className="text-blueprint-accent hover:underline">production chains</a>,{' '}
              <a href="/citizen-happiness-guide" className="text-blueprint-accent hover:underline">citizen happiness</a> and{' '}
              <a href="/tier-list" className="text-blueprint-accent hover:underline">the tier list</a>. Name
              the item and what your game shows instead.
            </p>
            <p>
              <strong className="text-blueprint-text">Your game version.</strong> Town to City is
              still updated, so advice can go stale quickly. Say which build you are on. Steam
              lists it under Properties → Updates. Otherwise we may "fix" a page against the
              wrong version.
            </p>
            <p>
              <strong className="text-blueprint-text">A broken page.</strong> Include the exact URL
              and your browser.
            </p>
            <p>
              <strong className="text-blueprint-text">Ads and privacy.</strong> See the{' '}
              <a href="/privacy" className="text-blueprint-accent hover:underline">privacy policy</a> for
              every third-party service on this domain. Personalised-ad preferences live in{' '}
              <a
                href="https://adssettings.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blueprint-accent hover:underline"
              >
                Google Ad Settings
              </a>
              , not with us.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-2">
            What this inbox cannot do
          </h2>
          <p className="text-blueprint-muted leading-relaxed">
            This is an independent guide. It is not affiliated with Galaxy Grove or Kwalee, and
            it has no ability to fix the game, restore a save, or process a refund. Those go to
            the developer and Steam. The{' '}
            <a
              href="https://store.steampowered.com/app/3115220/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blueprint-accent hover:underline"
            >
              Town to City store page
            </a>{' '}
            is where its community hub lives.
          </p>
        </section>

        <p className="text-sm text-blueprint-muted">Last updated: September 1, 2026</p>
      </div>
    </div>
  );
}
