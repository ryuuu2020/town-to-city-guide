export const metadata = {
  title: "Town to City Best Layout Guide — Optimal City Design (2026)",
  description: "Complete city layout guide for Town to City. Best district organization, road networks, and efficient city design for maximum growth.",
};

export default function CityLayoutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-300 mb-2">Town to City Best City Layout</h1>
      <div className="space-y-8">
          <section>
            <h2 className="text-xl font-bold text-blue-300 mb-3">City Zoning Basics</h2>
            <p className="text-gray-300 leading-relaxed">Effective city design separates zones: Residential (housing), Commercial (shops, services), Industrial (factories, warehouses), and Civic (schools, hospitals, government). Mixing industrial and residential zones causes happiness penalties from noise and pollution. A clean zone separation is the foundation of every high-performing city in Town to City.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-blue-300 mb-3">Road Network Design</h2>
            <p className="text-gray-300 leading-relaxed">Main roads should be 4-lane boulevards connecting district centers. Branch into 2-lane roads for neighborhood access and 1-lane alleys for individual buildings. Avoid dead-end roads — they create traffic backups. Build ring roads around your city center to allow bypass traffic, reducing main-road congestion by 30-40%.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-blue-300 mb-3">Industrial Zone Placement</h2>
            <p className="text-gray-300 leading-relaxed">Always place industrial zones downwind (east side in most maps) and away from residential areas. Buffer industrial zones with green parks or walls to reduce pollution drift. Connect industrial zones directly to the main highway — industrial truck traffic should never pass through residential areas.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-blue-300 mb-3">Growth Strategy</h2>
            <p className="text-gray-300 leading-relaxed">Start small: 200-population residential zone + small commercial district + 1 industrial block. Expand when happiness reaches 75% (indicating current infrastructure meets demand). Never expand beyond your service coverage — a hospital or school that's too far reduces happiness faster than building new districts improves it.</p>
          </section>
        <section>
          <h2 className="text-xl font-bold text-blue-300 mb-3">FAQ</h2>
          <div className="space-y-4 mt-4">
              <div>
                <h3 className="font-semibold text-white">What should I know about city zoning basics in Town To City?</h3>
                <p className="text-gray-300 leading-relaxed">Effective city design separates zones: Residential (housing), Commercial (shops, services), Industrial (factories, warehouses), and Civic (schools, hospitals, government). Mixing industrial and reside...</p>
              </div>
              <div>
                <h3 className="font-semibold text-white">What should I know about road network design in Town To City?</h3>
                <p className="text-gray-300 leading-relaxed">Main roads should be 4-lane boulevards connecting district centers. Branch into 2-lane roads for neighborhood access and 1-lane alleys for individual buildings. Avoid dead-end roads — they create traf...</p>
              </div>
              <div>
                <h3 className="font-semibold text-white">What should I know about industrial zone placement in Town To City?</h3>
                <p className="text-gray-300 leading-relaxed">Always place industrial zones downwind (east side in most maps) and away from residential areas. Buffer industrial zones with green parks or walls to reduce pollution drift. Connect industrial zones d...</p>
              </div>
          </div>
        </section>
      </div>
    </div>
  );
}
