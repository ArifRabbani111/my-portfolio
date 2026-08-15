import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { FaGithub, FaLinkedin, FaCode, FaEnvelope, FaLaptopCode } from "react-icons/fa";
import { Link } from "react-scroll";

export default function About() {
  return (
    <section id="about" className="w-full min-h-screen flex items-center justify-center relative overflow-hidden pt-28 md:pt-36 pb-24 md:pb-32">
      {/* Decorative gradients */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent-purple/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent-pink/5 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-7 md:space-y-9"
          >
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-gray-400 font-medium tracking-[0.28em] uppercase text-[11px] md:text-xs"
              >
                Hello, I'm
              </motion.p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-[-0.06em] text-white leading-[0.95]">
                Arif Rabbani
              </h1>
              <div className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-medium flex flex-wrap items-center gap-x-2 gap-y-1">
                <span className="text-gray-400">I'm a</span>
                <span className="text-accent">
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
              className="text-gray-400 text-base md:text-lg max-w-lg leading-8"
            >
              Trainee Engineer at <span className="font-bold text-white">Pathao</span> in the Data Engineering Team & Software Engineer with experience in building modern web applications. 600+ problems solved across competitive programming platforms.
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
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-7 py-3 bg-accent text-white font-semibold rounded-md hover:shadow-lg hover:shadow-accent/30 transition-all duration-300"
                >
                  Let's Connect
                </motion.button>
              </Link>
              <motion.a
                href="/arif cv.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-7 py-3 border border-accent/60 text-white font-semibold rounded-md hover:bg-accent/10 transition-all duration-300"
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
                  whileHover={{ y: -4, backgroundColor: "rgba(217, 70, 239, 0.14)" }}
                  className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent transition-all duration-300 text-lg"
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 28, y: 16 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex justify-center items-center py-10 md:py-0"
          >
            <div className="relative group">
              <div className="absolute -right-6 -bottom-6 h-full w-full rounded-[2rem] bg-accent/20 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
              <div className="absolute -left-5 -top-5 h-24 w-24 rounded-full border border-accent/40"></div>

              {/* Profile Image Container */}
              <div className="relative w-64 h-80 md:w-80 md:h-[420px] overflow-hidden rounded-[1.7rem] border border-white/10 shadow-2xl">
                <img
                  src="/profile.jpg"
                  alt="Arif Rabbani"
                  className="w-full h-full object-cover grayscale-[15%] sepia-[8%] hue-rotate-[285deg] saturate-[1.1] transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/55 via-transparent to-accent/10 mix-blend-screen"></div>
              </div>

              {/* Glowing background effect */}
              <div className="absolute -z-10 inset-0 bg-accent/25 blur-[70px] opacity-60 transition-opacity duration-700 group-hover:opacity-100"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
