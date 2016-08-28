'use strict';
let webpack = require('webpack');
let BabiliPlugin = require("babili-webpack-plugin");
let path = require('path');

module.exports = {
  entry: {
    'car.es2015.prod': './app/car.js'
  },

  output: {
    path: './dist',
    filename: '[name].bundle.js'
  },

  module: {
    loaders: []
  },

  plugins: [
    new BabiliPlugin()
  ],

  resolve: {
    root: [ path.join(__dirname, 'app') ],
    extensions: ['', '.js']
  },

  devtool: false
};
