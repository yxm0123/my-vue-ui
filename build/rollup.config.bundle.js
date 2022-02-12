import typescript from "rollup-plugin-typescript2";
import {nodeResolve } from '@rollup/plugin-node-resolve';
import path from 'path';
import vue from 'rollup-plugin-vue';

export default {
  input: path.resolve(__dirname,'../packages/my-ui/index.ts'),
  output:{
    format:'es',
    file:'dist/index.esm.js',
  },
  plugins:[
    nodeResolve(),
    vue({
      target:'browser'
    }),
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          declaration: true,
        },
        'include': [
          'packages/**/*',
          'typings/shims-vue.d.ts',
        ],
        'exclude': [
          'node_modules',
          'website',
          'packages/**/__tests__/*',
        ],
      },
      abortOnError: false,
    }),
  ],
  external(id){
    return /^vue/.test(id)
  }
}