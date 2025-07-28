export default function Achievements() {
  const achievements = [
    {
      title: "Python and Data Science Certification",
      image: "/PDS.jpg",
    },
    
    // Add more as needed
  ];

  return (
    <section id="certifications" className="min-h-screen px-6 py-10 flex items-center justify-center">
      <div
        className="bg-white/10 backdrop-blur-md p-10 rounded-xl shadow-lg border border-white/10 max-w-6xl w-full"
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Achievements & Certifications</h2>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="bg-white/20 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
            >
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-4 text-white">
                <h3 className="font-semibold text-lg">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
