const mongoose = require('mongoose');

const environment = process.env.NODE_ENV;

const Schema = mongoose.Schema;

// booking schema
const medSchema = new Schema({
    id: {
        type: 'String',
        required: true,
    },
    color: {
        type: 'String',
        required: true,
        trim: true,
    },
    expiryDate: {
        type: 'String',
        required: true,
        trim: true,
    },
    quantity: {
        type: 'Number',
        required: true,
        trim: true
    },
    time: {
        type: 'String',
        required: true,
        trim: true
    },
});

module.exports = mongoose.model('medSchema', medSchema);