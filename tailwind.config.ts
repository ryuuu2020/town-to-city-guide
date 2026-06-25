import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'blueprint-bg': '#f8fafc',
        'blueprint-surface': '#ffffff',
        'blueprint-alt': '#f1f5f9',
        'blueprint-text': '#1e293b',
        'blueprint-muted': '#64748b',
        'blueprint-accent': '#0284c7',
        'blueprint-accent-light': '#e0f2fe',
        'blueprint-warm': '#ea580c',
        'blueprint-green': '#16a34a',
        'blueprint-border': '#e2e8f0',
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
        'card': '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
        'card-hover': '0 4px 12px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.04)',
      },
    },
  },
  plugins: [],
};

export default config;
