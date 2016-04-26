/**
 * Created by deezdroid on 19/04/16.
 */

var express = require('express');
var router = express.Router();
var app = express();
var mongoose = require('../database');
var bodyParser = require('body-parser');
var paymentSchema = require('../schema/payment');



app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

var _payment = mongoose.model('payment', paymentSchema);

//Add a new payment to the Database
router.post('/payment', function (req, res) {



    var payment = req.body;

    if (payment.name) {

        //Add new category to collections
        var newpayment = new _payment({
            name: payment.name
        });
        newpayment.save(function (err, newpayment) {
            if (err) {
                res.status(500);
                res.send(err);
            } else {
                var response = {
                    _id: newpayment._id,
                    name: newpayment.name
                };
                res.send(response);

            }
        });
    }
});


//Get all payments

router.get('/payment', function (req, res) {

    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log(ip);

    _payment.find({}, function (err, docs) {
        if (err) {
            res.status(500);
            res.send(err);
        } else {
            res.send(docs);
        }
    });

});

module.exports = router;
 router;