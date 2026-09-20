import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { offerings, categories } from "../data/offerings";

function ProductCard({ item }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -6 }}
      className="relative rounded-[20px] overflow-hidden shadow-card group aspect-[3/2] md:rounded-[26px] md:aspect-[4/5]"
    >
      <motion.img
        layoutId={`card-img-${item.id}`}
        src={item.image || "https://placehold.co/700x900/7A9B76/FFF8F2?text=Photo+Coming+Soon"}
        alt={item.name}
        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/90 via-forest-deep/10 to-transparent" />
      <div className="relative h-full flex flex-col justify-end p-3 md:p-6">
        <span className="font-display italic text-cream/70 text-[11px] md:text-sm mb-1">
          {item.tagline}
        </span>
        <h3 className="font-display text-cream text-sm md:text-2xl">{item.name}</h3>
      </div>
    </motion.div>
  );
}

function UpcomingCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="relative rounded-[20px] border-2 border-dashed border-forest/25 bg-forest/[0.03] aspect-[3/2] md:rounded-[26px] md:aspect-[4/5] flex flex-col items-center justify-center text-center p-3 md:p-8"
    >
      <span className="relative flex h-3 w-3 mb-5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blush-deep opacity-60" />
        <span className="relative inline-flex rounded-full h-3 w-3 bg-blush-deep" />
      </span>
      <Sparkles size={20} className="text-sage mb-2 md:mb-4 md:w-[26px] md:h-[26px]" />
      <h3 className="font-display text-forest text-sm md:text-xl mb-1 md:mb-2">More on the way</h3>
      <p className="font-body text-ink/60 text-[11px] md:text-sm max-w-[220px]">
        New varieties are joining the menu soon — message us on
        WhatsApp to be the first to know.
      </p>
    </motion.div>
  );
}

export default function Offerings() {
  return (
    <section id="offerings" className="relative py-28 md:py-32">
      <div className="container-custom">
        <div className="max-w-2xl mb-16">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-label"
          >
            What we prepare
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-lg text-4xl md:text-5xl"
          >
            Our Offerings
          </motion.h2>
        </div>

        <div className="flex flex-col gap-16">
          {categories.map((cat) => {
            const items = offerings.filter((o) => o.category === cat.id);
            const cols = items.length + 1; // +1 for upcoming card
            return (
              <div key={cat.id}>
                <div className="flex items-baseline gap-3 mb-6">
                  <h3 className="font-display italic text-forest text-2xl md:text-3xl">
                    {cat.name}
                  </h3>
                  <span className="font-body text-ink/40 text-sm">{cat.tagline}</span>
                </div>
                <div
                  className={`grid gap-5 ${
                    cols <= 2
                      ? "grid-cols-2 gap-3 md:gap-5 sm:max-w-xl"
                      : "grid-cols-2 gap-3 md:grid-cols-3 md:gap-5 lg:grid-cols-4"
                  }`}
                >
                  {items.map((item) => (
                    <ProductCard key={item.id} item={item} />
                  ))}
                  <UpcomingCard />
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
