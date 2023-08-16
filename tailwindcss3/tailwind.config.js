/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "royal-blue": "#4C5FD5",
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
