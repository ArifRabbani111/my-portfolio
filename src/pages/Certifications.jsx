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
    <section id="certifications" className="w-full py-20 md:py-32 px-4 md:px-6 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-dark-card p-6 md:p-10 rounded-xl border border-slate-700 max-w-6xl w-full"
      >
        <motion.h2 
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-10 md:mb-14 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Achievements & Certifications
        </motion.h2>

        <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="group bg-dark-surface border border-slate-700 rounded-xl overflow-hidden hover:border-accent/60 transition-colors duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 text-white">
                <h3 className="font-bold text-lg mb-2 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="text-sm text-gray-400 mb-2 line-clamp-2">
                    {item.description}
                  </p>
                )}
                {item.issuer && (
                  <p className="text-xs text-accent mb-2">
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
