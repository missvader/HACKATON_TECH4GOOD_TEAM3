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
          primary: "#1DB57B",
          secondary: "#89DBD7",
          accent: "#E87E41",
          neutral: "#EBCD63",
          "base-100": "#FFFFFF",
          info: "#25cef4",
          success: "#1f8974",
          warning: "#c98f08",
          error: "#eb2b19",
        },
      },
    ],
  },
};
