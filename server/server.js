// the server js file x


const express = require('express');
const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server'); // seting the dev server webpack
const webpackDevMiddleware = require('webpack-dev-middleware'); // setting the different middleware for our project
const app = express();
const config = require('../webpack.common.js');// seting the config of our webpack ap
const path = require("path");
const socket = require('socket.io');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var empty  = require('is-empty');

var router = express.Router();
const serve = app.listen(3000);
const io = socket(serve);


var jwt = require('jsonwebtoken');
var configx = require('./config');


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


/** MIDDLEWARES **/
mongoose.Promise = global.Promise;


//get content of incoming request under req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//allow CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


/****************/
mongoose.connect("mongodb://127.0.0.1:27017/DB",{useNewUrlParser:true}).then(function(response){
    console.log('i am in !');
}).catch(error=>{
    console.log(error);
});

mongoose.set('useCreateIndex', true);

mongoose.connection.once('open',function(){
    console.log('connected');
}).on('error',function(error){
    console.log(error);
});

// route for our app

var router = require('./controls/connection/handleConnection.js');
var initialization = require('./controls/connection/check.js');

app.use('/api',router);
app.use('/initialization',initialization);








// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));



module.exports = app;
