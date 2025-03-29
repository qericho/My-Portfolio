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
                <span className="cursor-pointer">
        <a href="https://github.com/qericho" target="_blank" rel="noopener noreferrer">
          <FaGithub/>
        </a>
        </span>
        <span className="cursor-pointer">
        <a href="https://x.com/i/flow/login" target="_blank" rel="noopener noreferrer">
          <FaTwitter/>
        </a>
        </span>
        <span className="cursor-pointer">
        <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
          <BiLogoGmail/>
        </a>
        </span>
        <span className="cursor-pointer">
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FaInstagram/>
        </a>
        </span>
        <span className="cursor-pointer">
        <a href="https://www.linkedin.com/login" target="_blank" rel="noopener noreferrer">
          <FaLinkedin/>
        </a>
        </span>
        </motion.div>
    </div>
  )
}

export default Footer
