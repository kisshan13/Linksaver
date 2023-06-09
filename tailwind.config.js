/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        saver: ['Link-Saver', 'sans-serif']
      },
      boxShadow: {
        '3xl': '-5px 4px 0px rgb(231, 234, 238)'
      },
      colors: {
        black: '#2B2B2B',
        pink: '#FFB7FF',
        text: '#ffffff'
      },
    },
  },
  plugins: [
    require('@kamona/tailwindcss-perspective')
  ],
}
