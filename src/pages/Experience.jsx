import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      company: "Pathao",
      position: "Trainee Engineer",
      team: "Data Engineering Team",
      location: "Bangladesh",
      startDate: "December 2025",
      endDate: "Present",
      description: "Working as a Trainee Engineer in the Data Engineering team, contributing to data pipeline development, ETL processes, and data infrastructure maintenance.",
      responsibilities: [
        "Developing and maintaining data pipelines for efficient data processing",
        "Working with ETL processes to transform and load data",
        "Collaborating with the data engineering team on infrastructure projects",
        "Learning and implementing best practices in data engineering",
      ],
      technologies: ["Python", "SQL", "ETL", "Data Pipelines", "Big Data"],
    },
  ];

  return (
    <section id="experience" className="w-full py-8 md:py-12 px-4 md:px-6 flex items-center justify-center">
      <div className="max-w-6xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 text-center bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
        >
          Experience
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gradient-to-br from-dark-card/50 to-dark-surface/50 backdrop-blur-xl p-6 md:p-10 rounded-2xl shadow-2xl border border-white/10 relative overflow-hidden"
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent-purple/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-cyan/10 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <FaBriefcase className="text-accent-purple text-xl" />
                      <h3 className="text-2xl md:text-3xl font-bold text-white">
                        {exp.position}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 text-accent-cyan mb-2">
                      <span className="text-lg md:text-xl font-semibold">{exp.company}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-300">{exp.team}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm md:text-base text-gray-400">
                      <div className="flex items-center gap-2">
                        <FaCalendarAlt className="text-accent-pink" />
                        <span>{exp.startDate} - {exp.endDate}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-accent-cyan" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Responsibilities */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Responsibilities:</h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-300">
                        <span className="text-accent-purple mt-1.5">▹</span>
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-gradient-to-r from-accent-purple/20 to-accent-pink/20 text-white text-sm font-semibold px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
