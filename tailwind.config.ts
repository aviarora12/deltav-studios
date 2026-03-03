import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#0a0a0a',
        alert: '#ff4500',
        stealth: '#2f3439'
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"IBM Plex Mono"', 'monospace'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif']
      },
      boxShadow: {
        tactical: '0 0 0 1px #2f3439, 0 0 22px rgba(255, 69, 0, 0.2)'
      }
    }
  },
  plugins: []
};

export default config;
