var express = require('express');
var router = express.Router();
var app = express();
var mongoose = require('../database');
var bodyParser = require('body-parser');
var restaurantTypeSchema = require('../schema/restaurant_type');



app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

var _restaurantType = mongoose.model('restaurantType', restaurantTypeSchema);

//Add a new restaurantType to the Database
router.post('/restauranttype', function (req, res) {

    var restaurantType = req.body;

    if (restaurantType.name) {

        //Add new category to collections
        var newrestaurantType = new _restaurantType({
            name: restaurantType.name
        });
        newrestaurantType.save(function (err, newrestaurantType) {
            if (err) {
                res.status(500);
                res.send(err);
            } else {
                var response = {
                    _id: newrestaurantType._id,
                    name: newrestaurantType.name
                };
                res.send(response);

            }
        });
    }
});


//Get all restaurantTypes

router.get('/restauranttype', function (req, res) {

    _restaurantType.find({}, function (err, docs) {
        if (err) {
            res.status(500);
            res.send(err);
        } else {
            res.send(docs);
        }
    });

});

module.exports = router;
