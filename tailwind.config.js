/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xxxs: "290px",
        xxs: "319px",
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1270px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    // other plugins...
  ],
};
