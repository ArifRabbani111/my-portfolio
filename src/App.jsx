import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import CP from "./pages/CP";
import Projects from "./pages/Projects";
import Certifications from "./pages/Certifications";
import Contact from "./pages/Contact";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "cp", label: "CP" },
    { id: "certifications", label: "Certifications" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="bg-gradient-to-br from-dark-bg via-[#0f172a] to-[#1a1a2e] text-white min-h-screen relative overflow-hidden">
      {/* Animated background gradient orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent-purple rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-cyan rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent-pink rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Centered Header with RDN */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-dark-surface/80 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          {/* Centered RDN Logo */}
          <motion.a
            href="https://www.facebook.com/profile.php?id=61576377830342"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl md:text-4xl font-bold italic bg-gradient-to-r from-accent-purple via-accent-pink to-accent-cyan bg-clip-text text-transparent hover:scale-110 transition-transform duration-300 mx-auto"
            whileHover={{ scale: 1.1 }}
          >
            R D N
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 hover:text-accent-cyan transition-colors"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex justify-center items-center gap-6 pb-4">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              smooth={true}
              duration={500}
              offset={-80}
              className="text-sm text-gray-300 hover:text-accent-cyan transition-colors cursor-pointer px-3 py-1 rounded-lg hover:bg-white/5"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-dark-surface/95 backdrop-blur-xl border-t border-white/10"
            >
              <div className="flex flex-col py-4 px-4 gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.id}
                    to={item.id}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-gray-300 hover:text-accent-cyan transition-colors cursor-pointer px-4 py-2 rounded-lg hover:bg-white/5"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Main Content */}
      <main className="w-full px-4 md:px-8 lg:px-16 py-0 space-y-16 md:space-y-20 overflow-x-hidden relative z-10">
        <About />
        <Experience />
        <Skills />
        <Projects />
        <CP />
        <Certifications />
        <Contact />
      </main>

      {/* Floating Social Icons - Hidden on mobile, visible on desktop */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="hidden lg:flex fixed left-4 top-1/2 transform -translate-y-1/2 z-20 flex-col gap-4"
      >
        <a
          href="https://github.com/thebackbencher666"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-dark-card/80 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center text-xl hover:text-accent-purple hover:border-accent-purple transition-all duration-300 hover:scale-110"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/arif-rabbani-arian/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-dark-card/80 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center text-xl hover:text-accent-cyan hover:border-accent-cyan transition-all duration-300 hover:scale-110"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.facebook.com/arif.rabbani.10297701"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-dark-card/80 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center text-xl hover:text-blue-400 hover:border-blue-400 transition-all duration-300 hover:scale-110"
        >
          <FaFacebook />
        </a>
        <a
          href="https://x.com/ArifRabb999"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-dark-card/80 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center text-xl hover:text-white hover:border-white transition-all duration-300 hover:scale-110"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.instagram.com/arif.rabbaani/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-dark-card/80 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center text-xl hover:text-accent-pink hover:border-accent-pink transition-all duration-300 hover:scale-110"
        >
          <FaInstagram />
        </a>
        <a
          href="https://wa.me/8801849831855"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-dark-card/80 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center text-xl hover:text-green-400 hover:border-green-400 transition-all duration-300 hover:scale-110"
        >
          <FaWhatsapp />
        </a>
      </motion.div>
    </div>
  );
}
