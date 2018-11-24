// webpack config

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
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
    app: './src/index.js'
  },
   plugins: [
     new CleanWebpackPlugin(['dist']),
     new ManifestPlugin(),
     new webpack.optimize.ModuleConcatenationPlugin(),
     new webpack.HotModuleReplacementPlugin(),
     new webpack.HashedModuleIdsPlugin(),

     new HtmlWebpackPlugin({
     title: 'BlitzKreig'
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
          test: /\.css$/,
          exclude: /node_modules/,
          use: [
            'style-loader',
            'css-loader'
          ]
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
