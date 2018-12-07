
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var passport = require('passport');
require('../passport')(passport);



router.get('/landingGame', passport.authenticate('jwt', { session: false}), function(req, res) {
  var token = getToken(req.headers);
  if (token) {
      return res.send({success: false, status:false, msg: 'Unauthorized.'});

  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }
});

router.get('/goals', passport.authenticate('jwt', { session: false}), function(req, res) {
  var token = getToken(req.headers);
  if (token) {
      return res.send({success: false, status:false, msg: 'Unauthorized.'});

  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }
});


getToken = function (headers) {
  if (headers && headers.authorization) {
    var parted = headers.authorization.split(' ');
    if (parted.length === 2) {
      return parted[1];
    } else {
      return null;
    }
  } else {
    return null;
  }
};





module.exports = router;
