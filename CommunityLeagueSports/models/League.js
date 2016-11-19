var mongoose = require('mongoose');

var LeagueSchema = new mongoose.Schema({
  name: String,
  sport: String,
  organization: {type: mongoose.Schema.Types.ObjectId, ref: 'Organization'}
});

mongoose.model('League', LeagueSchema);
