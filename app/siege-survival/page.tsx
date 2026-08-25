export const metadata = {
  alternates: {
    canonical: "https://towntocityguide.wiki/siege-survival",
  },
  title: "Siege Survival Guide | Town To City",
  description:
    "Town to City siege survival guide covering outer-wall planning, emergency stockpiles, choke streets, and how to absorb attacks without wrecking your economy.",
};

const DEFENSE_LAYERS = [
  {
    layer: "Outer Approach",
    goal: "Slow attackers before contact with dense districts",
    tools: "Curved roads, walls around true choke points, open fire lanes",
  },
  {
    layer: "Working Core",
    goal: "Keep food, repairs, and hauling alive during the attack",
    tools: "Inner storage, workshop access, fallback market access",
  },
  {
    layer: "Final Hold",
    goal: "Protect irreplaceable services and housing clusters",
    tools: "Short retreat routes, compact lanes, defender regroup space",
  },
];

export default function SiegeSurvivalPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
      <h1 className="font-display text-3xl text-blueprint-text">Siege Survival Guide</h1>
      <p className="text-blueprint-muted leading-relaxed">
        Defensive play in Town to City works best when it is integrated into the city plan instead of
        bolted on at the last second. Outer walls, fallback streets, and reserve storage should all be
        planned before the first real pressure spike, otherwise every defense upgrade arrives too late
        and drains the economy at exactly the wrong moment.
      </p>
      <p className="text-blueprint-muted leading-relaxed">
        A stable defensive city is not the one with the biggest wall. It is the one where attackers are
        forced to approach through controlled lanes while your economic core keeps functioning behind
        the line. If a siege shuts down food, repairs, and traffic at the same time, your defenses were
        never really complete.
      </p>
      <p className="text-blueprint-muted leading-relaxed">
        Good siege planning is really a city-layout discipline problem. You are deciding which streets
        can be sacrificed, which districts must keep working, and where defenders can fall back
        without turning the market square into a battlefield. If those answers do not exist on the
        map before the attack starts, the city is improvising under pressure.
      </p>

      <div className="bluepr-card p-6">
        <ul className="list-disc list-inside space-y-2 text-sm text-blueprint-text leading-relaxed">
          <li>Use narrow approach roads to slow attackers before they touch dense housing.</li>
          <li>Keep emergency food and repair materials inside the protected core district.</li>
          <li>Do not overextend walls beyond what your economy can actually maintain.</li>
          <li>Design fallback streets so defenders can retreat without dragging enemies through markets.</li>
        </ul>
      </div>

      <section className="bluepr-card p-6">
        <h2 className="font-display text-xl text-blueprint-text mb-4">Build Defense In Layers</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-blueprint-border">
                <th className="py-3 pr-4 font-semibold text-blueprint-text">Layer</th>
                <th className="py-3 pr-4 font-semibold text-blueprint-text">Goal</th>
                <th className="py-3 font-semibold text-blueprint-text">What To Build</th>
              </tr>
            </thead>
            <tbody>
              {DEFENSE_LAYERS.map((row) => (
                <tr key={row.layer} className="border-b border-blueprint-border/70 last:border-0">
                  <td className="py-3 pr-4 font-medium text-blueprint-text">{row.layer}</td>
                  <td className="py-3 pr-4 text-blueprint-muted">{row.goal}</td>
                  <td className="py-3 text-blueprint-muted">{row.tools}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="bluepr-card p-6">
        <h2 className="font-display text-xl text-blueprint-text mb-3">Defense Planning Rule</h2>
        <p className="text-sm text-blueprint-muted leading-relaxed">
          Every outer wall should protect something worth more than the wall itself. If you build huge
          rings around empty districts while your production core remains exposed, the city looks safe
          but is strategically backwards.
        </p>
      </section>

      <section className="bluepr-card p-6">
        <h2 className="font-display text-xl text-blueprint-text mb-3">Siege Economy Rule</h2>
        <p className="text-sm text-blueprint-muted leading-relaxed">
          Defensive spending is only correct when it preserves the districts that keep food, tools,
          and repairs moving. A wall segment that cannot be staffed or repaired is not real defense;
          it is delayed collapse with extra maintenance cost attached.
        </p>
      </section>

      <section className="bluepr-card p-6">
        <h2 className="font-display text-xl text-blueprint-text mb-3">Pre-Siege Checklist</h2>
        <ol className="list-decimal list-inside space-y-3 text-sm text-blueprint-muted leading-relaxed">
          <li>Move repair stock, spare food, and spare tools inside the protected core before the outer line is stressed.</li>
          <li>Confirm that carts can still route around blocked gates without crossing the exposed frontage.</li>
          <li>Check that fallback streets do not dump enemies directly into markets or high-density housing.</li>
          <li>Stop expanding decorative outer districts if the current wall ring is already expensive to maintain.</li>
        </ol>
      </section>

      <section className="bluepr-card p-6">
        <h2 className="font-display text-xl text-blueprint-text mb-3">FAQ</h2>
        <div className="space-y-3 text-sm text-blueprint-muted">
          <details>
            <summary className="font-semibold text-blueprint-text cursor-pointer">How early should I build walls in Town to City?</summary>
            <p className="mt-2 leading-relaxed">Build the first meaningful choke and protected core early, but only extend the outer ring when the economy can maintain it without starving repairs and supply carts.</p>
          </details>
          <details>
            <summary className="font-semibold text-blueprint-text cursor-pointer">What is the most common siege-planning mistake?</summary>
            <p className="mt-2 leading-relaxed">Protecting empty land while leaving the real production core exposed. The biggest wall is useless if food and workshops still sit on the wrong side of it.</p>
          </details>
          <details>
            <summary className="font-semibold text-blueprint-text cursor-pointer">Should I defend every district equally?</summary>
            <p className="mt-2 leading-relaxed">No. Defend the districts that preserve food, repairs, and housing stability first. Peripheral beauty districts can be rebuilt; the operating core cannot fail.</p>
          </details>
        </div>
      </section>
    </div>
  );
}
