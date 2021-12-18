var dotEnv = require('dotenv').config().parsed;
var express = require('express');
var path = require('path');
var logger = require('morgan');
var mongoose = require('mongoose');

const dbUrl = dotEnv.DB_HOST
var mainRouter = require('./routes/main');
var adminRouter = require('./routes/admin');
const { connected } = require('process');
const { Mongoose } = require('mongoose');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', mainRouter);
app.use('/users', adminRouter);
mongoose.connect(dbUrl)
        .then( result =>{
            app.listen(3000);
            console.log('server is up')
        })
        .catch(err =>{
            console.log(err)
        })