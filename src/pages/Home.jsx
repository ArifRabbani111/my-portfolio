import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { FaGithub, FaLinkedin, FaCode, FaEnvelope, FaLaptopCode } from "react-icons/fa";

export default function Home() {
  return (
    <section id="home" className="relative min-h-screen w-full bg-dark-bg flex items-center justify-center pt-20 px-4 md:px-8 lg:px-16 overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent-purple/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent-pink/5 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Side - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 md:space-y-8"
        >
          <div className="space-y-2">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-gray-300 text-lg md:text-xl"
            >
              Hello, I'm <span className="text-white font-bold">Arif Rabbani</span>
            </motion.p>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight">
              I'm a <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-pink">
                <ReactTyped
                  strings={['Software Engineer', 'React Developer', 'CP Enthusiast']}
                  typeSpeed={50}
                  backSpeed={30}
                  loop
                />
              </span>
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 text-base md:text-lg max-w-xl leading-relaxed"
          >
            Final-year Software Engineering student at SUST. I build scalable web applications using React, Node.js, and modern technologies. 600+ problems solved across competitive programming platforms.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-accent-purple to-accent-pink text-white font-semibold rounded-full hover:shadow-lg hover:shadow-accent-purple/30 transition-all duration-300"
            >
              Let's Connect
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-accent-purple/50 text-white font-semibold rounded-full hover:bg-accent-purple/10 transition-all duration-300"
            >
              View Work
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center gap-4 pt-4"
          >
            {[
              { icon: <FaGithub />, href: "https://github.com/thebackbencher666" },
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
                whileHover={{ y: -5, backgroundColor: "rgba(168, 85, 247, 0.2)" }}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-accent-purple hover:border-accent-purple transition-all duration-300 text-lg md:text-xl"
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side - Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex justify-center items-center py-10 md:py-0"
        >
          <div className="relative group">
            {/* L-shaped corner frames */}
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4 border-accent-purple group-hover:w-16 group-hover:h-16 transition-all duration-500"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-4 border-r-4 border-accent-pink group-hover:w-16 group-hover:h-16 transition-all duration-500"></div>

            {/* Profile Image Container */}
            <div className="relative w-64 h-80 md:w-80 md:h-[420px] overflow-hidden rounded-lg">
              <img
                src="/profile.jpg"
                alt="Arif Rabbani"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Glowing background effect */}
            <div className="absolute -z-10 inset-0 bg-accent-purple/20 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
