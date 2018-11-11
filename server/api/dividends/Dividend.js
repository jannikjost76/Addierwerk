const mongoose = require('mongoose');

const DividendSchema = new mongoose.Schema({
    wkn: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    value: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
});

const Dividend = mongoose.model('dividend', DividendSchema);

module.exports = Dividend;
