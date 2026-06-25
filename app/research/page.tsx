import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Research Tree Guide — Town to City Guide',
  description: 'Understand the research system in Town to City: Research Center, technology tree overview, and how research unlocks new buildings, decorations, and upgrades.',
};

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-blueprint-bg">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-sm text-blueprint-muted mb-8">
          <a href="/" className="hover:text-blueprint-accent">Home</a>
          <span className="mx-2">/</span>
          <span>Research</span>
        </div>

        <h1 className="font-display text-4xl font-bold text-blueprint-text mb-4">Research Tree Guide</h1>
        <p className="text-lg text-blueprint-muted mb-10">
          The research system is your path to progress. Learn how the Research Center works, what technologies unlock, and how to prioritize your research for efficient town growth.
        </p>

        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-4">The Research Center</h2>
          <div className="bluepr-card">
            <p className="text-blueprint-muted leading-relaxed mb-4">
              The Research Center is the engine of town progression. Assign Research Workers to generate research points and unlock new buildings, decorations, and technologies. Research is organized into trees covering different aspects of your town — buildings, technology, and decorations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="stat-card">
                <div className="text-base font-display font-semibold text-blueprint-accent mb-1">Building Research</div>
                <p className="text-xs text-blueprint-muted">Unlocks new building types and upgrades. Progress through farm tiers, production buildings, and city services.</p>
              </div>
              <div className="stat-card">
                <div className="text-base font-display font-semibold text-blueprint-warm mb-1">Technology Research</div>
                <p className="text-xs text-blueprint-muted">Unlocks efficiency upgrades, new crop types, and advanced mechanics. Farms Tier upgrades are gated behind technology research.</p>
              </div>
              <div className="stat-card">
                <div className="text-base font-display font-semibold text-blueprint-green mb-1">Decoration Research</div>
                <p className="text-xs text-blueprint-muted">Unlocks new decoration options, beauty enhancements, and customization tools for beautifying your town.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-4">Research Workers &amp; Prioritization</h2>
          <div className="bluepr-card">
            <p className="text-blueprint-muted leading-relaxed mb-4">
              Assign Research Workers to the Research Center to generate research points. More workers means faster progress through the research tree. Research applies across all your connected towns.
            </p>

            <div className="space-y-4">
              <div className="tip-box">
                <strong>Farm upgrades are top priority.</strong> Each Farm tier unlocks new crops and buildings. Farms Tier 1 grants your first crops and the Bakery/Winery. Tier 2 adds Hattery. Tier 3 adds Pub and doubles farm surface area — prioritize this upgrade for crop production.
              </div>
              <div className="tip-box">
                <strong>City rank unlocks late-game buildings.</strong> Reaching City rank unlocks the Apothecary, Perfumer, Social Club, and Candle Maker. Large City adds Cathedral and Restaurant.
              </div>
              <div className="tip-box">
                <strong>Research Center placement:</strong> Keep the Research Center in your main hub town (Belvau) since research benefits all connected towns. Balance research workers with other labor needs — too many researchers means too few production workers.
              </div>
            </div>
          </div>
        </section>

        <div className="flex items-center gap-4 mt-16 mb-8">
          <div className="h-px flex-1 bg-blueprint-border"></div>
          <span className="text-xs text-blueprint-muted">End of Research Guide</span>
          <div className="h-px flex-1 bg-blueprint-border"></div>
        </div>
      </div>
    </div>
  );
}
