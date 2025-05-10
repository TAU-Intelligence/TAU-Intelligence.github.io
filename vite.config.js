import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // This enables the styled-jsx in your react application
      include: "**/*.jsx",
      jsxRuntime: 'automatic',
      babel: {
        plugins: [
          ["styled-jsx/babel", { "optimizeForSpeed": true }]
        ]
      }
    })
  ],
})