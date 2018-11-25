// webpack config

'use strict'
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const { VueLoaderPlugin } = require('vue-loader');

const webpack = require('webpack');
const glu_webpack = require('gulp');

module.exports = {
  mode: 'development',    // we can delete mode and optization and replace it : mode : production
  // optimization: {
  //  splitChunks: {
  //    chunks:  'all'
  //  }
  // },
  optimization: {
    runtimeChunk : 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  entry: {
    app: './src/index.js',
    vue: './src/js/vue.js'
  },
   plugins: [
     new CleanWebpackPlugin(['dist']),
     new ManifestPlugin(),
     new webpack.optimize.ModuleConcatenationPlugin(),
     new webpack.HotModuleReplacementPlugin(),
     new webpack.HashedModuleIdsPlugin(),
     new VueLoaderPlugin(),

     new HtmlWebpackPlugin({
     title: 'BlitzKreig',
   }),

  ],
   output: {
     // filename: '[name].bundle.js',
     filename: '[name].[hash].js',
     // chunkFilename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
     publicPath: '/'
   },
   module: {
      rules: [
        {
          test: /\.vue$/,
          use: 'vue-loader'
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.json$/,
          use: 'file-loader',
        },
        {
          test: /\.mp3$/,
          use: 'file-loader?hash=sha512&digest=hex&name=[name]-[hash].[ext]',
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            'file-loader'
          ]
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            'file-loader'
          ]
        },
        {
          test: /\.(csv|tsv)$/,
          use: [
            'csv-loader'
          ]
        },
        {
          test: /\.xml$/,
          use: [
            'xml-loader'
          ]
        }
      ]
    }

};
