
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import Icons from "unplugin-icons/vite";

export default defineConfig(
    {
        base: "./",
        plugins: [
            vue(),
            Icons({
                compiler: "vue3",
                autoInstall: true,
            }),
        ],
        build: {
            rollupOptions: {
                input: "/index.html",
            },
        },
    }
);
