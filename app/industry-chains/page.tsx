import Link from "next/link";

export const metadata = {
  title: "Town to City Industry Chains Guide — Production Lines, Supply Routes & Economic Optimization | Town to City Guide",
  description: "Complete Town to City industry chains guide. Every production line mapped from raw material to finished goods, supply chain optimization, and economic scaling strategies.",
};

const industryChains = [
  { chain: "Textile Industry", rawMaterial: "Cotton Fields, Sheep Pastures", processed: "Cotton → Thread → Fabric; Wool → Yarn → Cloth", finishedGoods: "Clothing, Uniforms, Luxury Garments", keyBuilding: "Weaver Workshop, Tailor Shop", profitPerDay: "Medium — steady demand, low margin unless luxury tier" },
  { chain: "Food Processing", rawMaterial: "Wheat Farms, Cattle Ranches, Fishing Docks", processed: "Wheat → Flour → Bread; Milk → Cheese; Fish → Smoked Fish", finishedGoods: "Bread, Cheese, Preserved Meat, Canned Goods", keyBuilding: "Mill, Bakery, Smokehouse", profitPerDay: "High — food is always in demand; preserved goods sell to traders at premium" },
  { chain: "Metalworking", rawMaterial: "Iron Mine, Coal Mine", processed: "Iron Ore → Iron Ingots → Steel Ingots", finishedGoods: "Tools, Weapons, Construction Materials, Machinery", keyBuilding: "Smelter, Forge, Machine Shop", profitPerDay: "Very High — late-game economic engine; steel sells for premium to all trade partners" },
  { chain: "Timber Industry", rawMaterial: "Forestry Camps", processed: "Logs → Planks → Furniture; Logs → Pulp → Paper", finishedGoods: "Furniture, Construction Materials, Books", keyBuilding: "Sawmill, Carpenter Workshop, Paper Mill", profitPerDay: "Low-Medium — good early game, scales poorly late game; furniture niche is profitable" },
  { chain: "Luxury Goods", rawMaterial: "Gold Mine, Gem Quarry, Silk Farm (imported)", processed: "Gold Ore → Gold Ingots → Jewelry; Gems → Cut Gems", finishedGoods: "Jewelry, Decorations, Noble Gifts, Trade Goods", keyBuilding: "Jeweler Workshop, Goldsmith", profitPerDay: "Maximum — highest profit margin but requires multiple supply chains and skilled workers" },
];

const tradeRoutes = [
  { route: "Neighboring Town (Daily)", transportCost: "Low — 1 cart, 2 workers", bestGoods: "Bread, Basic Tools, Lumber", profitMargin: "10-15 percent", risk: "Minimal — safe route, small profits" },
  { route: "Regional City (Weekly)", transportCost: "Medium — 2 carts, 4 workers, 1 guard", bestGoods: "Steel Tools, Furniture, Preserved Food", profitMargin: "20-30 percent", risk: "Low — occasional bandit encounters" },
  { route: "Capital City (Biweekly)", transportCost: "High — 3 carts, 6 workers, 2 guards", bestGoods: "Luxury Garments, Jewelry, Machinery", profitMargin: "35-50 percent", risk: "Medium — bandits and broken cart risk; bring spare parts" },
  { route: "Foreign Port (Monthly)", transportCost: "Very High — ship charter, 8 workers, 4 guards", bestGoods: "Jewelry, Noble Gifts, Exotic Goods", profitMargin: "50-80 percent", risk: "High — pirates, storms, market fluctuation; insurance recommended" },
];

export default function IndustryChainsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="chapter-heading font-display text-4xl mb-2">Industry Chains Guide</h1>
      <p className="text-ink-faded text-lg mb-8 drop-cap">
        A thriving town economy in Town to City is not built on raw materials — it is built on chains. Raw cotton sells for pennies; finished luxury garments sell for gold. Understanding how to transform basic resources into high-value goods through multi-step production chains is the difference between a struggling village and an economic powerhouse. This guide maps every industry chain, the buildings required at each step, and the trade routes that turn goods into gold.
      </p>

      <h2 className="chapter-heading font-display text-2xl mt-10 mb-4">Core Industry Chains — From Raw to Riches</h2>
      <div className="overflow-x-auto mb-8">
        <table className="parchment-table w-full text-left text-sm">
          <thead><tr className="border-b border-ink-faded/20"><th className="py-2 px-3 font-display text-accent">Industry</th><th className="py-2 px-3 font-display text-accent">Raw</th><th className="py-2 px-3 font-display text-accent">Processed</th><th className="py-2 px-3 font-display text-accent">Finished</th><th className="py-2 px-3 font-display text-accent">Key Building</th><th className="py-2 px-3 font-display text-accent">Profit</th></tr></thead>
          <tbody>{industryChains.map((c,i)=>(<tr key={i} className="border-b border-ink-faded/10"><td className="py-2 px-3 font-display text-accent">{c.chain}</td><td className="py-2 px-3">{c.rawMaterial}</td><td className="py-2 px-3">{c.processed}</td><td className="py-2 px-3">{c.finishedGoods}</td><td className="py-2 px-3">{c.keyBuilding}</td><td className="py-2 px-3">{c.profitPerDay}</td></tr>))}</tbody>
        </table>
      </div>

      <h2 className="chapter-heading font-display text-2xl mt-10 mb-4">Trade Routes — Get Your Goods to Market</h2>
      <div className="overflow-x-auto mb-8">
        <table className="parchment-table w-full text-left text-sm">
          <thead><tr className="border-b border-ink-faded/20"><th className="py-2 px-3 font-display text-accent">Route</th><th className="py-2 px-3 font-display text-accent">Cost</th><th className="py-2 px-3 font-display text-accent">Best Goods</th><th className="py-2 px-3 font-display text-accent">Margin</th><th className="py-2 px-3 font-display text-accent">Risk</th></tr></thead>
          <tbody>{tradeRoutes.map((t,i)=>(<tr key={i} className="border-b border-ink-faded/10"><td className="py-2 px-3 font-display text-accent">{t.route}</td><td className="py-2 px-3">{t.transportCost}</td><td className="py-2 px-3">{t.bestGoods}</td><td className="py-2 px-3">{t.profitMargin}</td><td className="py-2 px-3">{t.risk}</td></tr>))}</tbody>
        </table>
      </div>

      <h2 className="chapter-heading font-display text-2xl mt-10 mb-4">FAQ</h2>
      <div className="bg-parchment-light rounded-lg p-5 mb-4">
        <h3 className="font-display text-accent text-lg mb-2">Which industry chain should I build first?</h3>
        <p className="text-ink-light">Food Processing is the safest first chain. It requires the lowest upfront investment (Mill and Bakery are cheap), has constant demand from your own town and trade partners, and cannot fail — people always need bread. Build the Timber Industry in parallel for construction materials. Once both are stable, invest in Metalworking for the late-game economic jump. Do not start with Luxury Goods — the supply chain requirements are too expensive for an early economy to support.</p>
      </div>
      <div className="bg-parchment-light rounded-lg p-5 mb-4">
        <h3 className="font-display text-accent text-lg mb-2">How do I prevent production bottlenecks?</h3>
        <p className="text-ink-light">Bottlenecks happen when one step in the chain produces faster than the next step can consume. The fix is buffer storage: place a warehouse between each production step with a minimum stock threshold. When raw cotton exceeds 200 in the warehouse, the Weaver knows to increase thread production. When thread exceeds 100, the Tailor increases clothing output. Buffer storage smooths out production rate differences and prevents the entire chain from stopping because one building is full.</p>
      </div>
      <div className="bg-parchment-light rounded-lg p-5 mb-4">
        <h3 className="font-display text-accent text-lg mb-2">When should I upgrade from local trade to long-distance routes?</h3>
        <p className="text-ink-light">Upgrade to regional city trade when you have at least two stable industry chains producing surplus goods. The higher transport cost is only profitable if you are sending full cartloads. Sending a half-empty cart to the capital loses money. The rule of thumb: only upgrade trade routes when your daily surplus exceeds the cart capacity of your current route. A Local cart holds 50 units; if you are producing 80 units daily, it is time for the Regional route.</p>
      </div>

      <aside className="border-l-4 border-accent pl-4 mt-10">
        <h3 className="font-display text-lg text-ink mb-2">Related Guides</h3>
        <ul className="space-y-1">
          <li><Link href="/economy" className="text-accent hover:underline">Economy Guide</Link></li>
          <li><Link href="/production-chain" className="text-accent hover:underline">Production Chains</Link></li>
          <li><Link href="/trade" className="text-accent hover:underline">Trading Guide</Link></li>
          <li><Link href="/resources" className="text-accent hover:underline">Resources Guide</Link></li>
        </ul>
      </aside>
      <p className="text-ink-faded text-sm mt-10">Last updated: July 3, 2026. Industry chain data based on community economic modeling and gameplay testing.</p>
    </div>
  );
}
