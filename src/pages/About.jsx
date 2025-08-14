export default function About() {
  return (
    <section id="about" className="flex justify-center items-center min-h-screen px-6">
      <div
        className="bg-white/10 backdrop-blur-md p-10 rounded-xl max-w-5xl w-full flex flex-col md:flex-row items-center gap-10 shadow-lg"
        data-aos="fade-up"
      >
        {/* Image */}
        {/* Blob-shaped image */}
    {/* Blob-shaped image */}
<div className="relative w-40 h-40 overflow-hidden shadow-xl">
  <svg width="0" height="0" className="absolute">
    <defs>
      <clipPath id="blob" clipPathUnits="objectBoundingBox">
        <path d="M50.5,-68.3C63.2,-60.2,69.9,-42.5,69.2,-26.7C68.5,-10.9,60.6,3.1,55.2,17.4C49.8,31.6,46.9,46.2,38.2,59.6C29.4,73.1,14.7,85.4,1.8,83C-11.1,80.5,-22.3,63.3,-33.4,50.6C-44.6,37.9,-55.8,29.8,-64.5,17.5C-73.2,5.2,-79.5,-11.3,-74.4,-23.3C-69.4,-35.4,-53,-42.9,-38.7,-50.4C-24.4,-58,-12.2,-65.6,3.3,-70.1C18.9,-74.7,37.7,-76.3,50.5,-68.3Z" transform="translate(0.5 0.5)" />
      </clipPath>
    </defs>
  </svg>

  <img
    src="/inside.jpg"
    alt="Arif Rabbani"
    className="w-full h-full object-cover"
    style={{ clipPath: "url(#blob)" }}
  />
</div>




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
            href="/arif cv.pdf"
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
