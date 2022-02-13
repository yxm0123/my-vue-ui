
const {VueLoaderPlugin} = require('vue-loader')
const path = require('path');
module.exports ={
  mode:'production',
  entry:path.resolve(__dirname, '../packages/my-ui/index.ts'),
  output: {
    path:path.resolve(__dirname, '../dist'),
    filename: 'index.js',
    libraryTarget: 'umd',//可以支持commonjs和amd 不支持es6 可以直接在浏览器中使用
    library:'my-ui'
  },
  externals:{
    vue:{
      root:'Vue',
      commonjs:'vue',
      commonjs2:'vue'
    }
  },
  resolve: {
    extensions: ['.ts', '.tsx','.js','.vue']
  },
  module: {
    rules:[
      {
        test: /\.(ts|js)x?$/,
        exclude: '/node-modules/',
        loader:'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      // {
      //   test: /\.(png|gif|otf|ttf|jpg)$/,
      //   loader:'url-loader'
      // },
      // {
      //   test: /\.(scss|css)$/,
      //   use: [
      //     'style-loader',
      //     'css-loader',
      //     'sacss-loader'
      //   ]
      // }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}