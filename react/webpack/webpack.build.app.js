/**
 * Webpack configuration file for bundling of JS.
 *
 * Set up with help from: https://webpack.js.org/configuration/
 */

// Use node.js built-in path module to avoid path issues across platforms.
const path = require('path');
const webpack = require('webpack'); // Include to access built-in plugins.
const base_dir = path.resolve(__dirname, './../../');
const appSource = path.join(base_dir, 'react/src/');
const buildPath = path.join(base_dir, 'react/build/');

module.exports = {
  entry: [path.resolve(appSource, 'init.es6')],
  output: {
    path: buildPath,
    publicPath: '/react/build/',
    filename: 'app.js'
  },
  plugins: [
    new webpack.DllReferencePlugin({
      context: appSource,
      manifest: require(path.resolve(base_dir, 'react/vendors/vendor-manifest.json'))
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      filename: 'webpack-loader.js'
    })
  ],
  resolve: {
    modules: [
      path.resolve(base_dir, 'node_modules'),
      appSource
    ],
    extensions: ['.js', '.jsx', '.es6']
  }
};
