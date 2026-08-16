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
        className="bg-dark-card p-7 md:p-12 rounded-xl border border-slate-700 max-w-6xl w-full"
      >
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 md:mb-14 text-center text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-16 text-left">
          {Object.entries(skillsData).map(([category, list], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + categoryIndex * 0.1 }}
            >
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] mb-5 text-slate-500">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {list.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.4 + (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    className="bg-accent/10 text-slate-200 px-3 py-1.5 rounded-md text-sm font-medium cursor-default border border-accent/40"
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
