const express = require('express')
const Router = express.Router()

// main route file for version 1
Router.use('/question', require('./questions'));
Router.use('/options', require('./options'))

module.exports = Router