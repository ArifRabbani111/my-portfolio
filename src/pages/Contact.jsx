import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    // Note: You need to replace these with your own EmailJS credentials
    // Service ID, Template ID, and Public Key
    emailjs.sendForm(
      "service_k8itm6g",
      "template_6r7i55b",
      form.current,
      "6SV4MISyxRUShYopo"
    )
      .then((result) => {
        console.log(result.text);
        setStatus({ type: "success", message: "Message sent successfully! I'll get back to you soon." });
        form.current.reset();
      }, (error) => {
        console.log(error.text);
        setStatus({ type: "error", message: "Failed to send message. Please try again or contact me directly via email." });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="w-full py-20 md:py-32 px-4 md:px-6 lg:pl-20 flex items-center justify-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-dark-card p-6 md:p-10 rounded-xl max-w-6xl w-full border border-slate-700"
      >
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 md:mb-14 text-center text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
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
                <FaMapMarkerAlt className="text-accent text-lg mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-base md:text-lg font-semibold mb-1">Location</h3>
                  <p className="text-gray-300 text-sm md:text-base">Sylhet, Bangladesh</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <FaEnvelope className="text-accent text-lg mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-base md:text-lg font-semibold mb-1">Email</h3>
                  <a href="mailto:arifrabbani00000@gmail.com" className="text-gray-300 hover:text-accent transition-colors text-sm md:text-base">
                    arifrabbani00000@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <FaPhone className="text-accent text-lg mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-base md:text-lg font-semibold mb-1">Phone</h3>
                  <a href="tel:+8801849831855" className="text-gray-300 hover:text-accent transition-colors text-sm md:text-base">
                    +8801849831855
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <FaWhatsapp className="text-accent text-lg mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-base md:text-lg font-semibold mb-1">WhatsApp</h3>
                  <a href="https://wa.me/8801849831855" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent transition-colors text-sm md:text-base">
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
                  className="hover:text-accent transition-colors cursor-pointer"
                >
                  <FaGithub />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/arif-rabbani-arian/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors cursor-pointer"
                >
                  <FaLinkedin />
                </motion.a>
                <motion.a
                  href="https://www.facebook.com/arif.rabbani.10297701"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors cursor-pointer"
                >
                  <FaFacebook />
                </motion.a>
                <motion.a
                  href="https://x.com/ArifRabb999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  <FaTwitter />
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/arif.rabbaani/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors cursor-pointer"
                >
                  <FaInstagram />
                </motion.a>
                <motion.a
                  href="https://wa.me/8801849831855"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors cursor-pointer"
                >
                  <FaWhatsapp />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-3 md:space-y-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div>
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                className="w-full px-4 py-2 md:px-5 md:py-3 bg-dark-bg border border-slate-600 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-colors text-sm md:text-base"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="user_email"
                placeholder="your.email@example.com"
                className="w-full px-4 py-2 md:px-5 md:py-3 bg-dark-bg border border-slate-600 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-colors text-sm md:text-base"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full px-4 py-2 md:px-5 md:py-3 bg-dark-bg border border-slate-600 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-colors text-sm md:text-base"
              />
            </div>
            <div>
              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                className="w-full px-4 py-2 md:px-5 md:py-3 bg-dark-bg border border-slate-600 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-colors resize-none text-sm md:text-base"
                required
              />
            </div>

            {status.message && (
              <div className="p-3 rounded-lg text-sm bg-accent/10 text-slate-200 border border-accent/40">
                {status.message}
              </div>
            )}

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-accent text-white font-semibold px-6 py-2 md:py-3 rounded-lg hover:bg-accent/90 transition-colors text-sm md:text-base ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}
