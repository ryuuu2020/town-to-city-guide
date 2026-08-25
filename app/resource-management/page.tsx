export const metadata = {
  alternates: {
    canonical: "https://towntocityguide.wiki/resource-management",
  },
  title: "Resource Management Guide | Town To City",
  description:
    "Town to City resource guide covering food, wood, stone, taxes, storage pressure, and when to pivot from survival stockpiles into growth spending.",
};

const RESOURCE_TABLE = [
  {
    resource: "Food",
    earlyFocus: "Farms, storage near housing, reliable market coverage",
    midGameRisk: "Growth outruns harvest and distribution at the same time",
    fix: "Increase local storage first, then production, then trade imports if terrain is weak",
  },
  {
    resource: "Wood & Stone",
    earlyFocus: "Construction baseline, roads, workshops, repairs",
    midGameRisk: "Expansion districts consume them before the core can refill stock",
    fix: "Stage construction in waves and keep raw-material yards near builders",
  },
  {
    resource: "Coins & Taxes",
    earlyFocus: "Basic service coverage and non-destructive tax settings",
    midGameRisk: "You raise taxes to paper over weak production and kill morale",
    fix: "Use trade, service efficiency, and district specialization before tax spikes",
  },
  {
    resource: "Transport Capacity",
    earlyFocus: "Short hauling lanes, warehouse adjacency, clean roads",
    midGameRisk: "Production looks fine on paper but carts spend the day crossing the city",
    fix: "Split storage by district and protect key routes from decorative sprawl",
  },
];

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
      <p className="text-blueprint-muted leading-relaxed">
        The useful frame is not “how much do I have” but “which shortage would shut the city down if
        next season goes badly.” That question keeps you focused on operating margin instead of on
        decorative abundance. A strong city is the one that can take a bad harvest, a costly district,
        or a temporary tax drop without immediately unraveling.
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
        <h2 className="font-display text-xl text-blueprint-text mb-4">Which Resource Layer Breaks First?</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-blueprint-border">
                <th className="py-3 pr-4 font-semibold text-blueprint-text">Resource</th>
                <th className="py-3 pr-4 font-semibold text-blueprint-text">Early Focus</th>
                <th className="py-3 pr-4 font-semibold text-blueprint-text">Typical Mid-Game Failure</th>
                <th className="py-3 font-semibold text-blueprint-text">Best Fix</th>
              </tr>
            </thead>
            <tbody>
              {RESOURCE_TABLE.map((row) => (
                <tr key={row.resource} className="border-b border-blueprint-border/70 last:border-0">
                  <td className="py-3 pr-4 font-medium text-blueprint-text">{row.resource}</td>
                  <td className="py-3 pr-4 text-blueprint-muted">{row.earlyFocus}</td>
                  <td className="py-3 pr-4 text-blueprint-muted">{row.midGameRisk}</td>
                  <td className="py-3 text-blueprint-muted">{row.fix}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

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

      <section className="bluepr-card p-6">
        <h2 className="font-display text-xl text-blueprint-text mb-3">Three Practical Checks Before You Expand</h2>
        <ol className="list-decimal list-inside space-y-3 text-sm text-blueprint-muted leading-relaxed">
          <li>Can the current food loop handle one weak season without rationing or emergency imports?</li>
          <li>Can builders and carts serve the new district without turning the existing core into a longer commute?</li>
          <li>If happiness dips for a few days, do you still have enough cash flow to avoid panic tax changes?</li>
        </ol>
      </section>

      <section className="bluepr-card p-6">
        <h2 className="font-display text-xl text-blueprint-text mb-3">FAQ</h2>
        <div className="space-y-3 text-sm text-blueprint-muted">
          <details>
            <summary className="font-semibold text-blueprint-text cursor-pointer">What is the most common resource mistake in Town to City?</summary>
            <p className="mt-2 leading-relaxed">Expanding building footprints before transport and storage are local. The city looks richer, but every production chain becomes slower at the same time.</p>
          </details>
          <details>
            <summary className="font-semibold text-blueprint-text cursor-pointer">When should I raise taxes?</summary>
            <p className="mt-2 leading-relaxed">Only after service coverage and local productivity are good enough to absorb the morale hit. Taxes should harvest surplus, not compensate for weak planning.</p>
          </details>
          <details>
            <summary className="font-semibold text-blueprint-text cursor-pointer">Should I import resources through trade early?</summary>
            <p className="mt-2 leading-relaxed">Yes, if the imported material is the exact bottleneck holding back a profitable district. No, if you are using imports to avoid fixing a bad transport layout.</p>
          </details>
        </div>
      </section>
    </div>
  );
}
