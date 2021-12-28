const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: {
    background: path.resolve(__dirname, 'src/background/main.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
    extensions: ['.vue', '.js'],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        path.resolve(__dirname, 'src/manifest.json'),
      ],
    }),
    new ESLintPlugin({
      fix: true,
      extensions: ['.vue', '.js'],
    }),
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
  ],
}
