const express = require('express') // import express
const app = express(); // use express
const Port = 8081 // defing port for running server
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const dataBase = require('./configs/mongoose'); // import mongoose
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))



app.use('/', require('./routes/index')); // import and connect Routes

// run server
app.listen(Port, function (err) {
    if (err) {
        console.log('error in connecting to server', err);
    }
    console.log("Server is up and running at ::", Port);
})