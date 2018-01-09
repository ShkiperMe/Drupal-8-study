/**
 * Webpack configuration file for bundling of JS.
 *
 * Set up with help from: https://webpack.js.org/configuration/
 */

const path = require('path');
const merge = require('webpack-merge');
const commonConf = require(path.join(__dirname, 'react/webpack/webpack.common'));
const prodConf = require(path.join(__dirname, 'react/webpack/webpack.env.prod'));
const devConf = require(path.join(__dirname, 'react/webpack/webpack.env.dev'));
// @todo move all webpack variables to separate file.
const vendorConf = require(path.join(__dirname, 'react/webpack/webpack.build.vendor'));

module.exports = env => {
  const production = !!(env && env.production);
  
  let conf = [];
  let envConf = production ? prodConf : devConf;
  conf.push(merge(commonConf, vendorConf, envConf));
  
  return conf;
};
