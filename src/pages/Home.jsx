// Home.jsx
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import { ReactTyped } from "react-typed";


export default function Home() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-white to-indigo-100 flex flex-col items-center justify-center text-center px-4">
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: { value: "#ffffff00" } },
          particles: {
            number: { value: 40 },
            size: { value: 3 },
            move: { enable: true, speed: 1 },
            color: { value: "#6366f1" },
            line_linked: { enable: true, color: "#6366f1" },
          },
        }}
        className="absolute inset-0 z-0"
      />

      {/* Hero Text */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-bold text-indigo-700 z-10"
      > Hi I am <span className="text-blue-200"></span>
        Arif Rabbani
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-xl md:text-2xl text-gray-700 mt-4 z-10"
      >
        <ReactTyped
            strings={['Software Engineer', 'React Developer', 'Final Year at SUST']}
            typeSpeed={50}
            backSpeed={30}
            loop
        />

      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="mt-6 space-x-4 z-10"
      >
        <a
          href="/arif cv.pdf"
          className="bg-indigo-600 text-white px-5 py-2 rounded-md hover:bg-indigo-700 transition"
        >
          Resume
        </a>
        <a
          href="#contact"
          className="border border-indigo-600 text-indigo-600 px-5 py-2 rounded-md hover:bg-indigo-50 transition"
        >
          Contact
        </a>
      </motion.div>
      
    </section>
  );
}
