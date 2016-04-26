/**
 * Created by deezdroid on 19/04/16.
 */

var mongoose = require('../database');

var paymentSchema = {
    name : { type : String, unique : true}
};

exports.paymentSchema = paymentSchema;
module.exports = new mongoose.Schema(paymentSchema);