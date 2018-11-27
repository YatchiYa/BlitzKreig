// webpack config

'use strict'
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const compiler = require('vue-template-compiler');

const webpack = require('webpack');
const glu_webpack = require('gulp');



// Phaser webpack config
var phaserModule = path.join(__dirname, '/node_modules/phaser/');
var phaser = path.join(phaserModule, 'src/phaser.js');



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
    vue: './src/js/setting/vue.js',
    // game: './src/js/setting/homePhaser.js'
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
     chunkFilename: '[name].bundle.js',
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
        },
        { test: /phaser-split\.js$/, use: ['expose-loader?Phaser'] },
        { test: [/\.vert$/, /\.frag$/], use: 'raw-loader' }
      ]
    },
    resolve: {
        alias: {
            'phaser': phaser,
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    }

};


if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ])
}
