'use strict';

let BabiliPlugin = require("babili-webpack-plugin");
let path = require('path');

module.exports = {
  entry: {
    'car.es2015.prod': './app/car.js'
  },

  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: '[name].bundle.js'
  },

  module: {
    rules: []
  },

  plugins: [
    new BabiliPlugin()
  ],

  resolve: {
    modules: [
      path.join(process.cwd(), 'app'),
      'node_modules'
    ],
    extensions: ['.js', '.json']
  },

  devtool: false
};
