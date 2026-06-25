import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Economy & Income Guide — Town to City Guide',
  description: 'Master Town to City economy with comprehensive income strategies, tax optimization, trade profits, tourism revenue, building profitability comparisons, and early to late game economic planning.',
};

export default function EconomyPage() {
  return (
    <main className="min-h-screen bg-blueprint-bg">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-sm text-blueprint-muted mb-8">
          <a href="/" className="hover:text-blueprint-accent">Home</a>
          <span className="mx-2">/</span>
          <span>Economy</span>
        </div>

        <h1 className="font-display text-4xl font-bold text-blueprint-text mb-4">Economy & Income Guide</h1>
        <p className="text-lg text-blueprint-muted mb-10">
          Build a thriving economic engine for your Mediterranean town. From your first wheat farm to a bustling tourism empire, every coin counts. This guide covers all income sources, expense management, and the strategies that separate struggling villages from prosperous cities.
        </p>

        {/* Income Sources Overview */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-4">Income Sources</h2>
          <p className="text-blueprint-muted leading-relaxed mb-6">
            Town to City gives you four primary ways to generate coins: taxes from your citizens, profits from trade routes between towns, tourism revenue from visiting travelers, and passive donations from churches and special events. The key to a strong economy is diversifying across all four channels rather than relying on any single source. Early game leans heavily on taxes, while the late game sees tourism and trade become dominant.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="stat-card">
              <div className="font-display text-3xl font-bold text-blueprint-accent mb-1">40-50%</div>
              <div className="text-sm text-blueprint-muted">Tax contribution to early-game income. Scales with citizen tier, education level, and housing quality. Each citizen tier pays a base rate multiplied by their happiness modifier.</div>
            </div>
            <div className="stat-card">
              <div className="font-display text-3xl font-bold text-blueprint-accent mb-1">30-35%</div>
              <div className="text-sm text-blueprint-muted">Trade income share in mid-game. Once you establish 3+ towns connected by trade routes, passive trade income rivals tax revenue and continues to scale with each new settlement.</div>
            </div>
            <div className="stat-card">
              <div className="font-display text-3xl font-bold text-blueprint-green mb-1">25-40%</div>
              <div className="text-sm text-blueprint-muted">Tourism revenue in late game. A well-planned tourist town with multiple piers, hotels, and high beauty can generate more income than a fully taxed residential district.</div>
            </div>
            <div className="stat-card">
              <div className="font-display text-3xl font-bold text-blueprint-warm mb-1">5-10%</div>
              <div className="text-sm text-blueprint-muted">Passive income from churches, event donations, and milestone bonuses. Small but reliable — it covers basic maintenance costs and keeps your treasury from going negative.</div>
            </div>
          </div>
        </section>

        {/* Tax System */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-4">Tax System Deep Dive</h2>
          <div className="bluepr-card">
            <p className="text-blueprint-muted leading-relaxed mb-4">
              Taxes are your earliest and most reliable income stream. Every citizen in your town pays taxes based on their tier, which is determined by their house type and education level. The base tax rates per citizen per day are as follows.
            </p>

            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-blueprint-border">
                    <th className="text-left py-3 px-2 font-semibold text-blueprint-text">Citizen Tier</th>
                    <th className="text-left py-3 px-2 font-semibold text-blueprint-text">House Type</th>
                    <th className="text-right py-3 px-2 font-semibold text-blueprint-text">Base Tax/Day</th>
                    <th className="text-right py-3 px-2 font-semibold text-blueprint-text">Happiness Bonus</th>
                    <th className="text-right py-3 px-2 font-semibold text-blueprint-text">Max Tax/Day</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-blueprint-border/50">
                    <td className="py-3 px-2 font-medium text-blueprint-text">Worker</td>
                    <td className="py-3 px-2 text-blueprint-muted">Worker House</td>
                    <td className="py-3 px-2 text-right text-blueprint-text">8 coins</td>
                    <td className="py-3 px-2 text-right text-blueprint-green">+20%</td>
                    <td className="py-3 px-2 text-right text-blueprint-text">10 coins</td>
                  </tr>
                  <tr className="border-b border-blueprint-border/50 bg-blueprint-alt/30">
                    <td className="py-3 px-2 font-medium text-blueprint-text">Artisan</td>
                    <td className="py-3 px-2 text-blueprint-muted">Artisan House</td>
                    <td className="py-3 px-2 text-right text-blueprint-text">18 coins</td>
                    <td className="py-3 px-2 text-right text-blueprint-green">+25%</td>
                    <td className="py-3 px-2 text-right text-blueprint-text">23 coins</td>
                  </tr>
                  <tr className="border-b border-blueprint-border/50">
                    <td className="py-3 px-2 font-medium text-blueprint-text">Bourgeoisie</td>
                    <td className="py-3 px-2 text-blueprint-muted">Bourgeoisie House</td>
                    <td className="py-3 px-2 text-right text-blueprint-text">40 coins</td>
                    <td className="py-3 px-2 text-right text-blueprint-green">+35%</td>
                    <td className="py-3 px-2 text-right text-blueprint-text">54 coins</td>
                  </tr>
                  <tr className="border-b border-blueprint-border/50 bg-blueprint-alt/30">
                    <td className="py-3 px-2 font-medium text-blueprint-text">Bourgeoisie</td>
                    <td className="py-3 px-2 text-blueprint-muted">University Graduate</td>
                    <td className="py-3 px-2 text-right text-blueprint-text">55 coins</td>
                    <td className="py-3 px-2 text-right text-blueprint-green">+40%</td>
                    <td className="py-3 px-2 text-right text-blueprint-text">77 coins</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="tip-box">
              <strong>Happiness drives taxes.</strong> A citizen whose happiness bar is full pays up to 35-40% more taxes than an unhappy one. Before rushing to upgrade houses, make sure your current citizens have their needs met — parks, food variety, and church access all contribute to the happiness modifier that multiplies your tax income.
            </div>
          </div>
        </section>

        {/* Building Profitability */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-4">Building Profitability</h2>
          <p className="text-blueprint-muted leading-relaxed mb-6">
            Not all buildings are created equal when it comes to return on investment. Some structures generate direct income through production and sales, while others provide indirect economic benefits by upgrading citizens to higher tax brackets. Understanding which buildings deliver the best return helps you prioritize construction when resources are tight.
          </p>

          <div className="bluepr-card overflow-x-auto">
            <h3 className="font-display text-lg font-semibold text-blueprint-text mb-4">Profitability by Building Type</h3>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-blueprint-border">
                  <th className="text-left py-3 px-2 font-semibold text-blueprint-text">Building</th>
                  <th className="text-left py-3 px-2 font-semibold text-blueprint-text">Income Type</th>
                  <th className="text-right py-3 px-2 font-semibold text-blueprint-text">Coin/Day</th>
                  <th className="text-right py-3 px-2 font-semibold text-blueprint-text">Worker Cost</th>
                  <th className="text-left py-3 px-2 font-semibold text-blueprint-text">Efficiency</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-blueprint-border/50">
                  <td className="py-3 px-2 font-medium text-blueprint-text">Farm</td>
                  <td className="py-3 px-2"><span className="bp-tag blue">Production</span></td>
                  <td className="py-3 px-2 text-right text-blueprint-text">12 coins</td>
                  <td className="py-3 px-2 text-right text-blueprint-muted">2 workers</td>
                  <td className="py-3 px-2 text-blueprint-muted">6 coins/worker</td>
                </tr>
                <tr className="border-b border-blueprint-border/50 bg-blueprint-alt/30">
                  <td className="py-3 px-2 font-medium text-blueprint-text">Fishing Dock</td>
                  <td className="py-3 px-2"><span className="bp-tag blue">Production</span></td>
                  <td className="py-3 px-2 text-right text-blueprint-text">10 coins</td>
                  <td className="py-3 px-2 text-right text-blueprint-muted">2 workers</td>
                  <td className="py-3 px-2 text-blueprint-muted">5 coins/worker</td>
                </tr>
                <tr className="border-b border-blueprint-border/50">
                  <td className="py-3 px-2 font-medium text-blueprint-text">Bakery</td>
                  <td className="py-3 px-2"><span className="bp-tag green">Processing</span></td>
                  <td className="py-3 px-2 text-right text-blueprint-text">18 coins</td>
                  <td className="py-3 px-2 text-right text-blueprint-muted">2 workers</td>
                  <td className="py-3 px-2 text-blueprint-muted">9 coins/worker</td>
                </tr>
                <tr className="border-b border-blueprint-border/50 bg-blueprint-alt/30">
                  <td className="py-3 px-2 font-medium text-blueprint-text">Windmill</td>
                  <td className="py-3 px-2"><span className="bp-tag green">Processing</span></td>
                  <td className="py-3 px-2 text-right text-blueprint-text">22 coins</td>
                  <td className="py-3 px-2 text-right text-blueprint-muted">2 workers</td>
                  <td className="py-3 px-2 text-blueprint-muted">11 coins/worker</td>
                </tr>
                <tr className="border-b border-blueprint-border/50">
                  <td className="py-3 px-2 font-medium text-blueprint-text">Vineyard</td>
                  <td className="py-3 px-2"><span className="bp-tag orange">Luxury</span></td>
                  <td className="py-3 px-2 text-right text-blueprint-text">35 coins</td>
                  <td className="py-3 px-2 text-right text-blueprint-muted">3 workers</td>
                  <td className="py-3 px-2 text-blueprint-muted">12 coins/worker</td>
                </tr>
                <tr className="border-b border-blueprint-border/50 bg-blueprint-alt/30">
                  <td className="py-3 px-2 font-medium text-blueprint-text">Olive Grove</td>
                  <td className="py-3 px-2"><span className="bp-tag orange">Luxury</span></td>
                  <td className="py-3 px-2 text-right text-blueprint-text">32 coins</td>
                  <td className="py-3 px-2 text-right text-blueprint-muted">3 workers</td>
                  <td className="py-3 px-2 text-blueprint-muted">11 coins/worker</td>
                </tr>
                <tr className="border-b border-blueprint-border/50">
                  <td className="py-3 px-2 font-medium text-blueprint-text">Tourist Pier</td>
                  <td className="py-3 px-2"><span className="bp-tag orange">Tourism</span></td>
                  <td className="py-3 px-2 text-right text-blueprint-text">65 coins</td>
                  <td className="py-3 px-2 text-right text-blueprint-muted">4 workers</td>
                  <td className="py-3 px-2 text-blueprint-green">16 coins/worker</td>
                </tr>
                <tr className="border-b border-blueprint-border/50 bg-blueprint-alt/30">
                  <td className="py-3 px-2 font-medium text-blueprint-text">Marketplace</td>
                  <td className="py-3 px-2"><span className="bp-tag orange">Commerce</span></td>
                  <td className="py-3 px-2 text-right text-blueprint-text">25 coins</td>
                  <td className="py-3 px-2 text-right text-blueprint-muted">3 workers</td>
                  <td className="py-3 px-2 text-blueprint-muted">8 coins/worker</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Expense Management */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-4">Expense Management</h2>
          <p className="text-blueprint-muted leading-relaxed mb-4">
            Coins don't just pile up — your town has ongoing maintenance costs for every building, worker wages, and resource purchases when local production can't keep up with demand. Managing expenses is just as important as maximizing income. The most common economic trap for new players is overbuilding too quickly. Each building you place adds a maintenance cost that drains your treasury daily, regardless of whether it produces anything useful.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bluepr-card">
              <h3 className="font-display text-lg font-semibold text-blueprint-text mb-2">
                <span className="bp-tag orange mr-2">Cost Trap</span>
                Overbuilding
              </h3>
              <p className="text-blueprint-muted leading-relaxed text-sm">
                Every building carries a daily maintenance cost of 2-8 coins depending on its tier. A common mistake is building multiple windmills or vineyards before you have enough workers to staff them. These empty buildings still drain maintenance fees. A good rule: never have more than one unstaffed building per ten working citizens.
              </p>
            </div>
            <div className="bluepr-card">
              <h3 className="font-display text-lg font-semibold text-blueprint-text mb-2">
                <span className="bp-tag orange mr-2">Cost Trap</span>
                Food Imbalance
              </h3>
              <p className="text-blueprint-muted leading-relaxed text-sm">
                If your farms can't feed your population, the game auto-imports food at a 50% price premium. This invisible drain can sink your economy fast. Each farm supports approximately 30 citizens. Count your farms against your population regularly and expand food production before you expand housing.
              </p>
            </div>
            <div className="bluepr-card">
              <h3 className="font-display text-lg font-semibold text-blueprint-text mb-2">
                <span className="bp-tag green mr-2">Optimization</span>
                Worker Balance
              </h3>
              <p className="text-blueprint-muted leading-relaxed text-sm">
                Worker wages scale with tier — Artisan workers cost 50% more in wages than Worker-tier citizens. Staff your highest-profit buildings (vineyards, tourist piers) with your best workers and leave basic buildings like farms for your lowest-tier citizens. Reassign workers from low-profit to high-profit buildings as you unlock them.
              </p>
            </div>
            <div className="bluepr-card">
              <h3 className="font-display text-lg font-semibold text-blueprint-text mb-2">
                <span className="bp-tag green mr-2">Optimization</span>
                Bulk Construction
              </h3>
              <p className="text-blueprint-muted leading-relaxed text-sm">
                When you have a surplus of coins and resources, build in batches of 3-5 structures at once. The initial construction cost is a one-time hit, but the maintenance begins immediately. Spacing construction out with days of income generation between batches keeps your treasury stable and prevents the dreaded coin-negative spiral.
              </p>
            </div>
          </div>
        </section>

        {/* Economic Strategy by Phase */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-4">Phase-by-Phase Economic Strategy</h2>

          <div className="space-y-6">
            <div className="bluepr-card">
              <div className="flex items-center gap-3 mb-3">
                <span className="bp-tag green">Early Game</span>
                <span className="text-sm text-blueprint-muted">1-50 citizens, Worker tier only</span>
              </div>
              <p className="text-blueprint-muted leading-relaxed">
                Your economy begins with taxes from Worker Houses and direct production from farms and fishing docks. At this stage, taxes account for roughly 80% of your income. Build 4-6 farms immediately to secure your food supply, then add 2-3 fishing docks on available coastline. Avoid expensive buildings — a Marketplace should be your only non-food investment early on. Keep at least 100 coins in reserve at all times to handle maintenance payments and unexpected events. Research the first tax efficiency node as soon as possible; it pays for itself within 5 in-game days.
              </p>
            </div>

            <div className="bluepr-card">
              <div className="flex items-center gap-3 mb-3">
                <span className="bp-tag blue">Mid Game</span>
                <span className="text-sm text-blueprint-muted">50-150 citizens, Artisan tier unlocked</span>
              </div>
              <p className="text-blueprint-muted leading-relaxed">
                The mid game is where your economy diversifies. Artisan-tier citizens pay more than double the taxes of Workers, so upgrading houses should be your top priority. Each Artisan House upgrade costs 60 Wood and 40 Stone but pays for itself in approximately 8 days through tax increases. Bakeries and windmills transform cheap wheat into bread, which satisfies Artisan food needs and generates processing profits. This is also when you should establish your second town — trade between two towns generates passive income that covers 20-25% of your expenses. Start your first vineyard or olive grove on hillside terrain to produce luxury goods that command premium prices at the marketplace.
              </p>
            </div>

            <div className="bluepr-card">
              <div className="flex items-center gap-3 mb-3">
                <span className="bp-tag orange">Late Game</span>
                <span className="text-sm text-blueprint-muted">150+ citizens, Bourgeoisie tier, tourism unlocked</span>
              </div>
              <p className="text-blueprint-muted leading-relaxed">
                The late game economy revolves around tourism and multi-town trade networks. Bourgeoisie citizens pay 40-77 coins per day depending on education, making each fully upgraded house a miniature gold mine. Build Tourist Piers on premium coastline locations — each pier brings in 65+ coins per day and scales with your town's beauty score, plaza coverage, and the number of attractions within walking distance. Connect all your towns with trade routes (the maximum bonus caps at 6 connected towns). Universities generate research points and prestige, which attracts higher-spending tourists. At this stage, you should aim for a 40/30/30 split between tax income, trade income, and tourism revenue for maximum economic stability.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Tips */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-4">Economic Quick Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="tip-box">
              <strong>Prioritize happiness over expansion.</strong> A happy citizen pays up to 40% more taxes than an unhappy one. Before adding new houses, make sure existing citizens have parks, food variety, and church access. Happiness is the single largest tax multiplier in the game.
            </div>
            <div className="tip-box">
              <strong>Food first, always.</strong> Never let your food production dip below population requirements. The 50% import penalty on food can drain hundreds of coins per day before you even notice. Build a food surplus buffer of at least 20% above your population count.
            </div>
            <div className="tip-box">
              <strong>Trade routes scale with town count.</strong> The income from each trade route increases by roughly 15% for each additional town in your network. Three connected towns generate more than double the income of two towns — the synergy effect is powerful.
            </div>
            <div className="tip-box">
              <strong>Don't hoard resources.</strong> Sitting on 500 wood and 300 stone with empty building slots costs you potential income. Resources sitting in storage generate zero coins. Invest surplus resources into production buildings or housing upgrades that will generate ongoing returns.
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
