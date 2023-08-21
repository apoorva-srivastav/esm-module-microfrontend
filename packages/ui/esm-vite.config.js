/* eslint-disable import/no-anonymous-default-export */
import cssInject from "vite-plugin-css-injected-by-js";
import { build } from 'vite';
import fg from 'fast-glob'

const entryPoints = [
  'src/components/**/**.jsx',
]

//Searches for files that match the patterns defined in the array of input points.
//Returns an array of absolute file paths.
const files = fg.sync(entryPoints, { absolute: true })

const entities = files.map((file) => {
    // Extract the part of the file path after the "src" folder and before the file extension.
    const [key] = file.match(/(?<=components\/\**).*$/) || []
  
    return [`src/components/${key}`]
  })

//build
entities.forEach(async(entity) => {
   await build({
    configFile: false,
    plugins: [cssInject()],
    esbuild: {
          jsxInject: `import React from "https://esm.sh/react@18.2.0"`
        },
    build: {
      bundle: false,
      rollupOptions: {
        input: entity,
        preserveEntrySignatures: "exports-only",
        external: ["react", "react-dom"],
        output: [
          {
            dir: 'public',
            format: 'esm',
            entryFileNames: "[name].mjs",
          }],
      }
    },
  });
});