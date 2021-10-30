// rollup.config.js
import typescript from '@rollup/plugin-typescript';

const conf = {
  input: 'src/lib/index.ts',
  output: {
    dir: 'dist',
    format: 'esm'
  },
  plugins: [typescript()]
};

export default conf;
