var mongoose = require('../database');

var areaSchema = {
    name: {
        type: String,
        unique: true
    }
};

exports.areaSchema = areaSchema;
module.exports = new mongoose.Schema(areaSchema);
