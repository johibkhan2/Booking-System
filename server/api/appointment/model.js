
// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var appointmentSchema = new mongoose.Schema({
  date: { type: Date, unique: true,required: true },
  name: { type: String,required: true,min:3 },
  empId: { type: String,required: true,min: 5},
  status: Boolean
});

// Return model
module.exports = restful.model('Appointments', appointmentSchema);