import { HiOutlineBars2 } from "react-icons/hi2";
import ViewAllButton from "./ViewAllButton";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import MobMenu from "./MobMenu";
import { useState } from "react";
const About = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen((open) => !open);
    }
  return (
    <div className="h-full w-full">
        <div className="container mx-auto h-full py-8 px-5 md:px-2">
            <motion.nav 
            variants={fadeIn("", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex justify-between items-center">
                <div>
                    <h1 className="text-[#8cb0d9] text-2xl cursor-pointer">Rhenz</h1>
                </div>
                <ul className="flex-row space-x-5 text-[#f7fafc] text-lg hidden md:flex">
                    <li className="cursor-pointer">About</li>
                    <li className="cursor-pointer">Skills</li>
                    <li className="cursor-pointer">Projects</li>
                    <li className="cursor-pointer">Contact</li>
                </ul>
                <span onClick={toggleMenu}
                className="text-white text-3xl md:hidden cursor-pointer">
                    <HiOutlineBars2/></span>
            </motion.nav>
            <motion.div
             variants={fadeIn("up", 0.5)}
             initial="hidden"
             whileInView="show"
             viewport={{ once: true }}
             className="w-[100%] md:w-[80%] mx-auto text-[#cfd8e2] mt-[30px] md:mt-[100px] relative">
                <MobMenu isOpen={isOpen}/>
                <h1 className="my-5 md:my-10 text-[#8cb0d9] text-4xl md:text-5xl">Hello, I'm Rhenz Chan 🙂</h1>
                <p className="my-4 text-2xl max-w-[100%] md:max-w-[90%]">A Front End Developer, I believe a well-designed interface can transform how people interact with technology</p>
                <p className="my-4 text-2xl max-w-[100%] md:max-w-[90%]">I've focused on building a strong foundation by learning HTML, CSS, and JavaScript, while also exploring the power of modern tools like Bootstrap, Tailwind, and ReactJS to bring my ideas to life..</p>
                <p className="my-4 text-2xl max-w-[100%] md:max-w-[90%]">My goal is to blend creativity with technical precision, ensuring that each website I develop not only looks great but also delivers a seamless, responsive user experience.</p>
                <div className="w-full text-center mt-15">
                    <ViewAllButton title={'More About Me'}/>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default About
