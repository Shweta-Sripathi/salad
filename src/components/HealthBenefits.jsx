import { motion } from "framer-motion";
import { Zap, Droplet, Wheat, Beef, Scale } from "lucide-react";

const BENEFITS = [
  {
    icon: Zap,
    title: "Energy",
    desc: "Whole ingredients that fuel your day without the crash of processed food.",
  },
  {
    icon: Droplet,
    title: "Hydration",
    desc: "Water-rich fruits, vegetables, and juices that support everyday hydration.",
  },
  {
    icon: Wheat,
    title: "Fibre",
    desc: "Beans, corn, and fresh produce bring natural fibre to every bowl.",
  },
  {
    icon: Beef,
    title: "Protein",
    desc: "Rajma and paneer add a steady source of plant and dairy protein.",
  },
  {
    icon: Scale,
    title: "Balanced Nutrition",
    desc: "Ingredients chosen to work together, not just taste good alone.",
  },
];

export default function HealthBenefits() {
  return (
    <section id="benefits" className="relative py-28 md:py-32 bg-forest overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] bg-grain" />
      <div className="absolute -bottom-24 -right-24 w-[420px] h-[420px] bg-sage/30 organic-blob blur-3xl" />
      <div className="absolute -top-24 -left-24 w-[380px] h-[380px] bg-blush/20 organic-blob blur-3xl" />

      <div className="container-custom relative">
        <div className="max-w-2xl mb-16">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display italic text-blush text-lg md:text-xl mb-3 block"
          >
            What your body gets
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-medium text-cream text-4xl md:text-5xl leading-[1.1]"
          >
            Nutrition, kept simple
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-5 md:gap-5">
          {BENEFITS.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ y: -5 }}
                className="rounded-2xl md:rounded-3xl bg-cream/10 border border-cream/10 backdrop-blur-sm p-3 md:p-6 flex flex-col gap-2 md:gap-4"
              >
                <div className="w-8 h-8 md:w-11 md:h-11 rounded-full bg-blush/90 flex items-center justify-center">
                  <Icon size={16} className="text-forest-deep md:hidden" />
                  <Icon size={20} className="text-forest-deep hidden md:block" />
                </div>
                <h3 className="font-display text-cream text-sm md:text-xl">{b.title}</h3>
                <p className="font-body text-cream/70 text-[11px] md:text-sm leading-relaxed">{b.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-cream/50 text-sm mt-10 max-w-lg font-body"
        >
          These reflect the general nutritional qualities of the ingredients we
          use. Salad by Selva does not provide medical or dietary advice, and
          makes no claims about specific health outcomes.
        </motion.p>
      </div>
    </section>
  );
}
