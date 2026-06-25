import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resources & Supply Chains — Town to City Guide',
  description: 'Complete guide to resources in Town to City: food, materials, trade goods, and supply chain optimization for your Mediterranean city.',
};

const foodResources = [
  { name: 'Wheat (Farm)', input: 'Fertile Land + Workers', output: 'Wheat Grain', chain: 'Farm → Windmill (Flour) → Bakery (Bread)', workers: 2, season: 'Spring/Autumn', tier: 'Worker' },
  { name: 'Fish', input: 'Coastline/River + Workers', output: 'Fresh Fish', chain: 'Fishing Dock → Market → Citizens', workers: 2, season: 'Year-round', tier: 'Worker' },
  { name: 'Olives', input: 'Hillside + Workers', output: 'Olives / Olive Oil', chain: 'Olive Grove → Olive Press → Storage', workers: 3, season: 'Autumn harvest', tier: 'Artisan' },
  { name: 'Grapes', input: 'Hillside + Workers', output: 'Grapes / Wine', chain: 'Vineyard → Winery → Cellar → Market', workers: 3, season: 'Summer/Autumn', tier: 'Artisan' },
];

const materialResources = [
  { name: 'Wood', building: 'Lumber Mill', input: 'Forested Area', workers: 2, uses: 'Construction, Tool Production, Furniture', outputRate: '2-3 logs per worker per day' },
  { name: 'Stone', building: 'Quarry', input: 'Rocky Terrain', workers: 3, uses: 'Advanced Buildings, Roads, Walls', outputRate: '1-2 blocks per worker per day' },
  { name: 'Bricks', building: 'Kiln', input: 'Clay Deposit + Fuel', workers: 2, uses: 'Bourgeoisie Housing, Universities, Monuments', outputRate: '3-4 bricks per worker per day' },
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-blueprint-bg">
      <div className="max-w-5xl mx-auto px-6 py-12">

        {/* Breadcrumb */}
        <div className="text-sm text-blueprint-muted mb-8">
          <a href="/" className="hover:text-blueprint-accent">Home</a>
          <span className="mx-2">/</span>
          <span>Resources</span>
        </div>

        {/* Page Header */}
        <h1 className="font-display text-4xl font-bold text-blueprint-text mb-4">Resources & Supply Chains</h1>
        <p className="text-lg text-blueprint-muted mb-8 max-w-3xl">
          Master the resource economy of Town to City — from wheat fields to wine cellars. Learn every production chain, optimize worker assignment, manage seasonal harvests, and turn surplus into profitable trade goods.
        </p>

        {/* Section tags */}
        <div className="flex flex-wrap gap-2 mb-10">
          <span className="bp-tag green">Food</span>
          <span className="bp-tag orange">Materials</span>
          <span className="bp-tag blue">Trade</span>
          <span className="bp-tag blue">Storage</span>
          <span className="bp-tag orange">Supply Chain</span>
          <span className="bp-tag green">Farming</span>
        </div>

        {/* ===== Section 1: Food Resources ===== */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-2">Food Resources</h2>
          <p className="text-blueprint-muted leading-relaxed mb-6">
            Food is the foundation of your town. Without a stable food supply, citizens become unhappy, productivity drops, and eventually your population will leave. Town to City offers four primary food production chains, each requiring different terrain, worker tiers, and processing buildings. Understanding these chains is critical for any successful settlement.
          </p>

          {/* Food resources table */}
          <div className="bluepr-card overflow-x-auto mb-6">
            <h3 className="font-display text-xl font-semibold text-blueprint-text mb-4">Food Production Chains</h3>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-blueprint-border">
                  <th className="text-left py-3 px-2 font-semibold text-blueprint-text">Resource</th>
                  <th className="text-left py-3 px-2 font-semibold text-blueprint-text">Input</th>
                  <th className="text-left py-3 px-2 font-semibold text-blueprint-text">Chain</th>
                  <th className="text-center py-3 px-2 font-semibold text-blueprint-text">Workers</th>
                  <th className="text-left py-3 px-2 font-semibold text-blueprint-text">Season</th>
                  <th className="text-left py-3 px-2 font-semibold text-blueprint-text">Tier</th>
                </tr>
              </thead>
              <tbody>
                {foodResources.map((r) => (
                  <tr key={r.name} className="border-b border-blueprint-border/50 hover:bg-blueprint-alt/50">
                    <td className="py-3 px-2 font-medium text-blueprint-text">{r.name}</td>
                    <td className="py-3 px-2 text-blueprint-muted">{r.input}</td>
                    <td className="py-3 px-2 text-blueprint-muted text-xs">{r.chain}</td>
                    <td className="py-3 px-2 text-center text-blueprint-text">{r.workers}</td>
                    <td className="py-3 px-2 text-blueprint-muted">{r.season}</td>
                    <td className="py-3 px-2">
                      <span className={`bp-tag ${r.tier === 'Worker' ? 'blue' : 'orange'}`}>{r.tier}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Wheat chain */}
          <div className="bluepr-card">
            <h3 className="font-display text-lg font-semibold text-blueprint-text mb-2">
              Wheat Chain: Farm → Windmill → Bakery → Bread
            </h3>
            <p className="text-blueprint-muted leading-relaxed mb-4">
              Wheat is the staple food of your town and the first production chain you will establish. Farms must be placed on flat, fertile land — look for the green fertility overlay when selecting a location. Each farm employs 2 workers and produces wheat grain at a steady rate during the spring and autumn growing seasons. The grain alone satisfies Worker-tier food needs, but Artisan and Bourgeoisie citizens demand processed foods.
            </p>
            <p className="text-blueprint-muted leading-relaxed mb-4">
              To upgrade your food supply, build a Windmill (80 Wood, 50 Stone, 2 workers) near your farm cluster. Windmills convert wheat grain into flour with a 25% efficiency bonus to nearby farms. Position windmills in open areas with good wind exposure — use the wind overlay to find optimal spots. Finally, the Bakery converts flour into bread, which satisfies higher-tier food demands and generates surplus for export. One Windmill can serve the output of 3-4 farms, while one Bakery can handle the flour output of 2 Windmills. A ratio of 3 Farms : 1 Windmill : 1 Bakery provides a balanced bread supply for approximately 90-100 citizens.
            </p>
          </div>

          {/* Fish */}
          <div className="bluepr-card">
            <h3 className="font-display text-lg font-semibold text-blueprint-text mb-2">
              Fish Chain: Fishing Dock → Market → Citizens
            </h3>
            <p className="text-blueprint-muted leading-relaxed">
              Fishing docks provide an early-game food source that requires minimal investment — just 40 Wood and a coastline or river placement. Each dock employs 2 workers and produces fresh fish year-round, making them a reliable food source independent of seasons. Fish can be consumed directly by all citizen tiers and provide a happiness bonus when paired with bread for variety. Later in the game, upgraded fishing docks produce dried fish, which serves as a trade good and brings in additional income. A single fishing dock supports roughly 25-30 citizens, so aim for 1 dock per 30 population as a baseline.
            </p>
          </div>

          {/* Olives */}
          <div className="bluepr-card">
            <h3 className="font-display text-lg font-semibold text-blueprint-text mb-2">
              Olive Chain: Olive Grove → Olive Press → Olive Oil
            </h3>
            <p className="text-blueprint-muted leading-relaxed">
              Olives are the first luxury food resource you unlock at the Artisan tier. Olive groves require hillside terrain with good sun exposure — common throughout the Mediterranean map regions. Each grove employs 3 workers and produces olives that can be consumed directly (Artisan food) or processed into olive oil (Bourgeoisie luxury need). The olive press building converts raw olives into olive oil at a 2:1 ratio (2 olives → 1 oil). Olive oil commands premium prices on the trade market and is one of the most profitable exports in the mid-game. Olive trees take two growing seasons to mature, so plan your groves well before your citizens upgrade to Bourgeoisie tier.
            </p>
          </div>

          {/* Grapes */}
          <div className="bluepr-card">
            <h3 className="font-display text-lg font-semibold text-blueprint-text mb-2">
              Grape Chain: Vineyard → Winery → Wine Cellar → Wine
            </h3>
            <p className="text-blueprint-muted leading-relaxed">
              Wine is the ultimate luxury food good in Town to City. Vineyards require hillside terrain similar to olive groves and employ 3 workers each. Grapes grow during summer and are harvested in early autumn. The production chain involves two processing steps: first, grapes go to a Winery where they are fermented into young wine; second, the young wine must age in a Wine Cellar to become full-quality wine. This two-step process makes wine the most complex food chain, but the reward is substantial — wine satisfies Bourgeoisie luxury needs, generates massive tourism appeal, and sells for the highest trade prices of any food product. One vineyard feeds one winery; one wine cellar can hold the output of 2-3 wineries. Quality wine (aged 2+ seasons) commands a 50% price premium over young wine.
            </p>
          </div>
        </section>

        {/* ===== Section 2: Building Materials ===== */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-2">Building Materials</h2>
          <p className="text-blueprint-muted leading-relaxed mb-6">
            Every building in Town to City requires construction materials. Understanding material production chains ensures you never run out of resources mid-expansion and can maintain a steady growth rate without bottlenecks.
          </p>

          <div className="bluepr-card overflow-x-auto mb-6">
            <h3 className="font-display text-xl font-semibold text-blueprint-text mb-4">Material Production Overview</h3>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-blueprint-border">
                  <th className="text-left py-3 px-2 font-semibold text-blueprint-text">Material</th>
                  <th className="text-left py-3 px-2 font-semibold text-blueprint-text">Building</th>
                  <th className="text-left py-3 px-2 font-semibold text-blueprint-text">Requires</th>
                  <th className="text-center py-3 px-2 font-semibold text-blueprint-text">Workers</th>
                  <th className="text-left py-3 px-2 font-semibold text-blueprint-text">Output Rate</th>
                  <th className="text-left py-3 px-2 font-semibold text-blueprint-text">Uses</th>
                </tr>
              </thead>
              <tbody>
                {materialResources.map((m) => (
                  <tr key={m.name} className="border-b border-blueprint-border/50 hover:bg-blueprint-alt/50">
                    <td className="py-3 px-2 font-medium text-blueprint-text">{m.name}</td>
                    <td className="py-3 px-2 text-blueprint-text">{m.building}</td>
                    <td className="py-3 px-2 text-blueprint-muted">{m.input}</td>
                    <td className="py-3 px-2 text-center text-blueprint-text">{m.workers}</td>
                    <td className="py-3 px-2 text-blueprint-muted">{m.outputRate}</td>
                    <td className="py-3 px-2 text-blueprint-muted">{m.uses}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Wood */}
          <div className="bluepr-card">
            <h3 className="font-display text-lg font-semibold text-blueprint-text mb-2">
              Wood — The Foundation Material
            </h3>
            <p className="text-blueprint-muted leading-relaxed">
              The Lumber Mill is your first material production building. It must be placed near forested areas on the map and employs 2 workers. Each lumber mill produces 2-3 logs per worker per day, which translates to roughly 4-6 logs daily per mill. Wood is used in virtually every early-game construction project — from Worker Houses (30 Wood each) to basic civic buildings. A common early-game mistake is building too few lumber mills; plan for one lumber mill per 4-5 construction workers to avoid delays. Wood can also be converted into planks at a Sawmill (Artisan tier), which unlocks more advanced construction options and trade goods like furniture.
            </p>
          </div>

          {/* Stone */}
          <div className="bluepr-card">
            <h3 className="font-display text-lg font-semibold text-blueprint-text mb-2">
              Stone — Upgrading Your Town
            </h3>
            <p className="text-blueprint-muted leading-relaxed">
              Quarries unlock at Worker tier but require rocky terrain — look for grey, stony patches on the map. They employ 3 workers each and produce 1-2 stone blocks per worker per day. Stone becomes essential as you transition from basic wood-only buildings to advanced structures: Artisan Houses, Churches, Schools, and Markets all require significant stone. Stone production is slower than wood, so build quarries early and stockpile stone before expanding. A good rule of thumb: maintain a 1:2 quarry-to-lumber-mill ratio until your stone stockpile reaches 200 blocks, then scale up as needed.
            </p>
          </div>

          {/* Bricks */}
          <div className="bluepr-card">
            <h3 className="font-display text-lg font-semibold text-blueprint-text mb-2">
              Bricks — The Elite Material
            </h3>
            <p className="text-blueprint-muted leading-relaxed">
              Kilns produce bricks, the most advanced building material reserved for Bourgeoisie-tier construction. Kilns require both a clay deposit (found near rivers and lakes) and a fuel source — either wood or charcoal. Each kiln employs 2 workers and produces 3-4 bricks per worker per day. Bricks are needed for Bourgeoisie Houses, Universities, Monuments, and Tourist Piers. Because brick production consumes wood as fuel, ensure you have surplus lumber production before scaling up brick output. A single kiln consumes approximately 2 wood per day as fuel; plan for one additional lumber mill per kiln to maintain fuel supply.
            </p>
          </div>
        </section>

        {/* ===== Section 3: Storage Buildings ===== */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-2">Storage Buildings & Placement</h2>
          <p className="text-blueprint-muted leading-relaxed mb-6">
            Storage buildings are the unsung heroes of supply chain efficiency. Without adequate storage, production buildings stall when output is full, resources spoil or sit idle, and workers waste time walking long distances to retrieve materials.
          </p>

          <div className="bluepr-card">
            <h3 className="font-display text-lg font-semibold text-blueprint-text mb-2">
              Warehouse Types and Their Roles
            </h3>
            <p className="text-blueprint-muted leading-relaxed mb-4">
              Town to City offers three storage building types, each with a specific purpose. The <strong>Granary</strong> stores food resources (wheat, flour, bread, fish, olives, olive oil, grapes, wine). Build granaries near your food production clusters — one granary between your farms and bakery cuts worker travel time by up to 40%. The <strong>Storehouse</strong> holds building materials (wood, stone, bricks, planks). Place storehouses between quarries/lumber mills and your construction zones to minimize builder downtime. The <strong>Warehouse</strong> is a general-purpose storage building unlocked at the Artisan tier that holds both food and materials, plus trade goods.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <div className="stat-card">
                <div className="text-3xl font-display font-bold text-blueprint-accent mb-1">Granary</div>
                <p className="text-xs text-blueprint-muted">Food Storage<br/>Capacity: 200 units<br/>Radius: 15 tiles</p>
              </div>
              <div className="stat-card">
                <div className="text-3xl font-display font-bold text-blueprint-warm mb-1">Storehouse</div>
                <p className="text-xs text-blueprint-muted">Material Storage<br/>Capacity: 300 units<br/>Radius: 12 tiles</p>
              </div>
              <div className="stat-card">
                <div className="text-3xl font-display font-bold text-blueprint-green mb-1">Warehouse</div>
                <p className="text-xs text-blueprint-muted">General Storage<br/>Capacity: 500 units<br/>Radius: 20 tiles</p>
              </div>
            </div>

            <div className="tip-box">
              <strong>Key storage rule:</strong> Place storage buildings halfway between producers and consumers. A warehouse placed directly between a quarry and a construction site reduces worker transport time by 30-50%. Stacking two granaries near a bakery cluster doubles throughput when food demand spikes during winter.
            </div>

            <p className="text-blueprint-muted leading-relaxed">
              Warehouses also affect the supply chain radius. Each storage building has a collection radius (the area from which it accepts deliveries) and a distribution radius (the area it serves). Buildings outside both radii will not automatically use the storage, forcing workers to walk the full distance. When planning industrial zones, overlap warehouse radii to create continuous coverage — gaps in coverage create bottlenecks where workers carry goods manually, reducing overall efficiency.
            </p>
          </div>
        </section>

        {/* ===== Section 4: Worker Assignment ===== */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-2">Worker Assignment for Production</h2>
          <p className="text-blueprint-muted leading-relaxed mb-6">
            Worker assignment in Town to City is not a set-and-forget task. Each building has a minimum and maximum worker capacity, and the number of workers assigned directly affects production speed, quality, and efficiency.
          </p>

          <div className="bluepr-card">
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-blueprint-border">
                    <th className="text-left py-3 px-2 font-semibold text-blueprint-text">Building</th>
                    <th className="text-center py-3 px-2 font-semibold text-blueprint-text">Min Workers</th>
                    <th className="text-center py-3 px-2 font-semibold text-blueprint-text">Max Workers</th>
                    <th className="text-center py-3 px-2 font-semibold text-blueprint-text">Optimal</th>
                    <th className="text-left py-3 px-2 font-semibold text-blueprint-text">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-blueprint-border/50"><td className="py-2 px-2">Farm</td><td className="py-2 px-2 text-center">1</td><td className="py-2 px-2 text-center">2</td><td className="py-2 px-2 text-center text-blueprint-green font-semibold">2</td><td className="py-2 px-2 text-blueprint-muted">Full staffing doubles harvest yield</td></tr>
                  <tr className="border-b border-blueprint-border/50"><td className="py-2 px-2">Fishing Dock</td><td className="py-2 px-2 text-center">1</td><td className="py-2 px-2 text-center">2</td><td className="py-2 px-2 text-center text-blueprint-green font-semibold">2</td><td className="py-2 px-2 text-blueprint-muted">Second worker enables drying process</td></tr>
                  <tr className="border-b border-blueprint-border/50"><td className="py-2 px-2">Windmill</td><td className="py-2 px-2 text-center">1</td><td className="py-2 px-2 text-center">2</td><td className="py-2 px-2 text-center text-blueprint-green font-semibold">2</td><td className="py-2 px-2 text-blueprint-muted">Worker 2 boosts flour output by 60%</td></tr>
                  <tr className="border-b border-blueprint-border/50"><td className="py-2 px-2">Bakery</td><td className="py-2 px-2 text-center">1</td><td className="py-2 px-2 text-center">3</td><td className="py-2 px-2 text-center text-blueprint-green font-semibold">2</td><td className="py-2 px-2 text-blueprint-muted">Third worker has diminishing returns</td></tr>
                  <tr className="border-b border-blueprint-border/50"><td className="py-2 px-2">Olive Grove</td><td className="py-2 px-2 text-center">2</td><td className="py-2 px-2 text-center">4</td><td className="py-2 px-2 text-center text-blueprint-green font-semibold">3</td><td className="py-2 px-2 text-blueprint-muted">Seasonal labor — full staff at harvest</td></tr>
                  <tr className="border-b border-blueprint-border/50"><td className="py-2 px-2">Vineyard</td><td className="py-2 px-2 text-center">2</td><td className="py-2 px-2 text-center">4</td><td className="py-2 px-2 text-center text-blueprint-green font-semibold">3</td><td className="py-2 px-2 text-blueprint-muted">Extra workers improve grape quality</td></tr>
                  <tr className="border-b border-blueprint-border/50"><td className="py-2 px-2">Lumber Mill</td><td className="py-2 px-2 text-center">1</td><td className="py-2 px-2 text-center">3</td><td className="py-2 px-2 text-center text-blueprint-green font-semibold">2</td><td className="py-2 px-2 text-blueprint-muted">Worker 3 adds negligible output gain</td></tr>
                  <tr className="border-b border-blueprint-border/50"><td className="py-2 px-2">Quarry</td><td className="py-2 px-2 text-center">2</td><td className="py-2 px-2 text-center">4</td><td className="py-2 px-2 text-center text-blueprint-green font-semibold">3</td><td className="py-2 px-2 text-blueprint-muted">Full staff only for surge construction</td></tr>
                  <tr><td className="py-2 px-2">Kiln</td><td className="py-2 px-2 text-center">1</td><td className="py-2 px-2 text-center">2</td><td className="py-2 px-2 text-center text-blueprint-green font-semibold">2</td><td className="py-2 px-2 text-blueprint-muted">Always fully staff for brick production</td></tr>
                </tbody>
              </table>
            </div>

            <div className="tip-box">
              <strong>Optimal staffing strategy:</strong> Use the "optimal" column above as your baseline. During harvest seasons (autumn), temporarily shift workers from construction to farms and groves to capture maximum yield. In winter, when farming stops, shift those workers into construction and material production. The worker panel (click any building, then the Workers tab) lets you adjust assignments in real time.
            </div>
          </div>
        </section>

        {/* ===== Section 5: Seasonal Effects ===== */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-2">Seasonal Effects on Farming</h2>
          <p className="text-blueprint-muted leading-relaxed mb-6">
            Town to City features a full seasonal cycle with Mediterranean climate patterns that directly affect resource production. Ignoring seasons leads to food shortages, wasted labor, and unhappy citizens.
          </p>

          <div className="bluepr-card">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <h4 className="font-display text-base font-semibold text-blueprint-text mb-2">
                  <span className="bp-tag green mr-2">Spring</span> Planting & Growth
                </h4>
                <p className="text-sm text-blueprint-muted leading-relaxed">
                  Spring is planting season for wheat. Farm output begins slowly in early spring and ramps up toward summer. Olive trees and grapevines enter their growing phase. This is the best time to build new farms and expand agricultural zones. Rain is frequent, which speeds growth but can delay construction projects.
                </p>
              </div>
              <div>
                <h4 className="font-display text-base font-semibold text-blueprint-text mb-2">
                  <span className="bp-tag orange mr-2">Summer</span> Peak Production
                </h4>
                <p className="text-sm text-blueprint-muted leading-relaxed">
                  Summer brings peak wheat growth and the grape ripening phase. Fishing is at its best — fish yields increase by 25% during summer months. However, drought risk increases; if you have no water infrastructure, farms may experience reduced yields. This is the busiest season for farms and vineyards.
                </p>
              </div>
              <div>
                <h4 className="font-display text-base font-semibold text-blueprint-text mb-2">
                  <span className="bp-tag orange mr-2">Autumn</span> Harvest Season
                </h4>
                <p className="text-sm text-blueprint-muted leading-relaxed">
                  Autumn is the critical harvest season. Wheat, olives, and grapes are all harvested in autumn. Yields are at their maximum, but labor demand is too — this is when you need every farm and grove worker assigned. Stockpile surplus food for winter when farm production drops to zero. Miss the harvest window and you lose the season's output entirely.
                </p>
              </div>
              <div>
                <h4 className="font-display text-base font-semibold text-blueprint-text mb-2">
                  <span className="bp-tag blue mr-2">Winter</span> Dormancy
                </h4>
                <p className="text-sm text-blueprint-muted leading-relaxed">
                  Winter halts all farming. Wheat fields and groves are dormant. This is when your food stockpile matters most — if you did not harvest and store enough in autumn, food shortages will hit. Reassign farm workers to construction, material production, or trade during winter months. Fishing docks continue to operate but at 70% efficiency.
                </p>
              </div>
            </div>

            <div className="tip-box mb-4">
              <strong>Winter preparation checklist:</strong> Before the first frost, ensure granaries have at least 150% of your population's food needs in storage. That means if you have 100 citizens consuming 100 food per season, store at minimum 150 food. Upgrade at least one granary before autumn ends to increase capacity.
            </div>

            <p className="text-blueprint-muted leading-relaxed">
              The Mediterranean climate also brings occasional extreme weather events — droughts in summer reduce crop yields by 30-50%, while heavy spring rains can delay planting. Build water infrastructure (wells, aqueducts) to mitigate drought effects, and maintain a food buffer of at least two seasons' worth of consumption to weather these events.
            </p>
          </div>
        </section>

        {/* ===== Section 6: Resource UI ===== */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-2">Reading the Resource UI</h2>
          <p className="text-blueprint-muted leading-relaxed mb-6">
            The production and consumption panel is your command center for resource management. Located in the top-right corner of the screen (toggle with R key), it displays every resource flowing through your town in real time.
          </p>

          <div className="bluepr-card">
            <h3 className="font-display text-lg font-semibold text-blueprint-text mb-2">Production vs. Consumption Panel</h3>
            <p className="text-blueprint-muted leading-relaxed mb-4">
              Each resource shows three numbers: <strong>Production</strong> (green, left), <strong>Consumption</strong> (red, right), and <strong>Net Change</strong> (center). A positive net change means your stockpile is growing; negative means it is shrinking. The panel also displays a trend arrow — up means production is increasing, down means consumption is rising faster than production. Click any resource to see which buildings are producing and consuming it.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="stat-card">
                <div className="font-mono text-xl font-bold text-blueprint-green mb-1">+12.4/hr</div>
                <p className="text-xs text-blueprint-muted mb-1">Wheat Production</p>
                <div className="w-full bg-blueprint-alt h-2 rounded-full overflow-hidden">
                  <div className="bg-blueprint-green h-full" style={{ width: '68%' }}></div>
                </div>
                <p className="text-xs text-blueprint-muted mt-1">Stockpile: 340 units (6h remaining)</p>
              </div>
              <div className="stat-card">
                <div className="font-mono text-xl font-bold text-blueprint-warm mb-1">-3.2/hr</div>
                <p className="text-xs text-blueprint-muted mb-1">Bread Consumption</p>
                <div className="w-full bg-blueprint-alt h-2 rounded-full overflow-hidden">
                  <div className="bg-blueprint-warm h-full" style={{ width: '45%' }}></div>
                </div>
                <p className="text-xs text-blueprint-muted mt-1">Warning: stockpile under 50% optimal</p>
              </div>
            </div>

            <div className="tip-box">
              <strong>Red icon alert:</strong> When a resource shows a red warning icon, it means consumption exceeds production and your stockpile will run out within 2 season cycles. This is a critical alert — address it immediately by either increasing production or reducing consumption (e.g., lowering worker food rations or stopping new housing construction).
            </div>

            <p className="text-blueprint-muted leading-relaxed">
              The resource panel also has a "Supply Chain" overlay mode. Enable it by pressing F2, which color-codes all buildings based on their role in supply chains: green for producers, blue for processors, orange for consumers, and grey for idle buildings. This visual overlay makes it easy to spot bottlenecks — if you see a cluster of orange buildings far from green producers, your supply chain radius needs attention.
            </p>
          </div>
        </section>

        {/* ===== Section 7: Trade Goods ===== */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-2">Trade Goods: Turning Surplus into Profit</h2>
          <p className="text-blueprint-muted leading-relaxed mb-6">
            Surplus resources are not wasted — they are your path to economic prosperity. Once your town is self-sufficient, excess production can be directed to trade routes for passive income.
          </p>

          <div className="bluepr-card">
            <h3 className="font-display text-lg font-semibold text-blueprint-text mb-2">What Sells Best</h3>
            <p className="text-blueprint-muted leading-relaxed mb-4">
              Not all goods are equally profitable. Trade values are influenced by rarity, processing level, and market demand from neighboring towns and traveling merchants. Here is the hierarchy of trade profitability, from most to least valuable:
            </p>

            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-between p-3 bg-blueprint-accent-light rounded-card">
                <div className="flex items-center gap-3">
                  <span className="font-display font-bold text-blueprint-accent text-xl">1</span>
                  <span className="font-medium text-blueprint-text">Aged Wine</span>
                </div>
                <span className="bp-tag green">Premium</span>
                <span className="text-sm text-blueprint-muted">120 gold/unit · 2-step chain</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-blueprint-alt rounded-card">
                <div className="flex items-center gap-3">
                  <span className="font-display font-bold text-blueprint-muted text-xl">2</span>
                  <span className="font-medium text-blueprint-text">Olive Oil</span>
                </div>
                <span className="bp-tag green">High</span>
                <span className="text-sm text-blueprint-muted">85 gold/unit · 1-step chain</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-blueprint-alt rounded-card">
                <div className="flex items-center gap-3">
                  <span className="font-display font-bold text-blueprint-muted text-xl">3</span>
                  <span className="font-medium text-blueprint-text">Bread</span>
                </div>
                <span className="bp-tag blue">Medium</span>
                <span className="text-sm text-blueprint-muted">45 gold/unit · 2-step chain</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-blueprint-alt rounded-card">
                <div className="flex items-center gap-3">
                  <span className="font-display font-bold text-blueprint-muted text-xl">4</span>
                  <span className="font-medium text-blueprint-text">Dried Fish</span>
                </div>
                <span className="bp-tag blue">Medium</span>
                <span className="text-sm text-blueprint-muted">35 gold/unit · upgraded dock</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-blueprint-alt rounded-card">
                <div className="flex items-center gap-3">
                  <span className="font-display font-bold text-blueprint-muted text-xl">5</span>
                  <span className="font-medium text-blueprint-text">Raw Materials (Wood/Stone)</span>
                </div>
                <span className="bp-tag blue">Low</span>
                <span className="text-sm text-blueprint-muted">10-20 gold/unit</span>
              </div>
            </div>

            <div className="tip-box">
              <strong>Trade route strategy:</strong> Establish trade routes to at least two neighboring towns as soon as your food stockpile is stable. Diversify exports — do not rely on a single trade good. Wine and olive oil generate the most income but require the most infrastructure. A balanced mid-game export portfolio: 40% wine, 30% olive oil, 20% bread, 10% raw materials ensures stable income even if one production chain is disrupted.
            </div>

            <p className="text-blueprint-muted leading-relaxed">
              Trade route management is accessed through the Marketplace building or the Trade overlay (F3). Each trade route requires a minimum export volume to remain profitable — routes with less than 20 units per season will not cover their maintenance costs. Upgrade routes by increasing export volume and adding luxury goods to the mix. High-level trade routes attract traveling merchants who offer unique items, rare seeds for new crop varieties, and construction blueprints for special buildings.
            </p>
          </div>
        </section>

        {/* ===== Bottom separator ===== */}
        <div className="flex items-center gap-4 mt-16 mb-8">
          <div className="h-px flex-1 bg-blueprint-border"></div>
          <span className="text-xs text-blueprint-muted">End of Resources Guide</span>
          <div className="h-px flex-1 bg-blueprint-border"></div>
        </div>

      </div>
    </main>
  );
}
