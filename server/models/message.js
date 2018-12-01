const mongoose = require('mongoose');
var Schema       = mongoose.Schema;

const MessageSchema = new Schema({
  message:{
    type: String
  },
  user:{
    type: String
  },
  created:{
    type: Date, default: Date.now
  },
  emo: {
    type: String
  }
});


module.exports = mongoose.model('Message',MessageSchema);
