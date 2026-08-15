import { motion } from "framer-motion";

export default function Skills() {
  const skillsData = {
    "Languages": ["JavaScript", "Python", "TypeScript", "C/C++", "Java", "HTML5", "CSS3", "SQL"],
    "Frameworks & Technologies": ["React", "React Native", "Expo", "Node.js", "Express.js", "FastAPI", "LangGraph", "Firebase", "AWS", "Vercel", "Socket.io", "Tailwind CSS"],
    "Libraries": ["Axios", "Mongoose", "JWT", "bcrypt", "NumPy", "Pandas", "TensorFlow", "React Navigation"],
    "Databases": ["MySQL", "PostgreSQL", "MongoDB", "Cloud Firestore", "Realtime Database"],
    "Tools": ["Git", "GitHub", "Docker", "Postman", "Figma", "Canva", "Notion", "Expo CLI"],
  };

  return (
    <section id="skills" className="w-full flex justify-center items-center py-20 md:py-32 px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-dark-card/50 to-dark-surface/50 backdrop-blur-xl p-7 md:p-12 rounded-2xl shadow-2xl border border-white/10 max-w-6xl w-full relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 text-center bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 text-left relative z-10">
          {Object.entries(skillsData).map(([category, list], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + categoryIndex * 0.1 }}
            >
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] mb-5 text-gray-500 flex items-center gap-2">
                <span className="w-5 h-px bg-accent/70"></span>
                {category}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {list.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.4 + (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    whileHover={{ y: -3 }}
                    className="bg-accent/10 text-gray-200 px-3 py-1.5 rounded-md text-sm font-medium shadow-sm hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 cursor-default border border-accent/35"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
