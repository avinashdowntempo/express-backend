var exports = module.exports = {};

var mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
var config = require('./config');

exports.connection = (closure) => {
    return MongoClient.connect(config.database, (err, db) => {
        if (err) return console.log(err);
        closure(db);
    });
};

var options = {
    useMongoClient: true,
    autoIndex: false, // Don't build indexes
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0
};

exports.conn = mongoose.createConnection(config.database, options);

  /*.then(
    () => { console.log("mongoose connection succesful")},
    err => { console.log("mongoose connection failed",err) }
  );*/

