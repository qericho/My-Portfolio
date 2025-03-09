import FProjects from '../assets/FProjects';
import ViewAllButton from './ViewAllButton';

const Projects = () => {
  return (
    <div className="w-full h-screen">
      <div className="container mx-auto md:px-0 px-2">
        <div className="w-full h-full my-10">
          <h1 className="text-2xl md:text-4xl text-[#8cb0d9] font-[800]">Featured Projects</h1>
          <p className="text-[#8cb0d9] text-xl my-2">Recent Projects I've Worked On</p>
        </div>
        {/* container */}
        <div className="w-full h-full grid place-items-center gap-3.5
        grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {/* projects */}
          {FProjects.map(project => (
            <div key={project.id} className="w-full h-full shadow-xl rounded">
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
            </div>
          ))}
        </div>
        <div className='w-full flex items-center justify-center py-10'>
          <ViewAllButton title={"View All Projects"} />
        </div>
      </div>
    </div>
  )
}

export default Projects;
