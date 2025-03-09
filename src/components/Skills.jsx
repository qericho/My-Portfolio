import { FaHtml5,FaCss3,FaJs,FaBootstrap,FaGithub,FaGitAlt  } from "react-icons/fa";
import { RiTailwindCssFill,RiReactjsLine} from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";
const Skills = () => {
  return (
    <div className="w-full h-full bg-[#1a324c]">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
            <path fill="#0d1926" fill-opacity="1" d="M0,64L80,58.7C160,53,320,43,480,53.3C640,64,800,96,960,101.3C1120,107,1280,85,1360,74.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
         </svg>
         {/* Skills */}
        <div className="container mx-auto md:px-0 px-2  ">
          <motion.h2 
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-2xl md:text-4xl text-[#8cb0d9] font-[800]">My Tech Stack</motion.h2>
          <motion.p
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
           className="text-xl text-[#8cb0d9] mt-2">Technologies I’ve been working with recently</motion.p>
          <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
           className="max-h-full w-[90%] mx-auto grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center
           my-10 md:my-20 text-5xl md:text6xl lg:text-7xl text-[#8cb0d9] gap-y-5 md:gap-y-10 px-5 md:px-10">
            <span className="hover:text-[#E34F26] hover:scale-115 duration-500 ease-in-out"><FaHtml5/></span>
            <span className="hover:text-[#2965F1] hover:scale-115 duration-500 ease-in-out"><FaCss3/></span>
            <span className="hover:text-[#38BDF8] hover:scale-115 duration-500 ease-in-out"><RiTailwindCssFill/></span>
            <span className="hover:text-[#F7DF1E] hover:scale-115 duration-500 ease-in-out"><FaJs/></span>
            <span className="hover:text-[#7952B3] hover:scale-115 duration-500 ease-in-out"><FaBootstrap/></span>
            <span className="hover:text-[#61DAFB] hover:scale-115 duration-500 ease-in-out"><RiReactjsLine/></span>
            <span className="hover:text-[#181717] hover:scale-115 duration-500 ease-in-out"><FaGithub/></span>
            <span className="hover:text-[#F05032] hover:scale-115 duration-500 ease-in-out"><FaGitAlt /></span>
            <span className="hover:text-[#007ACC] hover:scale-115 duration-500 ease-in-out"><VscVscode /></span>
          </motion.div>    
        </div>
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
          <path fill="#0d1926" fill-opacity="1" d="M1440,136L1360,141.3C1280,147,1120,157,960,146.7C800,136,640,104,480,98.7C320,93,160,115,80,125.3L0,136L0,200L1440,200Z"></path>
       </svg>
    </div>
  )
}

export default Skills
