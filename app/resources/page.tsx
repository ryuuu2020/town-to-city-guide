import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Crops & Farming — Town to City Guide',
  description: 'Complete crop reference for Town to City: all 13 crop types, farm tier progression, crop-powered building inputs, and farming strategy.',
};

const crops = [
  { name: 'Wheat', tier: 1, uses: 'Bakery (15 per cycle) — converted to Bread alongside Corn' },
  { name: 'Corn', tier: 1, uses: 'Bakery (15 per cycle) — converted to Bread alongside Wheat' },
  { name: 'Grapes', tier: 1, uses: 'Winery (50 per cycle) — fermented into Wine' },
  { name: 'Cotton', tier: 2, uses: 'Hattery (20 per cycle) — textile production' },
  { name: 'Beeswax', tier: 2, uses: 'Hattery (20), Candle Maker (75), Cathedral (40), Restaurant (10)' },
  { name: 'Rose', tier: 2, uses: 'Hattery (20), Perfumer (30), Social Club (40)' },
  { name: 'Hops', tier: 3, uses: 'Pub (75), Apothecary (40) — highest volume crop demand' },
  { name: 'Potatoes', tier: 3, uses: 'Pub (25), Restaurant (10)' },
  { name: 'Tomatoes', tier: 3, uses: 'Pub (25), Restaurant (10)' },
  { name: 'Lettuce', tier: 3, uses: 'Pub (25)' },
  { name: 'Pumpkin', tier: 4, uses: 'Restaurant (10)' },
  { name: 'Lavender', tier: 4, uses: 'Perfumer (30), Cathedral (40)' },
  { name: 'Medicinal Herbs', tier: 4, uses: 'Apothecary (80)' },
];

const supplyChains = [
  {
    name: 'Bakery (Bread)',
    inputs: 'Corn (15) + Wheat (15) → Bread',
    tier: 'Farms Tier 1',
    type: 'Food',
    notes: 'The staple food processing chain. Both Corn and Wheat are needed in equal amounts. Plan farm ratios to match — 1:1 Corn to Wheat.',
  },
  {
    name: 'Winery (Wine)',
    inputs: 'Grapes (50) → Wine',
    tier: 'Farms Tier 1',
    type: 'Luxury',
    notes: 'High grape demand. One Winery requires significant vineyard space. Prioritize grape farming in dedicated agricultural towns.',
  },
  {
    name: 'Hattery',
    inputs: 'Beeswax (20) + Cotton (20) + Rose (20)',
    tier: 'Farms Tier 2',
    type: 'Apparel',
    notes: 'Requires three different crops at once. Ensure all three crop types are available before building the Hattery.',
  },
  {
    name: 'Pub (Drinks)',
    inputs: 'Hops (75) + Potato (25) + Tomato (25) + Lettuce (25)',
    tier: 'Farms Tier 3',
    type: 'Leisure',
    notes: 'Hops demand is 3x the other crops. Plant significantly more Hops fields relative to other Tier 3 crops.',
  },
  {
    name: 'Apothecary',
    inputs: 'Medicinal Herbs (80) + Hops (40)',
    tier: 'City rank',
    type: 'Public Service',
    notes: 'Highest single-crop demand in the game. Medicinal Herbs unlock at Farms Tier 4.',
  },
  {
    name: 'Perfumer',
    inputs: 'Lavender (30) + Rose (30)',
    tier: 'City rank',
    type: 'Apparel',
    notes: 'Equal demand for both inputs. Rose is shared with Hattery and Social Club — plan total Rose production carefully.',
  },
  {
    name: 'Social Club',
    inputs: 'Rose (40) + Grapes (50)',
    tier: 'City rank',
    type: 'Leisure',
    notes: 'Grapes are shared with Winery. Ensure surplus Grape production before building the Social Club.',
  },
  {
    name: 'Candle Maker',
    inputs: 'Beeswax (75)',
    tier: 'City rank',
    type: 'Housewares',
    notes: 'Single-input building. Beeswax demand is high — this building alone needs as much as the Cathedral and Hattery combined.',
  },
  {
    name: 'Cathedral',
    inputs: 'Lavender (40) + Beeswax (40)',
    tier: 'Large City',
    type: 'Public Service',
    notes: 'End-game public service building. Both inputs are shared with other buildings — scale production accordingly.',
  },
  {
    name: 'Restaurant',
    inputs: 'Tomato (10) + Potato (10) + Pumpkin (10) + Beeswax (10)',
    tier: 'Large City',
    type: 'Food',
    notes: 'Requires four inputs at equal, modest amounts. The most diverse input requirement of any building.',
  },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-blueprint-bg">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="text-sm text-blueprint-muted mb-8">
          <a href="/" className="hover:text-blueprint-accent">Home</a>
          <span className="mx-2">/</span>
          <span>Crops &amp; Farming</span>
        </div>

        <h1 className="font-display text-4xl font-bold text-blueprint-text mb-4">Crops &amp; Farming Guide</h1>
        <p className="text-lg text-blueprint-muted mb-8 max-w-3xl">
          Master farming in Town to City. Reference all 13 crop types, their building inputs, farm tier progression, and how to plan crop ratios for efficient supply chains.
        </p>

        <div className="flex flex-wrap gap-2 mb-10">
          <span className="bp-tag green">Crops</span>
          <span className="bp-tag orange">Supply Chains</span>
          <span className="bp-tag blue">Farm Tiers</span>
          <span className="bp-tag orange">Crop Planning</span>
        </div>

        {/* ===== Section 1: All Crops ===== */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-2">All 13 Crop Types</h2>
          <p className="text-blueprint-muted leading-relaxed mb-6">
            Crops are the foundation of Town to City&apos;s economy. Each crop is unlocked at a specific farm tier and powers different production buildings. Farm surface area doubles at Tier 3, so plan your farming regions with future expansion in mind.
          </p>

          <div className="bluepr-card overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-blueprint-border">
                  <th className="text-left py-3 px-2 font-semibold text-blueprint-text">Crop</th>
                  <th className="text-center py-3 px-2 font-semibold text-blueprint-text">Tier</th>
                  <th className="text-left py-3 px-2 font-semibold text-blueprint-text">Used By</th>
                </tr>
              </thead>
              <tbody>
                {crops.map((c) => (
                  <tr key={c.name} className="border-b border-blueprint-border/50 hover:bg-blueprint-alt/50">
                    <td className="py-3 px-2 font-medium text-blueprint-text">{c.name}</td>
                    <td className="py-3 px-2 text-center text-blueprint-text">{c.tier}</td>
                    <td className="py-3 px-2 text-blueprint-muted text-xs leading-relaxed">{c.uses}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ===== Section 2: Supply Chains ===== */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-2">Crop-Powered Supply Chains</h2>
          <p className="text-blueprint-muted leading-relaxed mb-6">
            Each production building consumes specific crops. Understanding these input requirements is critical to planning farm ratios and avoiding shortages. The data below is verified from in-game building requirements.
          </p>

          <div className="space-y-6">
            {supplyChains.map((chain) => (
              <div key={chain.name} className="bluepr-card">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-display text-lg font-semibold text-blueprint-text">{chain.name}</h3>
                  <span className={`bp-tag ${chain.type === 'Food' ? 'green' : chain.type === 'Luxury' ? 'orange' : chain.type === 'Apparel' ? 'orange' : chain.type === 'Leisure' ? 'green' : 'blue'}`}>
                    {chain.type}
                  </span>
                  <span className="text-xs text-blueprint-muted">{chain.tier}</span>
                </div>
                <p className="text-blueprint-muted leading-relaxed mb-1"><strong>Inputs:</strong> {chain.inputs}</p>
                <p className="text-blueprint-muted leading-relaxed text-sm">{chain.notes}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== Section 3: Farm Tiers ===== */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-2">Farm Tier Progression</h2>
          <p className="text-blueprint-muted leading-relaxed mb-6">
            Your Farms advance through four tiers as your settlement grows. Each tier unlocks new crops and the buildings that consume them. At Farms Tier 3, farm surface area doubles — a critical upgrade for meeting the increasing crop demands of City-rank buildings.
          </p>

          <div className="bluepr-card overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-blueprint-border">
                  <th className="text-left py-3 px-2 font-semibold text-blueprint-text">Tier</th>
                  <th className="text-left py-3 px-2 font-semibold text-blueprint-text">New Crops</th>
                  <th className="text-left py-3 px-2 font-semibold text-blueprint-text">New Buildings</th>
                  <th className="text-left py-3 px-2 font-semibold text-blueprint-text">Key Note</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-blueprint-border/50">
                  <td className="py-3 px-2 text-blueprint-text font-medium">Tier 1</td>
                  <td className="py-3 px-2 text-blueprint-text">Grapes, Corn, Wheat</td>
                  <td className="py-3 px-2 text-blueprint-text">Winery, Bakery</td>
                  <td className="py-3 px-2 text-blueprint-muted text-xs">Foundation tier — establish food basics</td>
                </tr>
                <tr className="border-b border-blueprint-border/50">
                  <td className="py-3 px-2 text-blueprint-text font-medium">Tier 2</td>
                  <td className="py-3 px-2 text-blueprint-text">Beeswax, Cotton, Rose</td>
                  <td className="py-3 px-2 text-blueprint-text">Hattery</td>
                  <td className="py-3 px-2 text-blueprint-muted text-xs">First apparel building — diversify crops</td>
                </tr>
                <tr className="border-b border-blueprint-border/50">
                  <td className="py-3 px-2 text-blueprint-text font-medium">Tier 3</td>
                  <td className="py-3 px-2 text-blueprint-text">Hops, Potatoes, Tomatoes, Lettuce</td>
                  <td className="py-3 px-2 text-blueprint-text">Pub</td>
                  <td className="py-3 px-2 text-blueprint-muted text-xs">Farm surface DOUBLES — major expansion point</td>
                </tr>
                <tr>
                  <td className="py-3 px-2 text-blueprint-text font-medium">Tier 4</td>
                  <td className="py-3 px-2 text-blueprint-text">Pumpkin, Lavender, Medicinal Herbs</td>
                  <td className="py-3 px-2 text-blueprint-text">— (City buildings use these)</td>
                  <td className="py-3 px-2 text-blueprint-muted text-xs">No new farm buildings — crops feed City structures</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ===== Section 4: Crop Planning ===== */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-2">Crop Planning for Multi-Town Setups</h2>
          <div className="bluepr-card">
            <p className="text-blueprint-muted leading-relaxed mb-4">
              Town to City supports multiple towns with specialized roles. The default map setup includes Belvau (main town), Fontebrac (agriculture), and Rocemarée (tourism). Dedicate Fontebrac to farming and use the Warehouse system to transport crops between towns.
            </p>

            <div className="space-y-4">
              <div className="tip-box">
                <strong>Dedicated farming towns:</strong> Develop a separate town (like Fontebrac) as your agricultural hub. Build granaries for crop storage and warehouses for transport. Research Center upgrades apply town-wide, so centralize research in your main town.
              </div>
              <div className="tip-box">
                <strong>Warehouse ranges matter:</strong> Production buildings only access crops stored in warehouses within transport range. Place warehouses strategically to bridge the gap between farming districts and processing buildings.
              </div>
              <div className="tip-box">
                <strong>Plan for upgrades:</strong> When planning crop ratios, remember that Farms Tier 3 doubles surface area. A farm that barely meets demand at Tier 2 will have surplus at Tier 3 — or you can use the extra space for new crop types.
              </div>
            </div>
          </div>
        </section>

        <div className="flex items-center gap-4 mt-16 mb-8">
          <div className="h-px flex-1 bg-blueprint-border"></div>
          <span className="text-xs text-blueprint-muted">End of Crops &amp; Farming Guide</span>
          <div className="h-px flex-1 bg-blueprint-border"></div>
        </div>
      </div>
    </div>
  );
}
