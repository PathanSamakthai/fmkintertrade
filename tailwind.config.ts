import type { Config } from "tailwindcss";

/**
 * FMK Intertrade design tokens (brief §16).
 * Colours, radii, shadows and container width map 1:1 to the design bundle.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0B2F22",
          950: "#061B14",
          900: "#0B2F22",
          800: "#123F2E",
        },
        secondary: "#3B4148",
        accent: {
          DEFAULT: "#C4A263",
          500: "#C4A263",
        },
        neutral: {
          950: "#17211D",
          600: "#68736E",
          300: "#DCE3DF",
          100: "#F4F7F5",
        },
        background: "#F4F7F5",
        surface: "#FFFFFF",
        ink: "#17211D",
        muted: "#68736E",
        line: "#DCE3DF",
        danger: "#B4232A",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "var(--font-noto-thai)", "system-ui", "sans-serif"],
        mono: ["var(--font-plex-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        sm: "8px",
        md: "14px",
        lg: "22px",
        xl: "30px",
      },
      boxShadow: {
        sm: "0 4px 16px rgba(11,47,34,.06)",
        md: "0 16px 40px rgba(11,47,34,.10)",
        lg: "0 24px 70px rgba(11,47,34,.14)",
      },
      maxWidth: {
        container: "1180px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up .5s ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;
