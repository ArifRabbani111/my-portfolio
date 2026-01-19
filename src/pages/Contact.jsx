import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="w-full py-8 md:py-12 px-4 md:px-6 lg:pl-20 flex items-center justify-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-dark-card/50 to-dark-surface/50 backdrop-blur-xl p-6 md:p-10 rounded-2xl max-w-6xl w-full shadow-2xl border border-white/10 relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl"></div>

        <motion.h2 
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 text-center bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 relative z-10">
          {/* Left Side - Info */}
          <motion.div 
            className="text-white space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <FaMapMarkerAlt className="text-accent-cyan text-lg mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-base md:text-lg font-semibold mb-1">Location</h3>
                  <p className="text-gray-300 text-sm md:text-base">Sylhet, Bangladesh</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <FaEnvelope className="text-accent-pink text-lg mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-base md:text-lg font-semibold mb-1">Email</h3>
                  <a href="mailto:arifrabbani00000@email.com" className="text-gray-300 hover:text-accent-cyan transition-colors text-sm md:text-base">
                    arifrabbani00000@email.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <FaPhone className="text-accent-purple text-lg mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-base md:text-lg font-semibold mb-1">Phone</h3>
                  <a href="tel:+8801849831855" className="text-gray-300 hover:text-accent-cyan transition-colors text-sm md:text-base">
                    +8801849831855
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <FaWhatsapp className="text-green-500 text-lg mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-base md:text-lg font-semibold mb-1">WhatsApp</h3>
                  <a href="https://wa.me/8801849831855" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-400 transition-colors text-sm md:text-base">
                    +8801849831855
                  </a>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="pt-4">
              <h3 className="text-base md:text-lg font-semibold mb-3">Connect with me</h3>
              <div className="flex flex-wrap gap-4 text-2xl">
                <motion.a 
                  href="https://github.com/thebackbencher666" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  className="hover:text-accent-purple transition-colors cursor-pointer"
                >
                  <FaGithub />
                </motion.a>
                <motion.a 
                  href="https://www.linkedin.com/in/arif-rabbani-arian/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  className="hover:text-accent-cyan transition-colors cursor-pointer"
                >
                  <FaLinkedin />
                </motion.a>
                <motion.a 
                  href="https://www.facebook.com/arif.rabbani.10297701" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  className="hover:text-blue-400 transition-colors cursor-pointer"
                >
                  <FaFacebook />
                </motion.a>
                <motion.a 
                  href="https://x.com/ArifRabb999" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  <FaTwitter />
                </motion.a>
                <motion.a 
                  href="https://www.instagram.com/arif.rabbaani/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  className="hover:text-accent-pink transition-colors cursor-pointer"
                >
                  <FaInstagram />
                </motion.a>
                <motion.a 
                  href="https://wa.me/8801849831855" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  className="hover:text-green-400 transition-colors cursor-pointer"
                >
                  <FaWhatsapp />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.form 
            className="space-y-3 md:space-y-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 md:px-5 md:py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-purple focus:border-transparent transition-all text-sm md:text-base"
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="your.email@example.com"
                className="w-full px-4 py-2 md:px-5 md:py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:border-transparent transition-all text-sm md:text-base"
                required
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-2 md:px-5 md:py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-pink focus:border-transparent transition-all text-sm md:text-base"
              />
            </div>
            <div>
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full px-4 py-2 md:px-5 md:py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-purple focus:border-transparent transition-all resize-none text-sm md:text-base"
                required
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-r from-accent-purple via-accent-pink to-accent-cyan text-white font-semibold px-6 py-2 md:py-3 rounded-lg hover:shadow-lg hover:shadow-accent-purple/50 transition-all duration-300 text-sm md:text-base"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}
