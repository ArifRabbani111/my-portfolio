import { Link } from 'react-scroll';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-indigo-600">R D N</h1>
      <div className="space-x-4">
        <Link to="home" smooth={true} duration={500} className="cursor-pointer hover:text-indigo-600">Home</Link>
        <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-indigo-600">About</Link>
        <Link to="skills" smooth={true} duration={500} className="cursor-pointer hover:text-indigo-600">Skills</Link>
        <Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-indigo-600">Projects</Link>
        <Link to="certifications" smooth={true} duration={500} className="cursor-pointer hover:text-indigo-600">Certifications</Link>
        <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-indigo-600">Contact</Link>
      </div>
    </nav>
  );
}
