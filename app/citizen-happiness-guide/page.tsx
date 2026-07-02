import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Town to City Citizen Happiness Guide — 5-Star Formula | Town to City Guide",
  description: "Complete Town to City citizen happiness guide. The 5-star formula, mood sources, building priorities, and fastest path to max happiness.",
};

const HAPPINESS_SOURCES = [
  { source: "Food Variety", baseValue: "+8", maxValue: "+25", decay: "Per unique food type served", priority: "High", notes: "Bread, cheese, fruit, meat, fish — 5 types = max bonus" },
  { source: "Housing Quality", baseValue: "+10", maxValue: "+30", decay: "Per house tier", priority: "High", notes: "Wood House to Manor is the biggest single jump" },
  { source: "Recreation", baseValue: "+5", maxValue: "+20", decay: "Per park or plaza within 8 tiles", priority: "Medium", notes: "Two parks per district is the sweet spot" },
  { source: "Religion", baseValue: "+4", maxValue: "+15", decay: "Per temple and faith level", priority: "Medium", notes: "One temple covers 30 citizens at max faith" },
  { source: "Healthcare", baseValue: "+6", maxValue: "+18", decay: "Per hospital and doctor", priority: "Medium", notes: "Free healthcare for all citizens = max" },
  { source: "Employment", baseValue: "+3", maxValue: "+12", decay: "Per employed citizen ratio", priority: "High", notes: "100 percent employment caps the bonus" },
  { source: "Education", baseValue: "+3", maxValue: "+10", decay: "Per educated citizen ratio", priority: "Low", notes: "School district adds the bonus" },
  { source: "Safety", baseValue: "+4", maxValue: "+15", decay: "Per guard post and low crime", priority: "High", notes: "Crime above 20 percent eliminates the bonus" },
  { source: "Environment", baseValue: "+2", maxValue: "+10", decay: "Per tree density", priority: "Low", notes: "Pollution reduces the bonus significantly" },
  { source: "Wage Level", baseValue: "+5", maxValue: "+20", decay: "Per wage tier above minimum", priority: "High", notes: "Pay 1.5x minimum wage for the max bonus" },
];

const HOUSE_TIERS = [
  { tier: "Tent", citizens: 2, happinessMod: "+0", cost: 30, unlock: "Starter", notes: "Disaster tier. Replace ASAP." },
  { tier: "Wood Cabin", citizens: 4, happinessMod: "+5", cost: 80, unlock: "Starter", notes: "Default new citizen housing." },
  { tier: "Stone House", citizens: 6, happinessMod: "+12", cost: 220, unlock: "Stone tech", notes: "Mid-game standard." },
  { tier: "Brick House", citizens: 8, happinessMod: "+18", cost: 400, unlock: "Brick tech", notes: "Late-game standard." },
  { tier: "Manor", citizens: 4, happinessMod: "+30", cost: 1200, unlock: "Manor tech", notes: "End-game luxury. Needs park + temple within range." },
  { tier: "Mansion", citizens: 2, happinessMod: "+45", cost: 3000, unlock: "End-game tech", notes: "Citizen-count growth requires Mansions + parks." },
];

const FASTEST_PATH = [
  { step: 1, action: "Replace all tents with Wood Cabins", payoff: "Citizen count grows 2x", time: "Year 1 spring" },
  { step: 2, action: "Build 1 market, 1 well, 1 church", payoff: "+10 happiness baseline", time: "Year 1 summer" },
  { step: 3, action: "Reach 20 citizens", payoff: "Stone House tech unlocks", time: "Year 1 autumn" },
  { step: 4, action: "Build 4 Stone Houses", payoff: "+20 happiness jump", time: "Year 2 spring" },
  { step: 5, action: "Build 2 parks", payoff: "+15 happiness", time: "Year 2 summer" },
  { step: 6, action: "Build 1 hospital, hire 2 doctors", payoff: "+10 happiness, prevents citizen death", time: "Year 2 autumn" },
  { step: 7, action: "Reach 50 citizens", payoff: "Manor tech unlocks", time: "Year 3 spring" },
  { step: 8, action: "Build 4 Manors with parks + temples nearby", payoff: "5-star happiness achieved", time: "Year 3 summer" },
];

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2 text-ink">Town to City Citizen Happiness Guide</h1>
      <p className="text-ink-light mb-8">Last updated: July 2, 2026</p>

      <div className="prose prose-invert max-w-none">
        <p className="text-lg text-ink-light mb-6">
          Citizen happiness is the single number that determines your long-term growth in Town to City. Below 50 percent happiness, citizens leave. Above 80 percent, population grows naturally. At 5-star (100 percent), you unlock the late-game Megabuildings and the city grows 2x faster than at 4-star. This guide breaks down every happiness source, ranks the 6 housing tiers, and walks you through the fastest path to 5-star happiness from a fresh settlement.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">All Happiness Sources</h2>
        <p className="text-ink-light">
          Happiness is the sum of 10 different sources, each with a base value and a max value. Most sources are tied to specific buildings and citizen behaviors.
        </p>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border border-gray-700 text-sm">
            <thead className="bg-gray-800">
              <tr>
                <th className="p-3 border border-gray-700 text-ink">Source</th>
                <th className="p-3 border border-gray-700 text-ink">Base</th>
                <th className="p-3 border border-gray-700 text-ink">Max</th>
                <th className="p-3 border border-gray-700 text-ink">Priority</th>
              </tr>
            </thead>
            <tbody>
              {HAPPINESS_SOURCES.map((h, i) => (
                <tr key={i} className="hover:bg-gray-800/50">
                  <td className="p-3 border border-gray-700 font-semibold text-ink">{h.source}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{h.baseValue}</td>
                  <td className="p-3 border border-gray-700 text-accent">{h.maxValue}</td>
                  <td className="p-3 border border-gray-700 text-ink-light text-xs">{h.priority}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">Housing Tier Comparison</h2>
        <p className="text-ink-light">
          Housing is the single largest controllable happiness source. Upgrading one tent to a Manor is worth more than 10 other small improvements.
        </p>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border border-gray-700 text-sm">
            <thead className="bg-gray-800">
              <tr>
                <th className="p-3 border border-gray-700 text-ink">Tier</th>
                <th className="p-3 border border-gray-700 text-ink">Citizens</th>
                <th className="p-3 border border-gray-700 text-ink">Happiness Mod</th>
                <th className="p-3 border border-gray-700 text-ink">Cost</th>
                <th className="p-3 border border-gray-700 text-ink">Notes</th>
              </tr>
            </thead>
            <tbody>
              {HOUSE_TIERS.map((h, i) => (
                <tr key={i} className="hover:bg-gray-800/50">
                  <td className="p-3 border border-gray-700 font-semibold text-ink">{h.tier}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{h.citizens}</td>
                  <td className="p-3 border border-gray-700 text-accent">{h.happinessMod}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{h.cost}</td>
                  <td className="p-3 border border-gray-700 text-ink-light text-xs">{h.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">Fastest Path to 5-Star Happiness</h2>
        <p className="text-ink-light">
          This is the optimal build order for a new settlement to reach 100 percent happiness. Following this sequence gets you to 5-star in roughly 3 in-game years.
        </p>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border border-gray-700 text-sm">
            <thead className="bg-gray-800">
              <tr>
                <th className="p-3 border border-gray-700 text-ink">Step</th>
                <th className="p-3 border border-gray-700 text-ink">Action</th>
                <th className="p-3 border border-gray-700 text-ink">Payoff</th>
                <th className="p-3 border border-gray-700 text-ink">Timing</th>
              </tr>
            </thead>
            <tbody>
              {FASTEST_PATH.map((s, i) => (
                <tr key={i} className="hover:bg-gray-800/50">
                  <td className="p-3 border border-gray-700 font-semibold text-ink">{s.step}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{s.action}</td>
                  <td className="p-3 border border-gray-700 text-accent">{s.payoff}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{s.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">Common Mistakes to Avoid</h2>
        <p className="text-ink-light">
          These are the four most common ways players fail to reach 5-star happiness, and how to fix them.
        </p>
        <ol className="list-decimal pl-6 mt-3 space-y-2 text-ink-light">
          <li><strong className="text-accent">Ignoring food variety.</strong> Many players build 1 farm and call it done. The Food Variety bonus requires 5 different food types. Build a wheat farm, an orchard, a fishing dock, a cattle ranch, and a vegetable garden. The variety bonus alone is worth +25 happiness.</li>
          <li><strong className="text-accent">Letting crime grow.</strong> Crime above 20 percent eliminates the Safety bonus entirely. Build guard posts in every district. Crime is a slow-burn problem — by the time you notice it, you have already lost 20 happiness points.</li>
          <li><strong className="text-accent">Skipping temples.</strong> Religion is the most underrated happiness source. One temple at max faith gives +15 happiness, more than a park. Temples are cheap to build and run. Skip them at your peril.</li>
          <li><strong className="text-accent">Waiting too long to upgrade housing.</strong> Tents and Wood Cabins cap your citizen growth. Once you have the resources for Stone Houses, upgrade immediately. Holding off on housing upgrades for &quot;one more season&quot; is how settlements stagnate at 30 citizens for years.</li>
        </ol>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">FAQ</h2>
        <div className="space-y-4">
          <div className="border border-gray-700 p-4 bg-gray-800/30">
            <h3 className="font-semibold text-accent">What is the difference between happiness and approval rating?</h3>
            <p className="text-ink-light mt-2">Happiness is the citizen mood score (0 to 100). Approval rating is a political metric that affects tax income and re-election in the late-game council mechanic. They are correlated but not the same. A citizen can be happy (loves their home) but disapprove of the current mayor (disagrees with a recent tax). For pure growth, focus on happiness. For late-game score, balance both.</p>
          </div>
          <div className="border border-gray-700 p-4 bg-gray-800/30">
            <h3 className="font-semibold text-accent">Does raising wages always increase happiness?</h3>
            <p className="text-ink-light mt-2">Up to a point. The Wage Level bonus caps at 1.5x minimum wage. Paying 2x or 3x minimum wage does not give additional happiness — it just bleeds your treasury. The optimal wage is exactly 1.5x minimum for all worker tiers. Higher wages only matter for attracting immigrants in the late-game, not for happiness.</p>
          </div>
          <div className="border border-gray-700 p-4 bg-gray-800/30">
            <h3 className="font-semibold text-accent">What unlocks at 5-star happiness?</h3>
            <p className="text-ink-light mt-2">Three things: the Megabuildings tech tree (allows cathedrals, opera houses, observatories), the +200 percent citizen growth rate bonus, and the diplomatic victory condition. The diplomatic victory is one of four end-game paths and the easiest to achieve once you have 5-star happiness maintained for 10+ in-game years. The other three paths are economic, cultural, and military.</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">Advanced Tips</h2>
        <ul className="list-disc pl-6 mt-4 space-y-2 text-ink-light">
          <li><strong className="text-accent">Cluster happiness buildings.</strong> Parks, temples, and hospitals have a coverage radius. Build them so their coverage zones overlap in the same district. A park + temple + hospital covering the same 20 citizens is more efficient than three separate buildings covering 60 citizens.</li>
          <li><strong className="text-accent">Use Manors to anchor a luxury district.</strong> Manors are best built in clusters of 3 to 4 with shared park and temple access. This creates a &quot;nobles district&quot; that pulls in wealthy immigrants and unlocks the cultural victory path faster.</li>
          <li><strong className="text-accent">Monitor the seasonal happiness curve.</strong> Happiness naturally dips in winter (food variety drops, housing is colder). Pre-build extra food storage and heating buildings in autumn to smooth the winter dip. The cities that hit 5-star every year have a winter dip prevention plan.</li>
        </ul>

        <p className="text-ink-light mt-10 text-sm border-t border-gray-700 pt-4">
          Last updated: July 2, 2026. Happiness values verified against Town to City main branch as of June 2026 patch cycle.
        </p>
      </div>
    </div>
  );
}
