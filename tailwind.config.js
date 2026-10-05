/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0c0c0e",
        foreground: "#f4f4f5",
        brand: {
          dark: "#08080a",
          surface: "#141418",
          card: "#191920",
          cardHover: "#20202a",
          border: "#2b2b36",
          borderLight: "#3d3d4d",
          gold: "#D4AF37",
          goldLight: "#F3E5AB",
          goldBright: "#FFD700",
          goldDark: "#997A15",
          goldMuted: "rgba(212, 175, 55, 0.15)",
          goldGlow: "rgba(212, 175, 55, 0.25)",
        },
      },
      fontFamily: {
        serif: ["var(--font-cinzel)", "Cinzel", "Georgia", "serif"],
        sans: ["var(--font-montserrat)", "Montserrat", "system-ui", "sans-serif"],
        gujarati: ["var(--font-gujarati)", "Noto Sans Gujarati", "Hind Vadodara", "sans-serif"],
      },
      boxShadow: {
        gold: "0 4px 20px -2px rgba(212, 175, 55, 0.25)",
        goldGlow: "0 0 25px rgba(212, 175, 55, 0.35)",
        card: "0 10px 30px -10px rgba(0, 0, 0, 0.6)",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #F3E5AB 0%, #D4AF37 50%, #AA7C11 100%)",
        "gold-gradient-hover": "linear-gradient(135deg, #FFF0B8 0%, #E5BE48 50%, #BD8E1A 100%)",
        "dark-radial": "radial-gradient(ellipse at top, #1c1c24 0%, #0c0c0e 80%)",
      },
      screens: {
        xs: "375px",
      },
    },
  },
  plugins: [],
};
