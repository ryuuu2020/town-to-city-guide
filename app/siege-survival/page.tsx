export const metadata = {
  title: "Siege Survival Guide | Town To City",
  description:
    "Town to City siege survival guide covering outer-wall planning, emergency stockpiles, choke streets, and how to absorb attacks without wrecking your economy.",
};

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

      <div className="bluepr-card p-6">
        <ul className="list-disc list-inside space-y-2 text-sm text-blueprint-text leading-relaxed">
          <li>Use narrow approach roads to slow attackers before they touch dense housing.</li>
          <li>Keep emergency food and repair materials inside the protected core district.</li>
          <li>Do not overextend walls beyond what your economy can actually maintain.</li>
          <li>Design fallback streets so defenders can retreat without dragging enemies through markets.</li>
        </ul>
      </div>

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
    </div>
  );
}
