/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        sustainable: {
          primary: "#8fb860",
          secondary: "#B3C186",
          accent: "#E6B081",
          neutral: "#EDCEAA",
          "base-100": "#FFFCEF",
          info: "#25cef4",
          success: "#1f8974",
          warning: "#c98f08",
          error: "#eb2b19",
        },
      },
    ],
  },
};
