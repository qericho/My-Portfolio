import { FaInstagram, FaGithub, FaTwitter, FaLinkedin   } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Footer = () => {
  return (
    <div className="w-full h-full  relative top-[-10px] md:top-[-60px] text-[#8cb0d9]">
        {/* container */}
        <motion.div
        variants={fadeIn("", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }} className="container mx-auto flex space-x-5 text-xl md:px-0 px-2">
         <span className="cursor-pointer"><FaGithub/></span>
         <span className="cursor-pointer"><FaTwitter/></span>
         <span className="cursor-pointer"><BiLogoGmail/></span>
         <span className="cursor-pointer"><FaInstagram/></span>
         <span className="cursor-pointer"><FaLinkedin/></span>
        </motion.div>
    </div>
  )
}

export default Footer
