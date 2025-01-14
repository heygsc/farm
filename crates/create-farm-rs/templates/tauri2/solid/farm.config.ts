import { defineConfig } from "@farmfe/core";
import solid from "vite-plugin-solid";

// @ts-ignore process is a nodejs global
const host = process.env.TAURI_DEV_HOST;

// https://www.farmfe.org/docs/config/configuring-farm
export default defineConfig({
  vitePlugins: [solid()],

  clearScreen: false,
  server: {
    port: 1420,
    strictPort: true,
    host: host || false,
    hmr: host
      ? {
          protocol: "ws",
          host,
          port: 1421,
          watchOptions: {
            ignored: ["**/node_modules/**"],
          }
        }
      : undefined,
  },
});