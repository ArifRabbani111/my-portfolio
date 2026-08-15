import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaGlobe } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "pearson specter litt",
      description: "Internal workflow for ingesting messy legal documents, extracting structured information, generating grounded case fact summaries, and improving from operator edits.",
      stack: ["Python", "pymupdf", "pytesseract + Tesseract", "Groq", "Gemini text-embedding-004", "ChromaDB", "SQLite", "FasAPI"],
      github: "https://github.com/ArifRabbani111/pearson-specter-litt",
    },
    {
      title: "ARIFIN",
      description: "An intelligent data-analysis agent that combines reasoning and execution to produce evidence-driven insights from complex datasets.",
      stack: ["Python", "FastAPI", "LangGraph", "Gemini", "PostgreSQL", "pgvector", "E2B"],
      github: "https://github.com/ArifRabbani111/arifin-agent",
    },
    {
      title: "Kotha",
      description: "An AI-powered personal knowledge chatbot that lets users upload TXT, PDF, and DOCX files and ask context-aware questions about them.",
      stack: ["Python", "FastAPI", "Streamlit", "LangChain", "Gemini", "FAISS"],
      github: "https://github.com/ArifRabbani111/kotha",
    },
    {
      title: "MatchTalk",
      description: "An anonymous, event-based live chat app where users share match reactions under persistent random nicknames, with built-in rate limiting.",
      stack: ["Next.js", "Prisma", "PostgreSQL", "JavaScript", "Vercel"],
      github: "https://github.com/ArifRabbani111/tong-golpo",
      live: "https://tong-golpo.vercel.app",
    },
    {
      title: "Swapnotthan",
      description: "Swapnotthan is a web application delivering community to help people to reduce theeir distress and help them to find happiness. It uses JavaScript, React, Node.js, MongoDB, Tailwind CSS, and Express to provide a seamless user experience.",
      stack: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Express"],
      github: "https://github.com/ArifRabbani111/swapnotthan",
      live: "https://www.swapnotthan.org/"
    },
    {
      title: "ClipTalk",
      description: "ClipTalk is a web application delivering a seamless, personalized entertainment experience. It leverages AI-driven recommendations, social interaction features, and genuine user reviews to help users discover and enjoy content effortlessly.",
      image: "clip.png",
      stack: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Express"],
      github: "https://github.com/ArifRabbani111/ClipTalk",
      live: "https://clip-talk-dev.vercel.app/"
    },
    {
      title: "Movie & Book Idea Generator",
      description: "A Gemini-powered creative writing tool that generates original movie plots and book concepts through a responsive web interface.",
      stack: ["JavaScript", "Node.js", "Express", "Gemini API", "Tailwind CSS"],
      github: "https://github.com/ArifRabbani111/book-and-movie-idea-generator",
      live: "https://book-and-movie-idea-generator.onrender.com",
    },
    {
      title: "AIIM",
      description: "A web based ChatAPP that allows users to chat with AI models like ChatGPT along with messaging with other users. Built with Typescript, Convex, and MongoDB.",
      image: "aiim.jpg",
      stack: ["TypeScript", "Convex", "MongoDB", "React", "Tailwind CSS"],
      github: "https://github.com/ArifRabbani111/aiim",
      // No live link for this project
    },
    {
      title: "ChatApp",
      description: "A real-time chat application built with React Native and Firebase.",
      image: "2.jpg",
      stack: ["React Native", "Firebase", "Expo"],
      github: "https://github.com/ArifRabbani111/ChatApp",
      // No live link for this project
    },
    {
      title: "HIT Game",
      description: "HIT is a 2D arcade-style multiplayer space shooter built in Python with Pygame. Engage in duels, dodge bullets, and beat the high score!",
      image: "HIT.png",
      stack: ["Python", "Pygame", "OpenGameArt", "Arcade Game"],
      github: "https://github.com/ArifRabbani111/HIT",
      // No live link for this project
    },
    {
      title: "Little Pirate Game",
      description: "A fun JavaScript-based 2D game where players collect coins, jump through obstacles, and fight enemies. Built using vanilla JavaScript and canvas.",
      image: "littlepirate.jpg",
      stack: ["JavaScript", "HTML5", "CSS3", "Canvas API"],
      github: "https://github.com/ArifRabbani111/LittlePirateGame",
      // No live link for this project
    },
    {
      title: "Joke Extension",
      description: "A Chrome extension that fetches clean, random jokes from JokeAPI. Great for a quick laugh during coding or meetings. Built with vanilla JS.",
      image: "icon.png",
      stack: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/ArifRabbani111/jokes",
      // No live link for this project
    },
    {
      title: "Socket Programming Chat",
      description: "A multi-user real-time chat and file-server system supporting uploads, downloads, deletion, file listings, and connection-status updates.",
      stack: ["Python", "Socket Programming", "Multithreading", "File Transfer"],
      github: "https://github.com/ArifRabbani111/socket-programming-chat",
    },
    {
      title: "MNIST CNN Classifier",
      description: "A complete deep-learning workflow for handwritten digit classification, including CNN training, evaluation, visualization, and hyperparameter tuning.",
      stack: ["Python", "TensorFlow", "Keras", "Keras Tuner", "Jupyter"],
      github: "https://github.com/ArifRabbani111/Deep-Learning-Project",
    },
    {
      title: "Video Game Sales Prediction",
      description: "A machine-learning pipeline that predicts global video-game sales using preprocessing, exploratory visualization, and linear regression evaluation.",
      stack: ["Python", "scikit-learn", "Pandas", "Seaborn", "Jupyter"],
      github: "https://github.com/ArifRabbani111/video_game_selling_prediction",
    },
    {
      title: "API Project Collection",
      description: "A curated collection of beginner to advanced API-based projects including weather app, crypto tracker, currency converter, dictionary, and more.",
      image: "ap.jpg",
      stack: ["JavaScript", "REST APIs", "HTML", "CSS"],
      github: "https://github.com/ArifRabbani111/API",
      // No live link for this project
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
                
                {/* Links Section */}
                <div className="flex flex-wrap items-center gap-3">
                  {/* GitHub Link */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent-cyan hover:text-accent-pink font-semibold text-sm transition-colors group/link"
                  >
                    <FaGithub className="group-hover/link:scale-110 transition-transform" />
                    Code
                    <FaExternalLinkAlt className="text-xs group-hover/link:translate-x-1 transition-transform" />
                  </a>

                  {/* Live Link - Only show if project has a live URL */}
                  {project.live && (
                    <>
                      <span className="text-white/20">•</span>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-semibold text-sm transition-colors group/link"
                      >
                        <FaGlobe className="group-hover/link:scale-110 transition-transform" />
                        Live Demo
                        <FaExternalLinkAlt className="text-xs group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
