/* eslint-disable import/no-anonymous-default-export */
import { defineConfig } from "vite";
import cssInject from "vite-plugin-css-injected-by-js";

export default defineConfig({
  plugins: [ cssInject()],
  esbuild:{
    jsxInject: `import React from "https://esm.sh/react@18.2.0"`
  },
  build:{
    rollupOptions:{
      external: ['https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css']
    }
  }
});
