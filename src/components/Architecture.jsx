import React from 'react';

const Architecture = () => {
  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center p-8">
      {/* Container for two parts */}
      <div className="flex flex-col md:flex-row w-[1800px] bg-white shadow-xl rounded-2xl overflow-hidden">

        {/* Left side: Diagram */}
        <div className="md:w-2/3 p-8 flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">System Architecture</h1>

          {/* Diagram */}
          <div className="flex flex-col items-center space-y-6">

            {/* Block 1 */}
            <div className="flex flex-col items-center">
              <div className="bg-gray-100 shadow-md rounded-xl p-6 w-64 text-center">
                <h2 className="text-xl font-semibold">Sensors</h2>
                <p className="text-sm text-gray-600">Collect environmental data (position, obstacles).</p>
              </div>
              <div className="text-2xl ">↓</div>
            </div>

            {/* Block 2 */}
            <div className="flex flex-col items-center">
              <div className="bg-gray-100 shadow-md rounded-xl p-6 w-64 text-center">
                <h2 className="text-xl font-semibold ">Sensor Fusion & Localization</h2>
                <p className="text-sm text-gray-600">Combine sensor data to estimate real-time position.</p>
              </div>
              <div className="text-2xl ">↓</div>
            </div>

            {/* Block 3 */}
            <div className="flex flex-col items-center">
              <div className="bg-gray-100 shadow-md rounded-xl p-6 w-64 text-center">
                <h2 className="text-xl font-semibold ">Path Planning & Obstacle Avoidance</h2>
                <p className="text-sm text-gray-600">Plan safe paths and avoid obstacles in real-time.</p>
              </div>
              <div className="text-2xl ">↓</div>
            </div>

            {/* Block 4 */}
            <div className="flex flex-col items-center">
              <div className="bg-gray-100 shadow-md rounded-xl p-6 w-64 text-center">
                <h2 className="text-xl font-semibold ">Flight Controller</h2>
                <p className="text-sm text-gray-600">Control motors and adjust drone movement.</p>
              </div>
              <div className="text-2xl ">↓</div>
            </div>

            {/* Block 5 */}
            <div className="flex flex-col items-center">
              <div className="bg-gray-100 shadow-md rounded-xl p-6 w-64 text-center">
                <h2 className="text-xl font-semibold ">Motors & Drone Movement</h2>
                <p className="text-sm text-gray-600">Execute navigation commands and move the drone.</p>
              </div>
            </div>

          </div>
        </div>

        {/* Right side: Button */}
        <div className="md:w-1/3 p-8 flex flex-col justify-center items-center bg-gradient-to-b from-blue-50 to-blue-100">
          <h2 className="text-3xl font-bold mb-6 text-center">Want to see more?</h2>
          <button className="bg-black text-white font-semibold py-3 px-6 rounded-xl shadow-md transition duration-300">
            View Graphs & Stats
          </button>
        </div>

      </div>
    </div>
  );
};

export default Architecture;
