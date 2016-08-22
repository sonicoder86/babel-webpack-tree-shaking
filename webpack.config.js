'use strict';
let webpack = require('webpack');
let path = require('path');

module.exports = {
  entry: {
    'car': './app/car.js'
  },

  output: {
    path: './dist',
    filename: '[name].bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          presets: [
            ['es2015', { loose: true, modules: false }],
          ]
        }
      }
    ]
  },

  resolve: {
    root: [ path.join(__dirname, 'app') ],
    extensions: ['', '.js']
  },

  devtool: false
};
