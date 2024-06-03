/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      backgroundImage: {
        bgWave: "url('/src/assets/wave-haikei.svg')",
      },
    },
  },
  plugins: [require("daisyui")],
};
