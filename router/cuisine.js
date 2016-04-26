var express = require('express');
var router = express.Router();
var app = express();
var mongoose = require('../database');
var bodyParser = require('body-parser');
var cuisineSchema = require('../schema/cuisine');



app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

var _cuisine = mongoose.model('cuisine', cuisineSchema);

//Add a new Cuisine to the Database
router.post('/cuisine', function (req, res) {

    var cuisine = req.body;

    if (cuisine.name) {

        //Add new category to collections
        var newCuisine = new _cuisine({
            name: cuisine.name
        });
        newCuisine.save(function (err, newCuisine) {
            if (err) {
                res.status(500);
                res.send(err);
            } else {
                var response = {
                    _id: newCuisine._id,
                    name: newCuisine.name
                };
                res.send(response);

            }
        });
    }
});


//Get all cuisines

router.get('/cuisine', function (req, res) {

    _cuisine.find({}, function (err, docs) {
        if (err) {
            res.status(500);
            res.send(err);
        } else {
            res.send(docs);
        }
    });

});

module.exports = router;
