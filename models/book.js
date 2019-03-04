const mongoose = require('mongoose');
const {ObjectID} = require('mongoose');

var BookSchema = new mongoose.Schema({
    name: {
        type: String
    },
    author: {
        type: ObjectID,
        ref: 'Author',
        required: true
    },
    genre: {
        type: ObjectID,
        ref: 'genre',
    },
    isbn: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('Book', BookSchema);