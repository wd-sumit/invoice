const express = require('express');
const clientRouter = require('./routes/clientRoutes');
const userRouter = require('./routes/userRoutes');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controller/errorController');

const app = express();

app.use(express.json());

app.use('/api/v1/clients', clientRouter);
app.use('/api/v1/users', userRouter);

app.all('*', (req, res, next) => {
    next(new AppError(`cannot find ${req.originalUrl} path on this server`, 404));
});

app.use(globalErrorHandler);

module.exports = app;