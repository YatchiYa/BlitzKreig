// chat userr part
const express  = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const socket = require('socket.io');
const cors = require('cors');
const Present = require('../../models/present');
var router = express.Router();

const app = new express()


router.route('/savePresent')
	.post(function(req, res) {
		var present = new Present();
		Present.findOne({"user": req.body.user}, function(err, present_data){

			present.user = req.body.user;
      present.title = req.body.title;
			present.desc = req.body.desc;
			present.created = new Date();
			present.img = req.body.img;

			present.save(function(err, present_data){
				res.json({
					message : present.message,
          userOf: present.user
				});
			});
		});
	});



router.get('/getPresent', (req, res) => {
  Present.find({},(err, present)=> {
    res.send(present);
  })
})

module.exports = router;
