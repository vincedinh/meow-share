import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        blue: {
          400: '#2589FE',
          500: '#0070F3',
          600: '#2F6FEB',
        },
        orange: {
          400: '#dfa055',
          500: '#c07228',
          600: '#a55100',
        },
        cream: {
          400: '#f8f6ef',
          500: '#edede5',
          600: '#e7e4dd',
        },
        black: {
          400: '#140d08',
          500: '#0c0808',
          600: '#000000'
        }
      },
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },
  plugins: [],
}
export default config
