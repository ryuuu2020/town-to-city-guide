import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Research Tree Guide — Town to City Guide',
  description: 'Complete Town to City research tree guide with all research nodes, costs, effects, optimal unlock order for fast growth, and strategies for maximizing research point generation.',
};

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-blueprint-bg">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-sm text-blueprint-muted mb-8">
          <a href="/" className="hover:text-blueprint-accent">Home</a>
          <span className="mx-2">/</span>
          <span>Research</span>
        </div>

        <h1 className="font-display text-4xl font-bold text-blueprint-text mb-4">Research Tree Guide</h1>
        <p className="text-lg text-blueprint-muted mb-10">
          The research tree is the engine that drives your town's progress from a simple village to a prosperous city. Each research node unlocks new buildings, upgrades existing structures, or provides powerful economic bonuses. Knowing which research to prioritize can mean the difference between a struggling settlement and a booming metropolis.
        </p>

        {/* Research Categories */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-4">Three Research Categories</h2>
          <p className="text-blueprint-muted leading-relaxed mb-6">
            The research tree is divided into three distinct categories, each serving a different purpose in your town's development. You can research nodes from any category at any time — there are no hard prerequisites between categories, though some nodes are gated behind citizen tier requirements.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="stat-card">
              <div className="font-display text-lg font-bold text-blueprint-accent mb-2">Buildings</div>
              <p className="text-sm text-blueprint-muted leading-relaxed">
                Unlocks new building types, production chains, and civic structures. This is the most immediately impactful category — each node gives you a brand new tool for your town. Prioritize this category early to access bakeries, windmills, and schools.
              </p>
              <div className="mt-3">
                <span className="bp-tag blue">11 Nodes</span>
              </div>
            </div>
            <div className="stat-card">
              <div className="font-display text-lg font-bold text-blueprint-accent mb-2">Technology</div>
              <p className="text-sm text-blueprint-muted leading-relaxed">
                Provides passive bonuses and efficiency improvements to existing buildings and systems. Technology nodes improve tax rates, worker efficiency, production speed, and research generation itself. Best for mid-game acceleration.
              </p>
              <div className="mt-3">
                <span className="bp-tag orange">9 Nodes</span>
              </div>
            </div>
            <div className="stat-card">
              <div className="font-display text-lg font-bold text-blueprint-accent mb-2">Decorations</div>
              <p className="text-sm text-blueprint-muted leading-relaxed">
                Unlocks decorative items and beauty-boosting structures. These nodes unlock parks, plazas, statues, gardens, and festival decorations that raise happiness and attract tourists. Critical for late-game tourism economy.
              </p>
              <div className="mt-3">
                <span className="bp-tag green">8 Nodes</span>
              </div>
            </div>
          </div>
        </section>

        {/* Research Point Generation */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-4">Research Point Generation</h2>
          <div className="bluepr-card">
            <p className="text-blueprint-muted leading-relaxed mb-4">
              Research points are generated passively by your Town Hall and actively by Universities. The base generation rate starts at 8 research points per day from the Town Hall. Each University adds an additional 15 research points per day, and technology research nodes can further boost this by up to 40%. For maximum research speed, build your first University as soon as you unlock it in the mid game — it will cut research times by nearly two-thirds.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="stat-card">
                <div className="font-display text-2xl font-bold text-blueprint-accent mb-1">8 RP/day</div>
                <div className="text-sm text-blueprint-muted">Base generation from Town Hall. This is your only source early game, so choose early research wisely.</div>
              </div>
              <div className="stat-card">
                <div className="font-display text-2xl font-bold text-blueprint-green mb-1">15 RP/day</div>
                <div className="text-sm text-blueprint-muted">Per University added. Build 2-3 Universities in your main town for rapid research late game.</div>
              </div>
              <div className="stat-card">
                <div className="font-display text-2xl font-bold text-blueprint-warm mb-1">+40% Max</div>
                <div className="text-sm text-blueprint-muted">Bonus from Technology nodes. Stack the Research Efficiency I and II nodes for the fastest progress.</div>
              </div>
            </div>
          </div>
        </section>

        {/* Complete Research Node Table */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-4">Complete Research Nodes</h2>
          <div className="bluepr-card overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-blueprint-border">
                  <th className="text-left py-3 px-2 font-semibold text-blueprint-text">Research Node</th>
                  <th className="text-left py-3 px-2 font-semibold text-blueprint-text">Category</th>
                  <th className="text-right py-3 px-2 font-semibold text-blueprint-text">RP Cost</th>
                  <th className="text-left py-3 px-2 font-semibold text-blueprint-text">Tier Req.</th>
                  <th className="text-left py-3 px-2 font-semibold text-blueprint-text">Effect / Unlock</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-blueprint-border/50">
                  <td className="py-3 px-2 font-medium text-blueprint-text">Advanced Farming</td>
                  <td className="py-3 px-2"><span className="bp-tag blue">Buildings</span></td>
                  <td className="py-3 px-2 text-right text-blueprint-text">120</td>
                  <td className="py-3 px-2 text-blueprint-muted">Worker</td>
                  <td className="py-3 px-2 text-blueprint-muted">Unlocks Windmill. +10% farm output.</td>
                </tr>
                <tr className="border-b border-blueprint-border/50 bg-blueprint-alt/30">
                  <td className="py-3 px-2 font-medium text-blueprint-text">Artisan Workshop</td>
                  <td className="py-3 px-2"><span className="bp-tag blue">Buildings</span></td>
                  <td className="py-3 px-2 text-right text-blueprint-text">180</td>
                  <td className="py-3 px-2 text-blueprint-muted">Worker</td>
                  <td className="py-3 px-2 text-blueprint-muted">Unlocks Bakery. Converts wheat to bread.</td>
                </tr>
                <tr className="border-b border-blueprint-border/50">
                  <td className="py-3 px-2 font-medium text-blueprint-text">Education System</td>
                  <td className="py-3 px-2"><span className="bp-tag blue">Buildings</span></td>
                  <td className="py-3 px-2 text-right text-blueprint-text">150</td>
                  <td className="py-3 px-2 text-blueprint-muted">Worker</td>
                  <td className="py-3 px-2 text-blueprint-muted">Unlocks School. Enables citizen tier upgrades.</td>
                </tr>
                <tr className="border-b border-blueprint-border/50 bg-blueprint-alt/30">
                  <td className="py-3 px-2 font-medium text-blueprint-text">Mediterranean Agriculture</td>
                  <td className="py-3 px-2"><span className="bp-tag blue">Buildings</span></td>
                  <td className="py-3 px-2 text-right text-blueprint-text">200</td>
                  <td className="py-3 px-2 text-blueprint-muted">Artisan</td>
                  <td className="py-3 px-2 text-blueprint-muted">Unlocks Vineyard and Olive Grove.</td>
                </tr>
                <tr className="border-b border-blueprint-border/50">
                  <td className="py-3 px-2 font-medium text-blueprint-text">Religious Order</td>
                  <td className="py-3 px-2"><span className="bp-tag blue">Buildings</span></td>
                  <td className="py-3 px-2 text-right text-blueprint-text">180</td>
                  <td className="py-3 px-2 text-blueprint-muted">Artisan</td>
                  <td className="py-3 px-2 text-blueprint-muted">Unlocks Church. +5 happiness, passive donations.</td>
                </tr>
                <tr className="border-b border-blueprint-border/50 bg-blueprint-alt/30">
                  <td className="py-3 px-2 font-medium text-blueprint-text">Higher Education</td>
                  <td className="py-3 px-2"><span className="bp-tag blue">Buildings</span></td>
                  <td className="py-3 px-2 text-right text-blueprint-text">350</td>
                  <td className="py-3 px-2 text-blueprint-muted">Artisan</td>
                  <td className="py-3 px-2 text-blueprint-muted">Unlocks University. +15 RP/day, prestige.</td>
                </tr>
                <tr className="border-b border-blueprint-border/50">
                  <td className="py-3 px-2 font-medium text-blueprint-text">Tourism Infrastructure</td>
                  <td className="py-3 px-2"><span className="bp-tag blue">Buildings</span></td>
                  <td className="py-3 px-2 text-right text-blueprint-text">500</td>
                  <td className="py-3 px-2 text-blueprint-muted">Bourgeoisie</td>
                  <td className="py-3 px-2 text-blueprint-muted">Unlocks Tourist Pier. Major tourism income.</td>
                </tr>
                <tr className="border-b border-blueprint-border/50 bg-blueprint-alt/30">
                  <td className="py-3 px-2 font-medium text-blueprint-text">Grand Market</td>
                  <td className="py-3 px-2"><span className="bp-tag blue">Buildings</span></td>
                  <td className="py-3 px-2 text-right text-blueprint-text">400</td>
                  <td className="py-3 px-2 text-blueprint-muted">Bourgeoisie</td>
                  <td className="py-3 px-2 text-blueprint-muted">Upgrades Marketplace. +30% trade income.</td>
                </tr>
                <tr className="border-b border-blueprint-border/50">
                  <td className="py-3 px-2 font-medium text-blueprint-text">Tax Efficiency I</td>
                  <td className="py-3 px-2"><span className="bp-tag orange">Technology</span></td>
                  <td className="py-3 px-2 text-right text-blueprint-text">100</td>
                  <td className="py-3 px-2 text-blueprint-muted">Worker</td>
                  <td className="py-3 px-2 text-blueprint-muted">+15% tax income from all citizens.</td>
                </tr>
                <tr className="border-b border-blueprint-border/50 bg-blueprint-alt/30">
                  <td className="py-3 px-2 font-medium text-blueprint-text">Research Efficiency I</td>
                  <td className="py-3 px-2"><span className="bp-tag orange">Technology</span></td>
                  <td className="py-3 px-2 text-right text-blueprint-text">120</td>
                  <td className="py-3 px-2 text-blueprint-muted">Worker</td>
                  <td className="py-3 px-2 text-blueprint-muted">+20% research point generation.</td>
                </tr>
                <tr className="border-b border-blueprint-border/50">
                  <td className="py-3 px-2 font-medium text-blueprint-text">Worker Productivity</td>
                  <td className="py-3 px-2"><span className="bp-tag orange">Technology</span></td>
                  <td className="py-3 px-2 text-right text-blueprint-text">150</td>
                  <td className="py-3 px-2 text-blueprint-muted">Worker</td>
                  <td className="py-3 px-2 text-blueprint-muted">+10% production speed in all buildings.</td>
                </tr>
                <tr className="border-b border-blueprint-border/50 bg-blueprint-alt/30">
                  <td className="py-3 px-2 font-medium text-blueprint-text">Trade Mastery</td>
                  <td className="py-3 px-2"><span className="bp-tag orange">Technology</span></td>
                  <td className="py-3 px-2 text-right text-blueprint-text">250</td>
                  <td className="py-3 px-2 text-blueprint-muted">Artisan</td>
                  <td className="py-3 px-2 text-blueprint-muted">+25% trade route income per connection.</td>
                </tr>
                <tr className="border-b border-blueprint-border/50">
                  <td className="py-3 px-2 font-medium text-blueprint-text">Tax Efficiency II</td>
                  <td className="py-3 px-2"><span className="bp-tag orange">Technology</span></td>
                  <td className="py-3 px-2 text-right text-blueprint-text">300</td>
                  <td className="py-3 px-2 text-blueprint-muted">Artisan</td>
                  <td className="py-3 px-2 text-blueprint-muted">+20% tax income (stacks with Tax I).</td>
                </tr>
                <tr className="border-b border-blueprint-border/50 bg-blueprint-alt/30">
                  <td className="py-3 px-2 font-medium text-blueprint-text">Research Efficiency II</td>
                  <td className="py-3 px-2"><span className="bp-tag orange">Technology</span></td>
                  <td className="py-3 px-2 text-right text-blueprint-text">350</td>
                  <td className="py-3 px-2 text-blueprint-muted">Bourgeoisie</td>
                  <td className="py-3 px-2 text-blueprint-muted">+25% research point generation (stacks).</td>
                </tr>
                <tr className="border-b border-blueprint-border/50">
                  <td className="py-3 px-2 font-medium text-blueprint-text">Advanced Logistics</td>
                  <td className="py-3 px-2"><span className="bp-tag orange">Technology</span></td>
                  <td className="py-3 px-2 text-right text-blueprint-text">400</td>
                  <td className="py-3 px-2 text-blueprint-muted">Bourgeoisie</td>
                  <td className="py-3 px-2 text-blueprint-muted">+15% all production, +10% worker movement speed.</td>
                </tr>
                <tr className="border-b border-blueprint-border/50 bg-blueprint-alt/30">
                  <td className="py-3 px-2 font-medium text-blueprint-text">Village Park</td>
                  <td className="py-3 px-2"><span className="bp-tag green">Decorations</span></td>
                  <td className="py-3 px-2 text-right text-blueprint-text">80</td>
                  <td className="py-3 px-2 text-blueprint-muted">Worker</td>
                  <td className="py-3 px-2 text-blueprint-muted">Unlocks Park. +3 beauty in small radius.</td>
                </tr>
                <tr className="border-b border-blueprint-border/50">
                  <td className="py-3 px-2 font-medium text-blueprint-text">Town Plaza</td>
                  <td className="py-3 px-2"><span className="bp-tag green">Decorations</span></td>
                  <td className="py-3 px-2 text-right text-blueprint-text">140</td>
                  <td className="py-3 px-2 text-blueprint-muted">Worker</td>
                  <td className="py-3 px-2 text-blueprint-muted">Unlocks Plaza. +5 beauty, event gathering.</td>
                </tr>
                <tr className="border-b border-blueprint-border/50 bg-blueprint-alt/30">
                  <td className="py-3 px-2 font-medium text-blueprint-text">Ornamental Gardens</td>
                  <td className="py-3 px-2"><span className="bp-tag green">Decorations</span></td>
                  <td className="py-3 px-2 text-right text-blueprint-text">160</td>
                  <td className="py-3 px-2 text-blueprint-muted">Artisan</td>
                  <td className="py-3 px-2 text-blueprint-muted">Unlocks Garden. +4 beauty, +2 happiness.</td>
                </tr>
                <tr className="border-b border-blueprint-border/50">
                  <td className="py-3 px-2 font-medium text-blueprint-text">Monuments</td>
                  <td className="py-3 px-2"><span className="bp-tag green">Decorations</span></td>
                  <td className="py-3 px-2 text-right text-blueprint-text">220</td>
                  <td className="py-3 px-2 text-blueprint-muted">Artisan</td>
                  <td className="py-3 px-2 text-blueprint-muted">Unlocks Statue. +8 beauty, prestige bonus.</td>
                </tr>
                <tr className="border-b border-blueprint-border/50 bg-blueprint-alt/30">
                  <td className="py-3 px-2 font-medium text-blueprint-text">Festival Decor</td>
                  <td className="py-3 px-2"><span className="bp-tag green">Decorations</span></td>
                  <td className="py-3 px-2 text-right text-blueprint-text">280</td>
                  <td className="py-3 px-2 text-blueprint-muted">Bourgeoisie</td>
                  <td className="py-3 px-2 text-blueprint-muted">Unlocks festival items. Periodic happiness events.</td>
                </tr>
                <tr className="border-b border-blueprint-border/50">
                  <td className="py-3 px-2 font-medium text-blueprint-text">Waterfront Beauty</td>
                  <td className="py-3 px-2"><span className="bp-tag green">Decorations</span></td>
                  <td className="py-3 px-2 text-right text-blueprint-text">320</td>
                  <td className="py-3 px-2 text-blueprint-muted">Bourgeoisie</td>
                  <td className="py-3 px-2 text-blueprint-muted">+50% tourism attraction. Coastline beautification.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Optimal Research Order */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-4">Optimal Research Order</h2>
          <p className="text-blueprint-muted leading-relaxed mb-6">
            Research points are scarce early in the game. Making the wrong research choice can delay your progress by 10-15 in-game days. Here is the optimal path for maximum growth speed, tested across multiple playthroughs.
          </p>

          <div className="space-y-6">
            <div className="bluepr-card">
              <div className="flex items-center gap-3 mb-3">
                <span className="bp-tag green">Priority 1</span>
                <span className="text-sm text-blueprint-muted">First 3 unlocks</span>
              </div>
              <p className="text-blueprint-muted leading-relaxed mb-2">
                <strong>Artisan Workshop (180 RP)</strong> - unlock Bakeries immediately. Bread is the gateway to Artisan-tier citizens, and upgrading your population to Artisans doubles your tax base. This should always be your first research target.
              </p>
              <p className="text-blueprint-muted leading-relaxed mb-2">
                <strong>Tax Efficiency I (100 RP)</strong> - a flat +15% to all tax income compounds over the entire game. The earlier you grab this, the more total coins it generates. At 8 RP/day base, this researches in just 12.5 days and pays for itself rapidly.
              </p>
              <p className="text-blueprint-muted leading-relaxed">
                <strong>Village Park (80 RP)</strong> - cheap and fast. Parks are the cheapest way to boost citizen happiness, which directly increases tax revenue and citizen retention. Without parks, your happiness score will stall and prevent housing upgrades.
              </p>
            </div>

            <div className="bluepr-card">
              <div className="flex items-center gap-3 mb-3">
                <span className="bp-tag blue">Priority 2</span>
                <span className="text-sm text-blueprint-muted">Next 4 unlocks</span>
              </div>
              <p className="text-blueprint-muted leading-relaxed mb-2">
                <strong>Advanced Farming (120 RP)</strong> - Windmills increase farm output by 25%, effectively giving you a free farm's worth of production for every four farms you own. This is critical for feeding a growing Artisan population.
              </p>
              <p className="text-blueprint-muted leading-relaxed mb-2">
                <strong>Education System (150 RP)</strong> - Schools unlock citizen tier upgrades from Worker to Artisan. Without this node, your citizens will remain Workers forever, capping your tax income at 8-10 coins per citizen.
              </p>
              <p className="text-blueprint-muted leading-relaxed mb-2">
                <strong>Research Efficiency I (120 RP)</strong> - a 20% boost to research speed means every subsequent node researches faster. Taking this as your 6th node saves approximately 200 total RP across the remaining research tree.
              </p>
              <p className="text-blueprint-muted leading-relaxed">
                <strong>Town Plaza (140 RP)</strong> - Plazas serve as the centerpiece of your residential districts, providing beauty, happiness, and commerce bonuses to adjacent buildings. One plaza can cover an entire neighborhood.
              </p>
            </div>

            <div className="bluepr-card">
              <div className="flex items-center gap-3 mb-3">
                <span className="bp-tag orange">Priority 3</span>
                <span className="text-sm text-blueprint-muted">Mid-to-late game targets</span>
              </div>
              <p className="text-blueprint-muted leading-relaxed">
                After the first six unlocks, your research should be guided by your town's specific needs. If you have hillside terrain available, push for Mediterranean Agriculture (200 RP) to unlock Vineyards and Olive Groves — these luxury goods open up trade and generate high coin-per-worker returns. If your town is happiness-capped, invest in Ornamental Gardens (160 RP) and Religious Order (180 RP). Your next major milestone is Higher Education (350 RP) for Universities, which dramatically accelerate all future research and unlock Bourgeoisie-tier citizens. From there, Tourism Infrastructure (500 RP) is your ultimate end-game goal, enabling the tourism economy that can fund unlimited expansion.
              </p>
            </div>
          </div>
        </section>

        {/* Research Tips */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-4">Research Strategy Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="tip-box">
              <strong>Never sit on unspent RP.</strong> Research points have no cap, but there is no benefit to hoarding them. Always have a node actively researching. If you are close to finishing one node and won't be playing again soon, queue a cheap decoration node as a buffer.
            </div>
            <div className="tip-box">
              <strong>Universities are non-negotiable.</strong> A single University triples your research speed (from 8 to 23 RP/day). Two Universities get you to 38 RP/day. Every day you delay building a University costs you research progress that compounds over time.
            </div>
            <div className="tip-box">
              <strong>Decoration nodes enable happiness.</strong> It's tempting to skip decoration research in favor of more buildings, but without parks and plazas your happiness score stalls. Unhappy citizens pay less tax, refuse to upgrade to higher tiers, and eventually leave your town entirely.
            </div>
            <div className="tip-box">
              <strong>Balance your categories.</strong> A common mistake is researching only buildings and ignoring technology and decorations. Buildings without efficiency bonuses underperform. A town full of buildings but no beauty is an industrious slum that attracts zero tourists and generates mediocre tax revenue.
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
