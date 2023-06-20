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
          primary: "#386641",
          secondary: "#6a994e",
          accent: "#bc4749",
          neutral: "#f2e8cf",
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
