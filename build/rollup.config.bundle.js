import typescript from "rollup-plugin-typescript2";
import {nodeResolve } from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
import path from 'path';
import vue from 'rollup-plugin-vue';
import autoprefixer from 'autoprefixer'  //同样要配置browserslist
import cssnano from 'cssnano'

export default {
  input: path.resolve(__dirname,'../packages/index.ts'),
  output:{
    format:'es',
    file:'dist/index.esm.js',
  },
  plugins:[
    nodeResolve(),
    vue({
      target:'browser',
      style: {
        postcssPlugins: [
          autoprefixer(),
          cssnano()
        ]
      }
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
    postcss(),
    terser()
  ],
  external(id){
    return /^vue/.test(id)
  }
}