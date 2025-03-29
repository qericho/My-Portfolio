import { FaInstagram, FaGithub, FaTwitter, FaLinkedin   } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { Link } from "react-scroll";

const MobMenu = ({isOpen}) => {
   
  return (
    <div className={`w-full max-h-full z-10 absolute flex flex-col
     bg-[#0d1926] md:hidden duration-500 transition-all 
    ${isOpen ? "flex opacity-100 visible top-0" : "opacity-0 invisible top-[-50px]"}`}>
      <ul className="w-[80%] py-10 mx-auto text-sm
       text-[#f7fafc] text-center space-y-6 uppercase">
        <li className="cursor-pointer">
          <Link to="about" smooth={true} duration={800}>About</Link>
        </li>
        <li className="cursor-pointer">
          <Link to="skills" smooth={true} duration={800}>Skills</Link>
        </li>
        <li className="cursor-pointer">
          <Link to="projects" smooth={true} duration={800}>Projects</Link>
        </li>
        <li className="cursor-pointer">
          <Link to="contact" smooth={true} duration={800}>Contact</Link>
        </li>
      
      {/* Socials/Contacts */}
      <div className="w-full text-xl max-h-full text-[#8cb0d9]
       flex items-center justify-center gap-10 mt-8">
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
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FaInstagram/>
        </a>
        </span>
        <span className="cursor-pointer">
        <a href="https://www.linkedin.com/login" target="_blank" rel="noopener noreferrer">
          <FaLinkedin/>
        </a>
        </span>
      </div>
      </ul>
    </div>
  )
}

export default MobMenu
