module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        dark: {
          ...require("daisyui/src/colors/themes")["[data-theme=dark]"],

          primary: "#a32256",

          secondary: "#be185d",

          accent: "#fbcfe8",

          neutral: "#2C2135",

          "base-100": "#212326",

          info: "#5b21b6",

          success: "#15997A",

          warning: "#EBAD28",

          error: "#E05248",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
