import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  esbuild: {
    include: /\.[jt]sx$/,
    jsxInject: `import { Fragment, jsx } from '@/vue-shim'`,
    jsxFactory: 'jsx',
    jsxFragment: 'Fragment',
  }
})
