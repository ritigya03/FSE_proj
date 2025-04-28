import React from 'react';

const Testing = () => {
  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-7xl font-bold mb-4 ">
            Testing Strategy
          </h1>
          <div className="h-1 w-24 bg-blue-500 mx-auto rounded-full"></div>
        </header>

        {/* Testing Strategy */}
        <section className="mb-12 bg-gray-900 rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 flex items-center">
            <span className="mr-2 text-blue-400">01.</span> Testing Strategy
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            We use a mix of simulation-based and real-world testing to evaluate the drone's navigation system, 
            covering path planning, obstacle avoidance, and decision-making.
          </p>
        </section>

        {/* Types of Testing */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 flex items-center">
            <span className="mr-2 text-blue-400">02.</span> Types of Testing
          </h2>
          <div className="overflow-x-auto rounded-xl shadow-lg">
            <table className="min-w-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="px-6 py-4 text-left text-lg font-semibold text-blue-400">Type</th>
                  <th className="px-6 py-4 text-left text-lg font-semibold text-blue-400">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-800 hover:bg-gray-800 transition-colors">
                  <td className="px-6 py-4 font-medium">Unit Testing</td>
                  <td className="px-6 py-4 text-gray-300">Tests individual modules like path planning and obstacle detection.</td>
                </tr>
                <tr className="border-b border-gray-800 hover:bg-gray-800 transition-colors">
                  <td className="px-6 py-4 font-medium">Integration Testing</td>
                  <td className="px-6 py-4 text-gray-300">Checks subsystems working together, e.g., sensors and flight control.</td>
                </tr>
                <tr className="hover:bg-gray-800 transition-colors">
                  <td className="px-6 py-4 font-medium">Functional Testing</td>
                  <td className="px-6 py-4 text-gray-300">Verifies system's core functionality (e.g., reaching the destination).</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Test Cases */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 flex items-center">
            <span className="mr-2 text-blue-400">03.</span> Test Cases
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-blue-500 transition-colors">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center mr-3">
                  <span className="font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold">Test Case 1</h3>
              </div>
              <div className="space-y-2 text-gray-300">
                <p><span className="font-semibold text-blue-400">Scenario:</span> Navigate from Point A to B avoiding obstacles.</p>
                <p><span className="font-semibold text-green-400">Outcome:</span> Success</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-blue-500 transition-colors">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center mr-3">
                  <span className="font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold">Test Case 2</h3>
              </div>
              <div className="space-y-2 text-gray-300">
                <p><span className="font-semibold text-blue-400">Scenario:</span> Lose GPS signal during flight.</p>
                <p><span className="font-semibold text-green-400">Outcome:</span> System adapts successfully.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tools */}
        <section className="mb-12 bg-gray-900 rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 flex items-center">
            <span className="mr-2 text-blue-400">04.</span> Tools & Frameworks
          </h2>
          <ul className="grid md:grid-cols-3 gap-4 mt-6">
            <li className="bg-gray-800 p-4 rounded-lg flex items-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
              <span>Unit Testing: Jest, Mocha</span>
            </li>
            <li className="bg-gray-800 p-4 rounded-lg flex items-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
              <span>Simulation: Gazebo, Webots</span>
            </li>
            <li className="bg-gray-800 p-4 rounded-lg flex items-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
              <span>Flight Simulators: AirSim, PX4</span>
            </li>
          </ul>
        </section>

        {/* Results */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 flex items-center">
            <span className="mr-2 text-blue-400">05.</span> Results & Improvements
          </h2>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg border border-gray-700">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="md:w-1/2">
                <h3 className="text-xl font-semibold mb-2 text-blue-400">Issue Identified</h3>
                <p className="text-gray-300">Path planning slow in complex environments.</p>
              </div>
              <div className="md:w-1/2">
                <h3 className="text-xl font-semibold mb-2 text-green-400">Solution Implemented</h3>
                <p className="text-gray-300">Optimized algorithm, improving speed by 30%.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Future Plans */}
        <section className="mb-8 bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-xl p-6 shadow-lg border border-blue-800/50">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 flex items-center">
            <span className="mr-2 text-blue-400">06.</span> Future Testing Plans
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Future tests will focus on weather impact and machine learning for real-time path planning optimization.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Testing;