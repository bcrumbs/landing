'use strict';

/* eslint-disable import/no-extraneous-dependencies, no-param-reassign */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  context: path.join(__dirname, '/'),

  entry: {
    index: './index',
  },

  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
    library: '[name]',
    publicPath: '/',
  },

  externals: {
    cheerio: 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },

  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx'],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Braincrumbs | design & development',
      template: 'index.ejs',
      inject: 'body',
      favicon: path.resolve(__dirname, 'static', 'favicon.png'),
      hash: true,
    }),
    new CopyWebpackPlugin([
      { from: 'static' },
    ]),
  ],

  devServer: {
    port: 3000,
    host: '0.0.0.0',
    contentBase: 'build/',
    publicPath: '/',
  },
  
  resolveLoader: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js'],
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
      },
      {
        test: /\.css$/,
        loaders: [
          'style',
          'css',
        ],
      },
      {
        test: /\.json$/,
        loaders: [
          'json',
        ],
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false',
        ],
      },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file',
      },
    ],
  },
};
