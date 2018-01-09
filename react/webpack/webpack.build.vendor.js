/**
 * Webpack configuration file for bundling of JS.
 *
 * Set up with help from: https://webpack.js.org/configuration/
 */

// Use node.js built-in path module to avoid path issues across platforms.
const path = require('path');
const webpack = require('webpack'); // Include to access built-in plugins.

const base_dir = path.resolve(__dirname, './../../');
const appSource = path.resolve(base_dir, 'react/src/');
const buildPath = path.resolve(base_dir, 'react/build/');

module.exports = {
  entry: {
    vendor: [path.resolve(base_dir, 'react/vendors/vendors.js')]
  },
  output: {
    path: buildPath,
    filename: 'dll.[name].js',
    library: '[name]'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.resolve(base_dir, 'react/vendors/[name]-manifest.json'),
      name: '[name]',
      context: appSource
    }),
    // Resolve warning message related to fetch node_module.
    new webpack.NormalModuleReplacementPlugin(
      /\/iconv-loader$/, 'node-noop'
    )
  ],
  resolve: {
    modules: [
      path.resolve(base_dir, 'node_modules')
    ],
    extensions: ['.js', '.jsx', '.es6']
  },
  // Added to resolve a dependency issue in this build #https://github.com/hapijs/joi/issues/665
  node: {
    net: 'empty',
    tls: 'empty',
    dns: 'empty'
  }
};
