var mongoose = require('../database');

var cuisineSchema = {
    name : { type : String, unique : true}
};


exports.cuisineSchema = cuisineSchema;
module.exports = new mongoose.Schema(cuisineSchema);