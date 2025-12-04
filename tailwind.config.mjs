/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'prime-blue': '#001a33',
        'prime-gold': '#d4af37',
        'safe-white': '#f8fafc',
      },
      fontFamily: {
        garamond: ['"EB Garamond"', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

