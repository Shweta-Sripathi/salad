import { Instagram, MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/919940464150";
const INSTAGRAM_LINK = "https://www.instagram.com/salad_by_selva";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "Founder", href: "#founder" },
  { label: "Products", href: "#offerings" },
  { label: "Benefits", href: "#benefits" },
  { label: "Packages", href: "#packages" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const handleNav = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-forest-deep text-cream/70 pt-16 pb-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10 pb-10 border-b border-cream/10">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full overflow-hidden bg-white">
              <img src="/logo.png" alt="Salad by Selva" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="font-display text-cream text-lg">
                Salad <span className="italic text-blush">by</span> Selva
              </p>
              <p className="font-display italic text-sm text-cream/50">
                Eat Well &bull; Live Better
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="font-body text-sm hover:text-cream transition-colors"
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
              className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-cream/20 transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle size={17} />
            </a>
            <a
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-cream/20 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={17} />
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-8 text-xs font-body text-cream/40">
          <p>&copy; {new Date().getFullYear()} Salad by Selva. All rights reserved.</p>
          <p>A home-based healthy food brand by Selva Priya.</p>
        </div>
      </div>
    </footer>
  );
}
