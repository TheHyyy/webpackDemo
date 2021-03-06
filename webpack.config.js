var HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const base = require('./webpack.config.base')

module.exports = {
  ...base,
  devtool: 'inline-source-map',
  // 安装完这个就很方便，不用一直build了啥的
  devServer: {
    contentBase: './dist',
  },
  module: {
    // 发现了css结尾的,css-loader就把css的东西读进文件,style-loader的用处就是把css-loader读到的文件放到style标签里面
    rules: [
      ...base.module.rules,

      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
}
