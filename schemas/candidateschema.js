var exports = module.exports = {};

var mongoose = require('mongoose');
var mongoosecon = require('../databasecon').conn;

//Define a schema
var NewCandidateSchema = new mongoose.Schema({
    name: String,
    pri_technology: String,
    sec_technology: String,
    position_id: String,
    status: String,
    experience: String,
    email: String,
    updated: { type: Date, default: Date.now },
});

exports.CandidateModel = mongoosecon.model('Candidate', NewCandidateSchema);