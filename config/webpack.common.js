const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOT = path.resolve(__dirname, '..');

// Inline files smaller than 10 kB
const LIMIT_INLINE_FILES = 10 * 1024;

module.exports = {
  entry: {
    app: [path.resolve(ROOT, 'src', 'index.js')],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(ROOT, 'dist'),
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: path.resolve('public', 'favicon.ico'),
      template: path.resolve('public', 'index.html'),
      filename: './index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(eot|otf|ttf|woff|woff2)$/,
        use: 'file-loader',
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: LIMIT_INLINE_FILES,
              noquotes: true,
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|ico)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: LIMIT_INLINE_FILES,
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                enabled: false,
                // NOTE: mozjpeg is disabled as it causes errors in some Linux environments
                // Try enabling it in your environment by switching the config to:
                // enabled: true,
                // progressive: true,
              },
              gifsicle: {
                interlaced: false,
              },
              optipng: {
                optimizationLevel: 7,
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4,
              },
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
    ],
  },
};
