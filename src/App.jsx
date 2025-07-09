import Sidebar from "./components/Sidebar";
import About from "./pages/About";
import Skills from "./pages/skills";
import Projects from "./pages/Projects";
import Certifications from "./pages/Certifications";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="flex bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#3b82f6] text-white min-h-screen">

      <Sidebar />
      <main className="flex-1 px-6 md:px-12 py-10 space-y-32 overflow-x-hidden">
        <div className="text-center mt-8 text-white" data-aos="fade-down">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Turning Ideas into Reality</h1>
          <p className="text-blue-100 mt-2">
            Passionate about code, design, and continuous growth
          </p>
        <section className="min-h-screen flex flex-col md:flex-row items-center justify-between gap-12 px-6 py-20 bg-gradient-to-r from-[#0f1c3f] to-[#1e3a8a] text-white">
  {/* Left Side – Text */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-6xl font-extrabold leading-tight mb-4">
          Hi, I'm <span className="underline text-white">Arif Rabbani</span>,
        </h1>
       <p className="text-xl text-blue-100">
      a passionate Software Engineer based in Bangladesh.
        </p>
      </div>

  {/* Right Side – Image */}
      <div className="md:w-1/3 w-64 h-64 rounded-full shadow-xl border-4 border-blue-400">
      <img
      src="/profile.jpg"
      alt="Arif Rabbani"
      className="w-80 h-80 object-cover border-4 border-blue-400 shadow-2xl transition-all duration-500 hover:scale-105"
      />
      </div>
      </section>

        </div>
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
}
