var mongoose = require('mongoose');

var OrganizationSchema = new mongoose.Schema({
  name: String
});

mongoose.model('Organization', OrganizationSchema);
