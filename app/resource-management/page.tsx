export const metadata = {
  title: "Resource Management Guide | Town To City",
  description:
    "Town to City resource guide covering food, wood, stone, taxes, storage pressure, and when to pivot from survival stockpiles into growth spending.",
};

export default function ResourceManagementPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
      <h1 className="font-display text-3xl text-blueprint-text">Resource Management Guide</h1>
      <p className="text-blueprint-muted leading-relaxed">
        In Town to City, shortages rarely appear all at once. They begin as tiny imbalances: one food
        chain too slow, one warehouse too far, one expansion district demanding materials before the city
        can safely supply them. Good management is less about hoarding everything and more about keeping
        each critical flow ahead of citizen demand.
      </p>
      <p className="text-blueprint-muted leading-relaxed">
        The city usually needs four priorities in order: food stability, core construction materials,
        transport capacity, and then growth spending. When players reverse that order, they get a
        larger-looking city with weaker actual resilience.
      </p>

      <div className="bluepr-card p-6">
        <ul className="list-disc list-inside space-y-2 text-sm text-blueprint-text leading-relaxed">
          <li>Protect food and basic materials first; decorative growth can wait.</li>
          <li>Watch storage distance as closely as raw production totals.</li>
          <li>Spend growth money only after your core supply loops survive seasonal dips.</li>
          <li>Raise taxes only when productivity can absorb the happiness hit.</li>
        </ul>
      </div>

      <section className="bluepr-card p-6">
        <h2 className="font-display text-xl text-blueprint-text mb-3">Pivot Timing</h2>
        <p className="text-sm text-blueprint-muted leading-relaxed">
          The right time to pivot from survival stockpiles into growth spending is when the city can
          survive one bad season without emergency rationing. If you still panic when a harvest underperforms,
          you are not ready to scale prestige projects or luxury districts yet.
        </p>
      </section>

      <section className="bluepr-card p-6">
        <h2 className="font-display text-xl text-blueprint-text mb-3">Resource Priority Ladder</h2>
        <p className="text-sm text-blueprint-muted leading-relaxed">
          Food comes first, then wood and stone, then transport and taxation balance, and only then
          beauty-heavy prestige spending. If you keep that ladder in mind, most mid-game shortages
          become manageable because the city never loses its operating core while chasing expansion.
        </p>
      </section>
    </div>
  );
}
