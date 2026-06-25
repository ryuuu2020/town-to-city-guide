import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Buildings Guide — Town to City Guide',
  description: 'Complete Town to City buildings reference covering crop-powered production, city buildings, tourism structures, and placement tips.',
};

const buildings = [
  { name: 'Town Hall', desc: 'The administrative heart of your settlement. Serves as the central hub for citizen registration and town management. Manage worker assignments and view town statistics from the Town Hall. Every new town begins with one.', category: 'Civic' },
  { name: 'Market Stall', desc: 'Basic commerce building where citizens purchase food, apparel, leisure items, and home decorations. Satisfies worker needs and generates early income. Place within walking distance of residential areas.', category: 'Economy' },
  { name: 'Worker House', desc: 'Basic housing for Workers. Workers form the foundation of your labor pool, staffing farms and basic production buildings. Upgrade to Artisan Houses once their needs (food access, market access) are met.', category: 'Housing' },
  { name: 'Artisan House', desc: 'Mid-tier housing for Artisans. Artisans operate advanced production buildings like bakeries and workshops. They demand better food variety and access to apparel and leisure goods.', category: 'Housing' },
  { name: 'Bourgeoisie House', desc: 'Elite housing for your wealthiest citizens. Bourgeoisie generate the most tax income and staff advanced buildings. They demand luxury goods, public services, and high beauty scores.', category: 'Housing' },
  { name: 'Farm', desc: 'Grows crops on fertile land. Farms plant Grapes, Corn, Wheat, Cotton, Rose, Hops, Potatoes, Tomatoes, Lettuce, Pumpkin, Lavender, and Medicinal Herbs depending on your Farm tier. Farm surface area doubles at Tier 3.', category: 'Food' },
  { name: 'Bakery', desc: 'Converts Corn (15) and Wheat (15) into Bread. A staple food processing building that satisfies higher-tier citizen food needs. Unlocked at Farms Tier 1.', category: 'Food' },
  { name: 'Winery', desc: 'Processes Grapes (50) into Wine. A luxury beverage that satisfies Bourgeoisie needs and serves as a valuable trade good. Unlocked at Farms Tier 1.', category: 'Food' },
  { name: 'Hattery', desc: 'An apparel building that consumes Beeswax (20), Cotton (20), and Rose (20) to produce hats. Unlocked at Farms Tier 2.', category: 'Apparel' },
  { name: 'Pub', desc: 'A leisure building serving drinks. Requires Hops (75), and Potatoes, Tomatoes, and Lettuce (25 each). Keeps citizens entertained and happy. Unlocked at Farms Tier 3.', category: 'Leisure' },
  { name: 'Apothecary', desc: 'A public service building using Medicinal Herbs (80) and Hops (40). Provides healthcare services at City rank.', category: 'Civic' },
  { name: 'Perfumer', desc: 'An apparel building that creates fragrances from Lavender (30) and Rose (30). Unlocked at City rank.', category: 'Apparel' },
  { name: 'Social Club', desc: 'A leisure building requiring Rose (40) and Grapes (50). Provides high-end entertainment at City rank.', category: 'Leisure' },
  { name: 'Candle Maker', desc: 'A housewares building consuming Beeswax (75). Produces candles for home decoration. Unlocked at City rank.', category: 'Decoration' },
  { name: 'Cathedral', desc: 'A public service building requiring Lavender (40) and Beeswax (40). Unlocked at Large City rank.', category: 'Civic' },
  { name: 'Restaurant', desc: 'A food building consuming Tomatoes, Potatoes, Pumpkin (10 each) and Beeswax (10). Serves fine dining at Large City rank.', category: 'Food' },
  { name: 'Warehouse', desc: 'General-purpose storage building. Warehouses have a transport range — production buildings and shops within range automatically access stored goods. Warehouse workers handle logistics.', category: 'Economy' },
  { name: 'Granary', desc: 'Dedicated crop storage. Place granaries near your farming regions to reduce transport time from fields to processing buildings.', category: 'Food' },
  { name: 'Research Center', desc: 'Unlocks new buildings, decorations, and technologies through a research tree. Assign Research Workers to progress through tiers.', category: 'Civic' },
  { name: 'Hotel', desc: 'Tourism building where visiting travelers stay. Contributes to tourism income. Works alongside scenic routes and tourist attractions like the Lighthouse and Art Atelier.', category: 'Economy' },
  { name: 'Art Atelier', desc: 'Produces artwork and generates tourism appeal. Completing Art Atelier objectives provides unique rewards.', category: 'Economy' },
  { name: 'Lighthouse', desc: 'Coastal landmark that boosts tourism appeal and provides navigation bonuses. A scenic attraction for tourist routes.', category: 'Decoration' },
  { name: 'Food Stall', desc: 'Small food vending structure that satisfies basic citizen food needs. Supplement to larger food buildings in dense residential areas.', category: 'Food' },
];

export default function BuildingsPage() {
  return (
    <div className="min-h-screen bg-blueprint-bg">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="text-sm text-blueprint-muted mb-8">
          <a href="/" className="hover:text-blueprint-accent">Home</a>
          <span className="mx-2">/</span>
          <span>Buildings</span>
        </div>

        <h1 className="font-display text-4xl font-bold text-blueprint-text mb-4">Buildings Guide</h1>
        <p className="text-lg text-blueprint-muted mb-8">
          Every building type in Town to City — from crop-powered production chains to city services and tourism structures. Building names and crop requirements verified against game data.
        </p>

        {/* Category overview */}
        <div className="flex flex-wrap gap-2 mb-10">
          <span className="bp-tag blue">Civic</span>
          <span className="bp-tag orange">Economy</span>
          <span className="bp-tag green">Food</span>
          <span className="bp-tag blue">Housing</span>
          <span className="bp-tag orange">Apparel</span>
          <span className="bp-tag green">Leisure</span>
          <span className="bp-tag blue">Decoration</span>
        </div>

        {/* Buildings data table */}
        <div className="bluepr-card overflow-x-auto">
          <h2 className="font-display text-xl font-semibold text-blueprint-text mb-4">Complete Building Reference</h2>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-blueprint-border">
                <th className="text-left py-3 px-2 font-semibold text-blueprint-text">Building</th>
                <th className="text-left py-3 px-2 font-semibold text-blueprint-text">Category</th>
                <th className="text-left py-3 px-2 font-semibold text-blueprint-text">Description</th>
              </tr>
            </thead>
            <tbody>
              {buildings.map((b) => (
                <tr key={b.name} className="border-b border-blueprint-border/50 hover:bg-blueprint-alt/50">
                  <td className="py-3 px-2 font-medium text-blueprint-text">{b.name}</td>
                  <td className="py-3 px-2">
                    <span className={`bp-tag ${b.category === 'Food' ? 'green' : b.category === 'Economy' ? 'orange' : b.category === 'Apparel' ? 'orange' : b.category === 'Leisure' ? 'green' : 'blue'}`}>
                      {b.category}
                    </span>
                  </td>
                  <td className="py-3 px-2 text-blueprint-muted text-xs leading-relaxed">{b.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Building details */}
        <div className="mt-12 space-y-8">
          {buildings.map((b) => (
            <div key={b.name} className="bluepr-card">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="font-display text-lg font-semibold text-blueprint-text">{b.name}</h3>
                <span className={`bp-tag ${b.category === 'Food' ? 'green' : b.category === 'Economy' ? 'orange' : b.category === 'Apparel' ? 'orange' : b.category === 'Leisure' ? 'green' : 'blue'}`}>
                  {b.category}
                </span>
              </div>
              <p className="text-blueprint-muted leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>

        {/* City rank progression */}
        <div className="mt-12">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-4">City Rank Progression</h2>
          <div className="bluepr-card">
            <p className="text-blueprint-muted leading-relaxed mb-4">
              Town to City unlocks buildings progressively as your settlement advances through city ranks. Each rank introduces new crop types, buildings, and citizen needs.
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="font-display text-base font-semibold text-blueprint-text mb-2">Small Town</h4>
                <p className="text-blueprint-muted leading-relaxed">
                  Farms Tier 1: Grapes, Corn, Wheat. Unlocks Bakery and Winery. Basic housing and town infrastructure. Focus on food production and meeting basic citizen needs.
                </p>
              </div>

              <div>
                <h4 className="font-display text-base font-semibold text-blueprint-text mb-2">Town</h4>
                <p className="text-blueprint-muted leading-relaxed">
                  Farms Tier 2: adds Beeswax, Cotton, Rose. Unlocks Hattery (apparel). Farms Tier 3: adds Hops, Potatoes, Tomatoes, Lettuce. Unlocks Pub (leisure). Expand into processed goods and entertainment.
                </p>
              </div>

              <div>
                <h4 className="font-display text-base font-semibold text-blueprint-text mb-2">City</h4>
                <p className="text-blueprint-muted leading-relaxed">
                  Farms Tier 4: adds Pumpkin, Lavender, Medicinal Herbs. New city buildings: Apothecary, Perfumer, Social Club, Candle Maker. Tourism buildings and advanced services become available.
                </p>
              </div>

              <div>
                <h4 className="font-display text-base font-semibold text-blueprint-text mb-2">Large City</h4>
                <p className="text-blueprint-muted leading-relaxed">
                  Unlocks Cathedral (public service) and Restaurant (food). End-game buildings that require diverse crop inputs. Focus on optimizing supply chains across multiple towns.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Placement tips */}
        <div className="mt-12">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-4">Placement Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="tip-box">
              <strong>Group farms efficiently.</strong> Place farms in dedicated agricultural areas (separate towns like Fontebrac) to maximize output. Farm points and warehouse transport range determine how many fields a farm can reach.
            </div>
            <div className="tip-box">
              <strong>Use warehouses for supply chains.</strong> Buildings within warehouse range automatically access stored goods. Place warehouses between producers and consumers to minimize transport times.
            </div>
            <div className="tip-box">
              <strong>Manage labor carefully.</strong> Each citizen tier has a labor priority system. Workers, Artisans, and Bourgeoisie are needed for different buildings — balance housing upgrades with available jobs.
            </div>
            <div className="tip-box">
              <strong>Tourism requires infrastructure.</strong> Tourism revenue scales with Hotels, scenic routes, and attractions (Lighthouse, Art Atelier, Monumental Ruins, Obelisk). Develop dedicated tourist towns (e.g., Rocemarée) for maximum returns.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
