const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('@rollup/plugin-typescript');
const dts = require('rollup-plugin-dts');
const postcss = require('rollup-plugin-postcss');
const peerDepsExternal = require('rollup-plugin-peer-deps-external');
const terser = require('@rollup/plugin-terser');
const path = require('path');

const packageJson = require('./package.json');

module.exports = [
  {
    input: 'src/index.ts',
    external: ['react-dom'],
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true
      }
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        exclude: [/\.test.((js|jsx|ts|tsx))$/, /\.stories.((js|jsx|ts|tsx|mdx))$/],
        tsconfig: './tsconfig.json'
      }),
      postcss({
        extensions: ['.sass', '.scss', '.css'],
        sourceMap: true,
        extract: true,
        use: [['sass', { includePaths: [path.resolve('node_modules')] }]]
      }),
      terser()
    ]
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts.default()],
    external: [/\.scss$/]
  }
];
