import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./components/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7065f0",
        text: "#000929",
      },
    },
  },
};
export default config;
