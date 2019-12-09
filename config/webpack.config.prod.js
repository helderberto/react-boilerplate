const merge = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const base = require('./webpack.config.base');

module.exports = merge(base, {
  mode: 'production',
  optimization: {
    namedChunks: true,
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
      reportFilename: 'bundle_sizes.html',
    }),
  ],
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
});
