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
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
          // {
          //   loader: 'sass-loader',
          //   options: {
          //     implementation: require('dart-sass'),
          //   },
          // },
        ],
      },
      {
        test: /\.less$/i,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.styl$/,
        use: ['style-loader', 'css-loader', 'stylus-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
}
