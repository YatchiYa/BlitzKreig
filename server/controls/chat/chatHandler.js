// chat userr part
const express  = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const socket = require('socket.io');
const cors = require('cors');
const Message = require('../../models/message');
var router = express.Router();

const app = new express()


router.get('/chat', async (req,res) => {
  let result = await message.find()
  res.send(result);
});

router.route('/saveMessages')
	.post(function(req, res) {
    console.log(req.body.user + " and " + req.body.message)
		var message = new Message();
		Message.findOne({"user": req.body.user}, function(err, message_data){

			message.user = req.body.user;
      console.log(req.body.user)
      console.log(req.body.text)
			message.message = req.body.text;
			message.created = new Date();
			message.emo = req.body.emo;

			console.log(message ,28);
			message.save(function(err, message_data){
				res.json({
					message : message.message,
          userOf: message.user
				});
			});
		});
	});



router.get('/getMessages', (req, res) => {
  Message.find({},(err, messages)=> {
    console.log(messages)
    res.send(messages);
  })
})

module.exports = router;
