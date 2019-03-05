const mongoose = require('mongoose');

const Schema = mongoose.Schema

var BookInstanceSchema = new mongoose.Schema({
    book: {
        type: Schema.ObjectID,
        ref: 'Book',
        required: true
    }

});

module.exports = mongoose.model('BookInstance', BookInstanceSchema);