const express = require('express')
const Router = express.Router()

// index router file
Router.use('/api', require('./api/index'));

module.exports = Router