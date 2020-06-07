const express = require('express');
const userController = require('./../controller/userController');

const router = express.Router();

router
    .route('/signup')
    .post(userController.signup);

module.exports = router;

