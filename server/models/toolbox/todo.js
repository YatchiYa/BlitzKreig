const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const TodoSchema = new Schema({
  user:{
    type: String
  },
  todos: {
    type: Array
  }
});


module.exports = mongoose.model('Todo',TodoSchema);
