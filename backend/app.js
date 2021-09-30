const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

const errorMiddleware = require('./middleware/error');

app.use(express.json());
app.use(express.urlencoded());

//? route imports

const productRoute = require('./routes/productRoute');
const userRoute = require('./routes/userRoute');
app.use('/api/v1', productRoute);
app.use('/api/v1', userRoute);

//? middleware for error
app.use(errorMiddleware);
//? middleware for accessing cookie
app.use(cookieParser());

module.exports = app;
