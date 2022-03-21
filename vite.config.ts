import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import svgLoader from 'vite-svg-loader'

svgLoader({
    svgoConfig: {
        multipass: true,
    },
})

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), eslintPlugin(), svgLoader()],
})
