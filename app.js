let express = require('express');
let app = express();
const path = require('path');
const logger = require(path.resolve('src/routes/logger.js'));
app.set('view engine', 'ejs');


app.use(logger);
app.get('/', function(req, res) {
    res.render('foo');
});

module.exports = app;
