import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Citizens Guide: Tiers & Needs — Town to City Guide',
  description: 'Master citizen management in Town to City. Learn Worker, Artisan, and Bourgeoisie tiers, job assignments, and needs.',
};

const citizenTiers = [
  { tier: 'Worker', icon: 'W', color: 'blue', desc: 'The foundation workforce. Workers staff farms, warehouses, and basic production buildings. Staff workers based on labor priority — different citizen tiers fill different job slots.', upgradeTo: 'Artisan: requires meeting basic needs (food access, market access) and town progress.' },
  { tier: 'Artisan', icon: 'A', color: 'orange', desc: 'Skilled craftspeople. Artisans run advanced production buildings like Bakeries, Wineries, Hatteries, and Pubs. They demand better food, access to apparel and leisure goods.', upgradeTo: 'Bourgeoisie: requires meeting higher-tier needs (luxury goods, public services, high beauty).' },
  { tier: 'Bourgeoisie', icon: 'B', color: 'green', desc: 'The elite class. Bourgeoisie generate the most tax income and staff advanced buildings. They require luxury goods, public services like the Apothecary, and high beauty scores. The Cathedral (Large City) serves their spiritual needs.' },
];

export default function CitizensPage() {
  return (
    <div className="min-h-screen bg-blueprint-bg">
      <div className="max-w-5xl mx-auto px-6 py-12">

        {/* Breadcrumb */}
        <div className="text-sm text-blueprint-muted mb-8">
          <a href="/" className="hover:text-blueprint-accent">Home</a>
          <span className="mx-2">/</span>
          <span>Citizens</span>
        </div>

        {/* Page Header */}
        <h1 className="font-display text-4xl font-bold text-blueprint-text mb-4">Citizens Guide</h1>
        <p className="text-lg text-blueprint-muted mb-8 max-w-3xl">
          Citizens are the heart of your town. Each family progresses through three social tiers — Worker, Artisan, and Bourgeoisie — unlocking new jobs and demanding increasingly complex services. Managing this progression is central to growing your town.
        </p>

        <div className="flex flex-wrap gap-2 mb-10">
          <span className="bp-tag blue">Tiers</span>
          <span className="bp-tag orange">Housing</span>
          <span className="bp-tag green">Jobs</span>
          <span className="bp-tag blue">Needs</span>
        </div>

        {/* ===== Section 1: Three Tiers ===== */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-2">Three Citizen Tiers</h2>
          <p className="text-blueprint-muted leading-relaxed mb-6">
            Town to City features a tiered citizen system where families progress from Workers through Artisans to Bourgeoisie. Each tier unlocks new building types, job slots, and demands different goods and services.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {citizenTiers.map((ct) => (
              <div key={ct.tier} className="stat-card">
                <div className={`text-3xl font-display font-bold mb-2 ${ct.color === 'blue' ? 'text-blueprint-accent' : ct.color === 'orange' ? 'text-blueprint-warm' : 'text-blueprint-green'}`}>
                  {ct.tier}
                </div>
                <p className="text-sm text-blueprint-muted leading-relaxed mb-3">{ct.desc}</p>
                <div className="border-t border-blueprint-border/50 pt-2">
                  <span className="text-xs text-blueprint-muted">{ct.upgradeTo}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="bluepr-card">
            <h3 className="font-display text-lg font-semibold text-blueprint-text mb-4">Housing Types</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-blueprint-border">
                    <th className="text-left py-2 px-2 font-semibold text-blueprint-text">House Type</th>
                    <th className="text-left py-2 px-2 font-semibold text-blueprint-text">Citizen Tier</th>
                    <th className="text-left py-2 px-2 font-semibold text-blueprint-text">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-blueprint-border/50">
                    <td className="py-2 px-2 text-blueprint-text font-medium">Worker House</td>
                    <td className="py-2 px-2 text-blueprint-text">Worker</td>
                    <td className="py-2 px-2 text-blueprint-muted text-xs">Basic housing. Workers staff farms, warehouses, and basic production.</td>
                  </tr>
                  <tr className="border-b border-blueprint-border/50">
                    <td className="py-2 px-2 text-blueprint-text font-medium">Artisan House</td>
                    <td className="py-2 px-2 text-blueprint-text">Artisan</td>
                    <td className="py-2 px-2 text-blueprint-muted text-xs">Mid-tier housing. Artisans staff wineries, bakeries, hatteries, pubs.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-2 text-blueprint-text font-medium">Bourgeoisie House</td>
                    <td className="py-2 px-2 text-blueprint-text">Bourgeoisie</td>
                    <td className="py-2 px-2 text-blueprint-muted text-xs">Elite housing. Bourgeoisie generate the highest tax income.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ===== Section 2: Citizen Needs ===== */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-2">Citizen Needs & Happiness</h2>
          <p className="text-blueprint-muted leading-relaxed mb-6">
            Each citizen tier has specific needs that must be met through buildings and services. Unsatisfied needs lower happiness, which can prevent tier upgrades and eventually cause citizens to leave.
          </p>

          <div className="bluepr-card">
            <p className="text-blueprint-muted leading-relaxed mb-4">
              Citizen needs are satisfied through the following mechanics:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="tip-box">
                <strong>Food Access:</strong> Market Stalls and Food Stalls distribute food from your farms and production buildings. Citizens need to be within range of these structures.
              </div>
              <div className="tip-box">
                <strong>Goods Access:</strong> Apparel (Hattery, Perfumer), Leisure (Pub, Social Club), Housewares (Candle Maker), and Public Services (Apothecary, Cathedral) all satisfy higher-tier needs.
              </div>
              <div className="tip-box">
                <strong>Housing Quality:</strong> Citizen happiness is tied to housing tier. Upgrading houses unlocks higher citizen tiers, which in turn generates more tax income and unlocks new production possibilities.
              </div>
              <div className="tip-box">
                <strong>Beauty & Tourism:</strong> Aesthetic appeal contributes to happiness and drives tourism income. Place decorations, parks, and attractions (Lighthouse, Art Atelier) strategically.
              </div>
            </div>

            <h3 className="font-display text-lg font-semibold text-blueprint-text mt-6 mb-4">Town Management for Citizens</h3>
            <p className="text-blueprint-muted leading-relaxed">
              Town to City provides population density and tax pressure feedback. Monitor these indicators to balance growth with citizen satisfaction. Avoid over-taxing lower-tier citizens — Worker happiness is critical for maintaining your labor pool. Use the Research Center to unlock improvements that benefit all citizen tiers.
            </p>
          </div>
        </section>

        {/* ===== Section 3: Pets, Livestock, Traits ===== */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-2">Individual Citizens & Special Features</h2>
          <div className="bluepr-card">
            <p className="text-blueprint-muted leading-relaxed mb-4">
              Town to City features individual citizens with names, traits, and personal requests. Get to know each person as they arrive in town. Citizens can form families, acquire pets and livestock, and develop unique traits over time.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="stat-card">
                <div className="text-xl font-display font-bold text-blueprint-accent mb-1">Families</div>
                <p className="text-xs text-blueprint-muted">Citizens form families in the homes you build. Family members share housing and contribute to your population.</p>
              </div>
              <div className="stat-card">
                <div className="text-xl font-display font-bold text-blueprint-green mb-1">Pets & Livestock</div>
                <p className="text-xs text-blueprint-muted">Citizens keep pets and livestock by their side. Adds charm and variety to your town streets.</p>
              </div>
              <div className="stat-card">
                <div className="text-xl font-display font-bold text-blueprint-warm mb-1">Traits</div>
                <p className="text-xs text-blueprint-muted">Citizens develop unique traits over time. Traits affect their behavior, preferences, and contributions to your town.</p>
              </div>
            </div>

            <div className="tip-box mt-4">
              <strong>Steam description:</strong> &quot;Get to know each person as they arrive in town, and watch them settle down to form new families in the homes you built for them with pets and livestock by their side.&quot; The game emphasizes individual citizen stories alongside city building.
            </div>
          </div>
        </section>

        {/* Bottom separator */}
        <div className="flex items-center gap-4 mt-16 mb-8">
          <div className="h-px flex-1 bg-blueprint-border"></div>
          <span className="text-xs text-blueprint-muted">End of Citizens Guide</span>
          <div className="h-px flex-1 bg-blueprint-border"></div>
        </div>
      </div>
    </div>
  );
}
