export const metadata = {
  title: "Town to City Defense Layout — Best Wall Designs & Fortification Guide (2026)",
  description: "Complete Town to City defense layout guide covering wall types, gate placement, tower positioning, moat design, and layered defense strategies for optimal colony protection.",
};

export default function DefenseLayoutPage() {
  const wallComparison = [
    { type: "Wooden Palisade", material: "Timber", hp: 800, cost: "150 Wood, 50 Labor", buildTime: "2 days", bestUse: "Early game perimeter, temporary outposts" },
    { type: "Stone Wall (Basic)", material: "Stone Block", hp: "2,500", cost: "400 Stone, 120 Labor", buildTime: "5 days", bestUse: "Mid-game main settlement wall" },
    { type: "Reinforced Stone", material: "Stone + Iron Banding", hp: "4,200", cost: "600 Stone, 80 Iron, 200 Labor", buildTime: "8 days", bestUse: "Late game inner keep, vault protection" },
    { type: "Fortified Bastion", material: "Stone + Steel Core", hp: "6,500", cost: "800 Stone, 150 Steel, 300 Labor", buildTime: "12 days", bestUse: "Treasure vault, throne room enclosure" },
    { type: "Earthwork Rampart", material: "Compacted Earth + Timber", hp: "1,200", cost: "200 Earth, 80 Wood, 60 Labor", buildTime: "3 days", bestUse: "Outer perimeter, siege absorption" },
    { type: "Iron Gate", material: "Iron", hp: "3,000", cost: "200 Iron, 80 Labor", buildTime: "3 days", bestUse: "Gatehouse reinforcement, choke points" },
  ];

  const threatDefense = [
    { threat: "Bandit Raiders", wallEffectiveness: "High — Wood/Stone stops most", towerEffectiveness: "Very High — Archers decimate", moatEffectiveness: "Moderate — Slows approach", recommendedLayout: "Single stone wall + corner towers" },
    { threat: "Siege Engines", wallEffectiveness: "Moderate — Trebuchets breach stone", towerEffectiveness: "High — Catapults counter-siege", moatEffectiveness: "High — Blocks battering rams", recommendedLayout: "Double wall + moat + counter-siege towers" },
    { threat: "Tunnelers", wallEffectiveness: "Low — Bypass walls entirely", towerEffectiveness: "Low — No line of sight", moatEffectiveness: "Very High — Floods tunnels", recommendedLayout: "Deep moat + inner patrol paths" },
    { threat: "Monster Horde", wallEffectiveness: "Very High — HP pool absorbs", towerEffectiveness: "High — AoE ballista towers", moatEffectiveness: "Moderate — Large creatures ford", recommendedLayout: "Reinforced stone + fire towers + spike pits" },
    { threat: "Dragon/Wyvern", wallEffectiveness: "Low — Bypasses ground walls", towerEffectiveness: "High — Scorpion bolts vs air", moatEffectiveness: "None — Flies over", recommendedLayout: "Anti-air ballista towers on elevated platforms" },
    { threat: "Night Assassins", wallEffectiveness: "Moderate — Can climb wood", towerEffectiveness: "Very High — Watchtowers detect stealth", moatEffectiveness: "Low — Swim silently", recommendedLayout: "Stone walls + overlapping torch towers" },
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-10">
          <section>
            <h1 className="chapter-heading">Town to City Defense Layout — Best Wall Designs & Fortification Guide</h1>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
              Defense is the backbone of survival in Town to City. Without robust fortifications, even the most prosperous colony can fall to raiders, siege engines, or wandering monster hordes within minutes. This guide breaks down every defensive structure available in the game — from humble wooden palisades to reinforced stone bastions — and explains how to layer them into an impenetrable stronghold. Whether you are securing your first logging camp or fortifying a late-game capital, the principles here will keep your settlers safe and your treasury intact.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Wall Types and When to Upgrade</h2>
            <p className="text-ink-light leading-relaxed mb-4">
              Walls are your primary line of defense. Each tier has a distinct role in the progression curve. Building too high a tier too early drains resources needed for economic growth; building too low leaves you vulnerable during raids. The table below compares every wall type in the game.
            </p>
            <div className="overflow-x-auto">
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Wall Type</th>
                    <th>Material</th>
                    <th>HP</th>
                    <th>Cost</th>
                    <th>Build Time</th>
                    <th>Best Use</th>
                  </tr>
                </thead>
                <tbody>
                  {wallComparison.map((w, i) => (
                    <tr key={i}>
                      <td className="font-semibold">{w.type}</td>
                      <td>{w.material}</td>
                      <td>{w.hp.toLocaleString()}</td>
                      <td>{w.cost}</td>
                      <td>{w.buildTime}</td>
                      <td>{w.bestUse}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-ink-faded text-sm mt-3">
              Pro tip: Wooden Palisades can be upgraded to Stone Wall (Basic) by paying the cost difference, saving 30% of the original timber investment.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Gate Placement Strategy</h2>
            <p className="text-ink-light leading-relaxed mb-3">
              Gates are the single most vulnerable point in any wall circuit. A poorly placed gate invites disaster — enemies will pathfind directly to it and concentrate fire. Follow these placement rules:
            </p>
            <ul className="list-disc list-inside text-ink-light space-y-2 mb-4">
              <li><strong className="text-ink">Never face the main gate toward the enemy spawn direction.</strong> Use terrain — cliffs, rivers, dense forest — to force attackers around to a defensible approach angle.</li>
              <li><strong className="text-ink">Always flank gates with towers on both sides.</strong> Overlapping fields of fire from two towers will destroy anything that reaches the gate.</li>
              <li><strong className="text-ink">Build an inner gatehouse (double-gate system).</strong> If the outer gate falls, enemies enter a killing corridor trapped between the outer and inner gates with no cover.</li>
              <li><strong className="text-ink">Sally ports — hidden side gates — are essential.</strong> During a siege, a sally port lets your melee units exit to destroy enemy siege engines from behind, then retreat before reinforcements arrive.</li>
            </ul>
            <p className="text-ink-light leading-relaxed">
              Iron Gates should be reserved for the main gatehouse and any choke-point corridors. Using iron on secondary gates is wasteful; reinforced wood or basic stone suffices for side entrances that rarely see combat.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Tower Positioning and Selection</h2>
            <p className="text-ink-light leading-relaxed mb-4">
              Towers multiply your defensive firepower by granting elevated attack range, line-of-sight bonuses, and specialized damage types. The three tower varieties in Town to City are:
            </p>
            <div className="space-y-3 mb-4">
              <div>
                <span className="font-semibold text-ink">Archer Tower</span>
                <span className="text-ink-faded"> — Quick to build, fires standard arrows. Best for early game and supplementing coverage gaps. Upgrade with fire arrows (coal + oil) for +40% damage vs wooden siege equipment.</span>
              </div>
              <div>
                <span className="font-semibold text-ink">Ballista Tower</span>
                <span className="text-ink-faded"> — Slow rate of fire but pierces armor and deals massive single-target damage. Essential against armored knights, trolls, and siege towers. Can be upgraded to Scorpion Bolts for anti-air capability against dragons and wyverns.</span>
              </div>
              <div>
                <span className="font-semibold text-ink">Boiling Oil Cauldron</span>
                <span className="text-ink-faded"> — Mounted directly above gates and wall sections. Dumps area-denial damage that persists for 8 seconds. Instantly kills ladder climbers. Costs oil per use, so assign a dedicated oil production line before deploying more than two.</span>
              </div>
            </div>
            <p className="text-ink-light leading-relaxed">
              Optimal tower spacing places one tower within overlapping range of its neighbors — roughly every 12-15 wall tiles on flat terrain. On hilly maps, reduce spacing to 8-10 tiles since elevation blocks line of sight more aggressively.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Moats and Terrain Defenses</h2>
            <p className="text-ink-light leading-relaxed mb-3">
              Moats are force multipliers that don&apos;t cost maintenance once dug. A dry moat (3 tiles wide, 2 deep) slows infantry to a crawl and prevents battering rams from reaching walls. A wet moat (requires a water source) adds drowning damage and completely blocks tunnelers. The labor cost is significant — approximately 400 labor-days for a full perimeter — but the return on investment during sieges is unmatched.
            </p>
            <p className="text-ink-light leading-relaxed mb-3">
              Natural terrain should never be wasted. Cliff edges count as impassable wall segments and require zero resources. Rivers act as permanent wet moats. Dense forests outside your walls slow enemy movement and can be set ablaze by fire arrows for area damage. A colony built into a mountain pass needs only two walls — the mountain handles the rest.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Layered Defense Doctrine</h2>
            <p className="text-ink-light leading-relaxed mb-4">
              The strongest colonies use a layered defense — each layer bleeds the attacker before they reach the next. A complete layered setup has four rings:
            </p>
            <ol className="list-decimal list-inside text-ink-light space-y-2 mb-4">
              <li><strong className="text-ink">Outer Perimeter:</strong> Earthwork ramparts, spike pits, and forward watchtowers. Purpose: Alert you early and soften the initial wave.</li>
              <li><strong className="text-ink">Outer Wall:</strong> Stone wall with archer towers. Purpose: Main engagement line. Holds the majority of your ranged defenders.</li>
              <li><strong className="text-ink">Kill Zone / Moat:</strong> The space between outer and inner walls. Traps, oil cauldrons, and overlapping tower fire turn this into a death funnel.</li>
              <li><strong className="text-ink">Inner Keep:</strong> Reinforced stone bastion with ballista towers. Purpose: Last stand. Protects your vault, throne room, and critical settlers.</li>
            </ol>
            <div className="overflow-x-auto">
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Threat Type</th>
                    <th>Wall Effectiveness</th>
                    <th>Tower Effectiveness</th>
                    <th>Moat Effectiveness</th>
                    <th>Recommended Layout</th>
                  </tr>
                </thead>
                <tbody>
                  {threatDefense.map((t, i) => (
                    <tr key={i}>
                      <td className="font-semibold">{t.threat}</td>
                      <td>{t.wallEffectiveness}</td>
                      <td>{t.towerEffectiveness}</td>
                      <td>{t.moatEffectiveness}</td>
                      <td>{t.recommendedLayout}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
            <div className="space-y-5">
              <div>
                <h3 className="font-semibold text-ink mb-1">When should I upgrade from wood to stone walls?</h3>
                <p className="text-ink-light">Upgrade after establishing steady stone production — typically around 25-30 settlers and a tier-2 quarry. Wood palisades hold fine against early wolf packs and bandit scouts (days 1-20). The first siege event triggers around day 30 on standard difficulty, which is your deadline for having at least a stone-walled perimeter on the primary approach.</p>
              </div>
              <div>
                <h3 className="font-semibold text-ink mb-1">Do walls need continuous coverage or can I leave gaps at cliffs?</h3>
                <p className="text-ink-light">Cliffs and deep water count as natural barriers — enemies cannot path through them. You can safely leave these segments unwalled. However, check the cliff edges carefully: any tile that shows a slope indicator can be climbed. True cliffs are completely vertical and marked with a darker rock texture on the minimap.</p>
              </div>
              <div>
                <h3 className="font-semibold text-ink mb-1">What is the best defense against late-game dragon attacks?</h3>
                <p className="text-ink-light">Dragons bypass ground walls entirely, so your defense must be vertical. Build Ballista Towers upgraded with Scorpion Bolts on elevated platforms (at least +3 height tiles). Position them centrally so their range bubbles cover the entire colony. Supplement with fire-resistant roof tiles on critical buildings (stone roofing upgrade). A dragon raid without scorpion coverage will burn 40-60% of a wooden colony in one pass.</p>
              </div>
            </div>
          </section>

          <p className="text-sm text-ink-faded mt-8 italic">Last updated: June 2026. Based on Town to City version 2.4 gameplay data. Wall HP values verified against latest patch notes.</p>
        </div>

        <aside className="lg:w-[30%] space-y-6">
          <div className="bg-parchment-light border border-ink-faded/20 rounded-sm p-5">
            <h3 className="font-display text-lg font-semibold text-ink mb-3">Related Guides</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/buildings" className="text-accent hover:underline">Complete Buildings Guide</a></li>
              <li><a href="/beginner-colony-guide" className="text-accent hover:underline">Beginner Colony Setup Guide</a></li>
              <li><a href="/resource-management" className="text-accent hover:underline">Resource Management Guide</a></li>
              <li><a href="/siege-survival" className="text-accent hover:underline">Siege Survival Tactics</a></li>
            </ul>
          </div>

          <div className="bg-parchment-light border border-ink-faded/20 rounded-sm p-5">
            <h3 className="font-display text-lg font-semibold text-ink mb-3">Key Takeaways</h3>
            <ul className="space-y-2 text-sm text-ink-light list-disc list-inside">
              <li>Upgrade to stone walls before day 30</li>
              <li>Always flank gates with double towers</li>
              <li>Dig a moat before upgrading inner walls</li>
              <li>Use terrain (cliffs, rivers) as free walls</li>
              <li>Ballista towers with Scorpion Bolts for air defense</li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
