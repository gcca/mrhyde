import express = require('express');
import mongoose = require('mongoose');

let app = express();

mongoose.Promise = require('bluebird');

let dbURI = 'mongodb://financial:financial@ds161069.mlab.com:61069/financial-manager-imo';

mongoose.connect(dbURI);

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.listen(3000, function() {
  console.log('Listening on port 3000!');
});

mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection open to ' + dbURI);
});

mongoose.connection.on('error', function (err) {
    console.log('Mongoose default connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
    console.log('Mongoose default connection disconnected');
});

process.on('SIGINT', function () {
    mongoose.connection.close(function () {
        console.log('Mongoose default connection disconnected through app termination');
        process.exit(0);
    });
});