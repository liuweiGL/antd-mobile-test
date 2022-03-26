import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import imp from 'vite-plugin-imp'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    imp({
      libList: [
        {
          libName: 'antd-mobile',
          libDirectory: 'es/components',
          replaceOldImport: true,
          style: () => false
        }
      ]
    }),
    react()
  ]
})
