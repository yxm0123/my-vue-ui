
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {VueLoaderPlugin} = require('vue-loader')
const path = require('path');
module.exports ={
  mode:'development',
  devtool:'source-map',
  entry:path.resolve(__dirname, 'mian.ts'),
  output: {
    path:path.resolve(__dirname, '../website-dist'),
    filename: 'index.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx','.js','.vue']
  },
  devServer:{
      static: {
          directory: path.join(__dirname, 'dist'),
      },
      compress: true,// 启用压缩
      port: 9000, // 端口
      open:true, //启动之后自动打开
  },
  module: {
    rules:[
      {
        test: /\.(ts|js)x?$/,
        exclude: '/node-modules/',
        loader:'babel-loader'
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          // 自动将所有.vue文件转化为.vue.tsx文件
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(png|gif|otf|ttf|jpg)$/,
        loader:'url-loader'
      },
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html')
    })
  ]
}