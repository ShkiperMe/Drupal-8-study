const path = require('path');
const merge = require('webpack-merge');
const commonConf = require(path.join(__dirname, 'react/webpack/webpack.common'));
const prodConf = require(path.join(__dirname, 'react/webpack/webpack.env.prod'));
const devConf = require(path.join(__dirname, 'react/webpack/webpack.env.dev'));
// @todo move all webpack variables to separate file.
const appConf = require(path.join(__dirname, 'react/webpack/webpack.build.app'));

module.exports = env => {
  const production = !!(env && env.production);
  
  let conf = [];
  let envConf = production ? prodConf : devConf;

  // @todo probably better to use CommonsChunkPlugin
  // instead static vendor bundle.
  // https://webpack.js.org/plugins/commons-chunk-plugin/
  conf.push(merge(commonConf, appConf, envConf));

  return conf;
};
