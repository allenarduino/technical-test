import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    darkMode: false, // or 'media' or 'class'
    theme: {


      extend: {
        backgroundImage: {
          'custom-gradient': 'linear-gradient(146.36deg, #DFEAF0 7.24%, #D5E4EA 57.18%, #F4E7F4 98.87%)',
          "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
          "gradient-conic":
            "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        },
        borderRadius: {
          '5px': '5px',
        },
        padding: {
          '20px': '20px',
        },
        height: {
          '400px': '400px',
        },
        width: {
          '400px': '400px',
        },
      },
    }
  },
  plugins: [],
};
export default config;
