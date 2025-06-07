// tailwind.config.js
module.exports = {
  darkMode: 'class', // 🔥 مهم!
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}