var express = require('express');
var router = express.Router();
var app = express();
var mongoose = require('../database');
var bodyParser = require('body-parser');
var areaSchema = require('../schema/area');



app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

var _area = mongoose.model('area', areaSchema);


//Add a new area to the Database
router.post('/area', function (req, res) {

    var area = req.body;

    if (area.name) {

        //Add new category to collections
        var newarea = new _area({
            name: area.name
        });

        
        newarea.save(function (err, newarea) {


            if (err) {
                res.status(500);
                res.send(err);
            } else {
                var response = {
                    _id: newarea._id,
                    name: newarea.name
                };
                res.send(response);

            }
        });
    }
});


//Get all areas

router.get('/area', function (req, res) {

    _area.find({}, function (err, docs) {
        if (err) {
            res.status(500);
            res.send(err);
        } else {
            res.send(docs);
        }
    });

});

module.exports = router;
