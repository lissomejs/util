import { defineConfig } from "vite";
import path from "path";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [dts()],
    build: {
        outDir: "lib",
        lib: {
            entry: "src/index.ts",
            formats: ["es", "umd", "cjs"],
            name: "LissomeUtil",
        },
    },
});
