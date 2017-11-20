var exports = module.exports = {};

var mongoose = require('mongoose');
var mongoosecon = require('../databasecon').conn;

//Define a schema
var NewJobSchema = new mongoose.Schema({
    title: String,
    technology1: String,
    technology2: String,
    technology3: String,
    technology3: String,
    city: String,
    comment: String,
    minexp: Number,
    maxexp: Number,
    email: String,
    description: String,
    updated: { type: Date, default: Date.now },
});

exports.JobModel = mongoosecon.model('Jobs', NewJobSchema);