import { defineConfig, loadEnv } from "vite";
import edit from "rollup-plugin-edit";
import { getBanner } from "./src/banner.ts";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    plugins: [
      edit({
        chunk: (chunk) => {
          if (chunk.fileName === "index.js") {
            return getBanner(env) + chunk.contents;
          }
          return chunk.contents;
        },
      }),
    ],
    build: {
      rollupOptions: {
        output: {
          entryFileNames: "index.js",
          chunkFileNames: "index.js",
          assetFileNames: "[name][extname]",
        },
      },
    },
  };
});
