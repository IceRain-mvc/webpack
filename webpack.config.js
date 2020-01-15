/*
* node --> webpack
* */
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');

let path = require('path');
module.exports = {
  mode: 'development',

  devServer: {
    port: 3031,// 计算机 1024 - 65535
    contentBase: './dist'
  },

  entry: './src/index.js',
  //npm run build

  output: {
    /*hash: 根据文件名字 和内容生成的*/
    filename: "bundle[hash].js",
    path: path.resolve(__dirname, 'bundle')
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      minify: {
        collapseWhitespace: true
      }
    }),
  ]
};
