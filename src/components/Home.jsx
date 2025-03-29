import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { IoMdArrowDown } from "react-icons/io";
import Okarun from '../assets/img/okarun2.jpg'

const Home = () => {
  const [overlay, setOverlay] = useState('bottom-[-50%]');

  useEffect(() => {
    const timer = setTimeout(() => {
      setOverlay('bottom-0');
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='relative h-dvh w-full flex items-center' id='home'>
      {/* Overlay */}
      <div className={`h-1/2 w-full bg-[#1a324c] absolute transition-all duration-500 ${overlay}`}></div>
      <motion.div 
      variants={fadeIn("", 1.7)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className='hover:size-80 size-15 duration-500 absolute top-10 right-10 hidden xl:flex '>
          <img src={Okarun} className='opacity-70 hover:opacity-100 duration-500 rounded-full object-cover' alt="" />
      </motion.div>
      {/* Hero Content */}
      <div 
        className='relative top-4 z-10 w-full px-3 md:px-20'>
        <motion.p 
           variants={fadeIn("right", 0)}
           initial="hidden"
           whileInView="show"
           viewport={{ once: true }}
         
        className='text-xl md:text-2xl text-[#8cb0d9]'>Okarun</motion.p>
        <motion.h1
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
         className='text-[35px] md:text-5xl lg:text-6xl text-[#f7fafc] font-[800] my-2'>
          Front-End Developer
        </motion.h1>
        <motion.p 
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className='text-xl md:text-2xl text-[#8cb0d9] max-w-[400px] md:max-w-[550px]'>
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
        <IoMdArrowDown className='animate-bounce group-hover:text-[#f7fafc]'/> 
        <span className='group-hover:text-[#f7fafc] text-[18px]'>
            <Link to="about" smooth={true} duration={500}>scroll</Link>
          </span>
      </motion.button>
    </div>
  );
};

export default Home;
