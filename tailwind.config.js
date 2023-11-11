/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        "darken": "#B2ABA5",
        "neutral": "#E6DFD9",
        "lighten": "#F5EEE9",
      }
    },
  },
  plugins: [],
}

