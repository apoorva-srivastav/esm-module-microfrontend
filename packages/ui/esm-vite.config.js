/* eslint-disable import/no-anonymous-default-export */
import cssInject from "vite-plugin-css-injected-by-js";
import { build } from 'vite';
import metaData from './package.json' assert { type: 'json' };
import fg from 'fast-glob'

const version = metaData.version

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
  const name = `[name]@${version}.mjs`;
  const nameCjs = `[name]@${version}.cjs`;
   await build({
    configFile: false,
    define: {
      'version': version,
    },
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
            entryFileNames: name,
          },
          {
            dir: 'public',
            format: 'cjs',
            entryFileNames: nameCjs,
          }],
      }
    },
  });
});