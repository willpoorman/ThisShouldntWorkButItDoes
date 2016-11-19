var mongoose = require('mongoose');

var TestSchema = new mongoose.Schema({
  name: String,
  number: {type: Number, default:0}
});

mongoose.model('Test', TestSchema);