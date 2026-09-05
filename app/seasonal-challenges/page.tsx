export const metadata = {
  alternates: {
    canonical: "https://towntocityguide.wiki/seasonal-challenges",
  },
  title: "Town to City Seasonal Challenges Guide | Spring, Summer, Autumn & Winter Strategy (2026)",
  description: "Complete Town to City seasonal challenges guide. Master every season's unique demands: crop cycles, citizen needs, weather disasters, seasonal events, and rewards for optimal city growth.",
};

const seasonOverview = [
  {
    season: "Spring (Mar-May)",
    icon: "🌸",
    duration: "60 in-game days",
    temperature: "10-22°C (mild)",
    cropGrowth: "Fast: all spring crops at 1.2x speed",
    citizenNeeds: "Housing repairs (winter damage), new births, education demand spikes",
    disasters: "Spring floods (river overflow), late frost (crop damage 1 in 4 chance)",
    keyResources: "Fresh water, Lumber (repairs), Seeds (planting), Fertilizer",
    strategy: "Spring is the rebuilding season. Repair all winter-damaged buildings in the first 15 days. Plant wheat, vegetables, and cotton immediately. Reserve 20% of your workforce for repair and construction, and do not overcommit to farming and leave buildings in disrepair.",
  },
  {
    season: "Summer (Jun-Aug)",
    icon: "☀️",
    duration: "60 in-game days",
    temperature: "22-35°C (hot)",
    cropGrowth: "Peak: all crops at 1.5x speed, double harvest for grain",
    citizenNeeds: "Water consumption +40%, heat-shelter demand, leisure/recreation spikes",
    disasters: "Drought (water sources deplete 2x faster), heat waves (citizen productivity -30% without shade)",
    keyResources: "Water (critical), Grain, Fruit, Beer/Wine (citizen happiness)",
    strategy: "Summer is the production season. Maximize crop output: double harvest means every farm produces 2x. Build extra water storage (cisterns, wells) before the first heat wave. Unemployed citizens during heat waves become unhappy, so assign them to shade-tolerant jobs or leisure buildings.",
  },
  {
    season: "Autumn (Sep-Nov)",
    icon: "🍂",
    duration: "60 in-game days",
    temperature: "8-18°C (cooling)",
    cropGrowth: "Slowing: crops at 0.8x speed, final harvest before winter",
    citizenNeeds: "Firewood stockpile, warm clothing, food preservation (smoking/salting)",
    disasters: "Early snow (kills unharvested crops), autumn storms (roof damage)",
    keyResources: "Firewood, Preserved Food, Wool/Leather (warm clothing), Herbs (medicine)",
    strategy: "Autumn is the preparation season. Harvest all remaining crops by day 45. Anything left in the field after day 50 risks early snow destruction. Convert fresh food to preserved (smokehouse priority). Stockpile firewood. You need enough to last 60 winter days. Check every building roof for storm damage.",
  },
  {
    season: "Winter (Dec-Feb)",
    icon: "❄️",
    duration: "60 in-game days",
    temperature: "-10 to 5°C (freezing)",
    cropGrowth: "Zero: no outdoor crops grow. Greenhouses only (if researched)",
    citizenNeeds: "Heating (firewood/coal critical), warm clothing mandatory, indoor activities",
    disasters: "Blizzards (building damage, citizen illness +200%), food shortage riots",
    keyResources: "Firewood/Coal (survival), Preserved Food, Medicine, Wool/Leather",
    strategy: "Winter is the survival season. If you stockpiled enough in autumn, winter is an opportunity to focus on research, crafting, and city planning for next year. If you did not stockpile, winter becomes a disaster cascade: starving citizens riot, sick citizens cannot work, and the death spiral accelerates. Never enter winter with less than 60 days of preserved food and firewood.",
  },
];

const seasonalEvents = [
  { event: "Spring Festival", season: "Spring", trigger: "Day 15-30", reward: "+20 citizen happiness, +10% birth rate for 30 days", cost: "500 Food, 200 Beer/Wine", priority: "High: happiness boost pays dividends through summer productivity" },
  { event: "Summer Market Fair", season: "Summer", trigger: "Day 75-90", reward: "+30% trade income for 30 days, unlocks rare trade goods", cost: "1,000 Gold (market preparation)", priority: "High: trade bonus during peak production season multiplies profits" },
  { event: "Harvest Festival", season: "Autumn", trigger: "Day 135-150", reward: "+50% food preservation efficiency, +15 citizen happiness", cost: "800 Food (feast), 300 Beer/Wine", priority: "Very High: preservation bonus directly feeds winter survival" },
  { event: "Winter Solstice", season: "Winter", trigger: "Day 195-210", reward: "+25 citizen happiness, firewood consumption -20% for 30 days", cost: "400 Preserved Food, 200 Warm Clothing", priority: "Medium: happiness helps but does not solve resource shortages" },
  { event: "Merchant Caravan (random)", season: "Any", trigger: "Random (10% chance per 30 days)", reward: "Rare resources and blueprints at premium prices", cost: "Gold (varies by goods)", priority: "High if you have surplus gold. Rare blueprints are seasonal exclusives" },
];

const disasterPrep = [
  { disaster: "Flood (Spring)", earlyWarning: "River level rises over 3 days", prevention: "Build levees (Research: Civil Engineering L2). Relocate buildings 3+ tiles from riverbank.", mitigation: "Sandbag walls reduce damage by 60%. Evacuate citizens from flood zone buildings.", recoveryCost: "200-500 Lumber, 10-20 worker-days for repairs" },
  { disaster: "Drought (Summer)", earlyWarning: "Water sources show depletion bar (7-day warning)", prevention: "Build 2+ cisterns in summer. Research Water Conservation (L3). Diversify water sources.", mitigation: "Water rationing edict reduces consumption by 40% but costs -10 happiness. Prioritize water for farms over industry.", recoveryCost: "No direct cost; crop yield reduced by 30-50% for remainder of summer" },
  { disaster: "Early Snow (Autumn)", earlyWarning: "Temperature drops below 5°C for 3 consecutive days", prevention: "Cannot prevent. Harvest earlier. Plant fast-growing crop varieties.", mitigation: "Emergency harvest edict: all farmers work 24hr to save remaining crops. 50% of unharvested crops survive if emergency harvest is activated.", recoveryCost: "Lost crops (irrecoverable). Supplement with preserved food from storage." },
  { disaster: "Blizzard (Winter)", earlyWarning: "Temperature drops below -15°C, wind speed increases", prevention: "Reinforced roofing (Research: Architecture L4). Stockpile 2x firewood buffer.", mitigation: "Close all outdoor workplaces. Redirect all citizens to heated buildings. Firewood consumption doubles during blizzard, so a buffer stockpile is critical.", recoveryCost: "100-300 Lumber (roof repairs), 20-50 Medicine (sick citizens)." },
  { disaster: "Plague (Any, winter most dangerous)", earlyWarning: "Sickness rate exceeds 5% of population", prevention: "Hospital + Herbalist coverage (1 per 50 citizens). Clean water supply. Waste management buildings.", mitigation: "Quarantine edict: infected citizens isolated, work stops in affected district. Medicine consumption +300%.", recoveryCost: "100-500 Medicine, 10-30 citizen deaths if untreated. Prevention is dramatically cheaper than mitigation." },
];

const seasonalTips = [
  "Build a second cistern before summer. Water demand spikes 40% during heat waves. One cistern cannot supply a city above 100 citizens through a drought.",
  "Harvest festival (autumn day 135) is the single most important event in the game. The +50% preservation bonus means your smoked meat and pickled vegetables last through winter without spoilage.",
  "Never plant all your fields with the same crop. Diversify: 40% grain (bread), 30% vegetables (nutrition), 20% cotton/hemp (clothing), 10% herbs (medicine). Mono-crop farming dies to one bad frost.",
  "Winter is a season for research and crafting. Move unemployed farmers to research labs, workshops, and the university. The research you complete in winter powers next year's efficiency.",
  "The firewood buffer rule: calculate daily consumption x 60 winter days x 1.5 safety margin. A city of 200 citizens burns roughly 12 firewood per day = 1,080 firewood for winter. Aim for 1,600.",
  "Warm clothing is not an optional luxury. Citizens without warm clothing in winter have a 3x sickness rate. Produce wool coats and leather boots in autumn. One coat per citizen is the minimum standard.",
  "Levees prevent floods but cost 500 lumber per tile. Build them only around your most valuable districts (farms, main warehouse, town center). Outlying buildings can be repaired post-flood cheaper than preventive levees.",
  "The seasonal rhythm of Town to City is: Spring = build, Summer = produce, Autumn = prepare, Winter = survive + research. Any deviation from this rhythm creates a resource deficit that compounds each season.",
];

export default function SeasonalChallengesPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-heading font-bold text-ink mb-2">
        Town to City <span className="text-accent">Seasonal Challenges</span>
      </h1>
      <p className="text-ink-light mb-10 max-w-2xl">
        Master the four-season cycle that defines Town to City. Every season brings unique
        challenges, disasters, and opportunities. Cities that plan for the next season thrive.
        Cities that react to the current season collapse by winter. This guide covers every
        season&apos;s demands, events, and survival strategies.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-heading font-bold text-ink mb-4">Season Overview</h2>
        <div className="space-y-6">
          {seasonOverview.map((s) => (
            <div key={s.season} className="border border-border/30 p-5 bg-card/30">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">{s.icon}</span>
                <h3 className="font-heading text-xl text-accent">{s.season}</h3>
                <span className="text-xs text-ink-light ml-auto">{s.duration}</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm mb-3">
                <p className="text-ink-light"><strong className="text-ink">Temp:</strong> {s.temperature}</p>
                <p className="text-ink-light"><strong className="text-ink">Crops:</strong> {s.cropGrowth}</p>
                <p className="text-ink-light"><strong className="text-ink">Citizens:</strong> {s.citizenNeeds}</p>
                <p className="text-ink-light"><strong className="text-ink">Disasters:</strong> {s.disasters}</p>
              </div>
              <p className="text-sm text-ink"><strong>Key Resources:</strong> {s.keyResources}</p>
              <p className="text-sm text-ink-light mt-2 leading-relaxed border-l-2 border-accent/30 pl-3 italic">{s.strategy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-heading font-bold text-ink mb-4">Seasonal Events & Festivals</h2>
        <p className="text-ink-light text-sm mb-4">
          Hosting seasonal events is not optional. The bonuses they provide (happiness, trade income,
          preservation efficiency) compound across seasons. Skip the Harvest Festival and your food spoils
          mid-winter. Skip the Spring Festival and birth rates stagnate, creating a labor shortage next year.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="border-b border-border/40">
                <th className="py-2 px-2 text-accent font-heading text-xs">Event</th>
                <th className="py-2 px-2 text-accent font-heading text-xs">Season</th>
                <th className="py-2 px-2 text-accent font-heading text-xs">Trigger</th>
                <th className="py-2 px-2 text-accent font-heading text-xs">Reward</th>
                <th className="py-2 px-2 text-accent font-heading text-xs">Cost</th>
                <th className="py-2 px-2 text-accent font-heading text-xs">Priority</th>
              </tr>
            </thead>
            <tbody>
              {seasonalEvents.map((e) => (
                <tr key={e.event} className="border-b border-border/20">
                  <td className="py-2 px-2 text-ink font-semibold">{e.event}</td>
                  <td className="py-2 px-2 text-ink-light">{e.season}</td>
                  <td className="py-2 px-2 text-ink-light">{e.trigger}</td>
                  <td className="py-2 px-2 text-emerald-400/80">{e.reward}</td>
                  <td className="py-2 px-2 text-amber-400/80">{e.cost}</td>
                  <td className="py-2 px-2 text-ink-light text-xs">{e.priority}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-heading font-bold text-ink mb-4">Disaster Preparedness</h2>
        <p className="text-ink-light text-sm mb-4">
          Disasters in Town to City provide early warnings if you know what to look for. The difference
          between a minor inconvenience and a city-ending catastrophe is how early you react to these warnings.
        </p>
        <div className="space-y-3">
          {disasterPrep.map((d) => (
            <div key={d.disaster} className="border border-border/30 p-4 bg-card/30">
              <h3 className="font-heading text-base text-accent mb-2">{d.disaster}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                <p className="text-ink-light"><strong className="text-ink">Warning:</strong> {d.earlyWarning}</p>
                <p className="text-ink-light"><strong className="text-ink">Prevention:</strong> {d.prevention}</p>
                <p className="text-ink-light"><strong className="text-ink">Mitigation:</strong> {d.mitigation}</p>
                <p className="text-ink-light"><strong className="text-ink">Recovery:</strong> {d.recoveryCost}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-heading font-bold text-ink mb-4">Seasonal Strategy Tips</h2>
        <ul className="space-y-2 text-sm text-ink-light list-disc list-inside">
          {seasonalTips.map((tip, i) => (
            <li key={i}>{tip}</li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-heading font-bold text-ink mb-3">Related Guides</h2>
        <div className="flex flex-wrap gap-3 text-sm">
          <a href="/production-chain-guide" className="text-accent hover:underline">Production Chains</a>
          <a href="/resource-management" className="text-accent hover:underline">Resource Management</a>
          <a href="/citizens" className="text-accent hover:underline">Citizens Guide</a>
          <a href="/economy" className="text-accent hover:underline">Economy Guide</a>
          <a href="/beginners" className="text-accent hover:underline">Beginner Guide</a>
          <a href="/food-production" className="text-accent hover:underline">Food Production</a>
        </div>
      </section>

      <p className="text-xs text-ink-light/50 text-right">Last updated: July 9, 2026</p>
    </main>
  );
}
