var mongoose = require('../database');
require('mongoose-type-email');

var restaurantSchema = {
    amenities: {
        type: [mongoose.Schema.Types.ObjectId]
    },
    area : {
        type: mongoose.Schema.Types.ObjectId
    },
    createdAt : {
        type: Date,
        default: Date.now
    },
    cost_for_two : {
        type : Number
    },
    cuisines: {
        type: [mongoose.Schema.Types.ObjectId]
    },
    delivery : {
        type : Boolean
    },
    delivery_charges : {
        type : Number
    },
    email : {
        type : mongoose.SchemaTypes.Email
    },
    hotel_name : {
        type : String
    },
    human_address : {
        type : String
    },
    location : {
      latitude : String,
        longitude : String
    },
    mall_name : {
        type : String
    },
    minimum_delivery_order : {
        type : Number
    },
    payment_methods : {
        type : [mongoose.Schema.Types.ObjectId]
    },
    phone_number : {
        type : String
    },
    restaurant_name : {
        type : String
    },
    restaurant_types : {
        type : [mongoose.Schema.Types.ObjectId]
    },
    business_hours : {
        close_hour: Number,
        close_minute: Number,
        open_hour: Number,
        open_minute: Number
    },
    website : String
};

exports.restaurantSchema = restaurantSchema;
module.exports = new mongoose.Schema(restaurantSchema);
