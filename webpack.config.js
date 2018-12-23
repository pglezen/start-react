const path = require('path');
const webpack = require('webpack');
// Figure out how to integrate mini-css-extract-plugin for webpack 4.
//const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
  const isProduction = env === 'production';
//  const CSSExtract = new ExtractTextPlugin('styles.css');

  return {
 //   entry: ['./src/styles/styles.scss', './src/app.js'],
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
 //     }, {
 //       use: CSSExtract.extract({
 //         use: [
 //           {
 //             loader: 'css-loader',
 //             options: { sourceMap: true }
 //           },{
 //             loader: 'sass-loader',
 //             options: { sourceMap: true }
 //           }
 //         ]
 //       }),
 //       test: /\.s?css$/
      }]
    },
//    plugins: [
//      CSSExtract
//    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      disableHostCheck: true,
      publicPath: '/dist/'
    },
    mode: env
  };
}
