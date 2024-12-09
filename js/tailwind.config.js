/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        customGold: '#d6a354', 
      },
      keyframes: {
        animate: {
          '0%, 18%, 20%, 50.1%, 60%, 65.1%, 80%, 90.1%, 92%': {
            color: '#0e3742',
            boxShadow: 'none',
          },
          '18.1%, 20.1%, 30%, 50%, 60.1%, 65%, 80.1%, 90%, 92.1%, 100%': {
            color: '#d6a354', 
            textShadow: '0 0 10px #B22727', 
          },
        },
      },
      animation: {
        anim: 'animate 5s infinite', 
        fadeIn: 'fadeIn 0.3s ease-in-out', 
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.box-reflect': {
          '-webkit-box-reflect': 'below 1px linear-gradient(transparent, #0004)', 
        },
      });
    },
  ],
};
