// rollup.config.js
import typescript from "@rollup/plugin-typescript";
import pkg from "./package.json";

const conf = {
  input: "src/lib/index.ts", // our source file
  output: [
    {
      file: pkg.main,
      format: "cjs",
    },
    {
      file: "dist/index.es.js",
      format: "es", // the preferred format
    },
    {
      file: "dist/index.iife.js",
      format: "iife",
      name: "ReactFocusPointImage", // the global which can be used in a browser
    },
  ],
  external: [...Object.keys(pkg.dependencies || {})],
  plugins: [
    typescript({
      typescript: require("typescript"),
    }),
  ],
};

export default conf;
