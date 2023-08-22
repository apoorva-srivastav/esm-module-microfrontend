const esbuild = require("esbuild");
const cssModulesPlugin = require("esbuild-css-modules-plugin");

esbuild.build({
    entryPoints: ['src/index.js'],
    bundle: true,
    minify: false,
    format: 'esm',
    sourcemap: false,
    outdir: 'dist',
    external: ['react', 'react-dom'],
    plugins: [cssModulesPlugin({inject: true})],
  })
  //cssModulesPlugin({inject: true})