
var path = require('path'),
    express = require('express'),
    bodyParser = require('body-parser');
module.exports = function(app) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser({
        uploadDir:path.join(__dirname, 'public/upload/temp')
    }));
    return app;
};

module.exports = {
  URL:'https://reqres.in/api/users/',
  PORT:5000,
};
