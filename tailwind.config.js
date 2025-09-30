/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
       keyframes: {
        rotate3d: {
          '0%': { transform: 'rotateX(0) rotateY(0)' },
          '25%': { transform: 'rotateX(90deg) rotateY(90deg)' },
          '50%': { transform: 'rotateX(180deg) rotateY(180deg)' },
          '75%': { transform: 'rotateX(270deg) rotateY(270deg)' },
          '100%': { transform: 'rotateX(360deg) rotateY(360deg)' },
        },
      },
      animation: {
        rotate3d: 'rotate3d 8s linear infinite',
      },
    },
  },
  plugins: [],
}

