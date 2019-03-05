const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var BookSchema = new mongoose.Schema({
    name: {
        type: String
    },
    author: {
        type: Schema.ObjectID,
        ref: 'Author',
        required: true
    },
    genre: {
        type: Schema.ObjectID,
        ref: 'Genre',
    },
    isbn: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('Book', BookSchema);