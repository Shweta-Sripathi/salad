import { motion } from "framer-motion";
import { Flame, Sparkles } from "lucide-react";

export default function FoundersKitchen() {
  return (
    <section className="relative py-20 md:py-24 bg-cream-deep overflow-hidden">
      <div className="container-custom grid grid-cols-[1.1fr_0.9fr] lg:grid-cols-2 gap-5 md:gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">A note on where it's made</span>
          <h2 className="heading-lg text-2xl sm:text-4xl md:text-5xl mb-4 md:mb-7">
            From Selva's Kitchen
          </h2>
          <p className="body-text text-xs sm:text-lg max-w-lg mb-5 md:mb-8">
            Every salad, fruit bowl, juice, and wholesome meal is prepared
            fresh in a clean home kitchen — with attention to quality and
            hygiene, from the first ingredient to the final seal.
          </p>
          <div className="flex flex-col gap-2 md:gap-8">
            <div className="flex items-center gap-3">
              <Flame size={20} className="text-blush-deep" />
              <span className="font-body text-[11px] sm:text-sm text-ink/70">Prepared fresh, daily</span>
            </div>
            <div className="flex items-center gap-3">
              <Sparkles size={20} className="text-sage" />
              <span className="font-body text-[11px] sm:text-sm text-ink/70">Hygiene-first process</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="aspect-[4/3] md:aspect-auto rounded-3xl overflow-hidden shadow-card mt-8"
            >
              <img
                src="/offerings/fresh-prep.jpg"
                alt="Ingredients being prepared"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              className="aspect-[4/3] md:aspect-auto rounded-3xl overflow-hidden shadow-card"
            >
              <img
                src="/offerings/careful-packaging.jpg"
                alt="Careful packaging"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
          <div className="absolute -inset-6 -z-10 bg-gradient-to-br from-sage/10 to-blush/20 organic-blob blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
}
