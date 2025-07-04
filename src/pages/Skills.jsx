import React from 'react';

export default function Skills() {
  const skills = {
    "Frontend": ["React", "Tailwind CSS", "HTML", "CSS", "JavaScript"],
    "Backend": ["Node.js", "Express.js", "Firebase"],
    "Tools & Others": ["Git", "GitHub", "Figma", "VS Code", "Netlify", "cursor"],
    "Problem Solving": ["DSA", "LeetCode", "Vjudge", "Codeforces", "CodeChef"],
  };

  return (
    <section id="skills" className="min-h-screen p-8 flex justify-center items-center">
      <div
        className="bg-white/10 backdrop-blur-md p-10 rounded-xl shadow-lg border border-white/10 w-full max-w-5xl text-center"
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-bold text-white mb-8">Skills</h2>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          {Object.entries(skills).map(([category, list]) => (
            <div key={category}>
              <h3 className="text-xl font-semibold text-blue-200 mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {list.map((skill) => (
                  <span
                    key={skill}
                    className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium shadow hover:bg-white/30 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
