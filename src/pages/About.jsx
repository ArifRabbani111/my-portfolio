export default function About() {
    return (
      <section id="about" className="min-h-screen bg-white p-8 flex items-center justify-center">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          
          {/* Text content */}
          <div>
            <h2 className="text-3xl font-bold text-indigo-700 mb-4">About Me</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              I'm <span className="font-semibold text-indigo-600">Arif Rabbani</span>, a final-year Software Engineering student at SUST.
              Passionate about building web apps with clean UIs and efficient backend systems.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              I'm currently focused on mastering React, Node.js, and contributing to open-source projects. I enjoy solving problems, building useful tools, and continuously learning.
            </p>
            
          </div>
  
          {/* Image (optional) */}
          <div className="flex justify-center">
            <img
              src="/profile.jpg"
              alt="Arif Rabbani"
              className="rounded-xl shadow-lg w-64 h-64 object-cover border border-indigo-100"
            />
          </div>
        </div>
      </section>
    );
  }
  