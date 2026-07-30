/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
        display: [
          '"Iowan Old Style"',
          '"Palatino Linotype"',
          'Palatino',
          'Georgia',
          '"Times New Roman"',
          'serif',
        ],
      },
      colors: {
        // Warm institutional palette — deliberately not the Google brand set.
        pine: {
          DEFAULT: '#14635C',
          deep: '#0C4740',
          soft: '#E6F0EE',
        },
        // clay/ink-faint are tuned for WCAG AA (4.5:1) against both white and sand.
        clay: {
          DEFAULT: '#96461F',
          deep: '#7E3E1C',
          soft: '#FBEFE7',
        },
        sand: {
          DEFAULT: '#F7F3EC',
          deep: '#EDE6DA',
        },
        ink: {
          DEFAULT: '#1F2A29',
          soft: '#4A5654',
          faint: '#5E6B69',
        },
      },
    },
  },
  plugins: [],
}
