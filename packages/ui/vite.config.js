/* eslint-disable import/no-anonymous-default-export */
import { defineConfig } from "vite";
import cssInject from "vite-plugin-css-injected-by-js";
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [ cssInject(), react()],
  esbuild:{
    jsxInject: `import React from "https://esm.sh/react@18.2.0"`
  }

});
