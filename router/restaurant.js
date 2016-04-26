/**
 * Created by deezdroid on 21/04/16.
 */
var express = require('express');
var router = express.Router();
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('../database');
var restaurantSchema = require('../schema/restaurant');


app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());


var _restaurant = mongoose.model('restaurants', restaurantSchema);


router.post('/restaurant', function (req, res) {
    console.log(req.body);

    restaurant = req.body;

    if(validate(req.body).success){
        var newRestaurant = new _restaurant(restaurant);
        newRestaurant.save(function (err, doc) {
            if(!err)
            console.log('Successfully Added new restaurant with ID', doc._id);
            else {
                console.log(err);
            }
        });
    }

    res.end();
});


var validate = function (doc) {

    var err = {};
    err.message = "All cool my nigaa..!!";
    err.success = true;


    if(!doc.area){
     err.message = "Invalid Area";
        err.success = false;
    }else if(!doc.cost_for_two){
        err.message = "Are you sure about Cost For Two?";
        err.success = false;
    }else if(!doc.cuisines){
        err.message = "What kind of a cuisine is this?";
        err.success = false;
    }else if(!doc.delivery){
        err.message = "Do they even Delivery?";
        err.success = false;
    }else if(!doc.delivery_charges){
        err.message = "You sure about the delivery charges?";
        err.success = false;
    }else if(!doc.human_address){
        err.message = "I do not understand the Address bro..!! Is it even Human readable?";
        err.success = false;
    }else if(!doc.location){
        err.message = "Where on the earth is that location?";
        err.success = false;
    }else if(!doc.minimum_delivery_order){
        err.message = "Sure no minimum charges for delivery..!!";
        err.success = false;
    }else if(!doc.payment_methods){
        err.message = "I wont pay you nigga..!!";
        err.success = false;
    }else if(!doc.phone_number){
        err.message = "How the fuck do I call them?";
        err.success = false;
    }else if(!doc.restaurant_types){
        err.message = "What do I have here? Breakfast lunch or your shit..!!";
        err.success = false;
    }else if(!doc.business_hours){
        err.message = "Wait that is weired timing..!!";
        err.success = false;
    }

    return err;



}
module.exports = router;