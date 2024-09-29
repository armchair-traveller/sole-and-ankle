/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {
        primary: 'hsl(340deg 65% 47% / <alpha-value>)',
        secondary: 'hsl(240deg 60% 63% / <alpha-value>)',
        gray: {
          100: 'hsl(185deg 5% 95% / <alpha-value>)',
          300: 'hsl(190deg 5% 80% / <alpha-value>)',
          500: 'hsl(196deg 4% 60% / <alpha-value>)',
          700: 'hsl(220deg 5% 40% / <alpha-value>)',
          900: 'hsl(220deg 3% 20% / <alpha-value>)',
        },
      },
    },
  },

  plugins: [],
}
