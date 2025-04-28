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
      
      {/* Main Container with Flex Layout */}
      <div className="flex flex-col-reverse sm:flex-row items-center justify-center w-full">
        
        {/* Right Section (Image) */}
        <motion.div
          className="w-full sm:w-1/2 flex justify-center mt-8 sm:mt-0 sm:order-2"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img 
            src={overview} 
            alt="Drone Overview" 
            className="rounded-[300px] w-full object-cover sm:w-[80%] md:w-full"
          />
        </motion.div>

        {/* Left Section (Text) */}
        <div className="w-full sm:w-1/2 sm:pr-8 mt-8 sm:mt-0 sm:order-1">
          <div className="px-[20px] sm:px-[50px] md:px-[100px]">

            <motion.h1
              className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4"
              key={isRequirement ? "requirement" : "overview"} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {isRequirement ? "Requirement Analysis" : "Overview"}
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl leading-relaxed text-gray-900 mb-6"
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

      </div>
    </div>
  );
}

export default Overview;
