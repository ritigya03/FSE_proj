import React from 'react';

const Testing = () => {
  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-7xl font-bold mb-4">Testing & Validation</h1>
          <div className="h-1 w-24 bg-blue-500 mx-auto rounded-full"></div>
        </header>

        {/* Overview */}
        <section className="mb-12 bg-gray-900 rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 flex items-center">
            <span className="mr-2 text-blue-400">01.</span> Testing Approach
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Our testing strategy emphasizes simulation-driven validation using AirSim with Unreal Engine. 
            We conducted phased testing to evaluate navigation, obstacle avoidance, and decision-making under various scenarios using both discrete and continuous action sets.
          </p>
        </section>

        {/* Testing Stages */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 flex items-center">
            <span className="mr-2 text-blue-400">02.</span> Simulation Stages
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                stage: "Stage I",
                description: "Basic square map with start and end points; obstacle-free environment.",
              },
              {
                stage: "Stage II",
                description: "Enclosed map with walls and fixed-size obstacles to test navigation flexibility.",
              },
              {
                stage: "Stage III",
                description: "Mini slalom configuration to evaluate agility and dynamic path adjustment.",
              },
              {
                stage: "Stage IV",
                description: "Four-room maze with narrow passages; simulates real-world indoor complexity.",
              },
            ].map(({ stage, description }, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-blue-500 transition-colors">
                <h3 className="text-xl font-semibold text-blue-400 mb-2">{stage}</h3>
                <p className="text-gray-300">{description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testing Tools */}
        <section className="mb-12 bg-gray-900 rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 flex items-center">
            <span className="mr-2 text-blue-400">03.</span> Tools & Technologies
          </h2>
          <ul className="grid md:grid-cols-3 gap-4 mt-6">
            {[
              "AirSim with Unreal Engine",
              "Python, TensorFlow/PyTorch",
              "Custom AI Navigation Scripts",
              "Sensor Emulation for LiDAR, Visual, and Thermal",
              "Telemetry Monitoring Tools",
              "Decision-making Neural Networks",
            ].map((tool, i) => (
              <li key={i} className="bg-gray-800 p-4 rounded-lg flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                <span>{tool}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Sample Results */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 flex items-center">
            <span className="mr-2 text-blue-400">04.</span> Sample Test Outcomes
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-green-500 transition-colors">
              <h3 className="text-xl font-semibold mb-2 text-green-400">Stage III – Mini Slalom</h3>
              <p className="text-gray-300">The drone successfully navigated dynamic obstacles with continuous control inputs using the trained decision module.</p>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-green-500 transition-colors">
              <h3 className="text-xl font-semibold mb-2 text-green-400">Stage IV – Complex Maze</h3>
              <p className="text-gray-300">Efficient path selection observed using A*/Dijkstra with fallback logic. Performance improved by 30% after path planning optimization.</p>
            </div>
          </div>
        </section>

        {/* Future Improvements */}
        <section className="mb-8 bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-xl p-6 shadow-lg border border-blue-800/50">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 flex items-center">
            <span className="mr-2 text-blue-400">05.</span> Future Enhancements
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Integration of weather-aware modules and reinforcement learning for adaptive path planning in unpredictable environments is planned.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Testing;
