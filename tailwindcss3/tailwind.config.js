/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "royal-blue": "#4C5FD5",
        "hero-color": "#DADBF1",
      },
      boxShadow: {
        primary: "0 9px 14px 0 rgba(0, 0, 0, 0.1)",
      },
    },
    fontSize: {
      "2xl": [
        "1.5rem",
        {
          lineHeight: "1.5rem",
        },
      ],
    },
  },
  plugins: [],
};
