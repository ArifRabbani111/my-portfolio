import { FaGithub, FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Scrollspy from "react-scrollspy";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "cp", label: "Competitive Programming" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gradient-to-b from-dark-surface via-dark-card to-dark-surface text-white p-6 flex flex-col items-center sticky top-0 h-screen border-r border-white/10 backdrop-blur-xl shadow-2xl">
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <a
          href="https://www.facebook.com/profile.php?id=61576377830342"
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl font-bold italic bg-gradient-to-r from-accent-purple via-accent-pink to-accent-cyan bg-clip-text text-transparent hover:scale-110 transition-transform duration-300 block"
        >
          R D N
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-6 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-accent-purple to-accent-pink rounded-full blur-xl opacity-50 animate-pulse"></div>
        <img 
          src="/profile.jpg" 
          alt="Arif" 
          className="w-36 h-36 rounded-full mb-4 border-4 border-transparent bg-gradient-to-r from-accent-purple via-accent-pink to-accent-cyan p-0.5 relative z-10 shadow-2xl hover:scale-105 transition-transform duration-300" 
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center mb-8"
      >
        <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
          Arif Rabbani
        </h2>
        <p className="text-sm text-gray-400 font-medium">Software Engineer</p>
      </motion.div>

      {/* ScrollSpy navigation */}
      <Scrollspy
        items={navItems.map((item) => item.id)}
        currentClassName="text-accent-cyan font-bold bg-white/10 rounded-lg"
        className="flex flex-col space-y-2 text-base mb-8 w-full"
        offset={-100}
      >
        {navItems.map((item, index) => (
          <motion.li 
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
          >
            <Link
              to={item.id}
              smooth={true}
              duration={500}
              offset={-100}
              className="cursor-pointer px-4 py-2 rounded-lg hover:bg-white/5 hover:text-accent-cyan transition-all duration-300 block text-gray-300 hover:translate-x-2"
            >
              {item.label}
            </Link>
          </motion.li>
        ))}
      </Scrollspy>

      {/* Social Icons */}
      <motion.div 
        className="flex space-x-4 text-2xl mt-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <a 
          href="https://github.com/thebackbencher666" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-accent-purple hover:scale-125 transition-all duration-300 cursor-pointer"
        >
          <FaGithub />
        </a>
        <a 
          href="https://www.linkedin.com/in/arif-rabbani-arian/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-accent-cyan hover:scale-125 transition-all duration-300 cursor-pointer"
        >
          <FaLinkedin />
        </a>
        <a 
          href="https://www.facebook.com/arif.rabbani.10297701" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-blue-400 hover:scale-125 transition-all duration-300 cursor-pointer"
        >
          <FaFacebook />
        </a>
        <a 
          href="https://x.com/ArifRabb999" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-white hover:scale-125 transition-all duration-300 cursor-pointer"
        >
          <FaTwitter />
        </a>
        <a 
          href="https://www.instagram.com/arif.rabbaani/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-accent-pink hover:scale-125 transition-all duration-300 cursor-pointer"
        >
          <FaInstagram />
        </a>
      </motion.div>
    </aside>
  );
}
