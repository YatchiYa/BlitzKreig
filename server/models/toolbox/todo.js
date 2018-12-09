const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const TodoSchema = new Schema({
  desc:{
    type: String
  },
  user:{
    type: String
  },
  created:{
    type: Date, default: Date.now
  },
  todos: {
    type: Array
  },
  deadline: {
    type: Date
  }
});


module.exports = mongoose.model('Todo',TodoSchema);
