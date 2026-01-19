import { motion } from "framer-motion";

export default function Achievements() {
  const achievements = [
    {
      title: "Kaggle Python Certificate",
      description: "Successfully completed Python course on Kaggle",
      date: "December 23, 2025",
      image: "/kaggle-python.jpeg",
      issuer: "Kaggle",
    },
    {
      title: "University Innovation Hub Program",
      description: "SUST Innovation Cohort 3 - Innovation, Entrepreneurship, and Business Transformation",
      date: "March 14, 2025",
      issuer: "DEIED Project, BHTPA, ICT Division",
      image: "/innovation-hub.jpeg",
    },
    {
      title: "HackerRank SQL (Intermediate)",
      description: "Certificate of Accomplishment - Passed SQL (Intermediate) skill certification test",
      date: "September 3, 2025",
      image: "/hackerrank-sql.jpeg",
      issuer: "HackerRank",
    },
    {
      title: "Python and Data Science Certification",
      description: "Completed Python and basic Data Science in IICT organized by EDGE",
      date: "February 2025",
      image: "/PDS.jpg",
      issuer: "IICT, EDGE",
    },
  ];

  return (
    <section id="certifications" className="w-full py-8 md:py-12 px-4 md:px-6 flex items-center justify-center">
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
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-8 text-center bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Achievements & Certifications
        </motion.h2>

        <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 relative z-10">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-gradient-to-br from-dark-surface/80 to-dark-card/80 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-accent-purple/50 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-transparent to-transparent"></div>
              </div>
              <div className="p-5 text-white">
                <h3 className="font-bold text-lg mb-2 group-hover:text-accent-cyan transition-colors">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="text-sm text-gray-400 mb-2 line-clamp-2">
                    {item.description}
                  </p>
                )}
                {item.issuer && (
                  <p className="text-xs text-accent-purple mb-2">
                    {item.issuer}
                  </p>
                )}
                {item.date && (
                  <p className="text-xs text-gray-500">
                    {item.date}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
