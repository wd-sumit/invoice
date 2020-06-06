const express = require('express');
const Client = require('./models/clientModel');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    console.log(process.env);
    res.send('App has started');
});

app.post('/api/v1/clients', async(req, res) => {
  try { 
    const newClient = await Client.create(req.body);

    res.status(201).json({
        success: true,
        data: {
            client: newClient
        }
    });
} catch(err) {
    res.status(500).json({
        success: false,
        error: err.name
    });
}
})

module.exports = app;