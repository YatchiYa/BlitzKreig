
var Login = require('../../models/Login');
const express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
const app = express();
var helmet = require('helmet'); // secure data from the different atks http://expressjs.com/fr/advanced/best-practice-security.html

var session = require('client-sessions');
console.log(" befor the login : " +session.user);
app.use(session({
  cookieName: 'session',
  secret: ' DevilEarthIsHere',
  duration: 30 * 60 * 1000,
  activeDuration: 5 * 60 * 1000,
}));





//var session = require('cookie-session');  // for the coockie session http://expressjs.com/fr/advanced/best-practice-security.html

// trying to handle the session :

/*
var expiryDate = new Date( Date.now() + 60 * 60 * 1000 ); // 1 hour
app.use(session({
  name: 'session',
  keys: ['key1', 'key2'],
  cookie: { secure: true,
            httpOnly: true,
            domain: 'example.com',
            path: 'foo/bar',
            expires: expiryDate
          }
  })
);
*/




console.log(session);

app.use(helmet());
app.disable('x-powered-by');

// secret text
app.set('superSecret',"sucretLife");

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
          session.user = user_data.username;
          chckSession();
          console.log(" the session user is : " + session.user);
          console.log("the user is : " +user_data.username);
          // first part which send the data
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


function chckSession(){
  return session.user;
}

// logout function
app.get('/logout', function(req, res) {
  req.session.reset();
  res.redirect('/');
});

// trying to set our session app




module.exports = router, chckSession;
