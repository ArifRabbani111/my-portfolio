import { FaGithub, FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-10">
      <div
        className="bg-white/10 backdrop-blur-md p-10 rounded-xl max-w-5xl w-full shadow-lg border border-white/10"
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-bold mb-8 text-white text-center">Contact Me</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Side - Info */}
          <div className="text-white space-y-6">
            <div>
              <h3 className="text-lg font-semibold">📍 Location:</h3>
              <p className="text-blue-100">Sylhet, Bangladesh</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">📧 Email:</h3>
              <p className="text-blue-100">arifrabbani00000@email.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">📞 Phone:</h3>
              <p className="text-blue-100">+8801849831855</p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 text-2xl mt-4">
              <a href="https://github.com/thebackbencher666" target="_blank" className="hover:text-blue-300"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/arif-rabbani-arian/" target="_blank" className="hover:text-blue-300"><FaLinkedin /></a>
              <a href="https://www.facebook.com/arif.rabbani.10297701" target="_blank" className="hover:text-blue-300"><FaFacebook /></a>
              <a href="https://x.com/ArifRabb999" target="_blank" className="hover:text-blue-300"><FaTwitter /></a>
              <a href="https://www.instagram.com/arif.rabbaani/" target="_blank" className="hover:text-blue-300"><FaInstagram /></a>
            </div>
          </div>

          {/* Right Side - Form */}
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Please write your name"
              className="w-full px-4 py-2 bg-white/20 text-white placeholder-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="email"
              placeholder="x@example.com"
              className="w-full px-4 py-2 bg-white/20 text-white placeholder-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="text"
              placeholder="How can I help you"
              className="w-full px-4 py-2 bg-white/20 text-white placeholder-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              rows="4"
              placeholder="Write your message here"
              className="w-full px-4 py-2 bg-white/20 text-white placeholder-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-2 rounded-md transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
