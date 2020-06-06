const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A client must have a name'],
    },
    email: {
        type: String,
        required: [true, 'A client must have a email'],
        unique: true
    },
    companyName: {
        type: String
    },
    phone: {
        type: Number,
        required: [true, 'A client must have a phone number'],
        unique: true
    },
    address: {
        lineOne: {
            type: String,
            required: true
        },
        lineTwo: {
            type:String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        },
        zipCode: {
            type: Number,
            required: true
        }
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;