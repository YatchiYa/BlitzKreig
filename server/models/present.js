const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const PresentSchema = new Schema({
  desc:{
    type: String
  },
  user:{
    type: String
  },
  created:{
    type: Date, default: Date.now
  },
  title: {
    type: String
  },
  img: {
    type: String
  }
});


module.exports = mongoose.model('Present',PresentSchema);
