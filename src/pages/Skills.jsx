import React from 'react';
import { motion } from "framer-motion";

export default function Skills() {
  const skillsData = {
    "Frontend": ["React", "Tailwind CSS", "HTML", "CSS", "JavaScript"],
    "Backend": ["Node.js", "Express.js", "Firebase"],
    "Tools & Others": ["Git", "GitHub", "Figma", "VS Code", "Netlify", "Cursor"],
    "Problem Solving": ["DSA", "LeetCode", "Vjudge", "Codeforces", "CodeChef"],
  };

  const skillColors = [
    "from-accent-purple to-accent-pink",
    "from-accent-cyan to-blue-500",
    "from-accent-orange to-yellow-500",
    "from-green-500 to-emerald-500",
  ];

  return (
    <section id="skills" className="w-full flex justify-center items-center py-8 md:py-12 px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-dark-card/50 to-dark-surface/50 backdrop-blur-xl p-6 md:p-10 rounded-2xl shadow-2xl border border-white/10 max-w-6xl w-full relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl"></div>

        <motion.h2 
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 text-center bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6 text-left relative z-10">
          {Object.entries(skillsData).map(([category, list], categoryIndex) => (
            <motion.div 
              key={category}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + categoryIndex * 0.1 }}
            >
              <h3 className="text-lg md:text-xl font-semibold mb-4 text-white flex items-center gap-2">
                <span className={`w-1 h-5 bg-gradient-to-b ${skillColors[categoryIndex % skillColors.length]} rounded-full`}></span>
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {list.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.4 + (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`bg-gradient-to-r ${skillColors[categoryIndex % skillColors.length]} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 cursor-default border border-white/20`}
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
