/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontSize: {
        10: "10px",
        11: "11px",
        13: "13px",
        15: "15px",
        22: "22px",
        28: "28px",
      },
      lineHeight: {
        3.5: "14px",
        sm: "13px",
        md: "18px",
        lg: "26px",
      },
      gap: {
        lg: "22px",
      },
      colors: {
        blue: {
          200: "#718EBF",
          600: "#396AFF",
          900: "#343C6A",
        },
        gray: {
          100: "#F5F7FA",
          200: "#EDF1F7",
          300: "#F4F5F7",
          400: "#B1B1B1",
        },
        slate: {
          200: "#DFEAF2",
        },
      },
      screens: {
        sm: "48em",
        md: "62em",
        lg: "75em",
        xl: "88em",
        "min-md": { min: "62em" },
        "max-md": { max: "62em" },
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("data-active", "&[data-active]");
    },
  ],
};
