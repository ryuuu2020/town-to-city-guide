import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Town to City Building Tier List — Best Buildings Ranked (2026)",
  description:
    "Complete Town to City building tier list ranking every structure from S to C tier. Find the best production buildings, logistics hubs, housing, and late-game structures with detailed explanations and unlock conditions.",
  keywords: [
    "Town to City tier list",
    "Town to City best buildings",
    "Town to City building rankings",
    "Town to City production chains",
    "Town to City city builder tips",
    "Town to City building guide",
  ],
  openGraph: {
    title: "Town to City Building Tier List — Best Buildings Ranked (2026)",
    description:
      "Rank every building in Town to City from S to C tier. Covers production buildings, logistics, housing, luxury structures, and tourism.",
  },
  robots: { index: true, follow: true },
};

/* Tier badge style helpers */
const tierColors: Record<string, { bg: string; glow: string }> = {
  S: { bg: "#eab308", glow: "rgba(234,179,8,0.4)" },
  A: { bg: "#38bdf8", glow: "rgba(56,189,248,0.4)" },
  B: { bg: "#22c55e", glow: "rgba(34,197,94,0.4)" },
  C: { bg: "#f97316", glow: "rgba(249,115,22,0.4)" },
};

const tierBadge = (tier: string) => {
  const colors = tierColors[tier] || tierColors.C;
  const style: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "2.25rem",
    height: "2.25rem",
    fontWeight: 700,
    borderRadius: "4px",
    fontSize: "0.85rem",
    fontFamily: "'Outfit', sans-serif",
    color: "#0b1120",
    backgroundColor: colors.bg,
    boxShadow: `0 0 8px ${colors.glow}`,
  };
  return <span style={style}>{tier}</span>;
};

/* Data table row */
interface BuildingEntry {
  tier: string;
  name: string;
  category: string;
  benefit: string;
  unlock: string;
}

const TierRow = ({ b }: { b: BuildingEntry }) => {
  const catColors: Record<string, string> = {
    Food: "green",
    Logistics: "orange",
    Civic: "blue",
    Housing: "blue",
    Apparel: "orange",
    Leisure: "green",
    Housewares: "orange",
    Economy: "orange",
    "Public Service": "blue",
  };
  const tagColor = catColors[b.category] || "blue";

  return (
    <tr className="border-b border-blueprint-border/50 hover:bg-blueprint-alt/40 transition-colors">
      <td className="py-3 px-2 text-center">{tierBadge(b.tier)}</td>
      <td className="py-3 px-3 font-semibold text-blueprint-text whitespace-nowrap">{b.name}</td>
      <td className="py-3 px-2">
        <span className={`bp-tag ${tagColor}`}>{b.category}</span>
      </td>
      <td className="py-3 px-3 text-blueprint-muted text-xs leading-relaxed">{b.benefit}</td>
      <td className="py-3 px-2 text-blueprint-muted text-xs whitespace-nowrap">{b.unlock}</td>
    </tr>
  );
};

/* All building data */
const allBuildings: BuildingEntry[] = [
  {
    tier: "S",
    name: "Warehouse",
    category: "Logistics",
    benefit: "Core storage and distribution hub. All imported goods, crops, and crafted products flow through warehouses. Every production chain depends on warehouse logistics. Place one in every district for optimal coverage.",
    unlock: "Dwelling (start)",
  },
  {
    tier: "S",
    name: "Research Center",
    category: "Civic",
    benefit: "Unlocks every building, decoration, and technology tier in the game. Without a Research Center, your town is stuck at Tier 1. Assign multiple workers to speed up research point generation.",
    unlock: "Dwelling (start)",
  },
  {
    tier: "S",
    name: "Town Hall",
    category: "Civic",
    benefit: "Administrative heart of your settlement. Manages citizen registration, worker assignments, and town statistics. Every new town begins with one — it's the control center for all management decisions.",
    unlock: "Dwelling (start)",
  },
  {
    tier: "S",
    name: "Farm",
    category: "Food",
    benefit: "Foundation of all crop-based production chains. Grows Grapes, Corn, Wheat, Cotton, Rose, Hops, Potatoes, Tomatoes, Lettuce, Pumpkin, Lavender, and Medicinal Herbs. Doubles surface area at Tier 3.",
    unlock: "Dwelling (start)",
  },
  {
    tier: "A",
    name: "Worker House",
    category: "Housing",
    benefit: "Basic housing providing the foundation of your labor pool. Workers staff farms and basic production buildings. Upgrade to Artisan Houses once food and market access needs are met.",
    unlock: "Dwelling (start)",
  },
  {
    tier: "A",
    name: "Market Stall",
    category: "Economy",
    benefit: "Commerce building where citizens purchase food, apparel, leisure items, and home decorations. Satisfies worker needs and generates early income. Place within walking distance of residential areas.",
    unlock: "Dwelling (start)",
  },
  {
    tier: "A",
    name: "Bakery",
    category: "Food",
    benefit: "Converts Corn (15) + Wheat (15) into bread — the most efficient early food processing chain. Satisfies higher-tier citizen food needs and provides consistent output from basic farm inputs.",
    unlock: "Farms Tier 1",
  },
  {
    tier: "A",
    name: "Granary",
    category: "Food",
    benefit: "Dedicated crop storage hub for farming regions. Workers collect harvested crops and deliver them to processing buildings. Dramatically reduces transport time from fields to bakeries and wineries.",
    unlock: "Small Town (Fontebrac)",
  },
  {
    tier: "A",
    name: "Artisan House",
    category: "Housing",
    benefit: "Mid-tier housing unlocking Artisans who operate advanced production buildings. Artisans generate higher tax income and can staff bakeries, workshops, and specialized production. Requires upgraded needs.",
    unlock: "Small Town (200 pop)",
  },
  {
    tier: "B",
    name: "Winery",
    category: "Food",
    benefit: "Processes Grapes (50) into Wine — a luxury beverage satisfying Bourgeoisie needs and serving as a valuable trade good. High investment in grape farming but excellent late-game returns.",
    unlock: "Farms Tier 1",
  },
  {
    tier: "B",
    name: "Pub",
    category: "Leisure",
    benefit: "Leisure building requiring Hops (75) + Potato + Tomato + Lettuce (25 each). Keeps citizens entertained and boosts happiness across all classes. Heavy crop investment but strong morale returns.",
    unlock: "Farms Tier 3",
  },
  {
    tier: "B",
    name: "Hattery",
    category: "Apparel",
    benefit: "Apparel building consuming Beeswax (20) + Cotton (20) + Rose (20) to produce hats. Satisfies mid-game apparel needs for Artisans and provides decent Luxury Value.",
    unlock: "Farms Tier 2",
  },
  {
    tier: "B",
    name: "City Hall",
    category: "Civic",
    benefit: "Unlocks the tax system, generating passive income from your citizen population. Initial safe tax rate of approximately 20%. Provides essential revenue once population scales beyond 200+ citizens.",
    unlock: "Village (120 pop)",
  },
  {
    tier: "B",
    name: "Restaurant",
    category: "Food",
    benefit: "Premium food building consuming Tomatoes, Potatoes, Pumpkin (10 each) + Beeswax (10). Provides the highest food satisfaction and +5 Luxury Value. Essential for maintaining Bourgeoisie happiness.",
    unlock: "Large City (25 Bourgeoisie)",
  },
  {
    tier: "C",
    name: "Perfumer",
    category: "Apparel",
    benefit: "Creates fragrances from Lavender (30) + Rose (30). High Luxury Value (+4) for late-game apparel satisfaction. Important once Bourgeoisie demand luxury goods.",
    unlock: "City (80 Artisans)",
  },
  {
    tier: "C",
    name: "Social Club",
    category: "Leisure",
    benefit: "High-end entertainment requiring Rose (40) + Grape (50). Provides elite leisure for Bourgeoisie citizens but has steep crop requirements for the value delivered.",
    unlock: "City (80 Artisans)",
  },
  {
    tier: "C",
    name: "Candle Maker",
    category: "Housewares",
    benefit: "Housewares building consuming 75 Beeswax. Produces candles for home decoration needs. Requires significant apiary infrastructure but fulfills an important niche for high-class housing.",
    unlock: "City (80 Artisans)",
  },
  {
    tier: "C",
    name: "Apothecary",
    category: "Public Service",
    benefit: "Public service building requiring Medicinal Herbs (80) + Hops (40). Provides healthcare services for citizens. Important for large populations but extremely crop-intensive.",
    unlock: "City (80 Artisans)",
  },
  {
    tier: "C",
    name: "Cathedral",
    category: "Public Service",
    benefit: "Prestige public service building using Lavender (40) + Beeswax (40). Highest Luxury Value (+5) for a public service structure. Arrives so late it mainly helps maintain rather than grow your city.",
    unlock: "Large City (25 Bourgeoisie)",
  },
  {
    tier: "C",
    name: "Bourgeoisie House",
    category: "Housing",
    benefit: "Elite housing for your wealthiest citizens. Generates the most tax income and staffs advanced buildings, but demands luxury goods, public services, and high beauty scores. Late-game optimization.",
    unlock: "City (80 Artisans)",
  },
  {
    tier: "C",
    name: "Hotel",
    category: "Economy",
    benefit: "Tourism building providing passive income from visiting travelers. Works alongside scenic routes and tourist attractions. Niche income source; prioritize production and housing first.",
    unlock: "City (80 Artisans)",
  },
];

export default function TierListPage() {
  return (
    <div className="min-h-screen bg-blueprint-bg">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <div className="text-sm text-blueprint-muted mb-8">
          <a href="/" className="hover:text-blueprint-accent transition-colors">Home</a>
          <span className="mx-2">/</span>
          <span className="text-blueprint-text">Tier List</span>
        </div>

        {/* H1 + Intro */}
        <section className="mb-10">
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-blueprint-text mb-4">
            Town to City Building Tier List
          </h1>
          <p className="text-lg text-blueprint-muted leading-relaxed max-w-3xl">
            Every building in Town to City costs time, resources, and citizen labor. Build the wrong structure at the wrong time and your settlement stalls — citizens go unhappy, production chains break, and your carefully planned city grinds to a halt. This tier list ranks every major building from S-tier (build immediately) to C-tier (late-game optimization), so you know exactly where to invest your resources at every stage of development. Rankings are based on community testing, crop-to-output efficiency, and overall impact on city growth across all town ranks from Dwelling to Large City.
          </p>
        </section>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main content (65%) */}
          <div className="flex-1 lg:max-w-[65%] space-y-10">

            {/* Meta Overview */}
            <section>
              <div className="bluepr-card">
                <h2 className="font-display text-xl font-semibold text-blueprint-text mb-4">
                  Meta Overview — Key Stats
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="stat-card">
                    <div className="text-2xl font-bold text-blueprint-accent">{allBuildings.length}</div>
                    <div className="text-xs text-blueprint-muted mt-1">Buildings Ranked</div>
                  </div>
                  <div className="stat-card">
                    <div className="text-2xl font-bold text-yellow-400">{allBuildings.filter(b => b.tier === "S").length}</div>
                    <div className="text-xs text-blueprint-muted mt-1">S-Tier</div>
                  </div>
                  <div className="stat-card">
                    <div className="text-2xl font-bold text-blueprint-accent">{allBuildings.filter(b => b.tier === "A").length}</div>
                    <div className="text-xs text-blueprint-muted mt-1">A-Tier</div>
                  </div>
                  <div className="stat-card">
                    <div className="text-2xl font-bold text-blueprint-muted">7</div>
                    <div className="text-xs text-blueprint-muted mt-1">City Ranks</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                  <div className="stat-card">
                    <div className="text-xl font-bold text-blueprint-green">{allBuildings.filter(b => b.tier === "B").length}</div>
                    <div className="text-xs text-blueprint-muted mt-1">B-Tier</div>
                  </div>
                  <div className="stat-card">
                    <div className="text-xl font-bold text-blueprint-warm">{allBuildings.filter(b => b.tier === "C").length}</div>
                    <div className="text-xs text-blueprint-muted mt-1">C-Tier</div>
                  </div>
                  <div className="stat-card">
                    <div className="text-xl font-bold text-blueprint-accent">4</div>
                    <div className="text-xs text-blueprint-muted mt-1">Farm Tiers</div>
                  </div>
                  <div className="stat-card">
                    <div className="text-xl font-bold text-blueprint-muted">3</div>
                    <div className="text-xs text-blueprint-muted mt-1">Social Classes</div>
                  </div>
                </div>
                <p className="font-body text-sm text-blueprint-muted leading-relaxed mt-4 pt-4 border-t border-blueprint-border/50">
                  Rankings reflect overall contribution to city growth, production chain efficiency, and how each building scales from early game through Large City. S-tier buildings form the backbone of every successful settlement; C-tier buildings are powerful but arrive too late to shape your city&apos;s trajectory. Crop-powered buildings are weighted by input-to-output ratio — a building requiring 75 Hops like the Pub faces tougher competition than the bakery&apos;s modest 15 Corn + 15 Wheat requirement.
                </p>
              </div>
            </section>

            {/* Section 1: Infrastructure & Logistics */}
            <section>
              <h2 className="font-display text-2xl font-semibold text-blueprint-text mb-4">
                1. Infrastructure &amp; Logistics Tier List
              </h2>
              <p className="text-blueprint-muted leading-relaxed mb-4">
                Your town lives and dies by logistics. The Warehouse is the circulatory system of your settlement — every imported good, harvested crop, and crafted product passes through warehouse workers before reaching shops, production buildings, or citizens. Without a well-placed warehouse network, your bakeries starve for Corn and Wheat, your markets sit empty, and your happiness tanks. Distributed warehouse placement (one per district or production zone) is the single most impactful infrastructure decision you can make.
              </p>
              <p className="text-blueprint-muted leading-relaxed mb-4">
                The Research Center earns its S-tier crown because it gates literally everything else — every building tier, every decoration, every city rank upgrade. Assign multiple research workers early to accelerate your progression through the technology tree. Granary sits at A-tier not because it&apos;s flashy, but because it solves the most common new-player problem: crops rotting in fields before warehouse workers can collect them. Place a Granary near your farming district and watch your food chain efficiency double.
              </p>
              <div className="bluepr-card overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-blueprint-border">
                      <th className="text-left py-3 px-2 font-semibold text-blueprint-text w-16">Tier</th>
                      <th className="text-left py-3 px-3 font-semibold text-blueprint-text">Building</th>
                      <th className="text-left py-3 px-2 font-semibold text-blueprint-text">Category</th>
                      <th className="text-left py-3 px-3 font-semibold text-blueprint-text">Key Benefit</th>
                      <th className="text-left py-3 px-2 font-semibold text-blueprint-text">Unlock</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allBuildings
                      .filter(b => ["Warehouse", "Research Center", "Town Hall", "Granary", "City Hall"].includes(b.name))
                      .map(b => <TierRow key={b.name} b={b} />)}
                  </tbody>
                </table>
              </div>
              <p className="font-body text-xs text-blueprint-muted italic mt-2 px-1">
                Infrastructure buildings ranked by how severely your city suffers without them. Warehouse and Research Center are genuinely mandatory; City Hall is valuable but can be deferred.
              </p>
            </section>

            {/* Section 2: Production & Food */}
            <section>
              <h2 className="font-display text-2xl font-semibold text-blueprint-text mb-4">
                2. Production &amp; Food Tier List
              </h2>
              <p className="text-blueprint-muted leading-relaxed mb-4">
                Food is the first need every citizen demands — and the one that kills your happiness fastest when unmet. The Farm is the foundational production building: it feeds into the Bakery (Corn + Wheat → Bread), the Winery (Grapes → Wine), the Pub (Hops + vegetables → drinks), and the Restaurant (mixed crops → fine dining). Without Farms, you have no crop-powered production at all, making this an unambiguous S-tier investment.
              </p>
              <p className="text-blueprint-muted leading-relaxed mb-4">
                The Bakery stands head and shoulders above other food buildings because of its modest input requirements (15 Corn + 15 Wheat) and consistent output — bread satisfies all classes through mid-game, and Corn and Wheat are your first two crops, so you can get the Bakery online within the first few seasons. The Winery is a strong B-tier: Wine satisfies Bourgeoisie needs and trades well, but 50 Grapes per cycle is a heavy farm commitment when you could be growing Corn and Wheat for bread. The Restaurant earns B-tier for its +5 Luxury Value, but arrives at Large City when your food chain should already be stable.
              </p>
              <div className="bluepr-card overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-blueprint-border">
                      <th className="text-left py-3 px-2 font-semibold text-blueprint-text w-16">Tier</th>
                      <th className="text-left py-3 px-3 font-semibold text-blueprint-text">Building</th>
                      <th className="text-left py-3 px-2 font-semibold text-blueprint-text">Category</th>
                      <th className="text-left py-3 px-3 font-semibold text-blueprint-text">Key Benefit</th>
                      <th className="text-left py-3 px-2 font-semibold text-blueprint-text">Unlock</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allBuildings
                      .filter(b => ["Farm", "Bakery", "Winery", "Restaurant"].includes(b.name))
                      .map(b => <TierRow key={b.name} b={b} />)}
                  </tbody>
                </table>
              </div>
              <p className="font-body text-xs text-blueprint-muted italic mt-2 px-1">
                Production buildings ranked by input efficiency, output value, and how early they become available in a typical playthrough.
              </p>
            </section>

            {/* Section 3: Luxury, Leisure & Late Game */}
            <section>
              <h2 className="font-display text-2xl font-semibold text-blueprint-text mb-4">
                3. Luxury, Leisure &amp; Late-Game Tier List
              </h2>
              <p className="text-blueprint-muted leading-relaxed mb-4">
                Once your basic food and shelter chains are running smoothly, luxury and leisure buildings become necessary to climb the city ranks. The Pub is your first major leisure investment at Farms Tier 3, requiring a substantial 75 Hops plus three additional vegetables. It earns B-tier because citizen happiness directly affects productivity — happier workers generate more gold and research points — but the crop requirements mean you need a well-established farm network first.
              </p>
              <p className="text-blueprint-muted leading-relaxed mb-4">
                The late-game C-tier buildings — the Perfumer, Social Club, Candle Maker, Apothecary, and Cathedral — all serve important functions for Bourgeoisie satisfaction, but they arrive at City rank or higher, by which point your city should already be stable. These buildings optimize an already-functioning city rather than enabling growth. The Cathedral&apos;s +5 Luxury Value is the highest of any public service, but requiring both Lavender (40) and Beeswax (40) from limited farm slots makes it a stretch goal, not a priority.
              </p>
              <div className="bluepr-card overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-blueprint-border">
                      <th className="text-left py-3 px-2 font-semibold text-blueprint-text w-16">Tier</th>
                      <th className="text-left py-3 px-3 font-semibold text-blueprint-text">Building</th>
                      <th className="text-left py-3 px-2 font-semibold text-blueprint-text">Category</th>
                      <th className="text-left py-3 px-3 font-semibold text-blueprint-text">Key Benefit</th>
                      <th className="text-left py-3 px-2 font-semibold text-blueprint-text">Unlock</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allBuildings
                      .filter(b => ["Pub", "Hattery", "Perfumer", "Social Club", "Candle Maker", "Apothecary", "Cathedral"].includes(b.name))
                      .map(b => <TierRow key={b.name} b={b} />)}
                  </tbody>
                </table>
              </div>
              <p className="font-body text-xs text-blueprint-muted italic mt-2 px-1">
                Leisure and luxury buildings ranked by happiness impact versus crop investment, weighted against how late they unlock.
              </p>
            </section>

            {/* Section 4: Housing & Economy */}
            <section>
              <h2 className="font-display text-2xl font-semibold text-blueprint-text mb-4">
                4. Housing &amp; Economy Tier List
              </h2>
              <p className="text-blueprint-muted leading-relaxed mb-4">
                Housing determines your workforce composition. Worker Houses are A-tier because they unlock your entire labor pool — every farm worker, warehouse hauler, and market vendor starts here. Artisan Houses ascend to A-tier because they gate access to advanced production buildings; without Artisans, you cannot staff bakeries, wineries, or pubs. The Market Stall ties the housing system together by providing the commerce outlet where citizens satisfy their needs and generate income.
              </p>
              <p className="text-blueprint-muted leading-relaxed mb-4">
                Bourgeoisie Houses and the Hotel sit in C-tier because they represent late-game optimization rather than growth drivers. Bourgeoisie generate the highest tax income per household, but they require a fully built-out luxury chain (Perfumer, Social Club, high-X value buildings) to stay happy. The Hotel provides a niche tourism income stream that supplements your economy but never replaces it. Build these once your production and logistics chains are fully mature.
              </p>
              <div className="bluepr-card overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-blueprint-border">
                      <th className="text-left py-3 px-2 font-semibold text-blueprint-text w-16">Tier</th>
                      <th className="text-left py-3 px-3 font-semibold text-blueprint-text">Building</th>
                      <th className="text-left py-3 px-2 font-semibold text-blueprint-text">Category</th>
                      <th className="text-left py-3 px-3 font-semibold text-blueprint-text">Key Benefit</th>
                      <th className="text-left py-3 px-2 font-semibold text-blueprint-text">Unlock</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allBuildings
                      .filter(b => ["Worker House", "Artisan House", "Market Stall", "Bourgeoisie House", "Hotel"].includes(b.name))
                      .map(b => <TierRow key={b.name} b={b} />)}
                  </tbody>
                </table>
              </div>
              <p className="font-body text-xs text-blueprint-muted italic mt-2 px-1">
                Housing and economy buildings ranked by workforce impact, tax/income generation, and stage of the game when they become available.
              </p>
            </section>

            {/* Full Master Table */}
            <section>
              <h2 className="font-display text-2xl font-semibold text-blueprint-text mb-4">
                5. Complete Building Tier List — All Rankings
              </h2>
              <p className="text-blueprint-muted leading-relaxed mb-4">
                The complete master table below includes all 21 buildings ranked in this tier list, organized by tier then alphabetically. Use this as your quick reference when planning your next build order.
              </p>
              <div className="bluepr-card overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-blueprint-border">
                      <th className="text-left py-3 px-2 font-semibold text-blueprint-text w-16">Tier</th>
                      <th className="text-left py-3 px-3 font-semibold text-blueprint-text">Building</th>
                      <th className="text-left py-3 px-2 font-semibold text-blueprint-text">Category</th>
                      <th className="text-left py-3 px-3 font-semibold text-blueprint-text">Key Benefit</th>
                      <th className="text-left py-3 px-2 font-semibold text-blueprint-text">Unlock</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allBuildings
                      .sort((a, b) => {
                        const tierOrder = { S: 0, A: 1, B: 2, C: 3 };
                        const tierDiff = tierOrder[a.tier as keyof typeof tierOrder] - tierOrder[b.tier as keyof typeof tierOrder];
                        if (tierDiff !== 0) return tierDiff;
                        return a.name.localeCompare(b.name);
                      })
                      .map(b => <TierRow key={b.name} b={b} />)}
                  </tbody>
                </table>
              </div>
            </section>

            {/* How We Rank */}
            <section>
              <div className="bluepr-card">
                <h2 className="font-display text-xl font-semibold text-blueprint-text mb-3">How We Rank</h2>
                <p className="text-blueprint-muted leading-relaxed text-sm">
                  Tiers reflect overall contribution to city growth, production chain efficiency, and how a building shapes your settlement across all city ranks. An S-tier building is one you feel the absence of immediately — without a Warehouse or Research Center, your town cannot function. A C-tier building is valuable but arrives so late (City rank or higher) that it optimizes an already-functioning settlement rather than enabling growth. Crop-powered buildings are weighted by input-to-output efficiency: a Bakery requiring only 15 Corn + 15 Wheat for daily bread production is more efficient than a Perfumer needing 30 Lavender + 30 Rose from limited farm tiles. Rankings are based on community testing, game data, and established meta strategies as of June 2026.
                </p>
              </div>
            </section>

            {/* Verification */}
            <section>
              <p className="font-body text-xs text-blueprint-muted italic">
                Building data verified against in-game requirements and community resources including Steam store page, game guide hubs, and farming tier progression charts. Rankings reflect current meta as of June 2026.
              </p>
            </section>

            {/* Back to Home */}
            <a
              href="/"
              className="inline-flex items-center gap-2 text-sm text-blueprint-muted hover:text-blueprint-accent transition-colors font-medium"
            >
              &larr; Back to Home
            </a>
          </div>

          {/* Sidebar (35%) */}
          <aside className="lg:w-[35%] space-y-6 shrink-0">
            {/* Tier Summary */}
            <div className="bluepr-card">
              <h3 className="font-display text-lg font-semibold text-blueprint-text mb-4">Tier Definitions</h3>
              <div className="space-y-3 font-body text-sm">
                <div className="flex items-start gap-3">
                  <span style={{ display: "inline-flex", width: "1.5rem", height: "1.5rem", alignItems: "center", justifyContent: "center", borderRadius: "4px", fontWeight: 700, fontSize: "0.7rem", color: "#0b1120", backgroundColor: "#eab308", flexShrink: 0 }}>S</span>
                  <div>
                    <span className="text-blueprint-text font-semibold">Essential</span>
                    <span className="text-blueprint-muted block text-xs">Build immediately. Your town cannot function without these. Form the backbone of every settlement at every rank.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span style={{ display: "inline-flex", width: "1.5rem", height: "1.5rem", alignItems: "center", justifyContent: "center", borderRadius: "4px", fontWeight: 700, fontSize: "0.7rem", color: "#0b1120", backgroundColor: "#38bdf8", flexShrink: 0 }}>A</span>
                  <div>
                    <span className="text-blueprint-text font-semibold">Excellent</span>
                    <span className="text-blueprint-muted block text-xs">High-impact buildings that accelerate growth and unlock core systems. Rarely a wrong pick; build early after S-tier.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span style={{ display: "inline-flex", width: "1.5rem", height: "1.5rem", alignItems: "center", justifyContent: "center", borderRadius: "4px", fontWeight: 700, fontSize: "0.7rem", color: "#0b1120", backgroundColor: "#22c55e", flexShrink: 0 }}>B</span>
                  <div>
                    <span className="text-blueprint-text font-semibold">Solid</span>
                    <span className="text-blueprint-muted block text-xs">Good buildings that fill specific roles. Build when you have spare resources; they improve an existing setup rather than enabling a new one.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span style={{ display: "inline-flex", width: "1.5rem", height: "1.5rem", alignItems: "center", justifyContent: "center", borderRadius: "4px", fontWeight: 700, fontSize: "0.7rem", color: "#0b1120", backgroundColor: "#f97316", flexShrink: 0 }}>C</span>
                  <div>
                    <span className="text-blueprint-text font-semibold">Late-Game</span>
                    <span className="text-blueprint-muted block text-xs">Powerful but arrives too late to shape your city&apos;s growth. Build for optimization once all core chains are stable.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Rankings */}
            <div className="bluepr-card">
              <h3 className="font-display text-lg font-semibold text-blueprint-text mb-4">Top 3 by Category</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-display text-sm font-semibold text-yellow-400">Infrastructure</h4>
                  <p className="font-body text-xs text-blueprint-muted mt-1">1. Warehouse &nbsp; 2. Research Center &nbsp; 3. Town Hall</p>
                </div>
                <div>
                  <h4 className="font-display text-sm font-semibold text-blueprint-accent">Production</h4>
                  <p className="font-body text-xs text-blueprint-muted mt-1">1. Farm &nbsp; 2. Bakery &nbsp; 3. Winery</p>
                </div>
                <div>
                  <h4 className="font-display text-sm font-semibold text-blueprint-green">Housing</h4>
                  <p className="font-body text-xs text-blueprint-muted mt-1">1. Worker House &nbsp; 2. Artisan House &nbsp; 3. Bourgeoisie House</p>
                </div>
                <div>
                  <h4 className="font-display text-sm font-semibold text-blueprint-warm">Leisure</h4>
                  <p className="font-body text-xs text-blueprint-muted mt-1">1. Pub &nbsp; 2. Social Club &nbsp; 3. Restaurant</p>
                </div>
              </div>
            </div>

            {/* Optimal Build Order */}
            <div className="bluepr-card">
              <h3 className="font-display text-lg font-semibold text-blueprint-text mb-4">Optimal Build Order</h3>
              <div className="space-y-2 font-body text-sm text-blueprint-muted">
                <div className="flex items-center gap-2">
                  <span className="step-num w-6 h-6 text-xs">1</span>
                  <span>Research Center → assign 2+ workers</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="step-num w-6 h-6 text-xs">2</span>
                  <span>Warehouse → near rail station</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="step-num w-6 h-6 text-xs">3</span>
                  <span>Worker Houses → 3–4 near jobs</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="step-num w-6 h-6 text-xs">4</span>
                  <span>Market Stall → near housing</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="step-num w-6 h-6 text-xs">5</span>
                  <span>Farm + Granary → food chain</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="step-num w-6 h-6 text-xs">6</span>
                  <span>Bakery → Corn + Wheat processing</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="step-num w-6 h-6 text-xs">7</span>
                  <span>Artisan Houses → unlock advanced labor</span>
                </div>
              </div>
            </div>

            {/* Related Guides */}
            <div className="bluepr-card">
              <h3 className="font-display text-lg font-semibold text-blueprint-text mb-4">Related Guides</h3>
              <div className="space-y-3">
                <a href="/buildings" className="block p-3 rounded-md bg-blueprint-alt/50 hover:bg-blueprint-alt transition-colors group">
                  <h4 className="font-display text-sm font-semibold text-blueprint-text group-hover:text-blueprint-accent transition-colors">Complete Buildings Reference</h4>
                  <p className="font-body text-xs text-blueprint-muted mt-1">Every building type with categories, inputs, and descriptions</p>
                </a>
                <a href="/production-chain" className="block p-3 rounded-md bg-blueprint-alt/50 hover:bg-blueprint-alt transition-colors group">
                  <h4 className="font-display text-sm font-semibold text-blueprint-text group-hover:text-blueprint-accent transition-colors">Production Chain Guide</h4>
                  <p className="font-body text-xs text-blueprint-muted mt-1">Crop-to-product flow from farms to finished goods</p>
                </a>
                <a href="/resources" className="block p-3 rounded-md bg-blueprint-alt/50 hover:bg-blueprint-alt transition-colors group">
                  <h4 className="font-display text-sm font-semibold text-blueprint-text group-hover:text-blueprint-accent transition-colors">Crops &amp; Farming Guide</h4>
                  <p className="font-body text-xs text-blueprint-muted mt-1">Farm tiers, crop types, and planting strategies</p>
                </a>
                <a href="/research" className="block p-3 rounded-md bg-blueprint-alt/50 hover:bg-blueprint-alt transition-colors group">
                  <h4 className="font-display text-sm font-semibold text-blueprint-text group-hover:text-blueprint-accent transition-colors">Research Tech Tree</h4>
                  <p className="font-body text-xs text-blueprint-muted mt-1">Optimal unlock order and research priorities</p>
                </a>
                <a href="/city-layout" className="block p-3 rounded-md bg-blueprint-alt/50 hover:bg-blueprint-alt transition-colors group">
                  <h4 className="font-display text-sm font-semibold text-blueprint-text group-hover:text-blueprint-accent transition-colors">City Layout Guide</h4>
                  <p className="font-body text-xs text-blueprint-muted mt-1">Zoning, road design, and district planning</p>
                </a>
              </div>
            </div>

            {/* Key Insight */}
            <div className="tip-box">
              <p className="font-body text-xs text-blueprint-text leading-relaxed">
                <strong className="text-blueprint-accent">Key Insight:</strong> The game fundamentally rewards infrastructure before production, and production before luxury. New players often rush to build the Pub or Winery before establishing a solid warehouse network — then wonder why their bakeries have no Corn. Invest in logistics first, food second, and luxury last. Your city will grow faster and more sustainably.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
