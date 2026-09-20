import { motion } from "framer-motion";
import { MessageCircle, Instagram, Phone } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/919940464150";
const INSTAGRAM_LINK = "https://www.instagram.com/salad_by_selva";

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 md:py-36 bg-forest overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05] bg-grain" />
      <motion.div
        className="absolute -top-32 -left-20 w-[420px] h-[420px] bg-sage/25 organic-blob blur-3xl"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-32 -right-20 w-[420px] h-[420px] bg-blush/20 organic-blob blur-3xl"
        animate={{ scale: [1.1, 1, 1.1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container-custom relative text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display italic text-blush text-lg block mb-4"
        >
          Let's talk
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-medium text-cream text-4xl md:text-6xl leading-[1.1] max-w-3xl mx-auto mb-8"
        >
          Ready to begin your healthy eating journey?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-body text-cream/70 text-lg mb-12"
        >
          Message us directly — we reply personally, every time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
            <MessageCircle size={18} />
            Chat on WhatsApp
          </a>
          <a
            href={INSTAGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cream/10 border border-cream/25 text-cream px-7 py-3.5 rounded-full font-body font-medium text-[15px] transition-all duration-300 hover:bg-cream/20 hover:-translate-y-0.5"
          >
            <Instagram size={18} />
            Visit Instagram
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="inline-flex items-center gap-2 text-cream/60 font-body text-sm"
        >
          <Phone size={15} />
          +91 99404 64150
        </motion.div>
      </div>
    </section>
  );
}
