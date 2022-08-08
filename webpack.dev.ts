import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';
import commonConfig from './webpack.config';

const devConfig: Configuration = {
  mode: 'development',
  output: {
    filename: '[contenthash].js',
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    port: 9000,
  }
};

export default merge(commonConfig, devConfig);
