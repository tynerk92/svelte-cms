import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'

const onwarn = ({ message }) =>
  message.includes('@rollup/plugin-typescript TS2315')

export default {
  input: 'src/worker.ts',
  output: {
    sourcemap: true,
    format: 'esm',
    name: 'app',
    file: 'static/worker.js',
  },
  plugins: [
    resolve({
      browser: true,
      dedupe: ['svelte'],
    }),
    commonjs(),
    typescript(),
  ],
  watch: {
    clearScreen: false,
  },
  onwarn,
}
