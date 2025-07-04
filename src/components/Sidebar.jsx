import { FaGithub, FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Scrollspy from "react-scrollspy";
import { Link } from "react-scroll";

const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-indigo-900 text-white p-6 flex flex-col items-center sticky top-0 h-screen">
        <div className="mb-6">
            
        

  
    </div>

      <img src="/profile.jpg" alt="Arif" className="w-32 h-32 rounded-full mb-4 border-4 border-white" />
      <h2 className="text-2xl font-semibold">Arif Rabbani</h2>
      <p className="text-sm text-indigo-100 text-center mb-6">Software Engineer @ SUST</p>

      {/* ScrollSpy navigation */}
      <Scrollspy
        items={navItems.map((item) => item.id)}
        currentClassName="text-blue-300 font-bold"
        className="flex flex-col space-y-3 text-lg mb-6"
        offset={-100}
      >
        {navItems.map((item) => (
          <li key={item.id}>
            <Link
              to={item.id}
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer hover:text-blue-300"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </Scrollspy>

      {/* Social Icons */}
      <div className="flex space-x-4 text-2xl mt-4">
        <a href="https://github.com/thebackbencher666" target="_blank"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/arif-rabbani-arian/" target="_blank"><FaLinkedin /></a>
        <a href="https://www.facebook.com/arif.rabbani.10297701" target="_blank"><FaFacebook /></a>
        <a href="https://x.com/ArifRabb999" target="_blank"><FaTwitter /></a>
        <a href="https://instagram.com/your-profile" target="_blank"><FaInstagram /></a>
      </div>
    </aside>
  );
}
