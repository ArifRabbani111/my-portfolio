import Sidebar from "./components/Sidebar";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Certifications from "./pages/Certifications";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="flex bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#3b82f6] text-white min-h-screen">

      <Sidebar />
      <main className="flex-1 px-6 md:px-12 py-10 space-y-32 overflow-x-hidden">
        <div className="text-center mt-8 text-white" data-aos="fade-down">
          <h1 className="text-4xl font-bold mb-2">Turning Ideas into Reality</h1>
          <p className="text-blue-100">Passionate about code, design, and continuous growth</p>
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
