import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { FaGithub, FaLinkedin, FaCode, FaEnvelope, FaLaptopCode } from "react-icons/fa";
import { Link } from "react-scroll";

export default function About() {
  return (
    <section id="about" className="w-full min-h-screen flex items-center justify-center pt-28 md:pt-32 pb-16 md:pb-20">

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
                  className="px-7 py-3 bg-accent text-white font-semibold rounded-md transition-colors hover:bg-accent/90"
                >
                  Let's Connect
                </motion.button>
              </Link>
              <motion.a
                href="/ARIF_RABBANI_SOFTWARE_ENGINEER_RESUME.pdf"
                download
                className="px-7 py-3 border border-slate-600 text-white font-semibold rounded-md hover:border-accent transition-colors"
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
                  className="w-10 h-10 md:w-11 md:h-11 rounded-full border border-slate-700 flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent transition-colors text-lg"
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
            className="relative flex justify-center items-center py-10 md:py-0"
          >
            <div className="relative">

              {/* Profile Image Container */}
              <div className="relative w-64 h-80 md:w-80 md:h-[420px] overflow-hidden rounded-xl border border-slate-700">
                <img
                  src="/profile.jpg"
                  alt="Arif Rabbani"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
