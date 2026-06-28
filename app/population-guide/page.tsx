export const metadata = {
  title: "Town to City Population Guide — Grow Your City Fast (2026)",
  description: "Complete population guide for Town to City. How to grow population quickly, happiness management, and avoiding population decline.",
};

export default function PopulationGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-300 mb-2">Town to City Population Growth Guide</h1>
      <div className="space-y-8">
          <section>
            <h2 className="text-xl font-bold text-blue-300 mb-3">Population Growth Mechanics</h2>
            <p className="text-gray-300 leading-relaxed">Population grows when: housing happiness is above 60%, jobs are available for new residents, and essential services (water, power, education) are within reach. The growth rate accelerates exponentially — going from 500 to 1,000 residents takes as long as going from 1,000 to 5,000. The key is maintaining all growth conditions simultaneously.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-blue-300 mb-3">Happiness Management</h2>
            <p className="text-gray-300 leading-relaxed">Track four happiness pillars: Basic Needs (food, water, power — must be 80%+), Services (schools, hospitals, fire/police — 60%+ for growth), Environment (parks, cleanliness, noise — each park adjacent to residential adds 5% happiness), and Economy (employment rate and wages — above 95% employment triggers a happiness bonus).</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-blue-300 mb-3">Education & Skills</h2>
            <p className="text-gray-300 leading-relaxed">Building schools near residential areas produces educated workers, who earn higher wages and contribute to high-skill industries (tech parks, research labs). High-skill industries generate 3x tax revenue per employee compared to low-skill factories. Invest in education early to position your city for high-value economic growth.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-blue-300 mb-3">Avoiding Population Decline</h2>
            <p className="text-gray-300 leading-relaxed">Population decline triggers when happiness drops below 40% for 3+ consecutive months. The most common triggers: water/power outages (fix immediately — 2-hour outages start permanent resident emigration), high unemployment (zone more commercial or light industrial), and low service coverage (build hospitals/schools before expanding residential zones).</p>
          </section>
        <section>
          <h2 className="text-xl font-bold text-blue-300 mb-3">FAQ</h2>
          <div className="space-y-4 mt-4">
              <div>
                <h3 className="font-semibold text-white">What should I know about population growth mechanics in Town To City?</h3>
                <p className="text-gray-300 leading-relaxed">Population grows when: housing happiness is above 60%, jobs are available for new residents, and essential services (water, power, education) are within reach. The growth rate accelerates exponentiall...</p>
              </div>
              <div>
                <h3 className="font-semibold text-white">What should I know about happiness management in Town To City?</h3>
                <p className="text-gray-300 leading-relaxed">Track four happiness pillars: Basic Needs (food, water, power — must be 80%+), Services (schools, hospitals, fire/police — 60%+ for growth), Environment (parks, cleanliness, noise — each park adjacent...</p>
              </div>
              <div>
                <h3 className="font-semibold text-white">What should I know about education & skills in Town To City?</h3>
                <p className="text-gray-300 leading-relaxed">Building schools near residential areas produces educated workers, who earn higher wages and contribute to high-skill industries (tech parks, research labs). High-skill industries generate 3x tax reve...</p>
              </div>
          </div>
        </section>
      </div>
    </div>
  );
}
