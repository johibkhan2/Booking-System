
// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var appointmentSchema = new mongoose.Schema({
  date: Date,
  name: String,
  empId: String,
  status: Boolean
});

// Return model
module.exports = restful.model('Appointments', appointmentSchema);