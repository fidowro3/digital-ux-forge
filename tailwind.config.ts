
import type { Config } from "tailwindcss";
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        'sans': ['"Plus Jakarta Sans"', ...defaultTheme.fontFamily.sans],
        'heading': ['"Space Grotesk"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: {
          DEFAULT: '#0D0D0D',
          secondary: '#161616',
        },
        foreground: '#F5F5F5',
        primary: {
          DEFAULT: '#F5F5F5',
          foreground: '#0D0D0D',
        },
        secondary: {
          DEFAULT: '#222222',
          foreground: '#F5F5F5',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: '#333333',
          foreground: '#BBBBBB',
        },
        accent: {
          DEFAULT: '#333333',
          foreground: '#F5F5F5',
          neon: {
            blue: '#00FFFF',
            magenta: '#FF00FF',
          },
        },
        card: {
          DEFAULT: '#161616',
          foreground: '#F5F5F5',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
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
        'neon-glow-blue': {
          '0%, 100%': { 
            boxShadow: '0 0 5px #00FFFF, 0 0 10px #00FFFF, 0 0 15px #00FFFF',
          },
          '50%': { 
            boxShadow: '0 0 10px #00FFFF, 0 0 20px #00FFFF, 0 0 30px #00FFFF',
          },
        },
        'neon-glow-magenta': {
          '0%, 100%': { 
            boxShadow: '0 0 5px #FF00FF, 0 0 10px #FF00FF, 0 0 15px #FF00FF',
          },
          '50%': { 
            boxShadow: '0 0 10px #FF00FF, 0 0 20px #FF00FF, 0 0 30px #FF00FF',
          },
        },
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-left': {
          from: { opacity: '0', transform: 'translateX(-20px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        'fade-in-right': {
          from: { opacity: '0', transform: 'translateX(20px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'neon-glow-blue': 'neon-glow-blue 2s ease-in-out infinite',
        'neon-glow-magenta': 'neon-glow-magenta 2s ease-in-out infinite',
        'fade-in': 'fade-in 0.5s ease-out',
        'fade-in-left': 'fade-in-left 0.5s ease-out',
        'fade-in-right': 'fade-in-right 0.5s ease-out',
      },
      boxShadow: {
        'neon-blue': '0 0 5px #00FFFF, 0 0 10px #00FFFF',
        'neon-magenta': '0 0 5px #FF00FF, 0 0 10px #FF00FF',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
