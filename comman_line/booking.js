var mongoose = require("mongoose"),
 Schema = mongoose.Schema,
 objectId = mongoose.Schema.ObjectId;
 
// Schema
var bookingSchema = new mongoose.Schema({
  _id: { type: objectId, auto: true },
  date: { type: Date, unique: true,required: true },
  name: { type: String,required: true,min:3 },
  empId: { type: String,required: true,min: 5},
  status: Boolean
});
 
var booking = mongoose.model('appointments', bookingSchema);
 
module.exports = booking;