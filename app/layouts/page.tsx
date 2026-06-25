import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best City Layouts & Grid-Less Planning — Town to City Guide',
  description: 'Master grid-less city layouts in Town to City. Learn road hierarchy, district planning, beauty optimization, terraforming, and waterfront design strategies for your Mediterranean town.',
};

const layoutTips = [
  { title: 'Organic Sprawl', desc: 'Let roads follow natural contours. Curved streets with houses clustered around plazas create the most authentic Mediterranean look and maximize beauty scores.', tag: 'Design' },
  { title: 'District Zoning', desc: 'Group buildings by function: farming district near water, artisan workshops near the town center, and bourgeoisie villas on elevated terrain with views.', tag: 'Planning' },
  { title: 'Plaza-Centric', desc: 'Place a central plaza first, then build outward in concentric rings. This ensures every house is within range of beauty bonuses and services.', tag: 'Optimal' },
  { title: 'Waterfront Gold', desc: 'Fishing docks, tourist piers, and waterfront parks generate the highest beauty and income per tile. Always prioritize developing your coastline.', tag: 'Economy' },
];

const roadTypes = [
  { type: 'Dirt Path', cost: 'Free', speed: 'Slow', beauty: '+0' },
  { type: 'Cobblestone', cost: '50 coin/tile', speed: 'Medium', beauty: '+2' },
  { type: 'Brick Road', cost: '120 coin/tile', speed: 'Fast', beauty: '+5' },
  { type: 'Tree-Lined Avenue', cost: '200 coin/tile', speed: 'Fast', beauty: '+10' },
];

export default function LayoutsPage() {
  return (
    <main className="min-h-screen bg-blueprint-bg">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-sm text-blueprint-muted mb-8">
          <a href="/" className="hover:text-blueprint-accent">Home</a>
          <span className="mx-2">/</span>
          <span>Layouts</span>
        </div>

        <h1 className="font-display text-4xl font-bold text-blueprint-text mb-4">
          Grid-Less City Layouts &amp; Planning
        </h1>
        <p className="text-lg text-blueprint-muted mb-10">
          Town to City breaks free from the grid. Every building, road, and decoration can be placed with pixel-perfect precision. Here&apos;s how to turn that freedom into a beautiful, efficient city.
        </p>

        {/* Philosophy */}
        <section className="bluepr-card">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-4">The Grid-Less Philosophy</h2>
          <p className="text-blueprint-text leading-relaxed mb-4">
            Unlike Cities: Skylines or Anno, Town to City has no snap-to-grid mechanic. You can place buildings at any angle, rotate them freely, and position roads with organic curves. This isn&apos;t just cosmetic — it fundamentally changes how you approach city planning. A tight grid maximizes density but crushes beauty scores. Organic layouts sacrifice some efficiency for massive happiness and tourism bonuses.
          </p>
          <p className="text-blueprint-text leading-relaxed mb-4">
            The key insight: <strong>beauty is an economic resource</strong> in Town to City. Higher beauty scores attract higher-tier citizens (Artisans and Bourgeoisie), who pay more taxes and unlock advanced buildings. Beauty also directly increases tourism income and speeds up family formation. An ugly but efficient town will stall at Worker tier forever.
          </p>
          <div className="tip-box">
            <strong>Pro tip:</strong> Use the first-person view mode (press F) to walk your streets. Buildings that look good from the ground level are the ones that generate beauty — not just what looks good on the top-down map.
          </div>
        </section>

        {/* Road Hierarchy */}
        <section className="bluepr-card">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-4">Road Hierarchy</h2>
          <p className="text-blueprint-text leading-relaxed mb-4">
            Roads in Town to City serve three purposes: movement speed, beauty, and district definition. Citizens walk faster on better roads, and road types contribute different beauty values. Your road network should follow a clear hierarchy from main avenues to small alleys.
          </p>
          <div className="overflow-x-auto my-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blueprint-alt text-left">
                  <th className="p-3 font-semibold">Road Type</th>
                  <th className="p-3 font-semibold">Cost/tile</th>
                  <th className="p-3 font-semibold">Speed</th>
                  <th className="p-3 font-semibold">Beauty</th>
                </tr>
              </thead>
              <tbody>
                {roadTypes.map((r, i) => (
                  <tr key={i} className="border-t border-blueprint-border">
                    <td className="p-3 font-medium">{r.type}</td>
                    <td className="p-3">{r.cost}</td>
                    <td className="p-3">{r.speed}</td>
                    <td className="p-3">{r.beauty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-blueprint-text leading-relaxed">
            Start with dirt paths for your first village. Upgrade to cobblestone on the main road connecting your town center to the farms. Reserve tree-lined avenues for your bourgeoisie district and the waterfront promenade. Never upgrade all roads at once — it&apos;s a massive coin sink with diminishing returns.
          </p>
        </section>

        {/* Layout Strategies */}
        <section className="bluepr-card">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-4">Layout Strategies</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {layoutTips.map((tip, i) => (
              <div key={i} className="border border-blueprint-border rounded-card p-5">
                <span className={`bp-tag ${i === 0 ? 'blue' : i === 1 ? 'orange' : i === 2 ? 'green' : 'blue'} mb-2`}>{tip.tag}</span>
                <h3 className="font-display font-semibold text-blueprint-text mt-2 mb-2">{tip.title}</h3>
                <p className="text-sm text-blueprint-muted leading-relaxed">{tip.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Terraforming */}
        <section className="bluepr-card">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-4">Terraforming &amp; Elevation</h2>
          <p className="text-blueprint-text leading-relaxed mb-4">
            Town to City&apos;s terraforming tools let you reshape the land, raise hills, dig canals, and create artificial islands. The terrain tools unlock after building your first Town Hall and are essential for late-game optimization.
          </p>
          <p className="text-blueprint-text leading-relaxed mb-4">
            Elevated terrain has two powerful effects: it increases the beauty rating of any building placed on it, and it creates natural sightlines that boost the happiness of all citizens who can see it. Build churches, universities, and bourgeoisie villas on the highest points of your map.
          </p>
          <p className="text-blueprint-text leading-relaxed mb-4">
            Water terraforming is even more impactful. Dig canals between your towns to create water trade routes (faster than land routes) and line them with tree-lined avenues for massive beauty bonuses. Artificial lakes surrounded by parks are one of the highest beauty-per-tile investments in the game.
          </p>
          <div className="tip-box">
            <strong>Warning:</strong> Terraforming costs scale with the size of the terrain change. Small adjustments are cheap; rebuilding a mountain is ruinously expensive. Plan your major terraforming before placing expensive buildings.
          </div>
        </section>

        {/* Multi-Town Planning */}
        <section className="bluepr-card">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-4">Multi-Town Planning</h2>
          <p className="text-blueprint-text leading-relaxed mb-4">
            As your first town grows, you&apos;ll unlock the ability to found additional towns on the same map. Each town can specialize: designate one town for agriculture (farms, vineyards, olive groves), one for industry (workshops, markets, trade), and one for tourism (piers, plazas, restaurants).
          </p>
          <p className="text-blueprint-text leading-relaxed mb-4">
            Connected towns share resources through trade routes, and citizens can commute between towns for work. A well-planned network of 3-4 towns with complementary specializations can generate 3x the income of a single sprawling city. The key is maintaining at least one tree-lined avenue connecting your main towns — it becomes the &quot;main street&quot; of your entire region.
          </p>
          <p className="text-blueprint-text leading-relaxed">
            When founding a new town, start by placing a Plaza and a few Worker houses near the connecting road. Let the town grow organically from that seed rather than pre-planning the entire layout. The game&apos;s simulation engine rewards incremental, organic growth over master-planned grids.
          </p>
        </section>
      </div>
    </main>
  );
}
