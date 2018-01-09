/**
 * Webpack configuration file for bundling of JS.
 *
 * Set up with help from: https://webpack.js.org/configuration/
 */

// Use node.js built-in path module to avoid path issues across platforms.
const path = require('path');
const webpack = require('webpack'); // Include to access built-in plugins.
const CleanWebpackPlugin = require('clean-webpack-plugin');

const base_dir = path.resolve(__dirname, './../../');

module.exports = {
  devtool: '#inline-source-map',
  context: base_dir,
  module: {
    rules: [
      {
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader?cacheDirectory=true',
          options: {
            // FYI: Please never change this order.
            presets: ['react', 'es2015', 'stage-0']
          }
        }
      }
    ]
  },
  plugins: [
    // Clean build folder on the beginning.
    // https://github.com/johnagan/clean-webpack-plugin
    new CleanWebpackPlugin([path.join(base_dir, 'react/build')]),
    // Abort process if got an error.
    // https://webpack.js.org/plugins/no-emit-on-errors-plugin/
    new webpack.NoEmitOnErrorsPlugin()
  ],
  stats: 'normal', // Use 'verbose' or 'detailed' for debuggin.
};
