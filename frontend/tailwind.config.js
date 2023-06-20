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
          primary: "#606c38",

          secondary: "#283618",

          accent: "#dda15e",

          neutral: "#fefae0",

          "base-100": "#f8fafb",

          info: "#25cef4",

          success: "#1f8974",

          warning: "#c98f08",

          error: "#eb2b19",
        },
      },
    ],
  },
};
