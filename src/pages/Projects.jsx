import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "ClipTalk",
      description: "ClipTalk is a web application delivering a seamless, personalized entertainment experience. It leverages AI-driven recommendations, social interaction features, and genuine user reviews to help users discover and enjoy content effortlessly.",
      image: "clip.png",
      stack: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Express"],
      link: "https://github.com/ArifRabbani111/ClipTalk"
    },
    {
      title: "AIIM",
      description: "A web based ChatAPP that allows users to chat with AI models like ChatGPT along with messaging with other users. Built with Typescript, Convex, and MongoDB.",
      image: "aiim.jpg",
      stack: ["TypeScript", "Convex", "MongoDB", "React", "Tailwind CSS"],
      link: "https://github.com/ArifRabbani111/aiim"
    },
    {
      title: "ChatApp",
      description: "A real-time chat application built with React Native and Firebase.",
      image: "2.jpg",
      stack: ["React Native", "Firebase", "Expo"],
      link: "https://github.com/ArifRabbani111/ChatApp",
    },
    {
      title: "HIT Game",
      description: "HIT is a 2D arcade-style multiplayer space shooter built in Python with Pygame. Engage in duels, dodge bullets, and beat the high score!",
      image: "HIT.png",
      stack: ["Python", "Pygame", "OpenGameArt", "Arcade Game"],
      link: "https://github.com/ArifRabbani111/HIT",
    },
    {
      title: "Little Pirate Game",
      description: "A fun JavaScript-based 2D game where players collect coins, jump through obstacles, and fight enemies. Built using vanilla JavaScript and canvas.",
      image: "littlepirate.jpg",
      stack: ["JavaScript", "HTML5", "CSS3", "Canvas API"],
      link: "https://github.com/ArifRabbani111/LittlePirateGame",
    },
    {
      title: "Joke Extension",
      description: "A Chrome extension that fetches clean, random jokes from JokeAPI. Great for a quick laugh during coding or meetings. Built with vanilla JS.",
      image: "icon.png",
      stack: ["JavaScript", "HTML", "CSS"],
      link: "https://github.com/ArifRabbani111/jokes",
    },
    {
      title: "API Project Collection",
      description: "A curated collection of beginner to advanced API-based projects including weather app, crypto tracker, currency converter, dictionary, and more.",
      image: "ap.jpg",
      stack: ["JavaScript", "REST APIs", "HTML", "CSS"],
      link: "https://github.com/ArifRabbani111/API",
    }
  ];

  return (
    <section id="projects" className="w-full py-8 md:py-12 px-4 md:px-6 lg:pl-20 flex items-center justify-center">
      <div className="max-w-7xl w-full">
        <motion.h2 
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-8 text-center bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-gradient-to-br from-dark-card/80 to-dark-surface/80 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden border border-white/10 hover:border-accent-purple/50 transition-all duration-300 relative"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent-purple/0 via-accent-pink/0 to-accent-cyan/0 group-hover:from-accent-purple/10 group-hover:via-accent-pink/10 group-hover:to-accent-cyan/10 transition-all duration-300"></div>
              
              {project.image && (
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-card/80 to-transparent"></div>
                </div>
              )}
              
              <div className="p-6 text-white relative z-10">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-accent-cyan transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gradient-to-r from-accent-purple/20 to-accent-pink/20 text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/10 backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent-cyan hover:text-accent-pink font-semibold text-sm transition-colors group/link"
                >
                  <FaGithub className="group-hover/link:scale-110 transition-transform" />
                  View on GitHub
                  <FaExternalLinkAlt className="text-xs group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

