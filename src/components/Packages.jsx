import { motion } from "framer-motion";
import { CalendarDays, CalendarRange, Users, Building2, MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/919940464150";

const PACKAGES = [
  {
    icon: CalendarDays,
    title: "Weekly Plans",
    desc: "A short-term way to build the habit — fresh bowls delivered through the week.",
  },
  {
    icon: CalendarRange,
    title: "Monthly Plans",
    desc: "For those who've made healthy eating part of the routine, not the exception.",
  },
  {
    icon: Users,
    title: "Family Packages",
    desc: "Portions and variety planned around how your household actually eats.",
  },
  {
    icon: Building2,
    title: "Office Packages",
    desc: "Wholesome food for teams, without anyone having to think about lunch.",
  },
];

export default function Packages() {
  return (
    <section id="packages" className="relative py-28 md:py-32">
      <div className="container-custom">
        <div className="max-w-2xl mb-16">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-label"
          >
            Find your rhythm
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-lg text-4xl md:text-5xl"
          >
            Packages built around you
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PACKAGES.map((pkg, i) => {
            const Icon = pkg.icon;
            return (
              <motion.div
                key={pkg.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="flex flex-col rounded-3xl border border-forest/10 bg-white p-7 shadow-card"
              >
                <div className="w-12 h-12 rounded-2xl bg-blush/25 flex items-center justify-center mb-6">
                  <Icon size={22} className="text-forest" />
                </div>
                <h3 className="font-display text-forest text-xl mb-2">{pkg.title}</h3>
                <p className="body-text text-[15px] mb-6 flex-1">{pkg.desc}</p>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-forest font-medium text-sm border-t border-forest/10 pt-4 hover:text-forest-deep transition-colors"
                >
                  Contact for Details
                </a>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex justify-center"
        >
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
            <MessageCircle size={17} />
            Ask About a Package
          </a>
        </motion.div>
      </div>
    </section>
  );
}
