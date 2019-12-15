const path = require('path');

const webpack = require('webpack');
const merge = require('webpack-merge');

const common = require('./webpack.common');

const ROOT = path.resolve(__dirname, '..');

module.exports = merge(common, {
  mode: 'development',

  // Emit a source map for easier debugging
  // See https://webpack.js.org/configuration/devtool/#devtool
  devtool: 'eval-source-map',

  devServer: {
    contentBase: path.join(ROOT, 'dist'),
    historyApiFallback: true,
    hot: true,
  },
  watch: true,
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
