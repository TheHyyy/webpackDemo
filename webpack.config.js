var HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  // 生成的文件名字
  output: {
    filename: 'index.[contenthash].js',
  },
  // 出生的index ,里面的script的引用会追随着上面的
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Rain第一次的webpack',
      template: 'src/assets/index.html',
    }),
  ],
  module: {
    // 发现了css结尾的,css-loader就把css的东西读进文件,style-loader的用处就是把css-loader读到的文件放到style标签里面
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
}
