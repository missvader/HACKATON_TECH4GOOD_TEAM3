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
          primary: "#E87E41",
          secondary: "#89DBD7",
          accent: "#1DB57B",
          neutral: "#1DB57B",
          "base-100": "#fffff",
          info: "#25cef4",
          success: "#1f8974",
          warning: "#c98f08",
          error: "#eb2b19",
        },
      },
    ],
  },
};
