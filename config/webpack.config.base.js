const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATH_ROOT = path.resolve(__dirname, '..');

module.exports = {
  entry: {
    app: [path.resolve(PATH_ROOT, 'src', 'index.js')],
  },
  output: {
    path: path.resolve(PATH_ROOT, 'dist'),
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(PATH_ROOT, 'public', 'index.html'),
      filename: './index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader', 'eslint-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
