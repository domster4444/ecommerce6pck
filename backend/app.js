const express = require('express');
const app = express();
const cors = require('cors');
app.use(
  cors({
    origin: '*',
  })
);
const cookieParser = require('cookie-parser');

const errorMiddleware = require('./middleware/error');

app.use(express.json());
app.use(express.urlencoded());
//? middleware for accessing cookie
app.use(cookieParser());

//? route imports

const productRoute = require('./routes/productRoute');
const userRoute = require('./routes/userRoute');
const orderRoute = require('./routes/orderRoute');
app.use('/api/v1', productRoute);
app.use('/api/v1', userRoute);
app.use('/api/v1', orderRoute);

//? middleware for error
app.use(errorMiddleware);

module.exports = app;
