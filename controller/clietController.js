const Client = require('./../models/clientModel');
const catchAsync = require('./../utils/catchAsync');

exports.createClient = catchAsync(async(req, res, next) => {
    const newClient = await Client.create(req.body);

    res.status(201).json({
        success: true,
        data: {
            client: newClient
        }
    });
});

exports.getAllClients = catchAsync(async(req, res, next) => {
    const clients = await Client.find();

    res.status(200).json({
        success: true,
        results: clients.length,
        data: {
            clients
        }
    });
});