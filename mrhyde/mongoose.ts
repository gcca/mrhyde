import mongoose = require('mongoose');

import { settings } from 'mrhyde/settings';

mongoose.Promise = require('bluebird');


let dbURI = settings.MONGODB_HOST;


export function mongoose_init(): Promise<void> {
    return new Promise<void>(function(resolve, reject) {
        mongoose.connect(dbURI);

        mongoose.connection.on('connected', function() {
            console.log('Mongoose default connection open to ' + dbURI);
            resolve();
        });

        mongoose.connection.on('error', function(err) {
            console.log('Mongoose default connection error: ' + err);
            reject();
        });

        mongoose.connection.on('disconnected', function() {
            console.log('Mongoose default connection disconnected');
        });

        process.on('SIGINT', function() {
            mongoose.connection.close(function() {
                console.log('Mongoose default connection disconnected' +
                            ' through app termination');
                process.exit(0);
            });
        });
    });
}
