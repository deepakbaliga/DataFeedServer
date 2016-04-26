/**
 * Created by deezdroid on 19/04/16.
 */

var mongoose = require('../database');

var restaurantTypeSchema = {
    name : { type : String, unique : true}
};

exports.restaurantTypeSchema = restaurantTypeSchema;
module.exports = new mongoose.Schema(restaurantTypeSchema);