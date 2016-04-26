/**
 * Created by deezdroid on 19/04/16.
 */

var mongoose = require('mongoose');

var amenitySchema =  {
    name : {type : String, unique : true}
};

exports.amenitySchema = amenitySchema;
module.exports = new mongoose.Schema(amenitySchema);