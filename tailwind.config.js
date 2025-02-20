/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#0000ff",
          "secondary": "#009600",
          "accent": "#004dff",
          "neutral": "#1d1d1d",
          "base-100": "#fff9d7",
          "info": "#00b4cd",
          "success": "#00c97b",
          "warning": "#c65400",
          "error": "#ff759b",
        },
      },
    ],
  },
};
