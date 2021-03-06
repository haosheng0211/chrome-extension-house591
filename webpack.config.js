const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: {
    popup: path.resolve(__dirname, 'src/popup/main.js'),
    background: path.resolve(__dirname, 'src/background/main.js'),
    content_script: path.resolve(__dirname, 'src/content_script/index.js'),
    content_script_login: path.resolve(__dirname, 'src/content_script/login.js'),
    content_script_enable: path.resolve(__dirname, 'src/content_script/enable.js'),
    content_script_update: path.resolve(__dirname, 'src/content_script/update.js'),
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
    new HtmlWebpackPlugin({
      title: 'Popup',
      inject: 'body',
      chunks: ['popup'],
      filename: 'popup.html',
      template: path.resolve(__dirname, 'src/popup/index.html'),
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
  ],
}
