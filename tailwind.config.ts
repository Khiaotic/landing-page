import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "primary":'#fdf4e3'
      },
      colors: {
        'background': '#fdf4e3',
        'purple': '#936af6',
        'pink': '#dd5e7f',
        'orange': '#fb8f02',
        'black': '#1e1e1e',
        'red': '#6f1d1b',
        'yale': '#0d3b66',
        'green': '#5da271',
        'space': '#283044',
        'grey': '#8f91a2',
      },
      fontFamily: {
        sans: [
          '"Inter"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;
