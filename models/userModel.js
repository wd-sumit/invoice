const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

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
        maxlength: 40,
        validate: {
            validator : function(val) {
                return val === this.password;
            },
            message: 'Password does not match'
        }
    },
    photo: String
});

userSchema.pre('save', async function(next) {
    if(!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password, 12);
    this.passwordConfirm = undefined;
    next();
})

const User = mongoose.model('User', userSchema);

module.exports = User;