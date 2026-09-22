/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'deep-teal': '#073B4C',
        'dark-teal': '#052F3D',
        'primary-orange': '#FF9F1C',
        'orange-hover': '#E88900',
        'warm-white': '#FFFDF8',
        'soft-cream': '#FFF7E6',
        'rural-green': '#5F8D4E',
        'light-green': '#EAF3E5',
        'tech-bg': '#F4F8F9',
        'primary-text': '#17232B',
        'secondary-text': '#64727A',
        'border-color': '#E3E8E8',
      },
    },
  },
  plugins: [],
};
