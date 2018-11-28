// the server js file


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
app.set('superSecret',configx.secret);


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

var Login = require('./models/Login');



router.route('/register/')
	.post(function(req, res) {
		console.log(req.body)
		var login = new Login();
		Login.findOne({"username": req.body.username}, function(err, user_data){
			if(err){
				console.log(err)
			}
			if(user_data){
				return res.json({
					status : 409,
					message : "User already exist"
				});
			}
			console.log(req.body, 44)
			login.username = req.body.username;
			login.password = req.body.password;
			login.confirm_password = req.body.confirm_password;
			login.email	   = req.body.email;
			console.log(login ,49)
			login.save(function(err, login_data){
				if(err)
					return res.status(400).send(err);
				res.json({
					status: 200,
					message : 'You have succesfully registered.'
				});
			});
		});
	});



  router.route('/login')
  	.post(function(req, res){
  		Login.findOne({"username": req.body.username, "password": req.body.password}, function(err, user_data){
  			if(err || !user_data){
  				return res.status(401).json({
  					status : 401,
  					message : "Invalid username and password.",
  				});
  			} else {
  				const payload = {
        				username: user_data.username
      			};
      			var token = jwt.sign(payload, app.get('superSecret'), {
            			expiresIn : 60*60*24 // expires in 24 hours
      			});
  				res.json({
  					message : "You have succesfully loggedin.",
            status: 200,
  					token	: token
  				});
  			}
  		});
  	});




    router.use(function(req,res,next){
      var token = req.body.token || req.query.token || req.headers['x-access-token'];
      if(token){
        jwt.verify(token, app.get('superSecret'), function(err,decoded){
          if(err){
    		return res.json({status : 403,success:false, message:'Failed to authenticate token.'});
          } else {
    		req.decoded = decoded;
    		next();
          }
        });
      } else {
        return res.json({
          status : 403,
          success: false,
          message: 'No token provided.'
        });
      }
    });



    router.route('/result')
    	.get(function(req, res) {
            Login.find(function(err, logins) {
                if (err)
                    res.send(err);

                res.json(logins);
            });
     	});

      app.use('/api',router);









// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));
