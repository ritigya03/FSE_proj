import React from 'react';

const subsystem = () => {
  const subsystems = [
    {
      title: "Sensor System",
      description: "The sensor subsystem collects data about surroundings (GPS, Camera, LiDAR, etc.) to help the drone understand its environment.",
    },
    {
      title: "Localization System",
      description: "The localization subsystem calculates the drone's real-time position using GPS and sensor fusion techniques for precise navigation.",
    },
    {
      title: "Path Planning System",
      description: "The path planning subsystem generates the safest and most efficient path to the destination, considering obstacles and terrain.",
    },
    {
      title: "Obstacle Detection & Avoidance",
      description: "This subsystem detects obstacles in the drone’s path and updates the route to avoid collisions, ensuring safe travel.",
    },
    {
      title: "Flight Control System",
      description: "The flight control subsystem adjusts motor speeds to execute navigation commands, maintaining stability and controlling movement.",
    },
    {
      title: "Communication System",
      description: "The communication subsystem sends and receives data between the drone and external systems, enabling remote monitoring and mission updates.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-200 to-blue-100 p-10 mb-10 ">
      <h1 className="text-4xl md:text-6xl font-bold mb-12 text-center">Drone Subsystems</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {subsystems.map((subsystem, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
            <h2 className="text-2xl font-semibold mb-4">{subsystem.title}</h2>
            <p className="text-gray-700 mb-4">{subsystem.description}</p>
            <button className="bg-black  hover:bg-gray-500 text-white font-semibold py-2 px-4 rounded-xl shadow-md transition duration-300">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default subsystem;
