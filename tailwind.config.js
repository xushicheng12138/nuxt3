/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    screens: {
      xs: "580px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {

    },
  },
  plugins: [],
  content: [
    `/src/components/**/*.{vue,js,ts}`,
    `/src/layouts/**/*.vue`,
    `/src/pages/**/*.vue`,
  ]
}

