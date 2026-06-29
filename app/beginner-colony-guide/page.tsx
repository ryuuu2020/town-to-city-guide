export const metadata = {
  title: "Town to City Beginner Guide — First Colony Setup & Early Game Walkthrough (2026)",
  description: "Step-by-step Town to City beginner guide covering first buildings order, resource priorities, settler assignment, food supply management, and early trade routes for a thriving colony.",
};

export default function BeginnerColonyGuidePage() {
  const firstBuildings = [
    { priority: 1, building: "Lumber Camp", purpose: "Timber production — essential for every structure", settlersNeeded: 2, prerequisite: "None", tip: "Place near dense forest; clear trees in build radius first" },
    { priority: 2, building: "Stone Quarry", purpose: "Stone for walls, advanced buildings", settlersNeeded: 2, prerequisite: "Lumber Camp", tip: "Scout for rocky outcroppings; mountainside quarries yield 25% more" },
    { priority: 3, building: "Farm Plot (3x)", purpose: "Wheat/vegetable production for food", settlersNeeded: 3, prerequisite: "Lumber Camp", tip: "Build on fertile soil (dark earth); avoid clay patches" },
    { priority: 4, building: "Housing (Basic)", purpose: "Shelter for up to 6 settlers each", settlersNeeded: 1, prerequisite: "Lumber Camp", tip: "Build near workplaces to reduce travel time; each unit needs a bed assigned" },
    { priority: 5, building: "Well", purpose: "Water supply for settlers and farms", settlersNeeded: 1, prerequisite: "Stone Quarry", tip: "Place centrally; water radius is 8 tiles; farms outside radius need irrigation ditches" },
    { priority: 6, building: "Storehouse", purpose: "Centralized resource storage, prevents decay", settlersNeeded: 1, prerequisite: "Lumber Camp", tip: "Upgrade to Granary (grain) and Warehouse (stone/metal) branches later" },
    { priority: 7, building: "Market Stall", purpose: "Enables trade with passing caravans", settlersNeeded: 1, prerequisite: "Storehouse + 200 surplus goods", tip: "Place on main road; caravans path along roads only" },
    { priority: 8, building: "Smithy", purpose: "Iron tool production, weapon crafting", settlersNeeded: 2, prerequisite: "Stone Quarry + Iron Deposit found", tip: "Requires iron ore; scout hills before committing" },
    { priority: 9, building: "Watchtower", purpose: "Early warning and basic defense vs scouts", settlersNeeded: 1, prerequisite: "Lumber Camp", tip: "Build on highest elevation point; range extends with height" },
    { priority: 10, building: "Tavern", purpose: "Settler happiness, migration attraction", settlersNeeded: 2, prerequisite: "Farm Plot + Housing", tip: "Acts as social hub; nearby housing gets +10% migration rate" },
  ];

  const resourcePriority = [
    { rank: 1, resource: "Timber (Wood)", reason: "Required for every early building; without it nothing gets built", earlyTarget: "300-500 stockpile", productionMode: "Lumber Camp + manual tree felling" },
    { rank: 2, resource: "Food (Wheat/Vegetables)", reason: "Settlers consume 1 unit/day each; starvation kills productivity", earlyTarget: "200 surplus (3 days buffer)", productionMode: "Farm Plots + Fishing Hut if near water" },
    { rank: 3, resource: "Stone", reason: "Needed for quarry, well, walls, advanced buildings", earlyTarget: "200-300 stockpile", productionMode: "Stone Quarry on rocky terrain" },
    { rank: 4, resource: "Water", reason: "Wells supply drinking water; farms without water produce 70% less", earlyTarget: "1 well per 15 settlers", productionMode: "Wells + Irrigation Ditches" },
    { rank: 5, resource: "Iron Ore", reason: "Tools double worker efficiency; weapons needed for defense", earlyTarget: "50-100 stockpile before smithy", productionMode: "Mine on iron deposits" },
    { rank: 6, resource: "Coal", reason: "Fuel for smithy, kitchen; winter heating reduces sickness 40%", earlyTarget: "100+ before first winter", productionMode: "Charcoal Burner or Coal Mine" },
    { rank: 7, resource: "Leather/Hides", reason: "Basic armor, bags increase carry capacity 50%", earlyTarget: "30-50 hides", productionMode: "Hunting Lodge on game trails" },
    { rank: 8, resource: "Herbs (Medicinal)", reason: "Treats disease outbreaks; one outbreak can wipe 10+ settlers", earlyTarget: "20-30 herbs stockpiled", productionMode: "Herbalist Hut near forest edge" },
    { rank: 9, resource: "Gold/Coin", reason: "Trade currency; caravans require coins for premium goods", earlyTarget: "100+ coins", productionMode: "Market Stall + surplus goods trading" },
    { rank: 10, resource: "Clay/Brick", reason: "Upgrade paths for housing, storehouse, bakery", earlyTarget: "150+ bricks", productionMode: "Clay Pit + Brick Kiln" },
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-10">
          <section>
            <h1 className="chapter-heading">Town to City Beginner Guide — First Colony Setup & Early Game Walkthrough</h1>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
              Starting your first colony in Town to City can feel overwhelming with dozens of building options, resource chains, and settler needs competing for your attention. This guide distills the first 30 in-game days into a clear, repeatable build order that guarantees a stable foundation. Follow these steps, and your colony will survive the critical early phase with surplus food, a growing population, and walls ready before the first raid.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Day 1 — First Buildings and Settler Assignment</h2>
            <p className="text-ink-light leading-relaxed mb-3">
              You start with 5 settlers, a cart of basic supplies (200 timber, 50 food), and a procedurally generated map tile. Pause the game immediately and survey the area. Look for dense forest (dark green on the terrain overlay), rocky outcroppings for stone, and fertile soil (dark brown tiles with grass). Water proximity is valuable but not essential — you can dig wells anywhere, but a natural river gives free fishing and water access.
            </p>
            <p className="text-ink-light leading-relaxed mb-3">
              Assign 2 settlers to build a Lumber Camp within 6 tiles of the densest tree cluster. Assign 1 settler to clear trees in the camp&apos;s radius — this speeds initial construction. The remaining 2 settlers should begin scouting the immediate vicinity for iron deposits and berry bushes.
            </p>
            <p className="text-ink-light leading-relaxed">
              Your second action should be plotting 3 Farm Plots on fertile soil. Even before planting, having the plots marked lets your farmers begin soil preparation, which takes 2 days. Plant wheat (faster growth, lower nutrition) for the first harvest; switch to vegetables (slower, higher nutrition) once you have a food buffer.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">First 10 Buildings — Priority Order</h2>
            <p className="text-ink-light leading-relaxed mb-4">
              Building order is not subjective — it is determined by resource dependencies and settler survival timelines. The table below represents the mathematically optimal order for the standard difficulty setting.
            </p>
            <div className="overflow-x-auto">
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Building</th>
                    <th>Purpose</th>
                    <th>Settlers</th>
                    <th>Prerequisite</th>
                    <th>Tip</th>
                  </tr>
                </thead>
                <tbody>
                  {firstBuildings.map((b, i) => (
                    <tr key={i}>
                      <td className="font-semibold">{b.priority}</td>
                      <td className="font-semibold">{b.building}</td>
                      <td>{b.purpose}</td>
                      <td>{b.settlersNeeded}</td>
                      <td>{b.prerequisite}</td>
                      <td className="text-ink-light text-sm">{b.tip}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Food Supply Management</h2>
            <p className="text-ink-light leading-relaxed mb-3">
              Food is the silent colony killer. Every settler consumes 1 food unit per day. A population of 10 burns through 10 food daily. A single farm plot produces roughly 8-12 food per harvest cycle (6 days for wheat). This means 3 farm plots feed about 5-6 settlers sustainably at the start. Build additional food sources before accepting new migrants.
            </p>
            <p className="text-ink-light leading-relaxed mb-3">
              Diversify food sources as early as possible. A Fishing Hut on a riverbank adds 4-6 food per day with zero soil requirement. Berry Bushes found during scouting can be harvested manually for emergency rations. A Hunting Lodge on animal trails provides both food and hides, solving two resource chains with one building. Once you reach 20 settlers, invest in a Bakery (requires wheat, transforms 1 wheat into 2 bread — effectively doubling food output).
            </p>
            <p className="text-ink-light leading-relaxed">
              Food storage matters. Food left in farm plots decays at a rate of 5% per day after harvest. A Storehouse reduces decay to 1%. Upgrade to a Granary (specialized food storage) to reduce decay to 0.5% and unlock the &ldquo;Preserve&rdquo; action, which converts perishable food into long-lasting rations for winter or siege stockpiles.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Early Resource Priority Order</h2>
            <p className="text-ink-light leading-relaxed mb-4">
              Not all resources deserve equal attention in the first 30 days. Over-investing in late-game resources like gold or brick while your settlers are starving is the most common beginner mistake. Follow this priority hierarchy.
            </p>
            <div className="overflow-x-auto">
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Resource</th>
                    <th>Why It Matters</th>
                    <th>Early Target</th>
                    <th>Production</th>
                  </tr>
                </thead>
                <tbody>
                  {resourcePriority.map((r, i) => (
                    <tr key={i}>
                      <td className="font-semibold">{r.rank}</td>
                      <td className="font-semibold">{r.resource}</td>
                      <td>{r.reason}</td>
                      <td>{r.earlyTarget}</td>
                      <td className="text-ink-light text-sm">{r.productionMode}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Settler Assignment and Migration</h2>
            <p className="text-ink-light leading-relaxed mb-3">
              You control settler assignment through the population management panel. Each building has a worker slot count. A Lumber Camp needs 2 workers to operate at full efficiency; assigning 1 worker runs it at 40% output, and 0 workers produces nothing. Idle settlers consume food without contributing — always keep idle count at zero.
            </p>
            <p className="text-ink-light leading-relaxed mb-3">
              Migration is triggered by three factors: available housing (empty beds), colony happiness (tavern, food variety, low sickness), and economic opportunity (open jobs). Migrants arrive in groups of 2-4 every 5-7 days once conditions are met. Do not accept migrants if your food stockpile is below a 3-day buffer. You can reject migrants from the arrival notification with no penalty.
            </p>
            <p className="text-ink-light leading-relaxed">
              Specialist settlers come from caravans and specific buildings. A Smithy attracts blacksmiths; a Tavern attracts entertainers and traders. These specialists work 30% faster in their profession than generic settlers. Prioritize assigning specialists to their matching buildings whenever possible.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Early Trade and Economy</h2>
            <p className="text-ink-light leading-relaxed mb-3">
              Trade caravans appear once you build a Market Stall and have at least 200 units of surplus goods in your storehouse. Caravans arrive every 3-4 days and travel along roads you have built. They offer resources not available on your map tile — exotic seeds, rare metals, advanced blueprints — in exchange for coins or bartered goods.
            </p>
            <p className="text-ink-light leading-relaxed mb-3">
              The most profitable early trade good is surplus stone. Once your quarry is running at full capacity, you will accumulate stone faster than you can spend it on buildings. Stone trades at 2 coins per unit on standard difficulty. A full quarry produces 40-60 stone per day, translating to 80-120 coins of daily trade income. Use this to buy iron (if no local deposit), coal, and herb stockpiles before winter.
            </p>
            <p className="text-ink-light leading-relaxed">
              Avoid trading food before day 50. Food prices spike during winter months (days 60-90), and selling early when prices are low and buying back later at inflated prices is a net loss. Build a coin reserve of at least 200 by day 45 to handle winter trade needs.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
            <div className="space-y-5">
              <div>
                <h3 className="font-semibold text-ink mb-1">What happens if I run out of food?</h3>
                <p className="text-ink-light">Settlers enter a starvation state after 2 days without food. Work efficiency drops to 25%, and they begin losing health at 5% per day. After 6 days of starvation, settlers die. The colony will also stop receiving migrants. Emergency options include: harvesting wild berry bushes, slaughtering livestock, or trading coins for food at a markup from the nearest caravan.</p>
              </div>
              <div>
                <h3 className="font-semibold text-ink mb-1">Should I build walls on day 1?</h3>
                <p className="text-ink-light">No. Walls before a stable economy will cripple your growth. The first raid event on standard difficulty triggers between days 25-35. Your goal is to have a stone quarry operational by day 10 and begin wall construction by day 20. Wooden palisades take 2 days to build; a simple four-wall perimeter costs roughly 600 timber and 200 labor. Build at least the front-facing wall (toward the enemy spawn direction) first.</p>
              </div>
              <div>
                <h3 className="font-semibold text-ink mb-1">How do I handle the first winter?</h3>
                <p className="text-ink-light">Winter (days 60-90) reduces farm output by 80% and increases fuel consumption by 50%. Prepare by stockpiling 300+ food and 150+ coal by day 55. Build a Kitchen to unlock preserved meals (3x shelf life). Assign settlers to indoor work (smithy, weaving) during winter; outdoor work efficiency drops by 40%. A Tavern with a fireplace reduces the happiness penalty from isolation during winter months.</p>
              </div>
            </div>
          </section>

          <p className="text-sm text-ink-faded mt-8 italic">Last updated: June 2026. Guide reflects Town to City version 2.4 standard difficulty settings. Resource values verified against community wiki data.</p>
        </div>

        <aside className="lg:w-[30%] space-y-6">
          <div className="bg-parchment-light border border-ink-faded/20 rounded-sm p-5">
            <h3 className="font-display text-lg font-semibold text-ink mb-3">Related Guides</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/defense-layout" className="text-accent hover:underline">Defense Layout Guide</a></li>
              <li><a href="/buildings" className="text-accent hover:underline">Complete Buildings Guide</a></li>
              <li><a href="/resource-management" className="text-accent hover:underline">Resource Management Guide</a></li>
              <li><a href="/settler-happiness" className="text-accent hover:underline">Settler Happiness & Migration</a></li>
            </ul>
          </div>

          <div className="bg-parchment-light border border-ink-faded/20 rounded-sm p-5">
            <h3 className="font-display text-lg font-semibold text-ink mb-3">Quick Checklist — Days 1-10</h3>
            <ul className="space-y-2 text-sm text-ink-light list-disc list-inside">
              <li>Scout map for forest, stone, iron, water</li>
              <li>Build Lumber Camp (2 workers)</li>
              <li>Plot 3 Farm Plots on fertile soil</li>
              <li>Build Housing for starting settlers</li>
              <li>Build Stone Quarry by day 5</li>
              <li>Dig Well centrally by day 7</li>
              <li>Build Storehouse by day 10</li>
              <li>Stockpile 200+ food before accepting migrants</li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
