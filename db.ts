import mongoose = require('mongoose');
import autoIncrement = require('mongoose-auto-increment');
import blueBird = require('bluebird');

mongoose.Promise(blueBird);

let dbURI = 'mongodb://financial:financial@ds161069.mlab.com:61069/financial-manager-imo';

mongoose.connect(dbURI);

autoIncrement.initialize(mongoose.connection);

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