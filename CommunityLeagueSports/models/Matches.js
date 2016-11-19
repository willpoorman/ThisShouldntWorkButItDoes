var mongoose = require('mongoose');

var MatchSchema = new mongoose.Schema({
  team_1_ID: {type: mongoose.Schema.Types.ObjectId, ref: 'Team'},
  team_2_ID: {type: mongoose.Schema.Types.ObjectId, ref: 'Team'},
  date: {type: Date, default: Date.now },
  sport: String,
  location: String,
  leagueID: {type: mongoose.Schema.Types.ObjectId, ref: 'League'},
  score_team_1: {type: Number, default: 0},
  score_team_2: {type: Number, default: 0}
});

mongoose.model('Match', MatchSchema);
