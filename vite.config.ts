import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import copyFiles from 'vite-plugin-copy-files'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        dts({
            copyDtsFiles: true,
        }),
        copyFiles({
            include: [/package\.json/],
            exclude: [/node_modules/],
            entry: './',
        }),
    ],
    build: {
        outDir: 'lib',
        lib: {
            entry: 'src/index.ts',
            formats: ['es', 'umd', 'cjs'],
            name: 'LissomeUtil',
        },
    },
})
