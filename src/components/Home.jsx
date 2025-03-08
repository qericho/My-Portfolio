import React, { useEffect, useState } from 'react';
import { IoMdArrowDown } from "react-icons/io";

const Home = () => {
  const [overlay, setOverlay] = useState('bottom-[-50%]');

  useEffect(() => {
    const timer = setTimeout(() => {
      setOverlay('bottom-0');
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='relative h-screen w-full flex items-center'>
      {/* Overlay */}
      <div className={`h-1/2 w-full bg-[#1a324c] absolute transition-all duration-500 ${overlay}`}></div>
      
      {/* Hero Content */}
      <div className='relative z-10 w-full px-3 md:px-20'>
        <p className='text-xl md:text-2xl text-[#8cb0d9]'>Rhenz Chan</p>
        <h1 className='text-4xl md:text-5xl lg:text-6xl text-[#f7fafc] font-[800] my-2'>
          Self-taught Front End Developer
        </h1>
        <p className='text-xl md:text-2xl text-[#8cb0d9]'>
          I build websites with a focus on responsive design and accessibility.
        </p>
      </div>
      
      <button 
        className='flex items-center gap-1 absolute text-[#8cb0d9] bottom-8 left-3 md:left-20 text-[18px] group cursor-pointer'
      >
        <IoMdArrowDown className='group-hover:animate-bounce group-hover:text-[#f7fafc]'/> 
        <span className='group-hover:text-[#f7fafc]'>scroll</span>
      </button>
    </div>
  );
};

export default Home;
