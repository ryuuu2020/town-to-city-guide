import Link from "next/link";

export const metadata = {
  title: "Town to City Villager Happiness Guide — Needs, Mood & Productivity Optimization",
  description: "Keep villagers happy and productive with complete happiness guide. Covers needs, mood modifiers, recreation, and productivity bonuses.",
};

const happinessFactors = [
  { factor: "Food", effect: "+15 to +30 Mood", improve: "Build Granaries, diversify crops with Wheat + Berries + Fish", penalty: "-20 Mood, starvation events trigger within 3 days" },
  { factor: "Housing", effect: "+10 to +25 Mood", improve: "Upgrade from Huts to Cottages, then Stone Houses", penalty: "-15 Mood, homeless villagers refuse specialized labor" },
  { factor: "Recreation", effect: "+5 to +20 Mood", improve: "Build a Tavern (early), Theater (mid), Festival Square (late)", penalty: "-10 Mood, work speed drops by 15%" },
  { factor: "Safety", effect: "+10 to +20 Mood", improve: "Station Guards, build Watchtowers, maintain Walls HP above 50%", penalty: "-15 Mood, villagers flee during raids below 30 Mood" },
  { factor: "Health", effect: "+5 to +15 Mood", improve: "Build a Healer's Hut, research Herbalism, keep Plague Doctor employed", penalty: "-10 Mood, disease outbreaks reduce workforce by 40%" },
  { factor: "Jobs", effect: "+10 to +25 Mood", improve: "Match villagers to preferred jobs, avoid unemployment above 5%", penalty: "-20 Mood, idle villagers spread discontent to neighbors" },
];

const moodThresholds = [
  { level: "Furious (0-19)", bonus: "-30% productivity", unlocks: "Riots possible, villagers leave permanently" },
  { level: "Unhappy (20-39)", bonus: "-10% productivity", unlocks: "No specialization bonuses, tax income halved" },
  { level: "Neutral (40-59)", bonus: "Baseline (0%)", unlocks: "Standard labor output, no bonuses or penalties" },
  { level: "Content (60-79)", bonus: "+15% productivity", unlocks: "Specialists work 15% faster, market prices improve 10%" },
  { level: "Happy (80-94)", bonus: "+30% productivity", unlocks: "Birth rate +25%, immigration attracts skilled workers" },
  { level: "Ecstatic (95-100)", bonus: "+50% productivity", unlocks: "Legendary artisan spawns, free Festival events trigger" },
];

export default function VillagerHappinessPage() {
  return (
    <div className="min-h-screen bg-parchment text-ink">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-ink mb-3">
            Town to City Villager Happiness Guide
          </h1>
          <p className="text-lg text-ink-light">
            Keep villagers happy and productive with this complete happiness guide.
            Covers all six happiness factors, mood thresholds, recreation strategy,
            and productivity optimization — everything you need to build a thriving settlement.
          </p>
          <p className="text-sm text-ink-light mt-2">
            Last updated: July 2, 2026
          </p>
        </header>

        {/* Intro Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-ink mb-4">Understanding Villager Happiness</h2>
          <p className="text-ink-light leading-relaxed mb-4">
            Villager happiness in Town to City is not just a cosmetic stat — it directly governs
            your settlement's productivity, population growth, and ability to withstand crises.
            The happiness system tracks six core factors: Food, Housing, Recreation, Safety, Health,
            and Jobs. Each factor contributes a weighted score to the overall Mood meter, which
            ranges from 0 (Furious) to 100 (Ecstatic).
          </p>
          <p className="text-ink-light leading-relaxed mb-4">
            When your average Mood drops below 40, you enter a danger zone where productivity
            penalties compound and villagers begin to leave. Maintaining a stable 60+ Mood should be
            your baseline goal; pushing past 80 unlocks significant bonuses including increased birth
            rates, immigration of skilled specialists, and free Festival events that boost morale
            across the entire settlement. The key insight is that happiness is a system of
            interconnected dependencies — neglecting one area (like Recreation) can cascade into
            failures in others (like Jobs, as unhappy workers produce less food).
          </p>
          <p className="text-ink-light leading-relaxed">
            Early game, prioritize Food and Housing to reach the Neutral threshold. Mid-game, invest
            in Recreation and Safety to push into Content territory. Late game, optimize Health and
            Jobs to sustain Ecstatic levels through winter seasons and raid events. Each factor
            decays at different rates: Food depletes daily, Housing satisfaction drops when
            population exceeds capacity, and Safety plummets after each raid if defenses were breached.
          </p>
        </section>

        {/* Happiness Factors Table */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-ink mb-4">Happiness Factors Breakdown</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-parchment-light rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-parchment-light border-b border-ink/10">
                  <th className="text-left p-4 text-ink font-semibold">Factor</th>
                  <th className="text-left p-4 text-ink font-semibold">Effect on Mood</th>
                  <th className="text-left p-4 text-ink font-semibold">How to Improve</th>
                  <th className="text-left p-4 text-ink font-semibold">Penalty if Neglected</th>
                </tr>
              </thead>
              <tbody>
                {happinessFactors.map((row, i) => (
                  <tr key={i} className="border-b border-ink/5 hover:bg-ink/5">
                    <td className="p-4 text-ink font-medium">{row.factor}</td>
                    <td className="p-4 text-accent font-semibold">{row.effect}</td>
                    <td className="p-4 text-ink-light text-sm leading-relaxed">{row.improve}</td>
                    <td className="p-4 text-red-400 text-sm leading-relaxed">{row.penalty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Mood Thresholds Table */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-ink mb-4">Mood Thresholds and Bonuses</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-parchment-light rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-parchment-light border-b border-ink/10">
                  <th className="text-left p-4 text-ink font-semibold">Mood Level</th>
                  <th className="text-left p-4 text-ink font-semibold">Productivity Bonus</th>
                  <th className="text-left p-4 text-ink font-semibold">Unlocks</th>
                </tr>
              </thead>
              <tbody>
                {moodThresholds.map((row, i) => (
                  <tr key={i} className="border-b border-ink/5 hover:bg-ink/5">
                    <td className="p-4 text-ink font-medium">{row.level}</td>
                    <td className="p-4 text-accent font-semibold">{row.bonus}</td>
                    <td className="p-4 text-ink-light text-sm leading-relaxed">{row.unlocks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Deep Dive */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-ink mb-4">Deep Dive: Recreation and Entertainment</h2>
          <p className="text-ink-light leading-relaxed mb-4">
            Recreation is the most commonly overlooked happiness factor, and it is often the reason
            mid-game settlements plateau. Each recreation building serves a radius of approximately
            12 tiles and provides diminishing returns if villagers have to travel too far. The Tavern
            (unlocked at Population 20) provides a flat +5 Mood to all villagers within range and
            consumes 1 Ale per day. The Theater (Population 50) doubles the effect to +10 Mood and
            employs 2 Entertainer specialists. The Festival Square (Population 100) is the ultimate
            recreation building, granting +20 Mood in a massive 25-tile radius and triggering
            periodic Festival events that last 3 days with doubled productivity.
          </p>
          <p className="text-ink-light leading-relaxed">
            A common mistake is building a single Tavern centrally and expecting it to cover the
            entire settlement. Instead, place recreation buildings near housing clusters. A good rule
            of thumb: one recreation building per 25 villagers, with buildings spaced so no villager
            walks more than 8 tiles to reach one. Recreation satisfaction decays at 2 points per day
            without coverage, meaning a village without any entertainment will hit the recreation
            penalty cap within 10 days.
          </p>
        </section>

        {/* Strategy Tips */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-ink mb-4">Happiness Optimization Strategy</h2>
          <div className="space-y-4">
            <div className="bg-parchment-light p-5 rounded-lg border border-ink/10">
              <h3 className="text-lg font-semibold text-ink mb-2">Early Game (Pop 0-30)</h3>
              <p className="text-ink-light text-sm leading-relaxed">
                Focus on Food diversity (at least 3 sources) and Housing capacity at 110% of
                population. Build a Healer's Hut before Population 15 to prevent disease from
                tanking your Mood. A single Guard post near the entrance keeps Safety above 50.
                Accept Neutral (40+) Mood as good enough until you have surplus resources.
              </p>
            </div>
            <div className="bg-parchment-light p-5 rounded-lg border border-ink/10">
              <h3 className="text-lg font-semibold text-ink mb-2">Mid Game (Pop 30-80)</h3>
              <p className="text-ink-light text-sm leading-relaxed">
                Add a Tavern and Theater, upgrade all housing to Stone Houses, and ensure at
                least 95% employment. Watchtowers become essential as raid frequency increases.
                Target Content (60+) Mood to unlock the specialist productivity bonus, which
                creates a positive feedback loop — faster workers produce more resources,
                which funds more happiness buildings.
              </p>
            </div>
            <div className="bg-parchment-light p-5 rounded-lg border border-ink/10">
              <h3 className="text-lg font-semibold text-ink mb-2">Late Game (Pop 80+)</h3>
              <p className="text-ink-light text-sm leading-relaxed">
                Build the Festival Square, employ a Plague Doctor full-time, and micromanage
                villager job assignments to match their preferences (visible in the villager
                inspect panel). A Hospital upgrade for the Healer's Hut provides passive
                health regeneration that prevents disease cascades. At this stage, sustaining
                Ecstatic (95+) Mood rewards you with Legendary Artisans — unique villagers
                with doubled output that can single-handedly carry your economy.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-ink mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="bg-parchment-light p-5 rounded-lg border border-ink/10">
              <h3 className="text-lg font-semibold text-ink mb-2">How many recreation buildings per villager?</h3>
              <p className="text-ink-light text-sm leading-relaxed">
                Plan for one recreation building per 25 villagers. This scales from 1 Tavern at Population 25
                to roughly 4 total buildings (mix of Taverns, Theaters, and a Festival Square) at Population 100.
                The key metric is coverage radius, not raw count — ensure no villager walks more than 8 tiles
                to reach a recreation building. Use the Happiness overlay (press H) to check for red zones
                indicating no coverage.
              </p>
            </div>
            <div className="bg-parchment-light p-5 rounded-lg border border-ink/10">
              <h3 className="text-lg font-semibold text-ink mb-2">Does happiness affect birth rates?</h3>
              <p className="text-ink-light text-sm leading-relaxed">
                Yes, significantly. At Neutral (40-59) Mood, birth rate is the baseline 1 birth per 50 population
                per season. At Happy (80-94), birth rate increases by 25%. At Ecstatic (95+), the rate doubles
                to 2 births per 50 population per season. Conversely, at Unhappy (20-39), birth rates drop by 50%,
                and at Furious (0-19), births stop entirely and villagers begin emigrating. Housing capacity must
                also be available for new births to occur — an overcrowded settlement will not produce children
                regardless of Mood.
              </p>
            </div>
            <div className="bg-parchment-light p-5 rounded-lg border border-ink/10">
              <h3 className="text-lg font-semibold text-ink mb-2">Best early game happiness strategy?</h3>
              <p className="text-ink-light text-sm leading-relaxed">
                The most efficient early game strategy is the "Food-First Triangle": build a Granary (Food),
                upgrade your starting Huts to Cottages (Housing), and immediately assign a Guard (Safety).
                These three actions together provide a baseline +25 to +40 Mood, pushing you well into
                Neutral territory. Avoid building a Healer's Hut too early — it is expensive and only
                becomes necessary around Population 15 when disease risk activates. Rush the Tavern at
                Population 18-20 as your first Recreation building to prevent the recreation penalty from
                kicking in. Do not overbuild housing early; empty houses drain maintenance resources
                without providing happiness.
              </p>
            </div>
          </div>
        </section>

        {/* Related Guides */}
        <aside className="border-t border-ink/10 pt-8">
          <h2 className="text-xl font-semibold text-ink mb-4">Related Guides</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/production-chain" className="text-accent hover:underline text-sm">
                Production Chain Guide — Maximize resource efficiency
              </Link>
            </li>
            <li>
              <Link href="/defense-layout" className="text-accent hover:underline text-sm">
                Defense Layout Guide — Protect your settlement from raids
              </Link>
            </li>
            <li>
              <Link href="/beginner-colony-guide" className="text-accent hover:underline text-sm">
                Beginner Colony Guide — First 30 days survival walkthrough
              </Link>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
}
