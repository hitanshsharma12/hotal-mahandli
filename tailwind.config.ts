import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        luxury: "0 30px 80px rgba(8, 15, 28, 0.45)",
      },
      backgroundImage: {
        "luxury-radial":
          "radial-gradient(circle at top, rgba(219, 182, 97, 0.2), transparent 55%)",
      },
    },
  },
  plugins: [],
};

export default config;
