import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import copyPlugin from "rollup-plugin-copy";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: ["./src/components/index.js"],
      name: "index",
      formats: ["cjs", "es"],
    },
    rollupOptions: {
      external: ["vue"],
      plugins: [
        copyPlugin({
          targets: [{ src: "src/assets/*", dest: "dist/" }],
        }),
      ],
    },
    emptyOutDir: false,
  },
});
