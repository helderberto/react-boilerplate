const path = require('path')

const merge = require('webpack-merge')
const webpack = require('webpack')

const base = require('./webpack.config.base')

const PATH_ROOT = path.resolve(__dirname, '..')

module.exports = merge(base, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(PATH_ROOT, 'dist'),
  },
  devServer: {
    contentBase: path.resolve(PATH_ROOT, 'dist'),
    hot: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
})
