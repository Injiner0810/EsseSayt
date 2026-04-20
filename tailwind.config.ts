import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";
import containerQueries from "@tailwindcss/container-queries";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
          "surface": "#ffffff",
          "on-surface": "#0f172a",
          "on-surface-variant": "#475569",
          "primary": "#2563eb",
          "primary-container": "#dbeafe",
          "on-primary-container": "#1e3a8a",
          "primary-fixed-dim": "#3b82f6",
          "primary-fixed": "#bfdbfe",
          "on-primary-fixed": "#1e3a8a",
          
          "secondary": "#8b5cf6",
          "secondary-container": "#ede9fe",
          "on-secondary-container": "#4c1d95",
          "secondary-fixed": "#ddd6fe",
          "on-secondary-fixed": "#4c1d95",
          
          "tertiary": "#ec4899",
          "tertiary-container": "#fce7f3",
          "on-tertiary-container": "#831843",
          "tertiary-fixed": "#fbcfe8",
          "on-tertiary-fixed": "#831843",
          
          "error": "#ef4444",
          "error-container": "#fee2e2",
          "on-error-container": "#7f1d1d",
          
          "surface-container-high": "#f8fafc",
          "surface-container-highest": "#f1f5f9",
          "surface-container-low": "#ffffff",
          "surface-container-lowest": "#ffffff",
          "surface-variant": "#f1f5f9",
          
          "outline-variant": "#e2e8f0",
          "outline": "#cbd5e1"
      },
      borderRadius: {
              "full": "9999px"
      },
      fontFamily: {
              "headline": ["Plus Jakarta Sans"],
              "body": ["Inter"],
              "label": ["Inter"]
      }
    },
  },
  plugins: [
    forms,
    containerQueries
  ],
};
export default config;
