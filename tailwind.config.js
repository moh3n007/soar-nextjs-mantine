/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontSize: {
        28: "28px",
      },
      colors: {
        blue: {
          200: "#718EBF",
        },
        gray: {
          100: "#F5F7FA",
        },
      },
    },
  },
};
