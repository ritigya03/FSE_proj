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
                <h2 className="text-xl font-semibold">Sensor Data</h2>
                <p className="text-sm text-gray-600">Collect environmental data (position, obstacles).</p>
              </div>
              <div className="text-2xl ">↓</div>
            </div>

            {/* Block 2 */}
            <div className="flex flex-col items-center">
              <div className="bg-gray-100 shadow-md rounded-xl p-6 w-64 text-center">
                <h2 className="text-xl font-semibold ">Navigation Decision</h2>
                <p className="text-sm text-gray-600">Processes sensor input to decide the drone’s next move.</p>
              </div>
              <div className="text-2xl ">↓</div>
            </div>

            {/* Block 3 */}
            <div className="flex flex-col items-center">
              <div className="bg-gray-100 shadow-md rounded-xl p-6 w-64 text-center">
                <h2 className="text-xl font-semibold ">AI Enhancement </h2>
                <p className="text-sm text-gray-600">Plan safe paths and avoid obstacles in real-time.</p>
              </div>
              <div className="text-2xl ">↓</div>
            </div>

            {/* Block 4 */}
            <div className="flex flex-col items-center">
              <div className="bg-gray-100 shadow-md rounded-xl p-6 w-64 text-center">
                <h2 className="text-xl font-semibold ">Control System</h2>
                <p className="text-sm text-gray-600">Control motors and adjust drone movement.</p>
              </div>
              <div className="text-2xl ">↓</div>
            </div>

            {/* Block 5 */}
            <div className="flex flex-col items-center">
              <div className="bg-gray-100 shadow-md rounded-xl p-6 w-64 text-center">
                <h2 className="text-xl font-semibold ">Ground Station Feedback​</h2>
                <p className="text-sm text-gray-600">Displays drone status and allows remote control commands.</p>
              </div>
            </div>

          </div>
        </div>

        {/* Right side: Button */}
        <div className="md:w-1/3 p-8 flex flex-col justify-center items-center bg-gradient-to-b from-blue-50 to-blue-100">
          <h2 className="text-3xl font-bold mb-6 text-center">Want to see more?</h2>
          <button className="bg-black text-white font-semibold py-3 px-6 rounded-xl shadow-md transition duration-300">
          <a href="https://lnmiit-my.sharepoint.com/:p:/g/personal/23ucs629_lnmiit_ac_in/ES0R-1tgCnJDrwdX0w2i3XsBL5jTj1nDubyIMLOMPdGOyQ?rtime=NFp75X-I3Ug" target="_blank" rel="noopener noreferrer">
  <button>View Graphs & Stats</button>
</a>

          </button>
        </div>

      </div>
    </div>
  );
};

export default Architecture;
