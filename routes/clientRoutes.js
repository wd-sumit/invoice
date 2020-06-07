const express = require('express');
const clientController = require('./../controller/clietController')

const router = express.Router();

router
  .route('/')
  .get(clientController.getAllClients)
  .post(clientController.createClient);

module.exports = router;