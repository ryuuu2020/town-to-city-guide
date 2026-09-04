import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://towntocityguide.wiki/production-chain-guide",
  },
  title: "Town to City Production Chain Guide — Complete Resource Flow (2026)",
  description:
    "Master every production chain in Town to City. Complete resource flow guide covering food, construction, trade goods, and luxury chains with input/output data, worker requirements, bottleneck fixes, and efficiency optimization strategies.",
  keywords: [
    "Town to City production chain guide",
    "Town to City resource flow",
    "Town to City supply chain",
    "Town to City production buildings",
    "Town to City farming chains",
    "Town to City logistics guide",
    "Town to City resource management",
  ],
  openGraph: {
    title: "Town to City Production Chain Guide — Complete Resource Flow (2026)",
    description:
      "Master every production chain in Town to City. Complete resource flow guide covering food, construction, trade goods, and luxury chains with input/output data, worker requirements, and bottleneck fixes.",
  },
  robots: { index: true, follow: true },
};

/* Data type for production chain entries */
interface ChainEntry {
  name: string;
  category: string;
  inputs: string;
  processing: string;
  output: string;
  workers: string;
  tips: string;
}

const catColors: Record<string, string> = {
  Food: "green",
  Construction: "orange",
  "Trade Goods": "orange",
  Apparel: "orange",
  Luxury: "orange",
  Logistics: "blue",
};

const allChains: ChainEntry[] = [
  {
    name: "Bread Chain",
    category: "Food",
    inputs: "Corn (15) + Wheat (15)",
    processing: "Farm → Granary → Warehouse → Bakery",
    output: "Bread (satisfies Worker & Artisan food needs)",
    workers: "Farmers + Granary workers + Warehouse workers + Bakers",
    tips: "Prioritize Corn and Wheat as your first two crops. Place the Granary adjacent to farm fields for minimal transport time.",
  },
  {
    name: "Wine Chain",
    category: "Food",
    inputs: "Grapes (50)",
    processing: "Farm → Granary → Warehouse → Winery",
    output: "Wine (luxury beverage, trade good)",
    workers: "Farmers + Granary workers + Warehouse workers + Winery workers",
    tips: "High grape volume requirement. Dedicate 2-3 farm plots to grapes before building the Winery. Excellent late-game trade value.",
  },
  {
    name: "Pub Supplies Chain",
    category: "Food",
    inputs: "Hops (75) + Potato + Tomato + Lettuce (25 each)",
    processing: "Multiple Farms → Granary → Warehouse → Pub",
    output: "Entertainment & drinks (citizen happiness boost)",
    workers: "Farmers (4 crop types) + Granary workers + Warehouse workers + Pub workers",
    tips: "Most crop-intensive chain in the game. Only build the Pub after establishing a robust multi-crop farm network at Farms Tier 3.",
  },
  {
    name: "Restaurant Fine Dining",
    category: "Food",
    inputs: "Tomatoes (10) + Potatoes (10) + Pumpkin (10) + Beeswax (10)",
    processing: "Multiple Farms → Granary → Warehouse → Restaurant",
    output: "Fine dining (highest food satisfaction, +5 Luxury Value)",
    workers: "Farmers (4 crop types) + Granary workers + Warehouse workers + Restaurant staff",
    tips: "Late-game chain unlocking at Large City. Provides the highest food satisfaction in the game and essential for Bourgeoisie happiness.",
  },
  {
    name: "Hattery Apparel Chain",
    category: "Apparel",
    inputs: "Beeswax (20) + Cotton (20) + Rose (20)",
    processing: "Farms → Granary → Warehouse → Hattery",
    output: "Hats (mid-game apparel, Luxury Value)",
    workers: "Farmers (3 crop types) + Granary workers + Warehouse workers + Hattery workers",
    tips: "Unlocks at Farms Tier 2. Satisfies Artisan apparel needs and provides decent Luxury Value for mid-game progression.",
  },
  {
    name: "Perfumer Fragrance Chain",
    category: "Luxury",
    inputs: "Lavender (30) + Rose (30)",
    processing: "Farms → Granary → Warehouse → Perfumer",
    output: "Fragrances (+4 Luxury Value, Bourgeoisie apparel need)",
    workers: "Farmers (2 crop types) + Granary workers + Warehouse workers + Perfumer workers",
    tips: "Unlocks at City rank. High Luxury Value output but competes with other late-game crops for limited farm tiles. Build only after core food chains are stable.",
  },
  {
    name: "Candle Making Chain",
    category: "Luxury",
    inputs: "Beeswax (75)",
    processing: "Farm → Granary → Warehouse → Candle Maker",
    output: "Candles (housewares, home decoration need)",
    workers: "Farmers + Granary workers + Warehouse workers + Candle Maker workers",
    tips: "Requires significant apiary infrastructure. The 75 Beeswax input is one of the highest single-resource demands. Invest in multiple bee farms early.",
  },
  {
    name: "Apothecary Medicine Chain",
    category: "Luxury",
    inputs: "Medicinal Herbs (80) + Hops (40)",
    processing: "Farms → Granary → Warehouse → Apothecary",
    output: "Medicine (public service, healthcare)",
    workers: "Farmers (2 crop types) + Granary workers + Warehouse workers + Apothecary workers",
    tips: "Unlocks at City rank. Extremely crop-intensive with 120 total inputs. Essential for large populations but requires a fully mature farm network.",
  },
  {
    name: "Cathedral Supply Chain",
    category: "Luxury",
    inputs: "Lavender (40) + Beeswax (40)",
    processing: "Farms → Granary → Warehouse → Cathedral",
    output: "Religious services (+5 Luxury Value, highest public service)",
    workers: "Farmers (2 crop types) + Granary workers + Warehouse workers + Cathedral staff",
    tips: "Highest Luxury Value (+5) of any public service. Unlocks at Large City. Build as a prestige project after all core chains are optimized.",
  },
  {
    name: "Import Trade Chain",
    category: "Logistics",
    inputs: "Imported goods via Train Station",
    processing: "Train Station → Warehouse → Market Stall / Shop",
    output: "Basic goods (early-game citizen needs)",
    workers: "Warehouse workers + Market Stall vendors",
    tips: "Foundation of the early-game economy. Place your first Warehouse within 8-10 tiles of the train station and upgrade roads to stone for faster deliveries.",
  },
  {
    name: "Research Progression Chain",
    category: "Logistics",
    inputs: "Worker assignment to Research Center",
    processing: "Research Center generates Research Points (RP) over time",
    output: "Unlocks buildings, crop tiers, decorations, and technology",
    workers: "Research workers (assign 2+ workers immediately)",
    tips: "Gates literally every unlock in the game. The faster you generate RP, the sooner you unlock Farms Tier 2-3, advanced buildings, and city rank upgrades.",
  },
  {
    name: "Tax Revenue Chain",
    category: "Logistics",
    inputs: "Citizen population + City Hall building",
    processing: "City Hall collects taxes from all citizens",
    output: "Gold (passive income, funds all construction)",
    workers: "City Hall workers (1+)",
    tips: "Unlocks at Village rank (120 population). Keep tax rate around 20% initially to avoid happiness penalties. Higher populations generate significantly more gold.",
  },
];

/* Top 5 most important production chains with detailed breakdown */
const topFiveChains = [
  {
    rank: 1,
    name: "Bread Chain — The Food Foundation",
    icon: "🍞",
    detail:
      "The Bread Chain is the single most important production chain in Town to City because it satisfies the primary food need for Workers and Artisans — your two most populous citizen classes. With modest inputs of 15 Corn and 15 Wheat per cycle, the Bakery produces consistent, high-efficiency food output. This chain should be your first crop-powered production line after unlocking Fontebrac. Place two Farms growing Corn and Wheat, connect them to a Granary, and route the crops through a Warehouse to your Bakery. The efficiency ratio is unmatched: no other food building converts such low farm input into such high citizen satisfaction.",
  },
  {
    rank: 2,
    name: "Import Trade Chain — The Economic Backbone",
    icon: "🚂",
    detail:
      "Before you unlock Fontebrac and crop-based production, your entire city runs on imported goods arriving via the Train Station. The Import Trade Chain — Train Station → Warehouse → Market Stall — is the circulatory system of your early-game economy. Without a well-placed warehouse network receiving train shipments and distributing goods to market stalls, your citizens have no food, no apparel, and no leisure. Even after unlocking crop production, the import chain remains essential for supplementing goods that your farms cannot yet produce. Build a dedicated Small Warehouse near the train station and assign at least 2 workers immediately after founding your town.",
  },
  {
    rank: 3,
    name: "Wine Chain — High-Value Trade Goods",
    icon: "🍷",
    detail:
      "Wine is the premier trade commodity in Town to City. While requiring 50 Grapes per production cycle, Wine satisfies Bourgeoisie luxury needs and commands premium prices in trade. The Wine Chain becomes viable once you have at least 3-4 farm plots dedicated to grape cultivation and a Granary placed near your vineyard district. The return on investment is substantial: Wine generates more gold per worker-hour than bread and contributes significantly to your Luxury Value score. Pair the Winery with a warehouse that has an upgraded road connection to maximize throughput.",
  },
  {
    rank: 4,
    name: "Research Progression Chain — The Technology Engine",
    icon: "🔬",
    detail:
      "The Research Center doesn't produce physical goods, but its output — Research Points — is arguably the most valuable resource in the game. Every building tier, every farm upgrade, every decoration, and every city rank upgrade is gated behind Research Points. Assign 2-3 workers to the Research Center from day one. Each additional worker linearly increases RP generation, so staffing your Research Center is never wasted labor. The faster you accumulate RP, the sooner you unlock Farms Tier 2 (Cotton, Rose, Beeswax) and Farms Tier 3 (Hops, Potatoes, Tomatoes, Lettuce), which open up your entire production chain network.",
  },
  {
    rank: 5,
    name: "Hattery Apparel Chain — The Mid-Game Bridge",
    icon: "👒",
    detail:
      "The Hattery is your first apparel production chain and the bridge between basic food chains and advanced luxury goods. Requiring Beeswax (20), Cotton (20), and Rose (20), the Hattery satisfies Artisan apparel needs — the trigger that upgrades Worker Houses to Artisan Houses. Without Artisans, you cannot staff bakeries, wineries, or any advanced production building. This makes the Hattery a mandatory mid-game investment. Plant Cotton and Rose at Farms Tier 2 and establish bee farms for Beeswax. The chain unlocks at Farms Tier 2, giving you a natural progression path from food (Tier 1) to apparel (Tier 2) to luxury (Tier 3+).",
  },
];

/* Common bottlenecks and solutions */
const bottlenecks = [
  {
    problem: "Crops rotting in fields before collection",
    cause: "No Granary near farm district; warehouse workers overwhelmed",
    fix: "Build a Granary within 3-4 tiles of your farm cluster. Granary workers are dedicated crop collectors — they prioritize harvesting over all other tasks, dramatically reducing crop waste.",
  },
  {
    problem: "Market stalls sit empty while warehouses overflow",
    cause: "Warehouse workers are stretched too thin covering too many destinations",
    fix: "Distribute warehouses across your city. Each warehouse should serve a 'logistics cell' of 6-10 buildings. Upgrade to stone roads to increase worker movement speed by approximately 40%.",
  },
  {
    problem: "Bakery produces nothing despite having Corn and Wheat",
    cause: "Crops are stuck in the Granary, not being transferred to the Warehouse",
    fix: "Ensure your Granary and Warehouse are connected via the logistics path system. Select the Granary and verify green connection lines to the Warehouse. If missing, reposition buildings closer together.",
  },
  {
    problem: "Not enough workers to staff all buildings",
    cause: "Building too many production buildings without enough Worker/Artisan Houses",
    fix: "Each Worker House generates 2-3 workers; each Artisan House generates 2-3 artisans. Build 1-2 extra empty houses before constructing new production buildings. New families arrive when happiness exceeds 60%.",
  },
  {
    problem: "Research stalls in the late game",
    cause: "Only 1-2 workers assigned to Research Center despite growing needs",
    fix: "Assign at least 3-4 research workers as your population grows. Upgrade the Research Center capacity via the tech tree. Research Points do not decay — invest workers early and often.",
  },
  {
    problem: "Bourgeoisie constantly unhappy despite luxury goods",
    cause: "Missing a specific luxury type (apparel, leisure, or public service)",
    fix: "Bourgeoisie require ALL luxury categories to maintain happiness. Check the citizen panel for specific unmet needs. Late-game buildings like the Cathedral, Restaurant, and Social Club fill different needs — you need all of them.",
  },
];

export default function ProductionChainGuidePage() {
  return (
    <div className="min-h-screen bg-blueprint-bg">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <div className="text-sm text-blueprint-muted mb-8">
          <a href="/" className="hover:text-blueprint-accent transition-colors">Home</a>
          <span className="mx-2">/</span>
          <span className="text-blueprint-text">Production Chain Guide</span>
        </div>

        {/* H1 + Intro */}
        <section className="mb-10">
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-blueprint-text mb-4">
            Town to City Production Chain Guide — Complete Resource Flow
          </h1>
          <p className="text-lg text-blueprint-muted leading-relaxed max-w-3xl">
            Every thriving Mediterranean town in Town to City operates on a delicate web of interconnected production chains. Raw materials flow from farms to granaries, through warehouses, into processing buildings, and finally onto market stalls where citizens purchase their daily needs. One broken link in any chain — a warehouse with too few workers, a granary placed too far from farmland, a bakery starved of Corn — and your entire settlement economy grinds to a halt. This guide maps every major production chain from input to output, identifies the five most critical chains you must master, and provides actionable solutions for the bottlenecks that kill city growth.
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
                  Production Chain Overview — Key Stats
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="stat-card">
                    <div className="text-2xl font-bold text-blueprint-accent">{allChains.length}</div>
                    <div className="text-xs text-blueprint-muted mt-1">Chains Mapped</div>
                  </div>
                  <div className="stat-card">
                    <div className="text-2xl font-bold text-blueprint-green">13</div>
                    <div className="text-xs text-blueprint-muted mt-1">Crop Types</div>
                  </div>
                  <div className="stat-card">
                    <div className="text-2xl font-bold text-blueprint-accent">7</div>
                    <div className="text-xs text-blueprint-muted mt-1">City Ranks</div>
                  </div>
                  <div className="stat-card">
                    <div className="text-2xl font-bold text-blueprint-warm">4</div>
                    <div className="text-xs text-blueprint-muted mt-1">Farm Tiers</div>
                  </div>
                </div>
                <p className="font-body text-sm text-blueprint-muted leading-relaxed mt-4 pt-4 border-t border-blueprint-border/50">
                  Production chains in Town to City follow a universal flow: Raw Material → Harvest → Storage → Transport → Processing → Distribution → Consumption. The Granary and Warehouse are the two logistics buildings that connect every link in this chain. Without them properly placed and staffed, your most efficient farms and bakeries produce nothing. Understanding this flow is the difference between a thriving city of 500+ citizens and a struggling hamlet that never graduates past Village rank.
                </p>
              </div>
            </section>

            {/* Section 1: How Production Chains Work */}
            <section>
              <h2 className="font-display text-2xl font-semibold text-blueprint-text mb-4">
                1. How Production Chains Connect Raw Materials to Finished Goods
              </h2>
              <p className="text-blueprint-muted leading-relaxed mb-4">
                Every production chain in Town to City follows a three-stage pipeline. Stage one is <strong className="text-blueprint-text">production</strong>: farmers plant crops in assigned fields adjacent to their Farm buildings. Each Farm can grow one crop type, and the crop type determines which downstream processing buildings it feeds. Stage two is <strong className="text-blueprint-text">logistics</strong>: Granary workers collect harvested crops from fields, then Warehouse workers pick up those crops from the Granary and deliver them to processing buildings. Stage three is <strong className="text-blueprint-text">processing and consumption</strong>: buildings like the Bakery, Winery, and Perfumer convert raw crops into finished goods, which are then distributed to Market Stalls where citizens purchase them to satisfy their needs.
              </p>
              <p className="text-blueprint-muted leading-relaxed mb-4">
                The most misunderstood part of this system is the <strong className="text-blueprint-text">Granary-Warehouse handoff</strong>. Crops harvested from farms do not automatically appear in your warehouse network. They must first be collected by Granary workers and stored in the Granary. Warehouse workers must then travel to the Granary, pick up the crops, and transport them to the processing destination. If your Granary is on the opposite side of the map from your Warehouse, workers spend more time walking than delivering — and your production buildings sit idle.
              </p>
              <p className="text-blueprint-muted leading-relaxed mb-4">
                The path system in Town to City uses physical road connections. Workers travel along roads at a speed determined by road quality. Dirt paths are slow. Stone roads increase worker movement speed by approximately 40%. Paved roads provide even greater speed. Prioritize upgrading the roads connecting your Granary to your Warehouse, and your Warehouse to your processing buildings. A single stone road upgrade on a high-traffic logistics route can reduce worker travel time by 30-40%, effectively increasing your delivery capacity without adding a single new worker.
              </p>
            </section>

            {/* Section 2: Top 5 Most Important Production Chains */}
            <section>
              <h2 className="font-display text-2xl font-semibold text-blueprint-text mb-4">
                2. Five Most Important Production Chains
              </h2>
              <p className="text-blueprint-muted leading-relaxed mb-4">
                Not all production chains are created equal. Some are foundational — without them, your city cannot function at any level. Others are optimization tools that enhance an already-functioning economy. The five chains below represent the critical path every successful town must master, ranked by their impact on city growth, citizen happiness, and long-term sustainability.
              </p>

              {topFiveChains.map((chain) => (
                <div key={chain.rank} className="bluepr-card">
                  <h3 className="font-display text-lg font-semibold text-blueprint-text mb-2">
                    <span className="text-blueprint-accent">#{chain.rank}</span> {chain.icon} {chain.name}
                  </h3>
                  <p className="text-blueprint-muted leading-relaxed text-sm">{chain.detail}</p>
                </div>
              ))}
            </section>

            {/* Section 3: Complete Production Chain Data Table */}
            <section>
              <h2 className="font-display text-2xl font-semibold text-blueprint-text mb-4">
                3. Complete Production Chain Reference Table
              </h2>
              <p className="text-blueprint-muted leading-relaxed mb-4">
                The table below maps every major production chain in Town to City, including exact input requirements, processing steps from farm to finished product, worker roles needed at each stage, and efficiency optimization tips. Use this as your quick reference when planning which crops to plant, where to place your logistics buildings, and which processing buildings to prioritize.
              </p>
              <div className="bluepr-card overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-blueprint-border">
                      <th className="text-left py-3 px-2 font-semibold text-blueprint-text">Chain Name</th>
                      <th className="text-left py-3 px-2 font-semibold text-blueprint-text">Category</th>
                      <th className="text-left py-3 px-3 font-semibold text-blueprint-text">Input Resources</th>
                      <th className="text-left py-3 px-3 font-semibold text-blueprint-text">Processing Steps</th>
                      <th className="text-left py-3 px-3 font-semibold text-blueprint-text">Output Product</th>
                      <th className="text-left py-3 px-2 font-semibold text-blueprint-text">Workers Needed</th>
                      <th className="text-left py-3 px-3 font-semibold text-blueprint-text">Efficiency Tips</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allChains.map((chain) => (
                      <tr key={chain.name} className="border-b border-blueprint-border/50 hover:bg-blueprint-alt/40 transition-colors">
                        <td className="py-3 px-2 font-semibold text-blueprint-text whitespace-nowrap">{chain.name}</td>
                        <td className="py-3 px-2">
                          <span className={`bp-tag ${catColors[chain.category] || "blue"}`}>{chain.category}</span>
                        </td>
                        <td className="py-3 px-3 text-blueprint-muted text-xs leading-relaxed">{chain.inputs}</td>
                        <td className="py-3 px-3 text-blueprint-muted text-xs leading-relaxed">{chain.processing}</td>
                        <td className="py-3 px-3 text-blueprint-muted text-xs leading-relaxed">{chain.output}</td>
                        <td className="py-3 px-2 text-blueprint-muted text-xs leading-relaxed">{chain.workers}</td>
                        <td className="py-3 px-3 text-blueprint-muted text-xs leading-relaxed">{chain.tips}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="font-body text-xs text-blueprint-muted italic mt-2 px-1">
                All input quantities and processing steps verified against in-game requirements and community testing data as of June 2026. Worker counts vary based on building upgrades and road quality.
              </p>
            </section>

            {/* Section 4: Common Bottlenecks */}
            <section>
              <h2 className="font-display text-2xl font-semibold text-blueprint-text mb-4">
                4. Common Bottlenecks and How to Fix Them
              </h2>
              <p className="text-blueprint-muted leading-relaxed mb-4">
                Every player hits production bottlenecks. The key is recognizing the symptoms before they cascade into a city-wide economic collapse. Below are the six most common production chain failures, their root causes, and the specific actions you can take to restore flow.
              </p>

              <div className="space-y-4">
                {bottlenecks.map((b, i) => (
                  <div key={i} className="bluepr-card">
                    <h3 className="font-display text-base font-semibold text-blueprint-warm mb-2">
                      Problem: {b.problem}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <span className="text-xs uppercase tracking-wider text-blueprint-muted font-semibold">Root Cause</span>
                        <p className="text-blueprint-muted text-sm mt-1">{b.cause}</p>
                      </div>
                      <div>
                        <span className="text-xs uppercase tracking-wider text-blueprint-green font-semibold">Solution</span>
                        <p className="text-blueprint-muted text-sm mt-1">{b.fix}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 5: Crop Tier Progression */}
            <section>
              <h2 className="font-display text-2xl font-semibold text-blueprint-text mb-4">
                5. Crop Tier Progression — When to Unlock Each Chain
              </h2>
              <p className="text-blueprint-muted leading-relaxed mb-4">
                Your production chain options expand through four Farm Tiers, unlocked via Research Points. Each tier adds new crop types that feed into progressively more advanced processing chains. Understanding this progression prevents the common mistake of rushing a production building before you have the crops to supply it.
              </p>

              <div className="bluepr-card overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-blueprint-border">
                      <th className="text-left py-3 px-3 font-semibold text-blueprint-text">Farm Tier</th>
                      <th className="text-left py-3 px-3 font-semibold text-blueprint-text">New Crops Unlocked</th>
                      <th className="text-left py-3 px-3 font-semibold text-blueprint-text">Chains Enabled</th>
                      <th className="text-left py-3 px-3 font-semibold text-blueprint-text">Priority</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-blueprint-border/50 hover:bg-blueprint-alt/40 transition-colors">
                      <td className="py-3 px-3"><span className="bp-tag green">Tier 1</span></td>
                      <td className="py-3 px-3 text-blueprint-text text-xs">Corn, Wheat, Grapes</td>
                      <td className="py-3 px-3 text-blueprint-muted text-xs">Bread Chain, Wine Chain</td>
                      <td className="py-3 px-3 text-blueprint-muted text-xs">Immediate (foundation)</td>
                    </tr>
                    <tr className="border-b border-blueprint-border/50 hover:bg-blueprint-alt/40 transition-colors">
                      <td className="py-3 px-3"><span className="bp-tag orange">Tier 2</span></td>
                      <td className="py-3 px-3 text-blueprint-text text-xs">Cotton, Rose, Beeswax</td>
                      <td className="py-3 px-3 text-blueprint-muted text-xs">Hattery Apparel Chain</td>
                      <td className="py-3 px-3 text-blueprint-muted text-xs">After food chains stable</td>
                    </tr>
                    <tr className="border-b border-blueprint-border/50 hover:bg-blueprint-alt/40 transition-colors">
                      <td className="py-3 px-3"><span className="bp-tag orange">Tier 3</span></td>
                      <td className="py-3 px-3 text-blueprint-text text-xs">Hops, Potatoes, Tomatoes, Lettuce</td>
                      <td className="py-3 px-3 text-blueprint-muted text-xs">Pub Supplies Chain, Restaurant inputs</td>
                      <td className="py-3 px-3 text-blueprint-muted text-xs">Mid-game expansion</td>
                    </tr>
                    <tr className="border-b border-blueprint-border/50 hover:bg-blueprint-alt/40 transition-colors">
                      <td className="py-3 px-3"><span className="bp-tag blue">Tier 4</span></td>
                      <td className="py-3 px-3 text-blueprint-text text-xs">Lavender, Medicinal Herbs, Pumpkin</td>
                      <td className="py-3 px-3 text-blueprint-muted text-xs">Perfumer Chain, Apothecary Chain, Cathedral Chain</td>
                      <td className="py-3 px-3 text-blueprint-muted text-xs">Late-game optimization</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 6: Logistics Optimization */}
            <section>
              <h2 className="font-display text-2xl font-semibold text-blueprint-text mb-4">
                6. Logistics Optimization — Making Every Chain Faster
              </h2>
              <p className="text-blueprint-muted leading-relaxed mb-4">
                Logistics is the hidden multiplier that determines whether your production chains operate at 50% or 100% efficiency. Two identical cities with the same buildings and worker count can have dramatically different output — purely based on how their logistics network is designed. Here are the principles that maximize throughput:
              </p>
              <div className="bluepr-card space-y-3">
                <div>
                  <strong className="text-blueprint-accent">Distributed Warehouse Network.</strong>
                  <span className="text-blueprint-muted text-sm block mt-1">
                    Do not cluster all warehouses around the train station. As your city expands, place satellite warehouses near residential districts, farming zones, and production hubs. Each warehouse creates a logistics cell that serves 6-10 nearby buildings. Workers assigned to a warehouse split their time across all connected destinations — fewer destinations per warehouse means more deliveries per building.
                  </span>
                </div>
                <div>
                  <strong className="text-blueprint-accent">Road Priority Upgrades.</strong>
                  <span className="text-blueprint-muted text-sm block mt-1">
                    Upgrade roads on your highest-traffic routes first, not all roads equally. The path between your Granary and your primary Warehouse is the most critical logistics artery in your city — upgrade it to stone the moment you can afford it. Secondary routes (Warehouse to Bakery, Warehouse to Market Stall) should follow.
                  </span>
                </div>
                <div>
                  <strong className="text-blueprint-accent">Granary Placement is Make-or-Break.</strong>
                  <span className="text-blueprint-muted text-sm block mt-1">
                    The Granary must sit within 3-4 tiles of your farm cluster. Every extra tile of distance adds travel time to every harvest collection trip — and Granary workers make dozens of trips per in-game day. A poorly placed Granary can reduce your effective farming output by 30-50% compared to an optimally placed one.
                  </span>
                </div>
                <div>
                  <strong className="text-blueprint-accent">60% Happiness is the Magic Number.</strong>
                  <span className="text-blueprint-muted text-sm block mt-1">
                    Happiness above 60% triggers new family arrivals, growing your workforce. Below 50%, citizens start leaving. Every production chain ultimately depends on having enough workers to staff every building. Prioritize citizen happiness — through food variety, apparel, and leisure — as aggressively as you prioritize new production buildings.
                  </span>
                </div>
              </div>
            </section>

            {/* Section 7: Chain Diagnosis — merged from the former /production-chain page */}
            <section>
              <h2 className="font-display text-2xl font-semibold text-blueprint-text mb-4">
                7. Diagnosing a Broken Chain Before You Build Anything
              </h2>
              <p className="text-blueprint-muted leading-relaxed mb-4">
                Most players react to a stalled chain by building another processing building. That is usually the wrong move. Select the building that is under-producing and read its efficiency figure — well below the 80% range is the signal that the problem is upstream or downstream, not inside the building itself. A farm whose wheat rots in the field before the Granary collects it, or a Bakery whose output shelf is full, are both &ldquo;broken chain&rdquo; failures; the fix is different in each case.
              </p>
              <div className="bluepr-card space-y-3">
                <div>
                  <strong className="text-blueprint-accent">Trace upstream first.</strong>
                  <span className="text-blueprint-muted text-sm block mt-1">
                    If the building is idle waiting on inputs, the shortfall is in the raw-material link: more farm plots, a closer Granary, or more collection workers. Players consistently under-produce raw materials relative to processing capacity, so this is the most common failure direction.
                  </span>
                </div>
                <div>
                  <strong className="text-blueprint-accent">A full output shelf is a downstream blockage.</strong>
                  <span className="text-blueprint-muted text-sm block mt-1">
                    If inputs are consumed but output does not move, add storage or the next processing step — not another producer. Building a second Bakery when the first one cannot offload bread just doubles the blockage.
                  </span>
                </div>
                <div>
                  <strong className="text-blueprint-accent">One large processing building usually beats several small ones.</strong>
                  <span className="text-blueprint-muted text-sm block mt-1">
                    Fixed overhead (building upkeep, base staffing) is spread over more units at scale. The exception is geography: if your fields are scattered and transport distance eats the scale gain, split the load across smaller buildings placed inside each cluster.
                  </span>
                </div>
                <div>
                  <strong className="text-blueprint-accent">Perishables set the transport priority.</strong>
                  <span className="text-blueprint-muted text-sm block mt-1">
                    Food chains need the shortest, fastest routes — a crop that rots before reaching the Granary funds nothing. Goods that do not spoil can use slower, higher-capacity routing, so spend road upgrades on food links first.
                  </span>
                </div>
              </div>
            </section>

            {/* Verification */}
            <section>
              <p className="font-body text-xs text-blueprint-muted italic">
                Production chain data verified against in-game requirements, the official Town to City Steam store page, community testing reports, and farming tier progression charts. All crop input quantities and building unlock conditions reflect the current Early Access build as of June 2026. This page absorbed the former /production-chain guide on 2026-09-04; that URL now redirects here.
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
            {/* Quick Reference */}
            <div className="bluepr-card">
              <h3 className="font-display text-lg font-semibold text-blueprint-text mb-4">The Three-Stage Pipeline</h3>
              <div className="space-y-3 font-body text-sm">
                <div className="flex items-start gap-3">
                  <span className="step-num w-6 h-6 text-xs">1</span>
                  <div>
                    <span className="text-blueprint-text font-semibold">Production</span>
                    <span className="text-blueprint-muted block text-xs">Farmers plant and harvest crops in assigned fields. Crop type determines downstream chain options.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="step-num w-6 h-6 text-xs">2</span>
                  <div>
                    <span className="text-blueprint-text font-semibold">Logistics</span>
                    <span className="text-blueprint-muted block text-xs">Granary collects crops → Warehouse transports to processing buildings. Road quality determines speed.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="step-num w-6 h-6 text-xs">3</span>
                  <div>
                    <span className="text-blueprint-text font-semibold">Processing</span>
                    <span className="text-blueprint-muted block text-xs">Bakeries, Wineries, Hatteries convert crops to finished goods. Market Stalls distribute to citizens.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Chain Categories */}
            <div className="bluepr-card">
              <h3 className="font-display text-lg font-semibold text-blueprint-text mb-4">Chain Categories</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-display text-sm font-semibold text-blueprint-green">Food Chains</h4>
                  <p className="font-body text-xs text-blueprint-muted mt-1">Bread, Wine, Pub, Restaurant — satisfy the primary citizen need. Highest priority at every stage.</p>
                </div>
                <div>
                  <h4 className="font-display text-sm font-semibold text-blueprint-accent">Apparel Chains</h4>
                  <p className="font-body text-xs text-blueprint-muted mt-1">Hattery, Perfumer — unlock Artisan upgrades and Bourgeoisie satisfaction.</p>
                </div>
                <div>
                  <h4 className="font-display text-sm font-semibold text-blueprint-warm">Luxury Chains</h4>
                  <p className="font-body text-xs text-blueprint-muted mt-1">Candle Maker, Apothecary, Cathedral — late-game optimization for Bourgeoisie happiness.</p>
                </div>
                <div>
                  <h4 className="font-display text-sm font-semibold text-yellow-400">Logistics Chains</h4>
                  <p className="font-body text-xs text-blueprint-muted mt-1">Import Trade, Research, Tax — infrastructure that enables all other chains.</p>
                </div>
              </div>
            </div>

            {/* Optimal Build Order for Production */}
            <div className="bluepr-card">
              <h3 className="font-display text-lg font-semibold text-blueprint-text mb-4">Production Build Order</h3>
              <div className="space-y-2 font-body text-sm text-blueprint-muted">
                <div className="flex items-center gap-2">
                  <span className="step-num w-6 h-6 text-xs">1</span>
                  <span>Small Warehouse near train station</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="step-num w-6 h-6 text-xs">2</span>
                  <span>Market Stall for basic goods distribution</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="step-num w-6 h-6 text-xs">3</span>
                  <span>Farms (Corn + Wheat) at Fontebrac unlock</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="step-num w-6 h-6 text-xs">4</span>
                  <span>Granary adjacent to farm cluster</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="step-num w-6 h-6 text-xs">5</span>
                  <span>Bakery — bread chain online</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="step-num w-6 h-6 text-xs">6</span>
                  <span>2nd Warehouse for growing distribution needs</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="step-num w-6 h-6 text-xs">7</span>
                  <span>Farms Tier 2 + Hattery apparel chain</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="step-num w-6 h-6 text-xs">8</span>
                  <span>Winery after 3+ grape farm plots established</span>
                </div>
              </div>
            </div>

            {/* Related Guides */}
            <div className="bluepr-card">
              <h3 className="font-display text-lg font-semibold text-blueprint-text mb-4">Related Guides</h3>
              <div className="space-y-3">
                <a href="/industry-chains" className="block p-3 rounded-md bg-blueprint-alt/50 hover:bg-blueprint-alt transition-colors group">
                  <h4 className="font-display text-sm font-semibold text-blueprint-text group-hover:text-blueprint-accent transition-colors">Industry Chains Deep Dive</h4>
                  <p className="font-body text-xs text-blueprint-muted mt-1">Production lines, supply routes, and economic optimization across settlement stages</p>
                </a>
                <a href="/logistics" className="block p-3 rounded-md bg-blueprint-alt/50 hover:bg-blueprint-alt transition-colors group">
                  <h4 className="font-display text-sm font-semibold text-blueprint-text group-hover:text-blueprint-accent transition-colors">Trade &amp; Logistics Guide</h4>
                  <p className="font-body text-xs text-blueprint-muted mt-1">Moving goods between storage, markets, and trade posts without bottlenecks</p>
                </a>
                <a href="/trade" className="block p-3 rounded-md bg-blueprint-alt/50 hover:bg-blueprint-alt transition-colors group">
                  <h4 className="font-display text-sm font-semibold text-blueprint-text group-hover:text-blueprint-accent transition-colors">Trade &amp; Routes Guide</h4>
                  <p className="font-body text-xs text-blueprint-muted mt-1">Trade routes, passive income scaling, and profitable goods between settlements</p>
                </a>
                <a href="/research" className="block p-3 rounded-md bg-blueprint-alt/50 hover:bg-blueprint-alt transition-colors group">
                  <h4 className="font-display text-sm font-semibold text-blueprint-text group-hover:text-blueprint-accent transition-colors">Research Tree Guide</h4>
                  <p className="font-body text-xs text-blueprint-muted mt-1">Optimal research order and which unlocks to prioritize</p>
                </a>
                <a href="/tier-list" className="block p-3 rounded-md bg-blueprint-alt/50 hover:bg-blueprint-alt transition-colors group">
                  <h4 className="font-display text-sm font-semibold text-blueprint-text group-hover:text-blueprint-accent transition-colors">Building Tier List</h4>
                  <p className="font-body text-xs text-blueprint-muted mt-1">Every building ranked S to C with unlock conditions and strategic value</p>
                </a>
                <a href="/resources" className="block p-3 rounded-md bg-blueprint-alt/50 hover:bg-blueprint-alt transition-colors group">
                  <h4 className="font-display text-sm font-semibold text-blueprint-text group-hover:text-blueprint-accent transition-colors">Crops &amp; Farming Guide</h4>
                  <p className="font-body text-xs text-blueprint-muted mt-1">Complete crop reference, farm tier unlocks, and planting strategies</p>
                </a>
                <a href="/buildings" className="block p-3 rounded-md bg-blueprint-alt/50 hover:bg-blueprint-alt transition-colors group">
                  <h4 className="font-display text-sm font-semibold text-blueprint-text group-hover:text-blueprint-accent transition-colors">Complete Buildings Reference</h4>
                  <p className="font-body text-xs text-blueprint-muted mt-1">Every building type with categories, inputs, and worker requirements</p>
                </a>
                <a href="/economy" className="block p-3 rounded-md bg-blueprint-alt/50 hover:bg-blueprint-alt transition-colors group">
                  <h4 className="font-display text-sm font-semibold text-blueprint-text group-hover:text-blueprint-accent transition-colors">Economy &amp; Trade Guide</h4>
                  <p className="font-body text-xs text-blueprint-muted mt-1">Gold management, tax rates, trade routes, and revenue optimization</p>
                </a>
                <a href="/citizens" className="block p-3 rounded-md bg-blueprint-alt/50 hover:bg-blueprint-alt transition-colors group">
                  <h4 className="font-display text-sm font-semibold text-blueprint-text group-hover:text-blueprint-accent transition-colors">Citizens &amp; Happiness Guide</h4>
                  <p className="font-body text-xs text-blueprint-muted mt-1">Worker classes, happiness mechanics, and citizen needs management</p>
                </a>
                <a href="/beginners" className="block p-3 rounded-md bg-blueprint-alt/50 hover:bg-blueprint-alt transition-colors group">
                  <h4 className="font-display text-sm font-semibold text-blueprint-text group-hover:text-blueprint-accent transition-colors">Beginner Guide</h4>
                  <p className="font-body text-xs text-blueprint-muted mt-1">First steps for new players — town founding, basic chains, and early unlocks</p>
                </a>
              </div>
            </div>

            {/* Key Insight */}
            <div className="tip-box">
              <p className="font-body text-xs text-blueprint-text leading-relaxed">
                <strong className="text-blueprint-accent">Key Insight:</strong> The Granary is the single most underrated building in Town to City. Players obsess over which crops to plant and which processing buildings to erect, but without a properly placed Granary, your farms produce nothing. The Granary sits at the critical junction between production (farms) and logistics (warehouses). Place it wrong, and your entire food chain runs at half speed. Place it right, and crops flow seamlessly from field to bakery to citizen. Always build your Granary before your first crop-powered production building — never after.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
