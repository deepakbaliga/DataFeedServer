var express = require('express');
var router = express.Router();
var app = express();
var mongoose = require('../database');
var bodyParser = require('body-parser');
var amenitySchema = require('../schema/amenity');



app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

var _amenity = mongoose.model('amenity', amenitySchema);


//Add a new amenity to the Database
router.post('/amenity', function (req, res) {

    var amenity = req.body;

    if (amenity.name) {

        //Add new category to collections
        var newamenity = new _amenity({
            name: amenity.name
        });

        
        newamenity.save(function (err, newamenity) {


            if (err) {
                res.status(500);
                res.send(err);
            } else {
                var response = {
                    _id: newamenity._id,
                    name: newamenity.name
                };
                res.send(response);

            }
        });
    }
});


//Get all amenitys

router.get('/amenity', function (req, res) {

    _amenity.find({}, function (err, docs) {
        if (err) {
            res.status(500);
            res.send(err);
        } else {
            res.send(docs);
        }
    });

});

module.exports = router;
