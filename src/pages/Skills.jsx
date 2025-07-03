import React from 'react'; // ✅ Capital R

export default function Skills() {
  const skills = {
    "Frontend": ["React", "Tailwind CSS", "HTML", "CSS", "JavaScript"],
    "Backend": ["Node.js", "Express.js", "Firebase"],
    "Tools & Others": ["Git", "GitHub", "Figma", "VS Code", "Netlify"],
  };

  return (
    <section id="skills" className="min-h-screen p-8 bg-white text-center">
      <h2 className="text-3xl font-bold text-indigo-700 mb-8">Skills</h2>

      <div className="grid md:grid-cols-3 gap-8 text-left max-w-5xl mx-auto">
        {Object.entries(skills).map(([category, list]) => (
          <div key={category}>
            <h3 className="text-xl font-semibold text-indigo-600 mb-4">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {list.map((skill) => (
                <span
                  key={skill}
                  className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium shadow-sm hover:bg-indigo-200 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}