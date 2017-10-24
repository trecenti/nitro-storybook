const webpack = require('webpack');
const path = require('path');

module.exports = (storybookBaseConfig, configType) => {
  storybookBaseConfig.module.rules.push({
    test: /\.(s?css|sass)$/,
    use: [
     {loader: 'style-loader'},
     {loader: 'css-modules-flow-types-loader'},
     {loader: 'css-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]'},
     {
       loader: 'sass-loader',
       options: {
         includePaths: [
           path.resolve(__dirname, '../sass-mixins')
         ]
       }
     }
   ]
  });

  return storybookBaseConfig;
}
