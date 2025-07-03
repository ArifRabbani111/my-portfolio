import projects from "../data/Projects";

export default function Projects() {
  return (
    <section  id="projects" className="p-8 min-h-screen bg-gray-50">
      <h2 className="text-3xl font-bold text-indigo-700 mb-8 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map(project => (
          <div key={project.id} className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition duration-300">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-indigo-700">{project.title}</h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tech.map(tech => (
                  <span key={tech} className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full text-xs">{tech}</span>
                ))}
              </div>
              <div className="mt-4 space-x-4">
                <a href={project.github} target="_blank" className="text-indigo-600 underline">GitHub</a>
                {project.live && <a href={project.live} target="_blank" className="text-indigo-600 underline">Live Demo</a>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

