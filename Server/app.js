// packages
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config()

// app
app = express();

// Promise 
mongoose.Promise = global.Promise;

// use
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

// connect with mongodb
mongoose.connect(process.env.URL_KEY, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Database connected successFully'))
    .catch(error => console.log(error.message))

module.exports = app;