import achievements from "../data/achievements";

export default function Certifications() {
  return (
    <section id="certifications" className="min-h-screen bg-gray-50 p-8">
      <h2 className="text-3xl font-bold text-indigo-700 mb-10 text-center">
        Achievements & Certifications
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {achievements.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl p-6 shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm mb-2">{item.description}</p>
            <p className="text-gray-400 text-xs mb-4">{item.date}</p>
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 underline text-sm"
              >
                View Certificate
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
