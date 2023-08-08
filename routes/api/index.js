const express = require('express')
const Router = express.Router()

// Version 1 route export
Router.use('/v1', require('./v1/index'));

module.exports = Router