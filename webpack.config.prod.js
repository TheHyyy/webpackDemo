var HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const base = require('./webpack.config.base')
module.exports = {
  ...base,
  mode: 'production',

  plugins: [
    ...base.plugins,
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
    }),
  ],

  module: {
    // 发现了css结尾的,css-loader就把css的东西读进文件,style-loader的用处就是把css-loader读到的文件放到style标签里面
    rules: [
      ...base.module.rules,

      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
}
