import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "hedge-dark": "var(--dark-blue)",
        "hedge-mid": "var(--mid-blue)",
        "hedge-grey": "var(--grey-blue)",
        "hedge-orange": "var(--orange)",
        "hedge-soft-orange": "var(--soft-orange)",
        "bg-primary": "var(--bg-primary)",
        "bg-secondary": "var(--bg-secondary)",
      },
    },
  },
  plugins: [],
};

export default config;

