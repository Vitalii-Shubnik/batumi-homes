/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'slide_up': 'slide_up 1.5s ease-out',
        'slide_down': 'slide_down 1.5s ease-out'
      },
      keyframes: {
        slide_up: {
          '0%': { transform: 'translateY(10vw)' },
          '100%': { transform: 'translateY(0px)' }
        },
        slide_down: {
          '0%': { transform: 'translateY(-10vw)' },
          '100%': { transform: 'translateY(0px)' }
        }
      },
      colors: {
        'main-brown': '#B2922D'
      },
      backgroundImage: {
        'bg1': "url('/src/images/bg1.png')",
        'bg2': "url('/src/images/map_with_point.png')"
      }
    },
    fontFamily: {
      'main': ['Fira Sans']
    },
    screens: {
      'xs': '400px',
      // => @media (min-width: 400px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}
