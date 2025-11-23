const config = {
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--heading-font)"],
      },
      colors: {
        background: "var(--background-color)",
        heading: "var(--heading-color)",
        text: "var(--text-color)",
      },
    },
  },
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
