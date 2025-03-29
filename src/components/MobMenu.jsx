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
          <Link to="about" smooth={true} duration={500}>About</Link>
        </li>
        <li className="cursor-pointer">
          <Link to="skills" smooth={true} duration={500}>Skills</Link>
        </li>
        <li className="cursor-pointer">
          <Link to="projects" smooth={true} duration={500}>Projects</Link>
        </li>
        <li className="cursor-pointer">
          <Link to="contact" smooth={true} duration={500}>Contact</Link>
        </li>
      
      {/* Socials/Contacts */}
      <div className="w-full text-xl max-h-full text-[#8cb0d9]
       flex items-center justify-center gap-10 mt-8">
        <span className="cursor-pointer"><FaGithub/></span>
        <span className="cursor-pointer"><FaTwitter/></span>
        <span className="cursor-pointer"><BiLogoGmail/></span>
        <span className="cursor-pointer"><FaInstagram/></span>
        <span className="cursor-pointer"><FaLinkedin/></span>
      </div>
      </ul>
    </div>
  )
}

export default MobMenu
