const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  //cheap-module-eval-source-map is a easy way to debug console error.
  devServer: {
    contentBase:  path.join(__dirname, 'public'),
    historyApiFallback: true
  },
};
