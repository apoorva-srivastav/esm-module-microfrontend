/* eslint-disable import/no-anonymous-default-export */
import { defineConfig } from "vite";
import cssInject from "vite-plugin-css-injected-by-js";
import metaData from './package.json' assert { type: 'json' };

const version = metaData.version
const name = `[name]@${version}.mjs`;

export default defineConfig({
  plugins: [cssInject()],
  preview: {
    port: 7200,
    open: true,
  }, 
  esbuild:{
    jsxInject: `import React from "https://esm.sh/react@18.2.0"`
  },
  build: {
    bundle: false,
    rollupOptions: {
      input: {microApp:"src/MicroFrontend.jsx"},
      preserveEntrySignatures: "exports-only",
      external: ["react", "react-dom"],
      
      output: [
    {
      name:'microApp',
      dir: 'public',
      format: 'esm',
      entryFileNames: name,
    }]
  },
    },
});
