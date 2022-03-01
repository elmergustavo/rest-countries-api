module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito Sans"],
      },
      colors: {
        bg_primary: "var(--color-bg-primary)",
        text_primary: "var(--color-text-primary)",
        element_primary: "var(--color-element-primary)",
        input_primary: "var(--color-input-primary)",
      },
      width: {
        tes: "23%",
      },
      maxWidth: {
        "1/12": "8.333333%",
      },
      minWidth: {
        "1/12": "8.333333%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
