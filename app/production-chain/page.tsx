export const metadata = {
  title: "Town to City Production Chain Guide — Resource Processing & Industry Optimization (2026)",
  description: "Complete Town to City production chain guide. Raw material to finished goods, supply chain optimization, factory placement, and industry efficiency for maximum city output.",
};

const PRODUCTION_CHAINS = [
  {
    chain: "Food Supply Chain",
    rawMaterials: "Wheat, Vegetables, Livestock (from farms and ranches)",
    processing: "Wheat → Flour (Mill) → Bread (Bakery). Vegetables → Canned Goods (Cannery). Livestock → Meat (Slaughterhouse) → Processed Meat (Butcher)",
    finalProducts: "Bread, Canned Vegetables, Processed Meat",
    storageNeeds: "Refrigerated Warehouse (prevents spoilage). Silo (grain storage)",
    transportPriority: "High — food spoils. Dedicated delivery trucks recommended.",
    efficiencyTip: "Place Mill and Bakery adjacent to Wheat farms. Every tile of transport distance adds processing delay. A farm-mill-bakery triangle reduces production time by 30 percent versus a spread-out layout.",
  },
  {
    chain: "Construction Materials Chain",
    rawMaterials: "Timber (Logging Camp), Stone (Quarry), Iron Ore (Mine), Sand (River Dredge)",
    processing: "Timber → Planks (Sawmill). Stone → Cut Stone (Stonemason). Iron Ore → Iron Ingots (Smelter) → Steel (Steel Mill). Sand → Glass (Glassworks)",
    finalProducts: "Planks, Cut Stone, Steel Beams, Glass Panes",
    storageNeeds: "Open-air Yard (planks/stone). Covered Warehouse (steel/glass)",
    transportPriority: "Medium — does not spoil. Can use slower, higher-capacity transport.",
    efficiencyTip: "Cluster all heavy industry (Smelter, Steel Mill, Stonemason) in one industrial zone. Shared power, shared worker pool, and reduced transport between processing steps.",
  },
  {
    chain: "Consumer Goods Chain",
    rawMaterials: "Cotton (Farm), Wool (Ranch), Leather (Ranch), Wood (Logging Camp)",
    processing: "Cotton → Cloth (Textile Mill) → Clothing (Garment Factory). Wool → Yarn (Spinner) → Textiles (Weaver). Leather → Finished Leather (Tannery) → Shoes/Bags (Leatherworks). Wood → Furniture (Carpenter)",
    finalProducts: "Clothing, Textiles, Leather Goods, Furniture",
    storageNeeds: "Warehouse (all weather-protected)",
    transportPriority: "Low — non-perishable. Ship in bulk when warehouse fills.",
    efficiencyTip: "Consumer goods are low-margin, high-volume. Efficiency comes from scale: run factories at 80 percent capacity or higher to amortize building maintenance costs across more units.",
  },
  {
    chain: "Technology Chain",
    rawMaterials: "Rare Metals (Deep Mine), Crystals (Crystal Quarry), Electronics Components (import or Factory)",
    processing: "Rare Metals → Refined Metals (Refinery). Crystals → Polished Crystals (Crystal Cutter). Components + Refined Metals → Electronics (Electronics Factory)",
    finalProducts: "Computers, Research Equipment, Advanced Components",
    storageNeeds: "Climate-controlled Vault (high-value, sensitive to moisture)",
    transportPriority: "Highest security — high-value theft target. Use guarded convoys.",
    efficiencyTip: "This is your highest-value chain. A single truck of electronics is worth more than ten trucks of consumer goods. Invest in the fastest transport and most secure storage first for this chain.",
  },
];

const FACTORY_PLACEMENT = [
  { building: "Sawmill", bestNeighbor: "Logging Camp + Furniture Factory", worstNeighbor: "Residential Zone", reason: "Produces noise pollution. Place with other industrial buildings, not near homes." },
  { building: "Smelter / Steel Mill", bestNeighbor: "Mine + Stonemason", worstNeighbor: "Farm / Residential", reason: "Produces air pollution. Must be downwind of residential areas. Pollution reduces farm yield." },
  { building: "Bakery / Cannery", bestNeighbor: "Farm + Warehouse", worstNeighbor: "Smelter / Heavy Industry", reason: "Food facilities are pollution-sensitive. Contamination risk if adjacent to heavy industry." },
  { building: "Textile Mill / Garment Factory", bestNeighbor: "Cotton Farm + Warehouse", worstNeighbor: "None (clean industry)", reason: "Light industry with minimal pollution. Can be placed near residential with a one-tile buffer." },
  { building: "Electronics Factory", bestNeighbor: "Refinery + Research Center", worstNeighbor: "Water source / Farm", reason: "Uses chemical processes. Wastewater must be treated before release. Do not place near drinking water intake." },
];

export default function ProductionChainPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-300 mb-2">Town to City Production Chain Guide</h1>
      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-bold text-blue-300 mb-3">What Is a Production Chain?</h2>
          <p className="text-gray-300 leading-relaxed">
            A production chain is the sequence of buildings that transforms raw materials into finished goods. In Town to City, inefficient production chains are the single largest source of wasted resources. A farm producing wheat that rots because the mill is too far away — that is a broken chain. A steel mill waiting for iron ore because the mine is understaffed — broken chain. This guide shows you how to build chains that never break.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-blue-300 mb-3">Four Core Production Chains</h2>
          {PRODUCTION_CHAINS.map((chain, i) => (
            <div key={i} className="mb-6 border border-gray-700 p-5 bg-gray-800/30">
              <h3 className="text-lg font-semibold text-blue-300 mb-3">{chain.chain}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                <div><span className="text-blue-400 font-semibold">Raw Materials:</span> <span className="text-gray-300">{chain.rawMaterials}</span></div>
                <div><span className="text-blue-400 font-semibold">Storage:</span> <span className="text-gray-300">{chain.storageNeeds}</span></div>
                <div className="md:col-span-2"><span className="text-blue-400 font-semibold">Processing Steps:</span> <span className="text-gray-300">{chain.processing}</span></div>
                <div><span className="text-blue-400 font-semibold">Transport:</span> <span className="text-gray-300">{chain.transportPriority}</span></div>
                <div><span className="text-blue-400 font-semibold">Efficiency Tip:</span> <span className="text-gray-300">{chain.efficiencyTip}</span></div>
              </div>
            </div>
          ))}
        </section>

        <section>
          <h2 className="text-xl font-bold text-blue-300 mb-3">Factory Placement Rules</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border border-gray-700 text-sm">
              <thead className="bg-gray-800">
                <tr>
                  <th className="p-3 border border-gray-700 text-blue-300">Building</th>
                  <th className="p-3 border border-gray-700 text-blue-300">Best Neighbor</th>
                  <th className="p-3 border border-gray-700 text-blue-300">Worst Neighbor</th>
                  <th className="p-3 border border-gray-700 text-blue-300">Reason</th>
                </tr>
              </thead>
              <tbody>
                {FACTORY_PLACEMENT.map((f, i) => (
                  <tr key={i} className="hover:bg-gray-800/50">
                    <td className="p-3 border border-gray-700 font-semibold text-gray-200">{f.building}</td>
                    <td className="p-3 border border-gray-700 text-green-400">{f.bestNeighbor}</td>
                    <td className="p-3 border border-gray-700 text-red-400">{f.worstNeighbor}</td>
                    <td className="p-3 border border-gray-700 text-gray-300 text-xs">{f.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-blue-300 mb-3">FAQ</h2>
          <div className="space-y-4 mt-4">
            <div>
              <h3 className="font-semibold text-blue-300">How do I know if my production chain is bottlenecked?</h3>
              <p className="text-gray-300 mt-1">Click any factory and check its efficiency percentage. Below 80 percent indicates a bottleneck. Trace backwards: is the factory waiting for input materials (upstream bottleneck — increase raw material production)? Or is its output storage full (downstream bottleneck — build more storage or add the next processing step)? Most bottlenecks are upstream — players underestimate how much raw material they need. A single Bakery running at full capacity consumes the output of 2-3 Wheat farms.</p>
            </div>
            <div>
              <h3 className="font-semibold text-blue-300">Should I build multiple small factories or one large one?</h3>
              <p className="text-gray-300 mt-1">One large factory is almost always more efficient. Large factories benefit from economies of scale — fixed costs (building maintenance, worker base salary) are spread across more units of output. A single Large Bakery producing 500 bread per day costs less per loaf than five Small Bakeries producing 100 each. The only reason to build multiple small factories is geographic necessity — if your farms are spread across the map and transport costs exceed the scale efficiency gain.</p>
            </div>
            <div>
              <h3 className="font-semibold text-blue-300">When should I upgrade to automated production lines?</h3>
              <p className="text-gray-300 mt-1">Automation upgrades are expensive but transformative. The break-even point is roughly when your factory employs 20+ workers — the automation upgrade cost equals about 15 worker salaries over one year. If your factory consistently runs above 80 percent capacity and employs 20+ workers, automate it. The freed workers can staff a new factory, expanding your production without increasing your population. Automate your highest-volume chains (Food, Construction) first.</p>
            </div>
          </div>
        </section>

        <p className="text-gray-400 text-sm border-t border-gray-700 pt-4">
          Last updated: July 1, 2026.
        </p>
      </div>
    </div>
  );
}
