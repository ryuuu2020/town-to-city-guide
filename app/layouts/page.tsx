import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'City Layouts & Planning — Town to City Guide',
  description: 'Grid-less city planning tips for Town to City. Multi-town specialization, terraforming, and layout strategies for Mediterranean towns.',
};

export default function LayoutsPage() {
  return (
    <div className="min-h-screen bg-blueprint-bg">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-sm text-blueprint-muted mb-8">
          <a href="/" className="hover:text-blueprint-accent">Home</a>
          <span className="mx-2">/</span>
          <span>Layouts &amp; Planning</span>
        </div>

        <h1 className="font-display text-4xl font-bold text-blueprint-text mb-4">
          Grid-Less City Layouts &amp; Planning
        </h1>
        <p className="text-lg text-blueprint-muted mb-10">
          Town to City breaks free from the grid. Buildings can be freely placed, rotated, and arranged organically. Here is how to plan your towns for beauty and efficiency.
        </p>

        {/* Grid-Less Philosophy */}
        <section className="bluepr-card mb-8">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-4">The Grid-Less Philosophy</h2>
          <p className="text-blueprint-text leading-relaxed mb-4">
            Town to City has no snap-to-grid mechanic. You can place buildings at any angle and position, creating organic, winding streets and clustered plazas. This design philosophy encourages Mediterranean-style towns that grow naturally rather than grid-aligned blocks.
          </p>
          <p className="text-blueprint-text leading-relaxed mb-4">
            Beauty is directly tied to economic outcomes — higher beauty attracts higher-tier citizens and boosts tourism income. A beautifully planned town is not just aesthetic, it is economically superior.
          </p>
          <div className="tip-box">
            <strong>Tip:</strong> Use the first-person view mode to walk through your streets and see your town from ground level. The photo mode lets you capture and share your best creations.
          </div>
        </section>

        {/* Terraforming */}
        <section className="bluepr-card mb-8">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-4">Terraforming &amp; Terrain</h2>
          <p className="text-blueprint-text leading-relaxed mb-4">
            Town to City includes land and water terraforming tools. You can reshape elevation, create water features, and modify terrain. The Steam description confirms: &quot;Freely shape the land beneath your feet with terraforming tools for elevation, water, and terrain.&quot;
          </p>
          <p className="text-blueprint-text leading-relaxed">
            Use terraforming to create scenic terrain features that boost beauty scores. Elevated positions provide natural sightlines and visual appeal. Water features add aesthetic value to surrounding areas. Plan major terraforming projects before placing expensive buildings to avoid relocation costs.
          </p>
        </section>

        {/* Multi-Town Planning */}
        <section className="bluepr-card mb-8">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-4">Multi-Town Specialization</h2>
          <p className="text-blueprint-text leading-relaxed mb-4">
            The game supports multiple towns on the same map, connected by trade and travel routes. The default setup features three regions:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            <div className="stat-card">
              <div className="text-base font-display font-semibold text-blueprint-accent mb-1">Belvau</div>
              <p className="text-xs text-blueprint-muted">Main hub: housing, administration, research</p>
            </div>
            <div className="stat-card">
              <div className="text-base font-display font-semibold text-blueprint-green mb-1">Fontebrac</div>
              <p className="text-xs text-blueprint-muted">Agriculture: farms, granaries, crop production</p>
            </div>
            <div className="stat-card">
              <div className="text-base font-display font-semibold text-blueprint-warm mb-1">Rocemarée</div>
              <p className="text-xs text-blueprint-muted">Tourism: hotels, scenic routes, landmarks</p>
            </div>
          </div>
          <p className="text-blueprint-text leading-relaxed">
            Specialize each town for a clear economic purpose. Connect them with trade routes and transport links. A well-planned network of specialized towns generates more income than a single sprawling city. The research tree benefits all connected towns, so centralize research in your main hub.
          </p>
        </section>

        {/* Layout Strategies */}
        <section className="bluepr-card">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-4">Practical Layout Tips</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="tip-box">
              <strong>Group farms together.</strong> Dedicate an entire town (Fontebrac) or a large district to farming. Place granaries nearby for crop storage and warehouses for transport links to other towns.
            </div>
            <div className="tip-box">
              <strong>Centralize services.</strong> Town Hall, Research Center, and market stalls should be centrally located. Their coverage benefits reach more citizens when positioned in the heart of your town.
            </div>
            <div className="tip-box">
              <strong>Develop the coastline.</strong> Waterfront areas have high tourism and scenic value. Place Hotels, the Lighthouse, and tourist attractions along the coast for maximum visitor appeal.
            </div>
            <div className="tip-box">
              <strong>Leave room for expansion.</strong> Farms Tier 3 doubles surface area. Warehouse transport ranges need to cover growing districts. Plan layouts with future growth in mind rather than maximizing initial density.
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
