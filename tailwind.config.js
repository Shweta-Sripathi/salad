/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FFF8F2",
        "cream-deep": "#F7ECDF",
        forest: "#2F5233",
        "forest-deep": "#213B24",
        sage: "#7A9B76",
        "sage-light": "#A9C1A3",
        blush: "#E8C7C8",
        "blush-deep": "#D9A9AC",
        ink: "#1F2937",
      },
      fontFamily: {
        display: ["'Fraunces'", "serif"],
        body: ["'Inter'", "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 60px -20px rgba(47, 82, 51, 0.25)",
        card: "0 12px 40px -12px rgba(31, 41, 55, 0.15)",
        glow: "0 0 0 1px rgba(122,155,118,0.15), 0 20px 40px -15px rgba(47,82,51,0.35)",
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-16px) rotate(3deg)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        drift: {
          "0%": { transform: "translateX(0px)" },
          "50%": { transform: "translateX(14px)" },
          "100%": { transform: "translateX(0px)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        floatSlow: "floatSlow 8s ease-in-out infinite",
        drift: "drift 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
