export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'studio-black': '#0a0a0a',
        'studio-dark': '#141414',
        'studio-purple': '#6d28d9', // Deep Purple
        'studio-purple-light': '#8b5cf6',
        'studio-red': '#dc2626',   // Bold Red
        'studio-red-light': '#ef4444',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }
    },
  },
  plugins: [],
}
