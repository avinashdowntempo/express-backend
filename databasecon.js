var exports = module.exports = {};
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
var config = require('./config');

exports.connection = (closure) => {
    return MongoClient.connect(config.database, (err, db) => {
        if (err) return console.log(err);
        closure(db);
    });
};
