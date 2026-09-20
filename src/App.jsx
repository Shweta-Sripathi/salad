import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SplashScreen from "./components/SplashScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FounderStory from "./components/FounderStory";
import WhyChooseUs from "./components/WhyChooseUs";
import Offerings from "./components/Offerings";
import HealthBenefits from "./components/HealthBenefits";
import Packages from "./components/Packages";
import FoundersKitchen from "./components/FoundersKitchen";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="relative">
      <Navbar />

      <AnimatePresence>
        {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      </AnimatePresence>

      <motion.main
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: showSplash ? 0 : 1, y: showSplash ? 30 : 0 }}
        transition={{ duration: 1.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <Hero />
        <FounderStory />
        <WhyChooseUs />
        <Offerings />
        <HealthBenefits />
        <Packages />
        <FoundersKitchen />
        <Contact />
        <Footer />
      </motion.main>

      {!showSplash && <WhatsAppButton />}
    </div>
  );
}
