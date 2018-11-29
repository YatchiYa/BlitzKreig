

const express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
const app = express();
var helmet = require('helmet'); // secure data from the different atks http://expressjs.com/fr/advanced/best-practice-security.html

var session = require('client-sessions');

var x = function chckSession(){
  console.log(" in the check file : " + session.user);
  return session.user;
}

module.exports = x;
