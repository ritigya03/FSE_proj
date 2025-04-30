import React from 'react';
import { motion } from 'framer-motion';
import dronevid from "../assets/dronevid.gif";
import '../index.css';

const Home = () => {
  return (
    <div className="bg-black text-white text-center py-24 px-4">
      <motion.h1
        className="text-5xl md:text-7xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Advanced Autonomous Drone<br />Navigation System
      </motion.h1>
      
      <motion.p
        className="text-gray-400 text-lg mb-6"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Elevate your operations with cutting-edge autonomous drone navigation technology
      </motion.p>
      
    

      <div className="relative w-full mt-[-90px] rounded-lg ">
        <div className="clip-bubble overflow-hidden ">
          <img
            src={dronevid}
            alt="Drone Navigation"
            className="w-full h-[800px] "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
