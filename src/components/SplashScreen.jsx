import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const STAGES = [
  "S",
  "Sa",
  "Sal",
  "Sala",
  "Salad",
  "Salad ",
  "Salad b",
  "Salad by",
  "Salad by ",
  "Salad by S",
  "Salad by Se",
  "Salad by Sel",
  "Salad by Selv",
  "Salad by Selva",
];

export default function SplashScreen({ onComplete }) {
  const [stageIndex, setStageIndex] = useState(0);
  const [showTagline, setShowTagline] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (stageIndex < STAGES.length - 1) {
      const delay = stageIndex === 0 ? 450 : stageIndex < 5 ? 120 : 100;
      const t = setTimeout(() => setStageIndex((i) => i + 1), delay);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => setShowTagline(true), 500);
      return () => clearTimeout(t);
    }
  }, [stageIndex]);

  useEffect(() => {
    if (!showTagline) return;
    const t = setTimeout(() => setExiting(true), 900);
    const t2 = setTimeout(() => onComplete(), 1250);
    return () => {
      clearTimeout(t);
      clearTimeout(t2);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showTagline]);

  const text = STAGES[stageIndex];
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-cream px-6"
      initial={{ opacity: 1 }}
      animate={{
        opacity: exiting ? 0 : 1,
        scale: exiting ? 1.08 : 1,
        filter: exiting ? "blur(10px)" : "blur(0px)",
      }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      style={{ pointerEvents: exiting ? "none" : "auto" }}
    >
      <div className="grain-overlay" />

      {/* Ambient organic shapes */}
      <motion.div
        className="absolute w-72 h-72 rounded-full bg-blush/30 blur-3xl -top-10 -left-10"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-80 h-80 rounded-full bg-sage/20 blur-3xl -bottom-16 -right-10"
        animate={{ scale: [1.1, 1, 1.1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Logo */}
      <motion.div
        layoutId="brand-logo"
        className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden shadow-soft mb-5 bg-white"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
      >
        <img src="/logo.png" alt="Salad by Selva" className="w-full h-full object-cover" />
      </motion.div>

      {/* Brand text — letter-by-letter reveal */}
      <div className="h-[64px] md:h-[84px] flex items-center justify-center overflow-hidden">
        <motion.h1
          layout
          className="font-display font-medium text-forest text-2xl md:text-4xl tracking-tight text-center whitespace-nowrap"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            opacity: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
            layout: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
          }}
        >
          {text.split("").map((char, i) => (
            <motion.span
              key={i}
              layout
              initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="inline-block"
              style={{ minWidth: char === " " ? "0.3em" : undefined }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>
      </div>

      {/* Tagline */}
      <motion.p
        className="font-display italic text-sage text-base md:text-lg mt-2 tracking-wide"
        initial={{ opacity: 0, y: 10 }}
        animate={showTagline ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        Eat Well &bull; Live Better
      </motion.p>
    </motion.div>
  );
}
