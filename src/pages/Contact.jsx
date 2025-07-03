import {
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaTwitter,
    FaInstagram,
  } from "react-icons/fa";
  
  export default function Contact() {
    return (
      <section id="contact" className="min-h-screen p-8 bg-gray-100">
        <h2 className="text-3xl font-bold text-indigo-700 mb-10 text-center">Contact Me</h2>
  
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Contact Info Box */}
          <div className="bg-white shadow-md rounded-xl p-6">
            <h3 className="text-xl font-semibold text-indigo-600 mb-4">Contact Info</h3>
            <p className="text-gray-700 mb-2">📧 Email: <span className="text-indigo-600">arifrabbani00000@gmail.com</span></p>
            <p className="text-gray-700 mb-2">📞 Phone: <span className="text-indigo-600">+8801849831855</span></p>
            <p className="text-gray-700 mb-4">📍 Location: Sylhet, Bangladesh</p>
  
            <div className="flex space-x-4 mt-4 text-indigo-600 text-xl">
              <a href="https://github.com/thebackbencher666" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/arif-rabbani-arian/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="https://www.facebook.com/arif.rabbani.10297701" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
              <a href="https://x.com/ArifRabb999" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="https://www.instagram.com/arif.rabbaani/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </div>
          </div>
  
          {/* Contact Form */}
          <div className="md:col-span-2 bg-white shadow-md rounded-xl p-6">
            <h3 className="text-xl font-semibold text-indigo-600 mb-4">Send a Message</h3>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Please write your name"
                className="border border-gray-300 rounded-md p-3 col-span-1"
                required
              />
              <input
                type="email"
                placeholder="x@example.com"
                className="border border-gray-300 rounded-md p-3 col-span-1"
                required
              />
              <input
                type="text"
                placeholder="How can I help you"
                className="border border-gray-300 rounded-md p-3 col-span-2"
                required
              />
              <textarea
                placeholder="Write your message here"
                className="border border-gray-300 rounded-md p-3 col-span-2 h-32 resize-none"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700 transition col-span-2 text-center"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }
  