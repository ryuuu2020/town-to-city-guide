import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Buildings Guide — Town to City Guide',
  description: 'Complete Town to City buildings reference with costs, worker slots, citizen tiers, and placement tips for every structure from Town Hall to Tourist Pier.',
};

const buildings = [
  { name: 'Town Hall', cost: '200 Wood, 150 Stone', workers: 4, tier: 'All', desc: 'The heart of your settlement. The Town Hall unlocks basic services and serves as the administrative center. Every town needs one — without it, citizens cannot register or pay taxes. Upgrade it to unlock higher-tier buildings.', category: 'Civic' },
  { name: 'Marketplace', cost: '100 Wood, 80 Stone', workers: 3, tier: 'Worker+', desc: 'Central hub for trade and commerce. Citizens buy food, goods, and luxury items here. A well-placed marketplace boosts surrounding property values and attracts traveling merchants. Must be within walking distance of homes.', category: 'Economy' },
  { name: 'Worker House', cost: '30 Wood', workers: 2, tier: 'Worker', desc: 'Basic housing for your starting population. Workers are the backbone of your economy — they staff farms, docks, and basic production buildings. Upgrade to Artisan Houses once needs are met.', category: 'Housing' },
  { name: 'Artisan House', cost: '60 Wood, 40 Stone', workers: 3, tier: 'Artisan', desc: 'Mid-tier housing unlocked via research. Artisans run advanced production like bakeries, windmills, and workshops. They demand better food variety and access to entertainment.', category: 'Housing' },
  { name: 'Bourgeoisie House', cost: '100 Wood, 80 Stone, 20 Bricks', workers: 4, tier: 'Bourgeoisie', desc: 'Elite housing for the wealthiest citizens. Bourgeoisie generate the most tax income and staff universities, churches, and tourist buildings. They require luxury goods, education access, and high beauty scores.', category: 'Housing' },
  { name: 'Farm', cost: '20 Wood', workers: 2, tier: 'Worker', desc: 'Produces wheat — the staple food of your town. Farms must be placed on flat, fertile land. Each farm supports approximately 30 citizens. Chain with bakeries to create bread for Artisans and above.', category: 'Food' },
  { name: 'Bakery', cost: '50 Wood, 30 Stone', workers: 2, tier: 'Artisan', desc: 'Converts wheat into bread, a more valuable food item. Bread satisfies Artisan and Bourgeoisie food needs. Place near farms and worker housing for efficient supply chains.', category: 'Food' },
  { name: 'Windmill', cost: '80 Wood, 50 Stone', workers: 2, tier: 'Artisan', desc: 'Processes grain into flour more efficiently than manual labor. Windmills must be placed in open areas with good wind exposure — check the wind overlay before placing. Increases nearby farm output by 25%.', category: 'Food' },
  { name: 'Fishing Dock', cost: '40 Wood', workers: 2, tier: 'Worker', desc: 'Must be placed on coastline or rivers. Produces fish, an early-game food source that supplements wheat. Fishing docks also generate small amounts of trade goods (dried fish) when upgraded.', category: 'Food' },
  { name: 'Vineyard', cost: '60 Wood, 40 Stone', workers: 3, tier: 'Artisan', desc: 'Produces grapes on hillside terrain. Vineyards require sloped land — flat terrain won\'t work. Grapes are processed into wine, a luxury good demanded by Bourgeoisie and tourists. Excellent export commodity.', category: 'Food' },
  { name: 'Olive Grove', cost: '60 Wood, 40 Stone', workers: 3, tier: 'Artisan', desc: 'Produces olives on Mediterranean hillsides. Like vineyards, olive groves need elevation. Olives can be eaten directly or pressed into olive oil, a luxury good for high-tier citizens.', category: 'Food' },
  { name: 'School', cost: '80 Wood, 60 Stone', workers: 1, tier: 'Worker+', desc: 'Educates young citizens and unlocks Artisan-tier upgrades for families. Schools have a coverage radius — houses within range get an education bonus. Place centrally in residential districts.', category: 'Civic' },
  { name: 'University', cost: '150 Wood, 120 Stone, 30 Bricks', workers: 2, tier: 'Artisan+', desc: 'Advanced education building that unlocks research speed bonuses and Bourgeoisie-tier upgrades. Universities also generate prestige, which attracts wealthy immigrants and boosts tourism appeal.', category: 'Civic' },
  { name: 'Church', cost: '100 Wood, 80 Stone', workers: 1, tier: 'Artisan+', desc: 'Religious building that provides happiness and spiritual needs. Churches have a large beauty radius and generate donations (passive income). Citizens visit on festival days for bonus happiness.', category: 'Civic' },
  { name: 'Park', cost: '10 Wood, 5 Stone', workers: 0, tier: 'Worker', desc: 'Small green space that boosts beauty in a small radius. Parks are the cheapest way to raise happiness scores. Place them between housing blocks and along main roads. Stack multiple parks for cumulative effect.', category: 'Decoration' },
  { name: 'Plaza', cost: '30 Wood, 20 Stone', workers: 0, tier: 'Artisan', desc: 'Large public square with a beauty radius double that of parks. Plazas serve as gathering points for festivals and events. Adjacent buildings get a commerce bonus, making them ideal for marketplace surroundings.', category: 'Decoration' },
  { name: 'Tourist Pier', cost: '200 Wood, 150 Stone, 50 Bricks', workers: 4, tier: 'Bourgeoisie', desc: 'End-game tourism building. Must be placed on coastline. Each tourist pier generates significant passive income from visiting tourists. Tourism revenue scales with your town\'s beauty score and the number of attractions.', category: 'Economy' },
];

export default function BuildingsPage() {
  return (
    <main className="min-h-screen bg-blueprint-bg">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="text-sm text-blueprint-muted mb-8">
          <a href="/" className="hover:text-blueprint-accent">Home</a>
          <span className="mx-2">/</span>
          <span>Buildings</span>
        </div>

        <h1 className="font-display text-4xl font-bold text-blueprint-text mb-4">Buildings Guide</h1>
        <p className="text-lg text-blueprint-muted mb-8">
          Every building in Town to City explained — costs, worker requirements, citizen tiers, and placement strategies for optimal town growth.
        </p>

        {/* Category overview */}
        <div className="flex flex-wrap gap-2 mb-10">
          <span className="bp-tag blue">Civic</span>
          <span className="bp-tag orange">Economy</span>
          <span className="bp-tag green">Food</span>
          <span className="bp-tag blue">Housing</span>
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
                <th className="text-left py-3 px-2 font-semibold text-blueprint-text">Cost</th>
                <th className="text-center py-3 px-2 font-semibold text-blueprint-text">Workers</th>
                <th className="text-left py-3 px-2 font-semibold text-blueprint-text">Citizen Tier</th>
              </tr>
            </thead>
            <tbody>
              {buildings.map((b) => (
                <tr key={b.name} className="border-b border-blueprint-border/50 hover:bg-blueprint-alt/50">
                  <td className="py-3 px-2 font-medium text-blueprint-text">{b.name}</td>
                  <td className="py-3 px-2">
                    <span className={`bp-tag ${b.category === 'Food' ? 'green' : b.category === 'Economy' ? 'orange' : 'blue'}`}>
                      {b.category}
                    </span>
                  </td>
                  <td className="py-3 px-2 text-blueprint-muted">{b.cost}</td>
                  <td className="py-3 px-2 text-center text-blueprint-text">{b.workers}</td>
                  <td className="py-3 px-2 text-blueprint-text">{b.tier}</td>
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
                <span className={`bp-tag ${b.category === 'Food' ? 'green' : b.category === 'Economy' ? 'orange' : 'blue'}`}>
                  {b.category}
                </span>
              </div>
              <p className="text-blueprint-muted leading-relaxed">{b.desc}</p>
              <div className="flex gap-4 mt-4 text-sm">
                <span className="text-blueprint-muted"><strong className="text-blueprint-text">Cost:</strong> {b.cost}</span>
                <span className="text-blueprint-muted"><strong className="text-blueprint-text">Workers:</strong> {b.workers}</span>
                <span className="text-blueprint-muted"><strong className="text-blueprint-text">Tier:</strong> {b.tier}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Building progression */}
        <div className="mt-12">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-4">Building Progression Path</h2>
          <div className="bluepr-card">
            <p className="text-blueprint-muted leading-relaxed mb-4">
              Town to City follows a clear building progression path. You start with basic Worker-tier structures and gradually unlock more advanced buildings through research and citizen upgrades. Understanding this progression is key to efficient town planning.
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="font-display text-base font-semibold text-blueprint-text mb-2">Phase 1: Foundation (Worker Tier)</h4>
                <p className="text-blueprint-muted leading-relaxed">
                  Start with Town Hall, Worker Houses, Farms, and Fishing Docks. These buildings form the core of your early economy. Focus on food production first — hungry citizens leave. Build 4-6 farms and 2 fishing docks for a stable food supply. Add a Marketplace early to enable trade and goods distribution.
                </p>
              </div>

              <div>
                <h4 className="font-display text-base font-semibold text-blueprint-text mb-2">Phase 2: Growth (Artisan Tier)</h4>
                <p className="text-blueprint-muted leading-relaxed">
                  Research unlocks Bakeries, Windmills, Vineyards, and Olive Groves. Upgrade Worker Houses to Artisan Houses as citizens gain education and wealth. Add Schools to enable further upgrades. This phase introduces luxury goods — wine and olive oil — which drive trade income. Build a Church for happiness and donations.
                </p>
              </div>

              <div>
                <h4 className="font-display text-base font-semibold text-blueprint-text mb-2">Phase 3: Prosperity (Bourgeoisie Tier)</h4>
                <p className="text-blueprint-muted leading-relaxed">
                  Universities unlock advanced research and tourism. Bourgeoisie Houses generate the highest taxes. Tourist Piers bring passive income that scales with beauty. Build multiple towns connected by trade routes. This is the late game where aesthetics and efficiency merge into a thriving Mediterranean city.
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
              <strong>Centralize civic buildings.</strong> Place Town Hall, Schools, and Churches in a central district. Their coverage radii overlap, creating a "golden zone" where all citizen needs are satisfied simultaneously.
            </div>
            <div className="tip-box">
              <strong>Separate industry from housing.</strong> Farms, bakeries, and windmills generate noise that lowers nearby happiness. Buffer them with parks and keep at least 2 building-widths from residential zones.
            </div>
            <div className="tip-box">
              <strong>Coastline is prime real estate.</strong> Fishing Docks and Tourist Piers require water access. Plan your waterfront carefully — you cannot move buildings once placed without demolishing and rebuilding.
            </div>
            <div className="tip-box">
              <strong>Stack beauty bonuses.</strong> Parks, Plazas, and Churches each provide beauty in overlapping radii. Stack these effects in residential districts to maximize happiness and accelerate citizen upgrades.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
