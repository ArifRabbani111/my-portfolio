export default function About() {
  return (
    <section id="about" className="flex justify-center items-center min-h-screen px-6">
      <div
        className="bg-white/10 backdrop-blur-md p-10 rounded-xl max-w-5xl w-full flex flex-col md:flex-row items-center gap-10 shadow-lg"
        data-aos="fade-up"
      >
        {/* Image */}
        <img
          src="/profile.jpg"
          alt="Arif Rabbani"
          className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-md"
        />

        {/* Text Content */}
        <div className="text-white">
          <h2 className="text-3xl font-bold mb-4 text-blue-100">About Me</h2>
          <p className="text-lg leading-relaxed text-blue-100 mb-4">
            I'm <span className="font-semibold text-white">Arif Rabbani</span>, a passionate Software Engineer. I love building efficient, clean, and user-focused web applications using modern tools like React, Node.js, and Tailwind CSS.
          </p>
          <p className="text-blue-200 text-sm mb-6">
            Curious by nature. Obsessed with code quality. Always learning.
          </p>

          <a
            href="/resume.pdf"
            download
            className="bg-indigo-700 text-white px-5 py-2 rounded-md hover:bg-indigo-800 transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
