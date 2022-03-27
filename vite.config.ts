import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import svgLoader from 'vite-svg-loader'
import path from 'path'

svgLoader({
    svgoConfig: {
        multipass: true,
    },
})

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), eslintPlugin(), svgLoader()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import './src/assets/scss/index.scss';`,
            },
        },
    },
})
