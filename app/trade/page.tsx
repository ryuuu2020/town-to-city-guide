import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trade & Routes Guide — Town to City Guide',
  description: 'Learn how trade routes work in Town to City: connecting multiple towns, export strategies, and maximizing trade income.',
};

export default function TradePage() {
  return (
    <div className="min-h-screen bg-blueprint-bg">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-sm text-blueprint-muted mb-8">
          <a href="/" className="hover:text-blueprint-accent">Home</a>
          <span className="mx-2">/</span>
          <span>Trade &amp; Routes</span>
        </div>

        <h1 className="font-display text-4xl font-bold text-blueprint-text mb-4">Trade &amp; Routes Guide</h1>
        <p className="text-lg text-blueprint-muted mb-10">
          Connect your towns through trade and travel routes. Learn how to establish trade between specialized settlements, optimize cargo flows, and build a regional economy.
        </p>

        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-4">How Trade Routes Work</h2>
          <div className="bluepr-card">
            <p className="text-blueprint-muted leading-relaxed mb-4">
              Town to City supports multiple towns connected by trade and travel routes. Once you establish multiple towns, you can link them to share resources, distribute goods, and generate ongoing trade income. Each town can specialize in different economic activities.
            </p>

            <div className="space-y-4">
              <div className="tip-box">
                <strong>Multi-town specialization:</strong> The default map setup includes Belvau (main hub), Fontebrac (agriculture), and Rocemarée (tourism). Develop each town with a clear focus. Farming towns supply food, tourism towns generate visitor income, and main hubs handle administration and research.
              </div>
              <div className="tip-box">
                <strong>Warehouse logistics:</strong> Warehouses have transport ranges. Place warehouses strategically to bridge gaps between production towns and consumer hubs. Buildings within warehouse range automatically access stored goods.
              </div>
              <div className="tip-box">
                <strong>Trade income scales with town development:</strong> As your towns grow and produce more goods, trade route income increases. Diversifying exports — managing multiple product types rather than relying on a single trade good — provides more stable income.
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-4">Setting Up Trade Networks</h2>
          <div className="bluepr-card">
            <p className="text-blueprint-muted leading-relaxed mb-4">
              Trade routes connect your towns and determine what goods flow between them. Proper route planning reduces supply chain bottlenecks and increases overall economic output.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-blueprint-border">
                    <th className="text-left py-3 px-2 font-semibold text-blueprint-text">Route Type</th>
                    <th className="text-left py-3 px-2 font-semibold text-blueprint-text">Purpose</th>
                    <th className="text-left py-3 px-2 font-semibold text-blueprint-text">Example</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-blueprint-border/50">
                    <td className="py-3 px-2 font-medium text-blueprint-text">Crop Transport</td>
                    <td className="py-3 px-2 text-blueprint-muted">Move raw crops from farming towns to processing centers</td>
                    <td className="py-3 px-2 text-blueprint-muted">Fontebrac → Belvau</td>
                  </tr>
                  <tr className="border-b border-blueprint-border/50">
                    <td className="py-3 px-2 font-medium text-blueprint-text">Tourism Routes</td>
                    <td className="py-3 px-2 text-blueprint-muted">Bring visitors to tourist destinations</td>
                    <td className="py-3 px-2 text-blueprint-muted">Main hub → Rocemarée</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-2 font-medium text-blueprint-text">Scenic Routes</td>
                    <td className="py-3 px-2 text-blueprint-muted">Enhance tourism appeal with scenic connections</td>
                    <td className="py-3 px-2 text-blueprint-muted">Between tourist attractions and hotels</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <div className="flex items-center gap-4 mt-16 mb-8">
          <div className="h-px flex-1 bg-blueprint-border"></div>
          <span className="text-xs text-blueprint-muted">End of Trade &amp; Routes Guide</span>
          <div className="h-px flex-1 bg-blueprint-border"></div>
        </div>
      </div>
    </div>
  );
}
