export const metadata = {
  alternates: {
    canonical: "https://towntocityguide.wiki/logistics",
  },
  title: "Trade & Logistics Guide | Town To City",
  description:
    "Town to City logistics guide covering cart flow, warehouse spacing, market corridors, trade route timing, and how to stop deliveries from choking city growth.",
};

export default function LogisticsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
      <h1 className="font-display text-3xl text-blueprint-text">Trade &amp; Logistics Guide</h1>
      <p className="text-blueprint-muted leading-relaxed">
        Town to City looks relaxed, but messy logistics quietly kills growth. When markets, homes, and
        workshops are too far apart, your citizens spend their time walking instead of producing. The
        cleanest cities use short warehouse hops, obvious commercial corridors, and trade routes that
        move surplus out before storage jams become a hidden tax on every district.
      </p>
      <p className="text-blueprint-muted leading-relaxed">
        The right way to think about logistics is not “how many carts do I have?” but “how many
        unnecessary trips did I design into the city?” If one bakery pulls grain across town, then
        sends bread back across the same route, you built a beautiful bottleneck. Good logistics is city
        planning discipline made visible.
      </p>

      <div className="bluepr-card p-6">
        <ul className="list-disc list-inside space-y-2 text-sm text-blueprint-text leading-relaxed">
          <li>Keep warehouses close to production clusters instead of one huge universal storage block.</li>
          <li>Let markets sit where housing density is already high so delivery distance stays short.</li>
          <li>Open trade routes when a surplus is stable, not when a single lucky harvest tricks you.</li>
          <li>Separate heavy industry from food routes so slow carts do not crowd daily essentials.</li>
        </ul>
      </div>

      <section className="bluepr-card p-6">
        <h2 className="font-display text-xl text-blueprint-text mb-3">Best City Flow Pattern</h2>
        <p className="text-sm text-blueprint-muted leading-relaxed">
          The safest pattern is production → nearby storage → nearby processing → nearby market. Every
          extra district hop increases labor waste. If a chain touches more than two transport layers
          before the product reaches citizens, it is probably too stretched for the current stage of the city.
        </p>
      </section>
    </div>
  );
}
