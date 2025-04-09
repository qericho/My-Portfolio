import FProjects from '../assets/FProjects';
import ViewAllButton from './ViewAllButton';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Link } from 'react-router-dom';
const Projects = () => {
  return (
    <div className="w-full h-full" id='projects'>
      <div className="container mx-auto md:px-0 px-2">
        <div className="w-full h-full my-10">
          <motion.h1
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-2xl md:text-4xl text-[#8cb0d9] font-[800]">Featured Projects</motion.h1>
          <motion.p
           variants={fadeIn("up", 0.4)}
           initial="hidden"
           whileInView="show"
           viewport={{ once: true }} 
          className="text-[#8cb0d9] text-xl my-2">Recent Projects I've Worked On</motion.p>
        </div>
        {/* container */}
        <div className="w-full h-full grid place-items-center gap-3.5
        grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {/* projects */}
          {FProjects.map(project => (
            <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
             key={project.id} className="w-full h-full shadow-xl rounded">
              <div className="w-full h-[200px] relative">
                <div className='h-full w-full bg-black/40 hover:bg-black/0 duration-500 absolute top-0'></div>
                <img className='w-full h-full object-cover'
                  src={project.image} alt={project.title} />
              </div>
              <div className="w-full my-5 px-2">
                <h4 className="text-white text-xl">{project.title}</h4>
                <h3 className="text-white my-2">{project.description}</h3>
                <ul className='my-3 list-disc text-sm text-white flex space-x-8 pl-4'>
                  {project.technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
                <div className='flex gap-x-2.5 text-[#cfd8e2] text-sm'>
                  {/* Link to Live Demo */}
                  <a 
                    href={project.liveDemo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='cursor-pointer hover:text-[#f7fafc] 
                    underline underline-offset-5 decoration-[#303f50] 
                    hover:decoration-[#f7fafc]'
                  >
                    Live Demo
                  </a>
                  {/* Link to Source Code */}
                  <a 
                    href={project.sourceCode} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='cursor-pointer hover:text-[#f7fafc] 
                    underline underline-offset-5 decoration-[#303f50] 
                    hover:decoration-[#f7fafc]'
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
         variants={fadeIn("", 0.5)}
         initial="hidden"
         whileInView="show"
         viewport={{ once: true }}
         className='w-full flex items-center justify-center mt-20'>
         <Link to="/all-projects"><ViewAllButton title={"View All Projects"}/></Link>
        </motion.div>

      </div>
    </div>
  )
}

export default Projects;
