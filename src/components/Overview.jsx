import { useState } from 'react';
import { motion } from 'framer-motion';
import overview from "../assets/overview.avif";

function Overview() {
  const [isRequirement, setIsRequirement] = useState(false);

  const handleButtonClick = () => {
    setIsRequirement(prev => !prev); // toggle between true and false
  };

  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center p-8" id="overview">
      
      {/* Left Section */}
      <div className="w-1/2 pr-8">
        <div className="px-[100px]">

          <motion.h1
            className="text-8xl font-bold mb-4"
            key={isRequirement ? "requirement" : "overview"} 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {isRequirement ? "Requirement Analysis" : "Overview"}
          </motion.h1>

          <motion.p
            className="text-2xl leading-relaxed text-gray-900 mb-6"
            key={isRequirement ? "requirement-text" : "overview-text"}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {isRequirement ? (
              <>
                To develop an autonomous drone navigation system, we identify the essential requirements such as obstacle detection, real-time path optimization, GPS integration, and fail-safe landing mechanisms. The system must be scalable, adaptable to different environments, and capable of autonomous decision-making without human intervention.
              </>
            ) : (
              <>
                Autonomous drones are transforming the way we navigate and interact with our environment.
                This project focuses on designing a smart navigation system that enables drones to plan, adapt, and move independently without human control.
                By integrating advanced sensors, real-time path planning, and intelligent decision-making, the system ensures safe and efficient drone operations across various terrains and conditions.
                Our goal is to demonstrate the fundamentals of system engineering applied to the development of next-generation autonomous aerial vehicles.
              </>
            )}
          </motion.p>

          <motion.button
            className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleButtonClick}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {isRequirement ? "Back to Overview" : "Requirement Analysis"}
          </motion.button>
          
        </div>
      </div>

      {/* Right Section */}
      <motion.div
        className="w-1/2 flex justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <img 
          src={overview} 
          alt="Drone Overview" 
          className="rounded-[300px] w-full object-cover"
        />
      </motion.div>

    </div>
  );
}

export default Overview;
