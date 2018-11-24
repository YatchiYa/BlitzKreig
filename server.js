// the server js file


const express = require('express');
const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
// seting the config of our webpack app
const config = require('./webpack.config.js');
// seting up the different option of our app
const options = {
  contentBase: './dist',
  hot: true,
  host: 'localhost'
};

// then adding our config Option to the server entry point
webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);

// then setting the server
const server = new webpackDevServer(compiler, options);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

// Serve the files on port 3000.
server.listen(3000, 'localhost', () => {
  console.log('dev server listening on port 5000');
});
