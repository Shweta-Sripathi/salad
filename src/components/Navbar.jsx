import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "Founder", href: "#founder" },
  { label: "Products", href: "#offerings" },
  { label: "Benefits", href: "#benefits" },
  { label: "Packages", href: "#packages" },
  { label: "Contact", href: "#contact" },
];

const WHATSAPP_LINK = "https://wa.me/919940464150";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/75 backdrop-blur-xl shadow-[0_1px_0_0_rgba(47,82,51,0.08)]"
          : "bg-transparent"
      }`}
    >
      <nav className="container-custom flex items-center justify-between h-20">
        <button
          onClick={() => handleNav("#home")}
          className="flex items-center gap-3"
          aria-label="Salad by Selva home"
        >
          <motion.div
            layoutId="brand-logo"
            className="w-11 h-11 rounded-full overflow-hidden bg-white shadow-card"
          >
            <img src="/logo.png" alt="Salad by Selva" className="w-full h-full object-cover" />
          </motion.div>
          <span className="hidden sm:block font-display text-forest text-lg tracking-tight">
            Salad <span className="italic text-blush-deep">by</span> Selva
          </span>
        </button>

        <div className="hidden lg:flex items-center gap-9">
          {LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="font-body text-[14.5px] text-ink/70 hover:text-forest transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-forest text-cream px-5 py-2.5 rounded-full font-body text-[14px] font-medium transition-all duration-300 hover:bg-forest-deep hover:-translate-y-0.5"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>
          <button
            className="lg:hidden text-forest"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="lg:hidden bg-cream/95 backdrop-blur-xl overflow-hidden border-t border-forest/10"
          >
            <div className="flex flex-col px-6 py-5 gap-4">
              {LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="text-left font-body text-ink/80 text-base py-1"
                >
                  {link.label}
                </button>
              ))}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp justify-center mt-2"
              >
                <MessageCircle size={17} />
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
