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
        lightGray: '#585A6B',
        purple: '#7950EC',
        lightPurple: '#8790E0',
        lightBlue: '#32C9E5',
      },
      width: {
        desktopSidebar: '16%',
      },
      height: {
        list: '600px',
        modal: '38rem',
      },
      boxShadow: {
        purple:
          '0px 4px 18px rgba(0, 0, 0, 0.4), 9px 26px 250px -25px rgba(255, 70, 12, 0.4), 0px 31px 109px -25px rgba(105, 12, 255, 0.4)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
