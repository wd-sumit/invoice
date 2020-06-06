const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({path: './config.env'})
const app = require('./app');

const DB = process.env.DATABASE_URL.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then( () => console.log('connected to the database'));

app.listen(3000, () => {
    console.log('listening to the server');
});