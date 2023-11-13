const CopyWebpackPlugin = require('copy-webpack-plugin');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          { from: 'static', to: '' }, // Copy all files from 'static' to the root of the output directory
        ],
      }),
    ],
  });
};