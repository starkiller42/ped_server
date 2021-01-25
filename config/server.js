const bodyParser = require('body-parser');
const express = require('express');
var app = express();

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

module.exports = app;