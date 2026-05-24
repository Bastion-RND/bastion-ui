/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('nativewind/preset')],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        border: '#e5e5e5',
        input: '#e5e5e5',
        ring: '#a1a1a1',
        background: '#ffffff',
        foreground: '#0a0a0a',
        primary: {
          DEFAULT: '#0071cc',
          foreground: '#fafafa',
        },
        secondary: {
          DEFAULT: '#f5f5f5',
          foreground: '#171717',
        },
        destructive: {
          DEFAULT: '#e7000b',
          foreground: '#ffffff',
        },
        muted: {
          DEFAULT: '#f5f5f5',
          foreground: '#737373',
        },
        accent: {
          DEFAULT: '#f5f5f5',
          foreground: '#171717',
        },
        popover: {
          DEFAULT: '#ffffff',
          foreground: '#0a0a0a',
        },
        card: {
          DEFAULT: '#ffffff',
          foreground: '#0a0a0a',
        },
        sidebar: {
          DEFAULT: '#fafafa',
          foreground: '#0a0a0a',
          primary: '#171717',
          'primary-foreground': '#fafafa',
          accent: '#f5f5f5',
          'accent-foreground': '#171717',
          border: '#e5e5e5',
          ring: '#a1a1a1',
        },
        chart: {
          1: '#91c5ff',
          2: '#3a81f6',
          3: '#2563ef',
          4: '#1a4eda',
          5: '#1f3fad',
        },
      },
      borderRadius: {
        sm: '6px',
        md: '8px',
        lg: '10px',
        xl: '14px',
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        serif: ['var(--font-serif)'],
        mono: ['var(--font-mono)'],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
