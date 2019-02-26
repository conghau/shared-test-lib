import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import { eslint } from 'rollup-plugin-eslint';

import { browser, main, module } from './package.json';

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
  'prop-types': 'PropTypes',
  'react-router-dom': 'ReactRouterDOM',
  'styled-components': 'styled',
};

export default {
  input: 'src/index.js',
  output: [
    {
      file: browser,
      format: 'umd',
      name: 'DashboardComponents',
      globals,
    },
    {
      file: main,
      format: 'cjs',
    },
    {
      file: module,
      format: 'es',
    },
  ],
  external: Object.keys(globals),
  plugins: [eslint(), babel({ exclude: 'node_modules/**' }), resolve({ browser: true }), commonjs()],
};
