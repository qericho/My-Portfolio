import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { IoMdArrowDown } from "react-icons/io";

const Home = () => {
  const [overlay, setOverlay] = useState('bottom-[-100%]');

  useEffect(() => {
    const timer = setTimeout(() => {
      setOverlay('bottom-0');
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='relative h-screen w-full flex items-center'>
      {/* Overlay */}
      <div className={`h-1/2 w-full bg-[#1a324c] absolute transition-all duration-800 ${overlay}`}></div>
      
      {/* Hero Content */}
      <div 
        className='relative z-10 w-full px-3 md:px-20'>
        <motion.p 
           variants={fadeIn("right", 0)}
           initial="hidden"
           whileInView="show"
           viewport={{ once: true }}
         
        className='text-xl md:text-2xl text-[#8cb0d9]'>Rhenz Chan</motion.p>
        <motion.h1
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
         className='text-4xl md:text-5xl lg:text-6xl text-[#f7fafc] font-[800] my-2'>
          Self-taught Front End Developer
        </motion.h1>
        <motion.p 
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className='text-xl md:text-2xl text-[#8cb0d9]'>
          I build websites with a focus on responsive design and accessibility.
        </motion.p>
      </div>
      
      <motion.button 
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className='flex items-center gap-1 absolute text-[#8cb0d9] bottom-8 left-3 md:left-20 text-[18px] group cursor-pointer'
      >
        <IoMdArrowDown className='group-hover:animate-bounce group-hover:text-[#f7fafc]'/> 
        <span className='group-hover:text-[#f7fafc] text-[18px]'>scroll</span>
      </motion.button>
    </div>
  );
};

export default Home;
