var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var validator = require('validator');
var morgan = require('morgan');


app.set('port', 3000);

app.disable('x-powered-by');
app.disable('x-content-type-options');
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.use('/', require('./router/restaurant'));
app.use('/', require('./router/cuisine'));
app.use('/', require('./router/area'));
app.use('/', require('./router/amenity'));
app.use('/', require('./router/restaurant_type'));
app.use('/', require('./router/payment'));


app.listen(app.get('port'));
