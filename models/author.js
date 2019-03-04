const mongoose = require('mongoose');

var AuthorSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    date_of_birth: {
        type: Date
    }

});

module.exports = mongoose.model('Author', AuthorSchema);