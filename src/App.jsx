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
    <div className="bg-[#070707] text-slate-50 min-h-screen relative overflow-hidden">

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#070707]/95 border-b border-white/10 backdrop-blur-sm' : 'bg-[#070707] border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-4 flex items-center justify-between gap-5">
          <a
            href="https://www.facebook.com/profile.php?id=61576377830342"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl md:text-4xl font-black tracking-[-0.06em] text-white leading-none"
          >
            RDN
          </a>

          <nav className="hidden lg:flex items-center gap-1 ml-auto">
            {navItems.filter((item) => item.id !== "contact").map((item) => (
              <Link key={item.id} to={item.id} smooth duration={500} offset={-80}
                className="text-[11px] uppercase tracking-[0.22em] text-gray-300 hover:text-white transition-colors cursor-pointer px-3 py-2">
                {item.label}
              </Link>
            ))}
            <button className="ml-3 cursor-pointer rounded-md border border-white/15 bg-transparent px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-white transition-colors hover:bg-white/5">
              Resume
            </button>
            <Link to="contact" smooth duration={500} offset={-80}
              className="ml-3 cursor-pointer rounded-md bg-[#ef5a5a] px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#ff6b6b]">
              Contact Me
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white p-2 hover:text-red-400 transition-colors"
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
              className="lg:hidden bg-dark-bg border-t border-slate-700"
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
      </header>

      {/* Main Content */}
      <main className="w-full px-4 md:px-8 lg:px-16 py-0 space-y-12 md:space-y-20 overflow-x-hidden relative z-10">
        <About />
        <Experience />
        <Skills />
        <Projects />
        <CP />
        <Certifications />
        <Contact />
      </main>

      {/* Floating Social Icons - Hidden on mobile, visible on desktop */}
      <div
        className="hidden xl:flex fixed left-12 2xl:left-16 top-1/2 transform -translate-y-1/2 z-20 flex-col items-center gap-3"
      >
        <span className="mb-2 text-[10px] font-medium tracking-[0.28em] text-gray-500 [writing-mode:vertical-rl] rotate-180">FOLLOW ME</span>
        <a
          href="https://github.com/thebackbencher666"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon w-11 h-11 text-white/90 hover:text-black hover:bg-white border border-white/20 rounded-full flex items-center justify-center text-lg transition-all duration-300"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/arif-rabbani-arian/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon w-11 h-11 text-white/90 hover:text-black hover:bg-white border border-white/20 rounded-full flex items-center justify-center text-lg transition-all duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.facebook.com/arif.rabbani.10297701"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon w-11 h-11 text-white/90 hover:text-black hover:bg-white border border-white/20 rounded-full flex items-center justify-center text-lg transition-all duration-300"
        >
          <FaFacebook />
        </a>
        <a
          href="https://x.com/ArifRabb999"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon w-11 h-11 text-white/90 hover:text-black hover:bg-white border border-white/20 rounded-full flex items-center justify-center text-lg transition-all duration-300"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.instagram.com/arif.rabbaani/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon w-11 h-11 text-white/90 hover:text-black hover:bg-white border border-white/20 rounded-full flex items-center justify-center text-lg transition-all duration-300"
        >
          <FaInstagram />
        </a>
        <a
          href="https://wa.me/8801849831855"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon w-11 h-11 text-white/90 hover:text-black hover:bg-white border border-white/20 rounded-full flex items-center justify-center text-lg transition-all duration-300"
        >
          <FaWhatsapp />
        </a>
      </div>
    </div>
  );
}
