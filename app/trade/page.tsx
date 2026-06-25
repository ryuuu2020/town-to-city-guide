import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trade Routes & Tourism — Town to City Guide',
  description: 'Master Town to City trade routes and tourism system. Learn which goods sell best, how to build multi-town economic synergy, and unlock late-game expansion strategies for maximum passive income.',
};

export default function TradePage() {
  return (
    <main className="min-h-screen bg-blueprint-bg">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-sm text-blueprint-muted mb-8">
          <a href="/" className="hover:text-blueprint-accent">Home</a>
          <span className="mx-2">/</span>
          <span>Trade & Tourism</span>
        </div>

        <h1 className="font-display text-4xl font-bold text-blueprint-text mb-4">Trade Routes & Tourism</h1>
        <p className="text-lg text-blueprint-muted mb-10">
          While taxes form the backbone of your early economy, trade routes and tourism are the engines that drive late-game prosperity. A well-connected network of towns trading goods and attracting tourists can generate more passive income than all your taxes combined. This guide covers everything from your first trade route to building a Mediterranean tourism empire.
        </p>

        {/* Trade Route Mechanics */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-4">Trade Route Mechanics</h2>
          <p className="text-blueprint-muted leading-relaxed mb-6">
            Trade routes automatically connect your towns and generate passive income based on the goods each town produces. Once you establish a second town (which requires unlocking settlement expansion through the research tree), you can establish a trade route between them. Each route generates coins daily with zero maintenance cost — it is pure passive profit that continues to flow whether you are focusing on that town or on the other side of the map.
          </p>

          <div className="bluepr-card">
            <h3 className="font-display text-lg font-semibold text-blueprint-text mb-4">How Trade Routes Work</h3>
            <p className="text-blueprint-muted leading-relaxed mb-4">
              Trade income per route is calculated based on three factors: the diversity of goods produced in each connected town, the distance between towns (further apart means more valuable trade goods in transit), and the presence of marketplaces that boost commerce efficiency. The base income for a single two-town route starts at approximately 15-20 coins per day and scales up as you add more towns to your network.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="stat-card">
                <div className="font-display text-2xl font-bold text-blueprint-accent mb-1">2 Towns</div>
                <div className="text-sm text-blueprint-muted">~18 coins/day from one trade route. Low but completely passive — covers maintenance for 3-4 buildings.</div>
              </div>
              <div className="stat-card">
                <div className="font-display text-2xl font-bold text-blueprint-accent mb-1">4 Towns</div>
                <div className="text-sm text-blueprint-muted">~95 coins/day from six interconnected routes. Now rivals your tax income from a mid-sized town.</div>
              </div>
              <div className="stat-card">
                <div className="font-display text-2xl font-bold text-blueprint-green mb-1">6 Towns</div>
                <div className="text-sm text-blueprint-muted">~210 coins/day from fifteen maximum routes. Enough to fund your entire empire's maintenance costs with surplus.</div>
              </div>
            </div>
          </div>
        </section>

        {/* Best Selling Goods */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-4">Best Selling Trade Goods</h2>
          <p className="text-blueprint-muted leading-relaxed mb-6">
            Not all goods are equal in the eyes of the market. Processed goods and luxury items command significantly higher trade prices than raw materials. Here is the definitive ranking of trade goods by coin value per unit, along with the conditions needed to produce them efficiently.
          </p>

          <div className="bluepr-card overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-blueprint-border">
                  <th className="text-left py-3 px-2 font-semibold text-blueprint-text">Goods</th>
                  <th className="text-left py-3 px-2 font-semibold text-blueprint-text">Type</th>
                  <th className="text-right py-3 px-2 font-semibold text-blueprint-text">Value/Unit</th>
                  <th className="text-left py-3 px-2 font-semibold text-blueprint-text">Produced By</th>
                  <th className="text-left py-3 px-2 font-semibold text-blueprint-text">Best Trade Partner</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-blueprint-border/50 bg-blueprint-alt/30">
                  <td className="py-3 px-2 font-medium text-blueprint-text">Wheat</td>
                  <td className="py-3 px-2"><span className="bp-tag blue">Raw</span></td>
                  <td className="py-3 px-2 text-right text-blueprint-muted">3 coins</td>
                  <td className="py-3 px-2 text-blueprint-muted">Farm</td>
                  <td className="py-3 px-2 text-blueprint-muted">Any town (basic food)</td>
                </tr>
                <tr className="border-b border-blueprint-border/50">
                  <td className="py-3 px-2 font-medium text-blueprint-text">Fish</td>
                  <td className="py-3 px-2"><span className="bp-tag blue">Raw</span></td>
                  <td className="py-3 px-2 text-right text-blueprint-muted">4 coins</td>
                  <td className="py-3 px-2 text-blueprint-muted">Fishing Dock</td>
                  <td className="py-3 px-2 text-blueprint-muted">Inland towns (food variety)</td>
                </tr>
                <tr className="border-b border-blueprint-border/50 bg-blueprint-alt/30">
                  <td className="py-3 px-2 font-medium text-blueprint-text">Bread</td>
                  <td className="py-3 px-2"><span className="bp-tag green">Processed</span></td>
                  <td className="py-3 px-2 text-right text-blueprint-text">8 coins</td>
                  <td className="py-3 px-2 text-blueprint-muted">Bakery</td>
                  <td className="py-3 px-2 text-blueprint-muted">New settlements (food boost)</td>
                </tr>
                <tr className="border-b border-blueprint-border/50">
                  <td className="py-3 px-2 font-medium text-blueprint-text">Flour</td>
                  <td className="py-3 px-2"><span className="bp-tag green">Processed</span></td>
                  <td className="py-3 px-2 text-right text-blueprint-text">10 coins</td>
                  <td className="py-3 px-2 text-blueprint-muted">Windmill</td>
                  <td className="py-3 px-2 text-blueprint-muted">Towns with bakeries (supply chain)</td>
                </tr>
                <tr className="border-b border-blueprint-border/50 bg-blueprint-alt/30">
                  <td className="py-3 px-2 font-medium text-blueprint-text">Grapes</td>
                  <td className="py-3 px-2"><span className="bp-tag green">Raw Luxury</span></td>
                  <td className="py-3 px-2 text-right text-blueprint-text">12 coins</td>
                  <td className="py-3 px-2 text-blueprint-muted">Vineyard</td>
                  <td className="py-3 px-2 text-blueprint-muted">Tourism towns (wine demand)</td>
                </tr>
                <tr className="border-b border-blueprint-border/50">
                  <td className="py-3 px-2 font-medium text-blueprint-text">Olives</td>
                  <td className="py-3 px-2"><span className="bp-tag green">Raw Luxury</span></td>
                  <td className="py-3 px-2 text-right text-blueprint-text">11 coins</td>
                  <td className="py-3 px-2 text-blueprint-muted">Olive Grove</td>
                  <td className="py-3 px-2 text-blueprint-muted">General trade (versatile)</td>
                </tr>
                <tr className="border-b border-blueprint-border/50 bg-blueprint-alt/30">
                  <td className="py-3 px-2 font-medium text-blueprint-text">Wine</td>
                  <td className="py-3 px-2"><span className="bp-tag orange">Luxury</span></td>
                  <td className="py-3 px-2 text-right text-blueprint-text">22 coins</td>
                  <td className="py-3 px-2 text-blueprint-muted">Winery (processed)</td>
                  <td className="py-3 px-2 text-blueprint-muted">Bourgeoisie towns (luxury need)</td>
                </tr>
                <tr className="border-b border-blueprint-border/50">
                  <td className="py-3 px-2 font-medium text-blueprint-text">Olive Oil</td>
                  <td className="py-3 px-2"><span className="bp-tag orange">Luxury</span></td>
                  <td className="py-3 px-2 text-right text-blueprint-text">20 coins</td>
                  <td className="py-3 px-2 text-blueprint-muted">Oil Press (processed)</td>
                  <td className="py-3 px-2 text-blueprint-muted">High-tier housing towns</td>
                </tr>
                <tr className="border-b border-blueprint-border/50 bg-blueprint-alt/30">
                  <td className="py-3 px-2 font-medium text-blueprint-text">Dried Fish</td>
                  <td className="py-3 px-2"><span className="bp-tag green">Processed</span></td>
                  <td className="py-3 px-2 text-right text-blueprint-text">9 coins</td>
                  <td className="py-3 px-2 text-blueprint-muted">Upgraded Fishing Dock</td>
                  <td className="py-3 px-2 text-blueprint-muted">Non-coastal towns</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="tip-box mt-4">
            <strong>Specialize your towns for maximum trade profit.</strong> Instead of making every town self-sufficient, give each town a specialty — one produces all your wine, another focuses on olive oil, a third on bread. Trade routes between specialized towns generate significantly more income than routes between identical generalist towns. The diversity bonus per good type stacks multiplicatively.
          </div>
        </section>

        {/* Tourism System */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-4">Tourism System</h2>
          <p className="text-blueprint-muted leading-relaxed mb-6">
            Tourism is the late-game economic powerhouse. Once you research Tourism Infrastructure and build your first Tourist Pier, visitors from across the Mediterranean will travel to your town, spending coins at shops, staying in hotels, and generating income proportional to your town's beauty and attraction scores. A fully developed tourist town can generate 300-500 coins per day from tourism alone.
          </p>

          <div className="space-y-6">
            <div className="bluepr-card">
              <h3 className="font-display text-lg font-semibold text-blueprint-text mb-3">Tourist Piers</h3>
              <p className="text-blueprint-muted leading-relaxed mb-2">
                Tourist Piers are the entry point for every visitor to your town. They must be placed on coastline, and each pier can accommodate up to 15 tourists at a time. Piers generate 65 base coins per day, but this scales with three multipliers: your town's overall beauty score (up to 2x), the number of unique attractions within walking distance (up to 1.5x), and the prestige generated by Universities and Monuments (up to 1.3x). A pier in a prime location with maximum multipliers can generate over 250 coins per day.
              </p>
              <p className="text-blueprint-muted leading-relaxed">
                Strategic placement is crucial — build piers on the most scenic coastline available, surround them with parks, plazas, and statues, and ensure there is a clear walking path to your marketplace and entertainment district. Tourists who encounter ugly or industrial areas on their walk to town will leave early and spend less.
              </p>
            </div>

            <div className="bluepr-card">
              <h3 className="font-display text-lg font-semibold text-blueprint-text mb-3">Hotels & Accommodation</h3>
              <p className="text-blueprint-muted leading-relaxed mb-2">
                Hotels convert tourist foot traffic into extended stays and higher spending. Each hotel can house 8 tourists and increases the daily spending rate per tourist by 25%. Hotels also provide a small direct income of 30 coins per day from room fees. Place hotels within a short walk of both the Tourist Pier and your main plaza — tourists prefer to stay where the action is.
              </p>
              <p className="text-blueprint-muted leading-relaxed">
                A good rule of thumb: build one hotel for every Tourist Pier. Excess pier capacity without hotels means tourists make day trips but don't stay overnight, missing out on the extended-stay spending bonus. Hotels staffed by Bourgeoisie-tier citizens perform 20% better than those staffed by Artisans due to service quality bonuses.
              </p>
            </div>

            <div className="bluepr-card">
              <h3 className="font-display text-lg font-semibold text-blueprint-text mb-3">Attractions & Tourism Score</h3>
              <p className="text-blueprint-muted leading-relaxed mb-2">
                Your town's tourism score is a composite rating that determines how many tourists visit and how much they spend. The score is calculated from beauty contributions (parks, plazas, gardens, statues), prestige buildings (churches, universities), and unique landmarks (monuments, waterfront features). Each Statue adds 8 beauty points and a prestige multiplier, making them the most efficient attraction per tile.
              </p>
              <p className="text-blueprint-muted leading-relaxed">
                The key threshold to aim for is a tourism score of 50 — at this level, your town is classified as a regional destination, doubling tourist traffic. At a score of 100, you become a Mediterranean hotspot, unlocking the maximum tourism multiplier and attracting the wealthiest visitors who spend 3x the base rate. This requires careful planning from the early game: leave space for monuments, keep your waterfront beautiful, and don't clutter prime tourist real estate with farms or industry.
              </p>
            </div>
          </div>
        </section>

        {/* Multi-Town Economic Synergy */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-4">Multi-Town Economic Synergy</h2>
          <p className="text-blueprint-muted leading-relaxed mb-6">
            The true economic power of Town to City emerges when you manage multiple interconnected towns. Each new settlement doesn't just add its own income — it amplifies the income of every existing town through trade route bonuses, shared research benefits, and the tourism network effect.
          </p>

          <div className="bluepr-card">
            <h3 className="font-display text-lg font-semibold text-blueprint-text mb-3">Synergy Effects by Town Count</h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="bp-tag green">2 Towns</span>
                  <span className="text-sm font-medium text-blueprint-text">Trade Network Bonus: +15%</span>
                </div>
                <p className="text-sm text-blueprint-muted leading-relaxed">
                  Establish your second town specializing in a different good than your main settlement. If your first town is a farming hub, make your second a fishing village on the coast. This maximizes the diversity bonus in your trade route.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="bp-tag blue">4 Towns</span>
                  <span className="text-sm font-medium text-blueprint-text">Trade Network Bonus: +45%</span>
                </div>
                <p className="text-sm text-blueprint-muted leading-relaxed">
                  At four towns, assign clear specializations: one farming town (wheat, bread), one coastal town (fish, dried fish), one hillside town (wine, olive oil), and one cultural center (tourism, universities). The cross-trade between these specialties creates six distinct trade routes, each with high diversity bonuses.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="bp-tag orange">6 Towns</span>
                  <span className="text-sm font-medium text-blueprint-text">Trade Network Bonus: +90%, Tourism Network: +40%</span>
                </div>
                <p className="text-sm text-blueprint-muted leading-relaxed">
                  At maximum town count, your trade network is fully saturated with 15 active routes. The tourism network effect means each tourist town boosts visitation to all other tourist towns by 10% — with three tourist-focused towns, each receives a 30% traffic bonus from the network. This is the pinnacle of the Town to City economy: passive income so abundant that resources become the only limitation on expansion.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Late-Game Expansion Strategy */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-4">Late-Game Expansion Strategy</h2>
          <p className="text-blueprint-muted leading-relaxed mb-6">
            Once your first town is stable and profitable, expansion becomes your primary growth vector. Each new town requires an initial investment of resources but pays for itself within 15-20 days through added trade income and its own tax base. Here is how to expand methodically without overextending.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bluepr-card">
              <h3 className="font-display text-lg font-semibold text-blueprint-text mb-2">
                <span className="bp-tag green mr-2">Step 1</span>
                Scout & Select
              </h3>
              <p className="text-blueprint-muted leading-relaxed text-sm">
                Before founding a new town, scout the map for the right terrain. Coastal locations are ideal for fishing and tourism towns. Hillside regions support vineyards and olive groves. Flat inland terrain works best for farming hubs. A poorly placed town with terrain that doesn't match its specialization will underperform for its entire lifespan — you cannot change terrain after settlement.
              </p>
            </div>
            <div className="bluepr-card">
              <h3 className="font-display text-lg font-semibold text-blueprint-text mb-2">
                <span className="bp-tag green mr-2">Step 2</span>
                Bootstrap Economy
              </h3>
              <p className="text-blueprint-muted leading-relaxed text-sm">
                Each new town begins with a Town Hall, 3 Worker Houses, and enough resources for 2 farms. Your first priority is food self-sufficiency — the import penalty on food for new towns is brutal. Build farms immediately, then add a fishing dock if coastal. Only after the town feeds itself should you build its specialty production buildings.
              </p>
            </div>
            <div className="bluepr-card">
              <h3 className="font-display text-lg font-semibold text-blueprint-text mb-2">
                <span className="bp-tag blue mr-2">Step 3</span>
                Connect Trade
              </h3>
              <p className="text-blueprint-muted leading-relaxed text-sm">
                As soon as the new town has its specialty production running, establish trade routes to your other settlements. The route takes 3 in-game days to activate, after which passive income begins flowing. Prioritize routes between towns with the most different production profiles — a wine town trading with a bread town generates far more income than two farming towns trading with each other.
              </p>
            </div>
            <div className="bluepr-card">
              <h3 className="font-display text-lg font-semibold text-blueprint-text mb-2">
                <span className="bp-tag orange mr-2">Step 4</span>
                Scale & Specialize
              </h3>
              <p className="text-blueprint-muted leading-relaxed text-sm">
                Once the town's trade routes are active, reinvest profits into expanding its specialty. Double down on what makes this town unique rather than trying to make it a generalist. A town with 4 vineyards, 2 olive groves, and a winery will generate more trade value than one with scattered production. Specialization is the key to trade synergy — the network bonus rewards diversity between towns, not within them.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Tips */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-4">Trade & Tourism Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="tip-box">
              <strong>Research Trade Mastery early in mid-game.</strong> This node gives +25% trade route income per connection — for a four-town network, that is an extra 24 coins per day. It is one of the highest ROI research nodes in the entire tree and pays for itself within 12 days.
            </div>
            <div className="tip-box">
              <strong>Don't put Tourist Piers next to Fishing Docks.</strong> Tourists are repelled by industrial zones. Keep fishing and industry at least 5 building-widths away from your tourist district. Use parks as buffers between industrial and tourist zones to prevent beauty score penalties.
            </div>
            <div className="tip-box">
              <strong>Upgrade Marketplace before building Tourist Piers.</strong> Tourists spend their coins at marketplaces. An upgraded Grand Market (via research) increases tourist spending by 30% and provides an extra commerce radius that catches more passing visitors.
            </div>
            <div className="tip-box">
              <strong>New towns need not be equal in size.</strong> It is perfectly viable to have one massive capital city of 200+ citizens and several satellite towns of 30-50 citizens each. The satellites contribute to the trade network bonus without requiring the same level of infrastructure investment as the capital.
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
