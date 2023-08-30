/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      primary: '#202B3D',
      secondary: '#f9fafb',
      grey: '#afafaf',
      lightGrey: '#f3f4f6',
      white: '#ffffff',
      black: 'black',
      front: '#2bd159',
      back: '#ff5b27',
    },
    screens: {
      mobile: { max: '500px' },
      tablet: { max: '1024px' },
    },
  },
  plugins: [],
};
