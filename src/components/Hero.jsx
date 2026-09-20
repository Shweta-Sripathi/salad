import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, ArrowDown } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/919940464150";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden pt-24"
    >
      <div className="grain-overlay" />

      {/* Ambient blobs */}
      <div className="absolute -top-24 -left-32 w-[420px] h-[420px] bg-sage/15 organic-blob blur-2xl" />
      <div className="absolute bottom-0 right-0 w-[380px] h-[380px] bg-blush/25 organic-blob blur-2xl" />

      <div className="container-custom relative grid grid-cols-[1.15fr_0.85fr] lg:grid-cols-[1.1fr_0.9fr] gap-5 md:gap-10 lg:gap-14 items-center">
        <motion.div style={{ y: textY, opacity }}>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="section-label"
          >
            A home-based healthy food brand
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="heading-xl text-[8vw] sm:text-6xl md:text-[5.2rem] mb-4 md:mb-6"
          >
            Fresh.
            <br />
            Wholesome.
            <br />
            Homemade.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="body-text text-xs sm:text-lg max-w-md mb-5 md:mb-9"
          >
            Fresh salads, fruit bowls, detox juices, and wholesome foods
            prepared with care by Selva Priya.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:gap-4"
          >
            <a
              href="#offerings"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#offerings")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-primary justify-center px-3 py-2.5 text-xs sm:px-7 sm:py-3.5 sm:text-[15px]"
            >
              Explore Products
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp justify-center px-3 py-2.5 text-xs sm:px-7 sm:py-3.5 sm:text-[15px]"
            >
              <MessageCircle size={17} />
              Contact on WhatsApp
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: imgY }}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative aspect-[5/4] md:aspect-[4/5] max-w-[280px] md:max-w-md mx-auto">
            <div className="absolute inset-0 organic-blob bg-gradient-to-br from-sage-light/40 via-blush/30 to-forest/10" />
            <div className="absolute inset-[6%] organic-blob overflow-hidden shadow-soft">
              <img
                src="/offerings/salad-bowls-hero.jpg"
                alt="A fresh homemade salad bowl by Salad by Selva"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-forest/50"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-xs tracking-wide font-body">Scroll</span>
        <ArrowDown size={16} />
      </motion.div>
    </section>
  );
}

