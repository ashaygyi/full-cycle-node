var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://ashaygyi:<ashaygyi>@full-cycle-rg79z.gcp.mongodb.net/test?retryWrites=true');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Mongodb connection error'));

module.exports = {mongoose};