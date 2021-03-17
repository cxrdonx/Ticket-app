const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = 3700;
const app = express();


//import
const tickets = require('./routes/tickets');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/queque')
     .then(()=>{
         console.log("established connection");
         app.listen(port,()=>{
             console.log("the server is running correctly");
         });
     })

     .catch(err => console.log(err));

app.use(bodyParser.urlencoded({encoded:false}));
app.use(bodyParser.json());
//routes
app.use('/', tickets);

app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;