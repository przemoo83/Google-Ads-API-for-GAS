import json from '@rollup/plugin-json';
import copy from "rollup-plugin-copy-assets";
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/code.js',
  treeshake: false,
  output: {
    dir: 'dist',
    chunkFileNames: 'code.js',
    format: 'esm'
  },
  plugins: [
    resolve(),
    json(),
    copy({
      assets: [
        "src/appsscript.json",
        "src/index.html",
        "src/javascript.html",
      ],
    }),
  ]
};
