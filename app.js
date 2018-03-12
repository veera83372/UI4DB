let express = require('express');
let app = express();
const path = require('path');
const logger = require(path.resolve('src/routes/logger.js'));
const connectDb = require(path.resolve('src/routes/connectDb.js'));
app.set('view engine', 'ejs');

app.initilize=function(pg){
    app.pg = pg;
}
app.use(express.urlencoded({extended:false}));

app.get('/',(req,res,next)=>{
  res.render('veera.pug',{
    user:'veera',
    tiles:['1A','1B'],
    shares:{'Sackson':2,'Zeta':3}
  });
})
app.use(logger);
app.post('/connect',connectDb);
app.use(express.static('public'));

module.exports = app;
