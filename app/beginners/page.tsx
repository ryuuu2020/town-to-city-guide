import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Beginner's Guide: Getting Started — Town to City Guide",
  description: 'Getting started with Town to City: basic town setup, crop farming, citizen tiers, and essential tips for new players.',
};

export default function BeginnersPage() {
  return (
    <div className="min-h-screen bg-blueprint-bg">
      <div className="max-w-5xl mx-auto px-6 py-12">

        {/* Breadcrumb */}
        <div className="text-sm text-blueprint-muted mb-8">
          <a href="/" className="hover:text-blueprint-accent">Home</a>
          <span className="mx-2">/</span>
          <span>Beginner&apos;s Guide</span>
        </div>

        {/* Page Header */}
        <h1 className="font-display text-4xl font-bold text-blueprint-text mb-4">Beginner&apos;s Guide: Getting Started</h1>
        <p className="text-lg text-blueprint-muted mb-8 max-w-3xl">
          New to Town to City? This guide covers the fundamentals: setting up your first town, farming basics, citizen management, and the production chains that power your Mediterranean settlement.
        </p>

        {/* ===== Core Concepts ===== */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-2">Core Concepts</h2>
          <p className="text-blueprint-muted leading-relaxed mb-6">
            Town to City is a grid-less 19th century Mediterranean city builder from Galaxy Grove, the creators of Station to Station. Unlike traditional city builders, buildings can be freely placed anywhere — there is no grid system. Your goal is to grow a small settlement into a thriving city.
          </p>

          <div className="bluepr-card">
            <h3 className="font-display text-lg font-semibold text-blueprint-text mb-4">Key Game Features</h3>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <span className="bp-tag blue shrink-0 mt-0.5">1</span>
                <div>
                  <h4 className="font-display text-base font-semibold text-blueprint-text">Grid-Less Building</h4>
                  <p className="text-sm text-blueprint-muted leading-relaxed">
                    Freely place houses, shops, farms, and decorations anywhere. Rotate, offset, and arrange buildings organically. The voxel art style supports detailed placement and customization.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="bp-tag green shrink-0 mt-0.5">2</span>
                <div>
                  <h4 className="font-display text-base font-semibold text-blueprint-text">Three Citizen Tiers</h4>
                  <p className="text-sm text-blueprint-muted leading-relaxed">
                    Citizens progress from Workers (basic labor) to Artisans (skilled craftsmen) to Bourgeoisie (elite wealthy). Each tier unlocks new buildings, has different needs, and pays different taxes. Satisfy citizen needs to enable tier upgrades.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="bp-tag orange shrink-0 mt-0.5">3</span>
                <div>
                  <h4 className="font-display text-base font-semibold text-blueprint-text">Crop Farming & Supply Chains</h4>
                  <p className="text-sm text-blueprint-muted leading-relaxed">
                    Farms grow 13 different crop types across 4 tiers of farm upgrades. Crops feed production buildings — for example, the Bakery needs Corn and Wheat to produce Bread. Plan your crop ratios based on what buildings you want to operate.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="bp-tag green shrink-0 mt-0.5">4</span>
                <div>
                  <h4 className="font-display text-base font-semibold text-blueprint-text">Multiple Towns & Specialization</h4>
                  <p className="text-sm text-blueprint-muted leading-relaxed">
                    You can develop multiple towns connected by trade routes. Specialize different towns for different purposes — farming towns (like Fontebrac), tourism towns (like Rocemarée), and your main administrative hub (Belvau).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== First Steps ===== */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-2">First Steps in Your Town</h2>

          <div className="bluepr-card">
            <h3 className="font-display text-lg font-semibold text-blueprint-text mb-4">Getting Started</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-display text-base font-semibold text-blueprint-text">1. Place Your Town Hall</h4>
                <p className="text-sm text-blueprint-muted leading-relaxed">
                  The Town Hall is your administrative center. It unlocks basic services and serves as the hub for citizen registration. Place it centrally in your desired main town area.
                </p>
              </div>
              <div>
                <h4 className="font-display text-base font-semibold text-blueprint-text">2. Build Worker Houses</h4>
                <p className="text-sm text-blueprint-muted leading-relaxed">
                  Your starting families need basic housing. Workers staff your farms and basic production. Place houses where they can eventually be served by market stalls, food stalls, and other services.
                </p>
              </div>
              <div>
                <h4 className="font-display text-base font-semibold text-blueprint-text">3. Start Farming</h4>
                <p className="text-sm text-blueprint-muted leading-relaxed">
                  Place Farms and begin growing your first crops: Corn, Wheat, and Grapes. These feed your initial production buildings — Bakery and Winery. Farms upgrade through tiers, unlocking new crop types at each level. Farm surface area doubles at Tier 3.
                </p>
              </div>
              <div>
                <h4 className="font-display text-base font-semibold text-blueprint-text">4. Build Market Stalls and Food Stalls</h4>
                <p className="text-sm text-blueprint-muted leading-relaxed">
                  Your citizens need access to food and goods. Market Stalls and Food Stalls distribute what your farms and production buildings create. Place them within walking distance of residential areas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Citizen Management ===== */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-2">Citizen Management Basics</h2>

          <div className="bluepr-card">
            <h3 className="font-display text-lg font-semibold text-blueprint-text mb-4">Understanding Your Population</h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-display text-base font-semibold text-blueprint-text mb-2">Citizen Tiers at a Glance</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-blueprint-border">
                        <th className="text-left py-2 px-2 font-semibold text-blueprint-text">Tier</th>
                        <th className="text-left py-2 px-2 font-semibold text-blueprint-text">Role</th>
                        <th className="text-left py-2 px-2 font-semibold text-blueprint-text">Staffs</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-blueprint-border/50">
                        <td className="py-2 px-2 text-blueprint-text font-medium">Worker</td>
                        <td className="py-2 px-2 text-blueprint-muted">Foundation workforce</td>
                        <td className="py-2 px-2 text-blueprint-muted">Farms, basic production, warehouses</td>
                      </tr>
                      <tr className="border-b border-blueprint-border/50">
                        <td className="py-2 px-2 text-blueprint-text font-medium">Artisan</td>
                        <td className="py-2 px-2 text-blueprint-muted">Skilled labor</td>
                        <td className="py-2 px-2 text-blueprint-muted">Bakeries, Wineries, Hatteries, Pubs</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-2 text-blueprint-text font-medium">Bourgeoisie</td>
                        <td className="py-2 px-2 text-blueprint-muted">Elite class</td>
                        <td className="py-2 px-2 text-blueprint-muted">Advanced buildings, highest tax income</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h4 className="font-display text-base font-semibold text-blueprint-text mb-2">Housing Upgrades</h4>
                <p className="text-sm text-blueprint-muted leading-relaxed">
                  Houses upgrade through the three tiers alongside your citizens. Worker Houses (basic), Artisan Houses (mid-tier), and Bourgeoisie Houses (elite). Each upgrade requires meeting specific needs of the current tier first.
                </p>
              </div>

              <div>
                <h4 className="font-display text-base font-semibold text-blueprint-text mb-2">Labor Priority</h4>
                <p className="text-sm text-blueprint-muted leading-relaxed">
                  Town to City has a labor priority system. Different citizen tiers are needed for different jobs. Be careful when upgrading — an upgraded Artisan may leave a Worker job slot empty. Balance your tier ratios to maintain essential services.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Farming Overview ===== */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-2">Farming Overview</h2>

          <div className="bluepr-card">
            <h3 className="font-display text-lg font-semibold text-blueprint-text mb-4">Crops and Production</h3>
            <p className="text-blueprint-muted leading-relaxed mb-4">
              Farming is the economic foundation of your town. Crops are grown on farms and consumed by production buildings. Each farm tier unlocks new crops:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="p-3 bg-blueprint-alt rounded-card">
                <h4 className="font-display text-sm font-semibold text-blueprint-text mb-1">Tier 1: Grapes, Corn, Wheat</h4>
                <p className="text-xs text-blueprint-muted">Powers Bakery (Corn + Wheat) and Winery (Grapes)</p>
              </div>
              <div className="p-3 bg-blueprint-alt rounded-card">
                <h4 className="font-display text-sm font-semibold text-blueprint-text mb-1">Tier 2: Beeswax, Cotton, Rose</h4>
                <p className="text-xs text-blueprint-muted">Powers Hattery — your first apparel building</p>
              </div>
              <div className="p-3 bg-blueprint-alt rounded-card">
                <h4 className="font-display text-sm font-semibold text-blueprint-text mb-1">Tier 3: Hops, Potatoes, Tomatoes, Lettuce</h4>
                <p className="text-xs text-blueprint-muted">Powers Pub — leisure building. Farm surface doubles!</p>
              </div>
              <div className="p-3 bg-blueprint-alt rounded-card">
                <h4 className="font-display text-sm font-semibold text-blueprint-text mb-1">Tier 4: Pumpkin, Lavender, Medicinal Herbs</h4>
                <p className="text-xs text-blueprint-muted">Powers City-rank buildings (Apothecary, Perfumer, Cathedral, Restaurant)</p>
              </div>
            </div>

            <div className="tip-box">
              <strong>Key resource:</strong> Hops have the highest demand of any crop. Plan for significantly more Hops fields once you unlock Tier 3 to keep the Pub and Apothecary running.
            </div>
          </div>
        </section>

        {/* ===== Essential Tips ===== */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-2">Essential Tips for New Players</h2>

          <div className="bluepr-card">
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <span className="bp-tag green mt-0.5 shrink-0">Tip</span>
                <div>
                  <h4 className="font-display text-base font-semibold text-blueprint-text">Use Warehouses for Supply Chains</h4>
                  <p className="text-sm text-blueprint-muted leading-relaxed">
                    Warehouses have a transport range — production buildings within range automatically access stored crops and goods. Place warehouses strategically between farms and processing buildings to minimize logistics issues.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="bp-tag blue mt-0.5 shrink-0">Tip</span>
                <div>
                  <h4 className="font-display text-base font-semibold text-blueprint-text">Specialize Your Towns</h4>
                  <p className="text-sm text-blueprint-muted leading-relaxed">
                    The default map has three towns: Belvau (main hub), Fontebrac (agriculture), and Rocemarée (tourism). Develop each with a focus — farming in Fontebrac, administration in Belvau, tourism in Rocemarée. Trade routes connect them.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="bp-tag orange mt-0.5 shrink-0">Tip</span>
                <div>
                  <h4 className="font-display text-base font-semibold text-blueprint-text">Research Unlocks Progress</h4>
                  <p className="text-sm text-blueprint-muted leading-relaxed">
                    The Research Center unlocks new buildings, decorations, and technologies. Assign Research Workers to progress through research tiers. Research is essential for unlocking higher-tier buildings and citizen upgrades.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="bp-tag green mt-0.5 shrink-0">Tip</span>
                <div>
                  <h4 className="font-display text-base font-semibold text-blueprint-text">Beauty Matters for Tourism</h4>
                  <p className="text-sm text-blueprint-muted leading-relaxed">
                    Tourism income scales with your town&apos;s appeal. Hotels, scenic routes, and attractions (Lighthouse, Art Atelier, Monumental Ruins, Obelisk) draw visitors. Develop dedicated tourism infrastructure for late-game income.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="bp-tag blue mt-0.5 shrink-0">Tip</span>
                <div>
                  <h4 className="font-display text-base font-semibold text-blueprint-text">Plan Crop Ratios</h4>
                  <p className="text-sm text-blueprint-muted leading-relaxed">
                    Different buildings consume crops at different rates. The Pub requires 75 Hops vs. 25 of each other crop — grow 3x more Hops. Use our Crops &amp; Farming page for detailed building input requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom separator */}
        <div className="flex items-center gap-4 mt-16 mb-8">
          <div className="h-px flex-1 bg-blueprint-border"></div>
          <span className="text-xs text-blueprint-muted">End of Beginner&apos;s Guide</span>
          <div className="h-px flex-1 bg-blueprint-border"></div>
        </div>

      </div>
    </div>
  );
}
