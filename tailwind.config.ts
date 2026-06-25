import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'blueprint-bg': '#0b1120',
        'blueprint-surface': '#1a2332',
        'blueprint-alt': '#243044',
        'blueprint-text': '#e2e8f0',
        'blueprint-muted': '#94a3b8',
        'blueprint-accent': '#38bdf8',
        'blueprint-accent-light': '#0c2d48',
        'blueprint-warm': '#f97316',
        'blueprint-green': '#22c55e',
        'blueprint-border': '#334155',
      },
      fontFamily: {
        display: ['Outfit', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out forwards',
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
      },
      borderRadius: {
        'card': '8px',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.3), 0 1px 2px rgba(0,0,0,0.2)',
        'card-hover': '0 4px 12px rgba(0,0,0,0.4), 0 2px 4px rgba(0,0,0,0.3)',
      },
    },
  },
  plugins: [],
};

export default config;
