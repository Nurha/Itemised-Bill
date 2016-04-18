var express = require('express'),
    exphbs  = require('express-handlebars'),
    bodyParser = require('body-parser'),

    var app = express();

    var portNumber = process.env.CRUD_PORT_NR || 3000;
    app.listen(portNumber, function () {
    console.log('listening on:', portNumber);
});
