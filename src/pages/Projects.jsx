export default function Projects() {
  const projects = [
    {
      title: "ChatApp",
      description: "A real-time chat application built with React Native and Firebase.",
      image: "2.jpg", // Optional thumbnail
      stack: ["React Native", "Firebase", "Expo"],
      link: "https://github.com/thebackbencher666/ChatApp",
    },
    {
      title: "HIT Game",
      description:
        "HIT is a 2D arcade-style multiplayer space shooter built in Python with Pygame. Engage in duels, dodge bullets, and beat the high score!",
      image: "HIT.png",
      stack: ["Python", "Pygame", "OpenGameArt", "Arcade Game"],
      link: "https://github.com/thebackbencher666/HIT",
    },
    // Add more as needed
  ];

  return (
    <section id="projects" className="min-h-screen px-6 py-10 flex items-center justify-center">
      <div className="bg-white/10 backdrop-blur-md p-10 rounded-xl shadow-lg border border-white/10 max-w-6xl w-full">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Projects</h2>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/20 backdrop-blur-md rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition border border-white/10"
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-5 text-white">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-blue-100 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-indigo-300 text-indigo-900 text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-blue-300 hover:underline"
                >
                  GitHub →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

