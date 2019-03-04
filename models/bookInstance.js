const mongoose = require('mongoose');
const {ObjectID} = require('mongoose');

var BookInstanceSchema = new mongoose.Schema({
    book: {
        type: ObjectID,
        ref: 'Book',
        required: true
    }

});

module.exports = mongoose.model('BookInstance', BookInstanceSchema);