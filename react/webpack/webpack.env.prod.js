const webpack = require('webpack');
//const BabelMinifyPlugin = require('babel-minify-webpack-plugin');

module.exports = {
  plugins: [
    /**
     * @link https://webpack.js.org/guides/environment-variables/
     *  - env.NODE_ENV [local|stage|prod]
     *  - env.production [true|false]
     *    The long discussion env.NODE_ENV vs env.production here
     *    https://github.com/webpack/webpack/issues/2537#issuecomment-327310858
     */
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
        'production': true
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
    
    /**
     * @todo probably use Babel minify for es6 bundle.
     * Babel minify webpack plugin.
     * @link https://github.com/webpack-contrib/babel-minify-webpack-plugin
     */
    //new BabelMinifyPlugin()
  ]
};
