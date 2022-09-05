import { defineConfig } from "vite";

export default defineConfig({
    esbuild: {
        jsxFactory: "h",
        jsxFragment: "Fragment",
    },
    root: "src",
    build: {
        outDir: "../dist",
    },
    watch: {
        include: "src/**",
    },
});
