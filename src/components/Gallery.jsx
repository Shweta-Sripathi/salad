import { useState } from "react";
import { motion } from "framer-motion";
import { galleryItems } from "../data/gallery";

const CATEGORIES = ["All", "Salads", "Fruit Bowls", "Detox Juices", "Preparation", "Packaging"];

const tint = ["2F5233", "7A9B76", "E8C7C8", "D9A9AC", "A9C1A3", "213B24"];

export default function Gallery() {
  const [active, setActive] = useState("All");
  const filtered =
    active === "All" ? galleryItems : galleryItems.filter((g) => g.category === active);

  return (
    <section id="gallery" className="relative py-28 md:py-32">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <div className="max-w-xl">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="section-label"
            >
              A look inside
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="heading-lg text-4xl md:text-5xl"
            >
              Gallery
            </motion.h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-full text-sm font-body transition-all duration-300 ${
                  active === cat
                    ? "bg-forest text-cream"
                    : "bg-white text-ink/60 border border-forest/10 hover:border-forest/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="columns-2 md:columns-3 gap-4 space-y-4">
          {filtered.map((item, i) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className={`relative break-inside-avoid rounded-2xl overflow-hidden shadow-card group cursor-pointer ${
                item.tall ? "aspect-[3/4]" : "aspect-square"
              }`}
            >
              <img
                src={`https://placehold.co/600x${item.tall ? 800 : 600}/${tint[item.id % tint.length]}/FFF8F2?text=${encodeURIComponent(
                  item.category
                )}`}
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-cream text-sm font-body">{item.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
