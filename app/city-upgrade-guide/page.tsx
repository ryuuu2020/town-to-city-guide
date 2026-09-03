import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://towntocityguide.wiki/city-upgrade-guide",
  },
  title: "Town to City — Settlement Upgrade Guide (2026)",
  description: "Town to City upgrade guide — every settlement tier from Dwelling to Grandiose City, unlock requirements, population milestones, and how to grow without collapsing.",
};

export default function CityUpgradeGuidePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-10">
          <section>
            <h1 className="text-3xl font-bold text-gray-100 mb-4">Town to City Settlement Upgrade Guide — Every Tier from Dwelling to Grandiose City (2026)</h1>
            <p className="text-gray-300 leading-relaxed text-lg">
              Town to City structures its entire campaign around settlement upgrades. Your humble starting Dwelling grows through Hamlet, Village, Small Town, Town, City, Large City, and finally Grandiose City — and each tier unlocks new buildings, new citizen needs, and new ways for your economy to collapse if you upgrade too fast. The most common way to lose a run is not starvation or bankruptcy but upgrading before your food, jobs, and happiness infrastructure can support the next population surge. This guide covers every settlement tier, what each upgrade unlocks, the population and infrastructure requirements, and the exact preparation checklist you should complete before pressing the upgrade button. All milestones are tested against the latest 2026 patch.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-100 mb-4">Settlement Tiers Overview</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Each settlement tier has a population target, a set of building unlocks, and a new tier of citizen needs. Needs are the hidden difficulty curve: a Hamlet citizen is happy with food and shelter, but a City citizen demands education, entertainment, luxury goods, and short commutes. The table below summarizes every tier.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-300 border border-gray-700">
                <thead className="text-xs uppercase bg-gray-800 text-gray-400">
                  <tr>
                    <th className="px-4 py-3 border border-gray-700">Tier</th>
                    <th className="px-4 py-3 border border-gray-700">Population Target</th>
                    <th className="px-4 py-3 border border-gray-700">Key Unlocks</th>
                    <th className="px-4 py-3 border border-gray-700">New Citizen Needs</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-900 border-b border-gray-700">
                    <td className="px-4 py-3 font-bold text-green-400">Dwelling</td>
                    <td className="px-4 py-3">"5" - "20"</td>
                    <td className="px-4 py-3">Basic houses, farm, well, dirt roads</td>
                    <td className="px-4 py-3">Food, water, shelter</td>
                  </tr>
                  <tr className="bg-gray-800 border-b border-gray-700">
                    <td className="px-4 py-3 font-bold text-green-400">Hamlet</td>
                    <td className="px-4 py-3">"20" - "60"</td>
                    <td className="px-4 py-3">Market, woodcutter, forester, decorations</td>
                    <td className="px-4 py-3">Market access, basic decoration</td>
                  </tr>
                  <tr className="bg-gray-900 border-b border-gray-700">
                    <td className="px-4 py-3 font-bold text-yellow-400">Village</td>
                    <td className="px-4 py-3">"60" - "150"</td>
                    <td className="px-4 py-3">Tavern, chapel, workshops, warehouse</td>
                    <td className="px-4 py-3">Social venues, faith, job variety</td>
                  </tr>
                  <tr className="bg-gray-800 border-b border-gray-700">
                    <td className="px-4 py-3 font-bold text-yellow-400">Small Town</td>
                    <td className="px-4 py-3">"150" - "350"</td>
                    <td className="px-4 py-3">School, cobblestone roads, trade post, mine upgrades</td>
                    <td className="px-4 py-3">Education, trade goods, road quality</td>
                  </tr>
                  <tr className="bg-gray-900 border-b border-gray-700">
                    <td className="px-4 py-3 font-bold text-orange-400">Town</td>
                    <td className="px-4 py-3">"350" - "800"</td>
                    <td className="px-4 py-3">Town hall, advanced industry, clinic, brick roads</td>
                    <td className="px-4 py-3">Healthcare, luxury goods, employment balance</td>
                  </tr>
                  <tr className="bg-gray-800 border-b border-gray-700">
                    <td className="px-4 py-3 font-bold text-orange-400">City</td>
                    <td className="px-4 py-3">"800" - "1,500"</td>
                    <td className="px-4 py-3">Theater, university, dense housing, rail station</td>
                    <td className="px-4 py-3">Entertainment, higher education, commute time</td>
                  </tr>
                  <tr className="bg-gray-900 border-b border-gray-700">
                    <td className="px-4 py-3 font-bold text-red-400">Large City</td>
                    <td className="px-4 py-3">"1,500" - "3,000"</td>
                    <td className="px-4 py-3">Grand market, mass transit, monuments, heavy industry</td>
                    <td className="px-4 py-3">Prestige buildings, pollution control, transit coverage</td>
                  </tr>
                  <tr className="bg-gray-800">
                    <td className="px-4 py-3 font-bold text-red-400">Grandiose City</td>
                    <td className="px-4 py-3">"3,000"+</td>
                    <td className="px-4 py-3">Wonders, elite districts, endgame monuments</td>
                    <td className="px-4 py-3">Everything, at scale, all the time</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-100 mb-4">Upgrade Requirements and Triggers</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Upgrades are not automatic. Each tier requires meeting a population threshold plus a happiness condition — typically keeping average citizen happiness above the satisfied mark for a sustained period. This is the game's way of forcing you to consolidate before expanding. If your happiness is marginal, new arrivals stop coming and the upgrade stalls indefinitely, no matter how many houses you build.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Population growth comes from the station: new families arrive periodically and ask for housing. If you have vacant homes, food surplus, and happy citizens, they move in. If any of the three fails, arrivals decline or leave. This means population is a lagging indicator — you build capacity first, then citizens fill it. Planning an upgrade means building the housing, food production, and services for the next tier's population before the citizens arrive, not after.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Some tiers also gate on specific buildings. You cannot reach Small Town without a functioning trade connection, and you cannot reach City without a town hall and basic healthcare coverage. Check the upgrade panel early — discovering a missing requirement after you hit the population target wastes weeks of growth momentum.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-100 mb-4">Pre-Upgrade Checklist by Tier</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The checklist below shows what you should have in place before triggering each upgrade. The resource column reflects the typical stockpile needed to survive the population surge that follows the upgrade — new citizens consume food and goods immediately, but their workplaces take time to staff.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-300 border border-gray-700">
                <thead className="text-xs uppercase bg-gray-800 text-gray-400">
                  <tr>
                    <th className="px-4 py-3 border border-gray-700">Upgrade</th>
                    <th className="px-4 py-3 border border-gray-700">Infrastructure to Build First</th>
                    <th className="px-4 py-3 border border-gray-700">Recommended Stockpile</th>
                    <th className="px-4 py-3 border border-gray-700">Common Failure</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-900 border-b border-gray-700">
                    <td className="px-4 py-3 font-bold text-gray-100">Dwelling → Hamlet</td>
                    <td className="px-4 py-3">Second farm, market site, "4" extra houses</td>
                    <td className="px-4 py-3">"30" days food, "200" gold</td>
                    <td className="px-4 py-3">Upgrading with no market — new citizens tank happiness</td>
                  </tr>
                  <tr className="bg-gray-800 border-b border-gray-700">
                    <td className="px-4 py-3 font-bold text-gray-100">Hamlet → Village</td>
                    <td className="px-4 py-3">Tavern, warehouse, "2" workshops, wood supply chain</td>
                    <td className="px-4 py-3">"45" days food, "100" planks, "500" gold</td>
                    <td className="px-4 py-3">No warehouse — market overflows and goods spoil</td>
                  </tr>
                  <tr className="bg-gray-900 border-b border-gray-700">
                    <td className="px-4 py-3 font-bold text-gray-100">Village → Small Town</td>
                    <td className="px-4 py-3">School, trade post, cobblestone main road, second warehouse</td>
                    <td className="px-4 py-3">"60" days food, trade goods worth "1,000" gold</td>
                    <td className="px-4 py-3">Roads too narrow — congestion stalls all deliveries</td>
                  </tr>
                  <tr className="bg-gray-800 border-b border-gray-700">
                    <td className="px-4 py-3 font-bold text-gray-100">Small Town → Town</td>
                    <td className="px-4 py-3">Town hall, clinic, industrial zone with smelter/forge chain</td>
                    <td className="px-4 py-3">"90" days food, "200" tools, "2,000" gold</td>
                    <td className="px-4 py-3">Healthcare gap — sickness event wrecks happiness</td>
                  </tr>
                  <tr className="bg-gray-900 border-b border-gray-700">
                    <td className="px-4 py-3 font-bold text-gray-100">Town → City</td>
                    <td className="px-4 py-3">Theater, dense housing district, rail station, "3"+ warehouses</td>
                    <td className="px-4 py-3">"90" days food, luxury goods buffer, "5,000" gold</td>
                    <td className="px-4 py-3">Entertainment shortage — dense housing without venues fails</td>
                  </tr>
                  <tr className="bg-gray-800">
                    <td className="px-4 py-3 font-bold text-gray-100">City → Large City</td>
                    <td className="px-4 py-3">Mass transit lines, pollution buffers, grand market, dedicated industrial ring</td>
                    <td className="px-4 py-3">"120" days food, full production chains, "10,000" gold</td>
                    <td className="px-4 py-3">Commute collapse — citizens cannot reach jobs, mass unemployment</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-100 mb-4">The Upgrade Rhythm — Grow, Consolidate, Upgrade</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The safest way to play Town to City is a three-beat rhythm. In the grow phase, you build housing aggressively and accept new arrivals until you hit the next population threshold. In the consolidate phase, you stop expanding entirely and fix everything the growth broke: food deficits, unhappy districts, congested roads, missing services. Only when happiness stabilizes above the satisfied mark do you enter the upgrade phase and trigger the next tier.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Most failed runs skip the consolidate phase. The population threshold is usually reached before the infrastructure is ready because housing is cheap and fast while production chains are expensive and slow. A city that hits "350" citizens with a Town upgrade available but only one farm and no clinic is a city about to enter a death spiral — the upgrade brings new needs faster than you can build answers.
            </p>
            <p className="text-gray-300 leading-relaxed">
              A useful rule: your food production should exceed consumption by at least "30%" before any upgrade, and your treasury should cover "60" days of building upkeep. If either number is short, delay the upgrade. The upgrade button will still be there in a season; a collapsed city will not recover.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-100 mb-4">FAQ</h2>
            <div className="space-y-4">
              <details className="group">
                <summary className="text-lg font-semibold text-gray-100 cursor-pointer hover:text-blue-400 transition-colors">Why did new families stop arriving at my station?</summary>
                <p className="text-gray-300 mt-2 pl-4 border-l-2 border-gray-700">
                  Arrivals depend on three things: vacant housing, food surplus, and average happiness. Check all three. The most common blocker is happiness — if your citizens are unsatisfied, the settlement's reputation drops and families stop coming even with empty houses available. Fix the lowest-rated needs first (usually shown on the happiness panel), add decorations and a tavern near residential areas, and arrivals typically resume within a few days. Also check that your station is connected to the road network; a disconnected station silently blocks all immigration.
                </p>
              </details>
              <details className="group">
                <summary className="text-lg font-semibold text-gray-100 cursor-pointer hover:text-blue-400 transition-colors">Should I upgrade as soon as the button becomes available?</summary>
                <p className="text-gray-300 mt-2 pl-4 border-l-2 border-gray-700">
                  Almost never. The upgrade button appears when you meet the minimum thresholds, but minimum thresholds mean minimum resilience. Wait until you have a "30%" food surplus, a healthy treasury, and the new tier's key buildings already planned or pre-built. The population surge after an upgrade immediately stresses food, jobs, and services. Upgrading early turns that surge into a crisis; upgrading prepared turns it into momentum. The only exception is when a tier unlocks a building that solves an active crisis — for example, rushing Small Town for the trade post when your economy desperately needs imports.
                </p>
              </details>
              <details className="group">
                <summary className="text-lg font-semibold text-gray-100 cursor-pointer hover:text-blue-400 transition-colors">What is the hardest upgrade transition in the game?</summary>
                <p className="text-gray-300 mt-2 pl-4 border-l-2 border-gray-700">
                  Town to City, at around "800" citizens. This is where the game shifts from a village builder to a true city builder: entertainment and higher education become mandatory needs, dense housing changes your layout economics, commute times start mattering, and traffic congestion becomes a real failure mode for the first time. Prepare by building your theater and dense housing district before the upgrade, adding a third warehouse, and redesigning your main roads to cobblestone or brick. Cities that treat this transition like earlier ones — just more houses and farms — reliably collapse into unemployment and congestion within one season.
                </p>
              </details>
              <details className="group">
                <summary className="text-lg font-semibold text-gray-100 cursor-pointer hover:text-blue-400 transition-colors">Can my settlement be demoted if things go badly?</summary>
                <p className="text-gray-300 mt-2 pl-4 border-l-2 border-gray-700">
                  Your settlement tier does not formally demote, but the practical effect is the same: if population collapses below a tier's threshold and stays there, you lose access to that tier's growth bonuses and new arrivals stop until you stabilize. Unlocked buildings remain, which actually helps recovery — a city that falls from "800" to "500" citizens keeps its theater and clinic, making the happiness rebuild much faster than the first climb. Treat a population crash as a consolidation phase, fix food and happiness, and the population recovers within a few seasons.
                </p>
              </details>
            </div>
          </section>

          <p className="text-sm text-gray-500 mt-8 italic">Last updated: July 18, 2026. Based on Town to City latest patch. Upgrade requirements tested across all settlement tiers. Fan guide — not affiliated with the developer.</p>
        </div>

        <aside className="lg:w-[30%] space-y-6">
          <div className="bg-gray-800 border border-gray-700 rounded-sm p-5">
            <h3 className="text-xl font-semibold text-gray-100 mb-3">Related Guides</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/beginner-colony-guide" className="text-blue-400 hover:underline">Beginner Colony Guide</a></li>
              <li><a href="/citizen-happiness-guide" className="text-blue-400 hover:underline">Citizen Happiness Guide</a></li>
              <li><a href="/population-guide" className="text-blue-400 hover:underline">Population Guide</a></li>
              <li><a href="/economy" className="text-blue-400 hover:underline">Economy Guide</a></li>
              <li><a href="/layouts" className="text-blue-400 hover:underline">City Layouts &amp; Planning</a></li>
              <li><a href="/buildings" className="text-blue-400 hover:underline">Buildings Guide</a></li>
            </ul>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-sm p-5">
            <h3 className="text-xl font-semibold text-gray-100 mb-3">Quick Tips</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Keep a "30%" food surplus before any upgrade</li>
              <li>Pre-build next-tier services before pressing upgrade</li>
              <li>Town → City at "800" citizens is the hardest transition</li>
              <li>Grow, consolidate, then upgrade — never skip consolidation</li>
              <li>Treasury should cover "60" days of upkeep before upgrading</li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
