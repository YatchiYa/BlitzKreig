// chat userr part
const express  = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const socket = require('socket.io');
const cors = require('cors');
const Todo = require('../../../models/toolbox/todo.js');
var router = express.Router();

const app = new express()


router.route('/saveTodo')
	.post(function(req, res) {
		var todo = new Todo();
		Todo.find({}, function(err, todo_data){

				// not the best way i think !!!
				console.log("19" + todo_data)
				if(todo_data != ''){

					todo_data.forEach(todox => {
						if (todox.user == req.body.user){
							console.log(" --> " + todox.user)
							let x = todox.todos
								todox.todos = req.body.todos
								console.log("27" + todox)
								todox.save()
								res.json({
									message: " edited ! "
								});
						}
				})
			}
			else{
				todo.user = req.body.user;
				todo.todos = req.body.todos;
				todo.desc = req.body.desc;
				todo.created = new Date();
				todo.deadline = req.body.deadline;
				console.log("42" + todo)

				todo.save(function(err, todo_data){
					res.json({
						todos : todo.todos,
						userOf: todo.user
					});
				})
			}
	})
})



router.get('/getTodo', (req, res) => {
  Todo.find({},(err, todo)=> {
		todo.forEach(todox => {
			if (todox.user == 'yatchi'){
				console.log("77 is " + todox)
				res.send(todox)
			}

	  })
	})
})

module.exports = router;
