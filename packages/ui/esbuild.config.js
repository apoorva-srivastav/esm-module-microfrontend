import {version} from './package.json'
import esbuild from 'esbuild';
import cssModulesPlugin from "esbuild-css-modules-plugin"

esbuild.build({
    entryPoints: ['src/components/**/**'],
    bundle: false,
    minify: false,
    format: 'esm',
    sourcemap: true,
    outdir: 'public',
    outExtension: { '.js': `@${version}.mjs` },
    jsxImportSource: `https://esm.sh/react@18.2.0`,
    plugins: [
      cssModulesPlugin()
  ]
  })