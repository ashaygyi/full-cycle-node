const mongoose = require('mongoose');
const {ObjectID} = require('mongoose');

var GenreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

});

module.exports = mongoose.model('Genre', GenreSchema);