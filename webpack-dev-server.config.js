const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'build');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  // Entry points to the project
  entry: [
    'webpack/hot/dev-server',
    'webpack/hot/only-dev-server',
    path.join(__dirname, '/client/index.js'),
  ],
  // Server Configuration options
  devServer: {
    contentBase: 'client', // Relative directory for base of server
    devtool: 'eval',
    hot: true, // Live-reload
    inline: true,
    port: 3000, // Port Number
    host: 'localhost', // Change to '0.0.0.0' for external facing server
  },
  devtool: 'eval',
  output: {
    path: buildPath, // Path of output file
    filename: 'app.js',
  },
  plugins: [
    // Enables Hot Modules Replacement
    new webpack.HotModuleReplacementPlugin(),
    // Allows error warnings but does not stop compiling.
    new webpack.NoErrorsPlugin(),
    // Injects components into HTML template
    new HtmlWebpackPlugin({
      template: './client/index.html',
      filename: 'index.html',
      inject: 'body'
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/, // All .js files
        loaders: ['babel-loader'],
        exclude: [nodeModulesPath],
      },
      {
        test: /\.jsx$/, // All .jsx files
        loaders: ['babel-loader'],
        exclude: [nodeModulesPath],
      },
      {
        test: /\.css$/, // All .css files
        loaders: ['css-loader'],
        exclude: [nodeModulesPath],
      },
    ]
  }
};

module.exports = config;
