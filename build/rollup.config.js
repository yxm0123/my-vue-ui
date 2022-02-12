import typescript from "rollup-plugin-typescript2";
import {nodeResolve } from '@rollup/plugin-node-resolve';
import path from 'path';
import vue from 'rollup-plugin-vue';
import {getPackagesSync} from '@lerna/project'
const inputs = getPackagesSync().map(pack=>pack.name).filter(name=>name.includes('@my-ui'));
export default inputs.map(name=>{
  const packName = name.split('@my-ui')[1]
  return {
    input: path.resolve(__dirname,`../packages/${packName}/index.ts`),
    output:{
      format:'es',
      file:`dist/${packName}/index.js`,
    },
    plugins:[
      nodeResolve(),
      vue({
        target:'browser'
      }),
      typescript({
        tsconfigOverride: {
          compilerOptions: {
            declaration: false,
          },
          exclude: [
            'node_modules',
            'website',
            'packages/**/__tests__/*',
          ],
        },
        abortOnError: false,
      }),
    ],
    external(id){
      return /^vue/.test(id) || /^@my-ui/.test(id)
    }
  }
})