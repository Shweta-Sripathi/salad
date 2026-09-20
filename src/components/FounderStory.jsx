import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function FounderStory() {
  return (
    <section id="founder" className="relative py-28 md:py-36 bg-cream-deep overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-sage/10 organic-blob blur-3xl" />

      <div className="container-custom grid grid-cols-[0.82fr_1.18fr] lg:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-10 lg:gap-16 items-center relative">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative aspect-[4/5] max-w-[150px] md:max-w-sm mx-auto lg:mx-0">
            <div className="absolute inset-0 organic-blob bg-gradient-to-br from-blush/40 to-sage/20 rotate-3" />
            <div className="absolute inset-[5%] organic-blob overflow-hidden shadow-soft">
              <img
                src="/founder.jpg"
                alt="Selva Priya, founder of Salad by Selva"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative mt-3 max-w-[150px] bg-white rounded-2xl px-3 py-2 shadow-card md:absolute md:-bottom-6 md:-right-6 md:mt-0 md:px-5 md:py-4 md:max-w-[200px]">
              <p className="font-display italic text-forest text-sm leading-snug">
                "Healthy food should never be boring, expensive, or difficult to access."
              </p>
            </div>
          </div>
        </motion.div>

        <div>
          <motion.span
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="section-label"
          >
            The person behind the bowl
          </motion.span>

          <motion.h2
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="heading-lg text-2xl sm:text-4xl md:text-5xl mb-4 md:mb-8"
          >
            Meet Selva Priya
          </motion.h2>

          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-3 md:space-y-5 body-text text-xs sm:text-[17px] max-w-xl"
          >
            <p>
              Hi, I'm Selva Priya — an English teacher by profession, and a
              passionate home cook at heart.
            </p>
            <p>
              What started as a love for preparing food for family and friends
              gradually became Salad by Selva. I believe healthy food should
              never be boring, expensive, or difficult to access.
            </p>
            <p>
              Every bowl is prepared with care, hygiene, and quality
              ingredients — because customer well-being always comes first.
            </p>
          </motion.div>

          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mt-5 md:mt-9 flex items-start gap-2 md:gap-4 border-l-2 border-blush pl-3 md:pl-6"
          >
            <Quote className="text-blush-deep shrink-0 mt-1" size={22} />
            <div className="font-display text-forest text-sm sm:text-xl md:text-2xl leading-snug">
              Fresh food. Honest ingredients.
              <br />
              Affordable prices. Happy customers.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
