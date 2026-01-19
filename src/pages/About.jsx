import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="w-full min-h-screen flex items-center justify-center relative overflow-hidden pt-24 md:pt-32 pb-16 md:pb-24">
      {/* Blurred Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/profile.jpg"
          alt="Arif Rabbani Background"
          className="w-full h-full object-cover"
          style={{
            filter: 'blur(15px) brightness(0.6)',
            objectFit: 'cover',
            objectPosition: 'center',
            width: '100%',
            height: '100%',
          }}
        />
        {/* Dark overlay for better text readability - lighter */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/60 via-dark-bg/50 to-dark-bg/60"></div>
        {/* Additional gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent-purple/10 via-transparent to-accent-cyan/10"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-6 lg:pl-20 py-12 md:py-20">
        {/* Hero Section with Profile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-accent-purple mb-2"
          >
            Hi! I am
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 text-white"
          >
            Arif Rabbani
          </motion.h1>

          {/* Title */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl md:text-3xl lg:text-4xl text-white mb-6"
          >
            Software Engineer
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            Trainee Engineer at <span className="font-bold text-white">Pathao</span> in the Data Engineering Team & Software Engineer with experience in building modern web applications. <span className="font-bold text-accent-cyan">Check out my CV</span>
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 md:mb-20"
          >
            <motion.a
              href="/arif cv.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-accent-purple via-accent-pink to-accent-cyan text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-accent-purple/50 transition-all duration-300 text-center min-w-[200px]"
            >
              Download Resume
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-accent-purple text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent-purple/20 transition-all duration-300 text-center min-w-[200px]"
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>

        {/* About Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-dark-card/60 backdrop-blur-xl p-6 md:p-10 rounded-2xl border border-white/20 relative overflow-hidden mt-8 md:mt-12"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-purple/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-cyan/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-gray-300 mb-4">
              Hi, I'm <span className="font-semibold text-white bg-gradient-to-r from-accent-purple to-accent-pink bg-clip-text text-transparent">Arif Rabbani</span>, a passionate Software Engineer based in Bangladesh. Currently working as a Trainee Engineer at Pathao in the Data Engineering team, I love building efficient, clean, and user-focused web applications using modern tools like React, Node.js, and Tailwind CSS.
            </p>
            <p className="text-gray-400 text-base italic">
              ✨ Curious by nature. Obsessed with code quality. Always learning. ✨
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
