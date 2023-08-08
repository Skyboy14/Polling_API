const mongoose = require('mongoose');

// atlas mongo DB link
const DB = 'mongodb+srv://yadavakash224ay:WoWfLEu9cryDvTwC@cluster0.2gohpiw.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(DB).then(() => {
    console.log('connection successfull with MongoDB');
}).catch((err) => console.log("Connection error with MongoDB ::", err));

const dataBase = mongoose.connection;

module.exports = dataBase;  
