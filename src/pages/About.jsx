import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { FaGithub, FaLinkedin, FaCode, FaEnvelope, FaLaptopCode } from "react-icons/fa";
import { Link } from "react-scroll";

export default function About() {
  return (
    <section id="about" className="w-full min-h-screen flex items-center justify-center pt-28 md:pt-32 pb-16 md:pb-20">

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 md:space-y-8"
          >
            <div className="space-y-5">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-gray-300 font-medium tracking-[0.25em] uppercase text-[10px] md:text-xs"
              >
                Software Engineering Student • Full-Stack Developer
              </motion.p>

              <h1 className="leading-[0.8] text-[4.6rem] sm:text-[6rem] md:text-[7.5rem] lg:text-[9.7rem] font-black tracking-[-0.08em] text-white uppercase">
                <span className="block text-white">ARIF</span>
                <span className="block text-white">RABBANI</span>
              </h1>

              <div className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-medium flex flex-wrap items-center gap-x-2 gap-y-1">
                <span className="text-gray-400">I'm a</span>
                <span className="text-red-400">
                  <ReactTyped
                    strings={['Software Engineer', 'Fullstack Developer', 'CP Enthusiast', "AI Developer"]}
                    typeSpeed={50}
                    backSpeed={30}
                    loop
                  />
                </span>
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gray-300 text-base md:text-lg max-w-xl leading-8"
            >
              Building responsive, AI-driven web applications with React, Vue, Node.js, and MongoDB. Experienced in school platforms, job portals, and real-time communication systems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-80}
              >
                <motion.button
                  className="px-7 py-3 bg-[#ef5a5a] text-white font-semibold rounded-md shadow-lg shadow-red-500/10 transition-all duration-300 hover:bg-[#ff6b6b]"
                >
                  Let's Connect
                </motion.button>
              </Link>
              <motion.a
                href="/ARIF_RABBANI_SOFTWARE_ENGINEER_RESUME.pdf"
                download
                className="px-7 py-3 border border-white/30 bg-transparent text-white font-semibold rounded-md transition-all duration-300 hover:bg-white hover:text-black"
              >
                Download Resume
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-4 pt-4"
            >
              {[
                { icon: <FaGithub />, href: "https://github.com/ArifRabbani111" },
                { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/arif-rabbani-arian/" },
                { icon: <FaCode />, href: "#cp" },
                { icon: <FaLaptopCode />, href: "#experience" },
                { icon: <FaEnvelope />, href: "mailto:arifrabbani00000@gmail.com" }
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="w-10 h-10 md:w-11 md:h-11 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-gray-200 hover:text-red-400 hover:border-red-400 transition-colors text-lg"
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Image Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex justify-center items-center py-6 md:py-0"
          >
            <div className="relative w-full max-w-[560px]">
              <div className="absolute inset-0 -z-10 bg-white/10 blur-[100px] rounded-full" />
              <div className="relative overflow-hidden rounded-none border-l border-white/10 bg-[#0f0f0f] shadow-[0_0_80px_rgba(255,255,255,0.05)] min-h-[480px] md:min-h-[620px]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.12),_transparent_55%)]" />
                <img
                  src="/profile.jpg"
                  alt="Arif Rabbani"
                  className="w-full h-full object-cover grayscale contrast-125 brightness-[0.7]"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
