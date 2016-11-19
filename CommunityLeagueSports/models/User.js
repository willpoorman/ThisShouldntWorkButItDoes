var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  teamID: {type: mongoose.Schema.Types.ObjectId, ref: 'Team'},
  email: String,
  type: String,
  password: String
});

mongoose.model('User', UserSchema);
