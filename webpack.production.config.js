var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'build');
var mainPath = path.resolve(__dirname, 'src', 'index');
var srcPath = path.resolve(__dirname, 'src');

module.exports = {
  entry: mainPath,
  output: {
    path: buildPath,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { 
        exclude: [nodeModulesPath], 
        test: /\.js?$/, 
        loader: 'babel', 
      },{ 
        test: /\.jsx?$/, 
        loaders: ['react-hot', 'babel'], 
        include: srcPath
      },{
        test: /\.scss$/,
        loader: 'style!css!postcss!sass'
      }
    ],
    query: { presets: ['es2015', 'react', 'stage-2'] }
  },
  postcss: function() {
    return [ autoprefixer({ browsers: ['last 2 versions'] }) ];
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      compress: {
        warnings: false
      },
      output: {
        comments: false
      }
    })
  ]
}