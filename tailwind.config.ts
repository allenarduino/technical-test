import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '360px', // Extra small screens
      sm: '640px', // Small screens
      md: '768px', // Medium screens
      lg: '1024px', // Large screens
      xl: '1280px', // Extra large screens
    },
    darkMode: false, // or 'media' or 'class'

    fontFamily: {
      'dm-sans': ['"DM Sans"', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'custom-gradient2':
          'linear-gradient(4.61deg, #7D97FF 3.71%, rgba(125, 151, 255, 0) 88.09%)',
        'custom-gradient':
          'linear-gradient(146.36deg, #DFEAF0 7.24%, #D5E4EA 57.18%, #F4E7F4 98.87%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'custom-blue': '#7D97FF',
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
  },
  plugins: [],
};
export default config;
