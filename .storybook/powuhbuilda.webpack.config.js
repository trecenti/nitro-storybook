const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    'es5-shim/es5-shim',
    'es5-shim/es5-sham',
    'babel-polyfill',
    path.resolve(__dirname, '../components/index.js')
  ],

  output: {
    filename: 'webpack-bundle.js',
    path: path.resolve(__dirname, '../'),
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [{loader: 'babel-loader'}],
        exclude: /node_modules/
      },
      {
        test: /\.(s?css|sass)$/,
        use: [
         {loader: 'style-loader'},
         {loader: 'css-modules-flow-types-loader'},
         {loader: 'css-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]'},
         {
           loader: 'sass-loader',
           options: {
             includePaths: [
               path.resolve(__dirname, '../node_modules/nitro-theme/app/assets/stylesheets/nitro_theme')
             ]
           }
         }
       ]
      }
    ],
  },
};