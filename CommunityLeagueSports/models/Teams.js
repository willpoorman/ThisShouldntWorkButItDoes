var mongoose = require('mongoose');

var TeamSchema = new mongoose.Schema({
  name: String,
  sport: String,
  //captainID: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  leagueID: {type: mongoose.Schema.Types.ObjectId, ref: 'League'},
  losses: {type: Number, default: 0},
  wins: {type: Number, default: 0}
});

mongoose.model('Team', TeamSchema);
