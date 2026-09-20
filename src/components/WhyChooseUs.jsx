import { motion } from "framer-motion";
import { Sparkles, HomeIcon, Leaf, Wallet, ShieldCheck, HeartPulse } from "lucide-react";

const REASONS = [
  {
    icon: Sparkles,
    title: "Freshly Prepared",
    desc: "Made to order, never stockpiled — every bowl is put together close to the time it reaches you.",
  },
  {
    icon: HomeIcon,
    title: "Homemade With Care",
    desc: "No factory lines, no shortcuts — just a home kitchen and attention to every detail.",
  },
  {
    icon: Leaf,
    title: "Quality Ingredients",
    desc: "Chosen deliberately, not for cost-cutting — because what goes in matters most.",
  },
  {
    icon: Wallet,
    title: "Affordable Choices",
    desc: "Healthy eating shouldn't be a luxury. Priced to be part of your everyday routine.",
  },
  {
    icon: ShieldCheck,
    title: "Hygienic Preparation",
    desc: "High hygiene standards followed at every step, from prep to packaging.",
  },
  {
    icon: HeartPulse,
    title: "Health-Focused Lifestyle",
    desc: "Built around real habits, not fads — food that fits a life you actually want to live.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-16 md:py-32">
      <div className="container-custom">
        <div className="max-w-2xl mb-10 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-label"
          >
            Why people choose us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-lg text-4xl md:text-5xl"
          >
            Built on habits, not hype
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
          {REASONS.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-3xl bg-white border border-forest/5 p-4 md:p-7 shadow-card transition-shadow duration-300 hover:shadow-soft"
              >
                <div className="w-9 h-9 md:w-12 md:h-12 rounded-2xl bg-sage/15 flex items-center justify-center mb-3 md:mb-5 transition-colors duration-300 group-hover:bg-forest">
                  <Icon size={18} className="text-forest transition-colors duration-300 group-hover:text-cream md:hidden" />
                  <Icon size={22} className="text-forest transition-colors duration-300 group-hover:text-cream hidden md:block" />
                </div>
                <h3 className="font-display text-forest text-base md:text-xl mb-1 md:mb-2">{reason.title}</h3>
                <p className="body-text text-xs md:text-[15px]">{reason.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
