const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A user must have a name'],
    },
    email: {
        type: String,
        required: [true, 'A user must have a email'],
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 40
    },
    passwordConfirm: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 40
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;