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
    <div className="bg-gradient-to-br from-dark-bg via-[#101125] to-[#1b1029] text-white min-h-screen relative overflow-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-48 right-[8%] h-[32rem] w-[32rem] rounded-full bg-accent/15 blur-[140px]"></div>
        <div className="absolute bottom-[10%] -left-40 h-96 w-96 rounded-full bg-accent/10 blur-[140px]"></div>
        <div className="noise-overlay absolute inset-0 opacity-[0.035]"></div>
      </div>

      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-dark-surface/80 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-4 flex items-center justify-between gap-5">
          <motion.a
            href="https://www.facebook.com/profile.php?id=61576377830342"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl md:text-2xl font-bold tracking-[-0.06em] text-white hover:text-accent transition-colors"
            whileHover={{ y: -1 }}
          >
            RDN
          </motion.a>

          <nav className="hidden lg:flex items-center gap-1 ml-auto">
            {navItems.filter((item) => item.id !== "contact").map((item) => (
              <Link key={item.id} to={item.id} smooth duration={500} offset={-80}
                className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer px-3 py-2">
                {item.label}
              </Link>
            ))}
            <Link to="contact" smooth duration={500} offset={-80}
              className="ml-3 cursor-pointer rounded-md border border-accent/70 bg-accent/10 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-accent hover:shadow-lg hover:shadow-accent/20">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white p-2 hover:text-accent transition-colors"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-dark-surface/95 backdrop-blur-xl border-t border-white/10"
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
                    className="text-gray-300 hover:text-accent transition-colors cursor-pointer px-4 py-2 rounded-lg hover:bg-white/5"
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
      <main className="w-full px-4 md:px-8 lg:px-16 py-0 space-y-8 md:space-y-12 overflow-x-hidden relative z-10">
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
        className="hidden xl:flex fixed left-8 2xl:left-12 top-1/2 transform -translate-y-1/2 z-20 flex-col items-center gap-3"
      >
        <span className="mb-2 text-[10px] font-medium tracking-[0.28em] text-gray-500 [writing-mode:vertical-rl] rotate-180">FOLLOW ME</span>
        <a
          href="https://github.com/thebackbencher666"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon w-11 h-11 bg-dark-card/70 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center text-lg"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/arif-rabbani-arian/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon w-11 h-11 bg-dark-card/70 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center text-lg"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.facebook.com/arif.rabbani.10297701"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon w-11 h-11 bg-dark-card/70 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center text-lg"
        >
          <FaFacebook />
        </a>
        <a
          href="https://x.com/ArifRabb999"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon w-11 h-11 bg-dark-card/70 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center text-lg"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.instagram.com/arif.rabbaani/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon w-11 h-11 bg-dark-card/70 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center text-lg"
        >
          <FaInstagram />
        </a>
        <a
          href="https://wa.me/8801849831855"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon w-11 h-11 bg-dark-card/70 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center text-lg"
        >
          <FaWhatsapp />
        </a>
      </motion.div>
    </div>
  );
}
