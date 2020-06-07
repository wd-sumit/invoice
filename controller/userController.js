const jwt = require('jsonwebtoken');
const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');

exports.signup = catchAsync(async (req, res, next) => {
    const newUser = await User.create(req.body);
    const token = jwt.sign({id: newUser._id}, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });
    res.status(200).json({
        success: true,
        token,
        data: {
            user: newUser
        }
    });
});