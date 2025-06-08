/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        ruby: {
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
        },
        emerald: {
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
        },
        sapphire: {
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
        },
        amethyst: {
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
        },
        topaz: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        },
        diamond: {
          400: '#e5e7eb',
          500: '#d1d5db',
          600: '#9ca3af',
        },
      },
    },
  },
  plugins: [],
};
