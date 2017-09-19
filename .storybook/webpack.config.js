const webpack = require('webpack');
const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(s?css|sass)$/,
        use: [
         {loader: 'style-loader'},
         {loader: 'css-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]'},
         {
           loader: 'sass-loader',
           options: {
             includePaths: [
               path.resolve(__dirname, '../node_modules/nitro_theme/app/assets/stylesheets/nitro_theme/')
             ]
           }
         }
       ]
      }
    ],
  },
};