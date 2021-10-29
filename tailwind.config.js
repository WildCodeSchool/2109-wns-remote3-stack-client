/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        lexend: ['Lexend Deca', 'sans-serif'],
      },
      colors: {
        darkBlue: '#15192C',
        darkGray: '#2C3249',
        purple: '#7950EC',
        lightPurple: '#8790E0',
        lightBlue: '#32C9E5',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
