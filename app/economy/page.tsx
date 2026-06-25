import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Economy & Income Guide — Town to City Guide',
  description: 'Master Town to City economy: tax system, trade routes between towns, tourism revenue, and citizen tier income scaling.',
};

export default function EconomyPage() {
  return (
    <div className="min-h-screen bg-blueprint-bg">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-sm text-blueprint-muted mb-8">
          <a href="/" className="hover:text-blueprint-accent">Home</a>
          <span className="mx-2">/</span>
          <span>Economy</span>
        </div>

        <h1 className="font-display text-4xl font-bold text-blueprint-text mb-4">Economy &amp; Income Guide</h1>
        <p className="text-lg text-blueprint-muted mb-10">
          Build a thriving economic engine for your Mediterranean town. Learn about taxes, trade between towns, tourism revenue, and how citizen tiers drive your income.
        </p>

        {/* Income Sources Overview */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-4">Income Sources</h2>
          <p className="text-blueprint-muted leading-relaxed mb-6">
            Town to City provides multiple income channels: taxes from your citizens, profits from trade routes between towns, tourism revenue from visiting travelers, and passive income from special buildings and events. The key to a strong economy is diversifying across all channels rather than relying on any single source.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="stat-card">
              <div className="font-display text-xl font-bold text-blueprint-accent mb-1">Tax Revenue</div>
              <div className="text-sm text-blueprint-muted">Primary early-game income. Each citizen tier pays taxes. Bourgeoisie generate the most tax income. Tax income is affected by citizen happiness and housing quality.</div>
            </div>
            <div className="stat-card">
              <div className="font-display text-xl font-bold text-blueprint-accent mb-1">Trade Routes</div>
              <div className="text-sm text-blueprint-muted">Passive income from trade between towns. Establish routes between specialized towns — connect your farming town to your main hub for ongoing trade income.</div>
            </div>
            <div className="stat-card">
              <div className="font-display text-xl font-bold text-blueprint-green mb-1">Tourism Revenue</div>
              <div className="text-sm text-blueprint-muted">Late-game income source. Tourism scales with Hotels, scenic routes, and attractions (Lighthouse, Art Atelier, Monumental Ruins). Dedicated tourist towns maximize returns.</div>
            </div>
            <div className="stat-card">
              <div className="font-display text-xl font-bold text-blueprint-warm mb-1">Passive Income</div>
              <div className="text-sm text-blueprint-muted">Income from special buildings, events, and donations. The Cathedral and other public service buildings may contribute passive income.</div>
            </div>
          </div>
        </section>

        {/* Tax System */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-4">Tax System</h2>
          <div className="bluepr-card">
            <p className="text-blueprint-muted leading-relaxed mb-4">
              Every citizen in your town pays taxes based on their tier. The three tiers — Worker, Artisan, and Bourgeoisie — generate different tax amounts, with Bourgeoisie paying the most. Citizen happiness impacts tax efficiency, and higher-quality housing typically generates more tax revenue.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="stat-card">
                <div className="text-lg font-display font-semibold text-blueprint-accent mb-1">Worker</div>
                <p className="text-xs text-blueprint-muted">Basic tax tier. Workers generate foundational income while staffing farms and basic production.</p>
              </div>
              <div className="stat-card">
                <div className="text-lg font-display font-semibold text-blueprint-warm mb-1">Artisan</div>
                <p className="text-xs text-blueprint-muted">Mid-tier taxpayers. Artisans pay higher rates than Workers and unlock more advanced economic buildings.</p>
              </div>
              <div className="stat-card">
                <div className="text-lg font-display font-semibold text-blueprint-green mb-1">Bourgeoisie</div>
                <p className="text-xs text-blueprint-muted">Highest tax bracket. Bourgeoisie generate the most income but demand luxury goods and high-end services.</p>
              </div>
            </div>

            <div className="tip-box mt-4">
              <strong>Tax strategy:</strong> Monitor tax pressure via the town management view. Over-taxed citizens become unhappy — balance tax collection with citizen satisfaction to maintain sustainable growth.
            </div>
          </div>
        </section>

        {/* Trade Routes */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-4">Trade Between Towns</h2>
          <div className="bluepr-card">
            <p className="text-blueprint-muted leading-relaxed mb-4">
              Once you expand beyond your first town, you can establish trade and travel routes between settlements. Specialize different towns — farming in Fontebrac, tourism in Rocemarée, production in Belvau — and connect them with trade routes for mutual benefit.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="stat-card">
                <div className="text-base font-display font-semibold text-blueprint-accent mb-1">Belvau</div>
                <p className="text-xs text-blueprint-muted">Main hub. Administrative center, housing, and research. Import crops from Fontebrac, export processed goods.</p>
              </div>
              <div className="stat-card">
                <div className="text-base font-display font-semibold text-blueprint-green mb-1">Fontebrac</div>
                <p className="text-xs text-blueprint-muted">Agriculture hub. Focus on farming, granaries, and crop production. Export raw and processed food to other towns.</p>
              </div>
              <div className="stat-card">
                <div className="text-base font-display font-semibold text-blueprint-warm mb-1">Rocemarée</div>
                <p className="text-xs text-blueprint-muted">Tourism destination. Hotels, scenic routes, Lighthouse, and attractions. High beauty scores drive visitor income.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tourism */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-4">Tourism Revenue</h2>
          <div className="bluepr-card">
            <p className="text-blueprint-muted leading-relaxed mb-4">
              Tourism is a late-game income source that scales with your town&apos;s beauty and attractions. Develop scenic routes, place Hotels for visiting travelers, and build landmarks (Lighthouse, Art Atelier, Monumental Ruins, Obelisk) to draw visitors. Tourism also includes beach-themed decorations and specialized tourist infrastructure.
            </p>

            <div className="tip-box">
              <strong>Tourism tip:</strong> Build a dedicated tourist town with high beauty scores, hotels, and attractions. Connect it to your main hub via trade routes. Tourism revenue grows alongside your town&apos;s overall appeal — invest in decorations and landmarks consistently.
            </div>
          </div>
        </section>

        <div className="flex items-center gap-4 mt-16 mb-8">
          <div className="h-px flex-1 bg-blueprint-border"></div>
          <span className="text-xs text-blueprint-muted">End of Economy Guide</span>
          <div className="h-px flex-1 bg-blueprint-border"></div>
        </div>
      </div>
    </div>
  );
}
