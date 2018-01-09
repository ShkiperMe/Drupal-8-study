/**
 * Webpack configuration file for bundling of JS.
 *
 * Set up with help from: https://webpack.js.org/configuration/
 */
const path = require('path');
const webpack = require('webpack'); // Include to access built-in plugins.
const LiveReloadPlugin = require('webpack-livereload-plugin');

const base_dir = path.resolve(__dirname, './../../');
const appSource = path.resolve(base_dir, 'react/src/');

module.exports = {
  devServer: {
    historyApiFallback: true,
    contentBase: appSource
  },
  watchOptions: {
    aggregateTimeout: 100
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development'),
        'production': false
      }
    }),
    new LiveReloadPlugin({
      protocol: 'http',
      host: null,
      appendScriptTag: true
    })
  ]
};
