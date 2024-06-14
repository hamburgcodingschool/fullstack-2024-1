const express = require('express');
const { router } = require('./controllers/dataControllers.js');

const app = express();

app.use(express.json());

app.use('/data/', router)

module.exports = app;
