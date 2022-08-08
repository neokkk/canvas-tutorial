import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';
import commonConfig from './webpack.config';

const prodConfig: Configuration = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
  },
  devtool: 'source-map',
};

export default merge(commonConfig, prodConfig);
