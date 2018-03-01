let express = require('express');
let app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('foo');
});

app.listen(8080);
console.log('8080 is the magic port');
