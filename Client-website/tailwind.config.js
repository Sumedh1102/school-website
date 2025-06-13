/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Define a utility class for Merriweather
        // The first string MUST exactly match the font-family name from Google Fonts
        // (which is typically just the font name itself, e.g., "Merriweather").
        merriweather: ['"Merriweather"', 'serif'],
        // Define a utility class for Domine
        domine: ['"Domine"', 'serif'],
        inter: ["Inter", 'serif'],
        // You can also define a default font for 'sans' or 'serif' if you wish
        // sans: ['"Roboto"', 'ui-sans-serif', 'system-ui', ...],
      },
      colors: {
        // Your custom colors if any
        primary: '#3b2a14', // Using your specific color from the h1 example
      },
    },
  },
  plugins: [],
}