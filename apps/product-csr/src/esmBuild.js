import build from "https://esm.sh/build";
import output from '../micro_dist/micro.bundle.js'

const ret = await build({
  dependencies: {
    "preact": "^10.13.2",
    "preact-render-to-string": "^6.0.2",
  },
  code: `${output}`,
  // for types checking and LSP completion
  types: `
    export function render(): string;
  `,
});

// import module
// import bundled module
//const { render } = await import(ret.bundleUrl);


console.log('URL>>',ret.url)