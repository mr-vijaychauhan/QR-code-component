/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'light-gray':'hsl(212, 45%, 89%)',
        'grayish-blue':'hsl(220, 15%, 55%)',
        'dark-blue':'hsl(218, 44%, 22%)',
      },
    },
    screens:{
      'sm': '375px',
      'lg': '1440px'
    },
  },
  plugins: [],
};
