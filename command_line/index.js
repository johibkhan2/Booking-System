booking = require("./booking.js");
// Dependencies
var mongoose = require('mongoose');

//MongoDB connection
try{
mongoose.connect('mongodb://localhost/appointment');
} catch (err) {
  console.log("database failed to connect to " + err.message);
}

if (process.argv.length < 3) {
  console.log('Usage: node ' + process.argv[1] + ' FILENAME');
  process.exit(1);
}
// Read the file and fetch the booking request.
var fs = require('fs')
  , filename = process.argv[2];
fs.readFile(filename, 'utf8', function(err, data) {
  if (err) throw err;
  //console.log('OK: ' + filename);
  console.log(data);
  var bookingRequest=data.split(',');
  console.log('bookingRequest='+bookingRequest);

//adding booking request
    var model = new booking({empId: bookingRequest[0], name: bookingRequest[1], date: bookingRequest[2]});
    model.save(function (err) {
        if (err) {
            console.log("error="+err.message);
            return;
        }
    });


});
