const express = require('express')
const Router = express.Router()
const optionsController = require('../../../controllers/OptionsController');

// create Option route
Router.post('/:id/create', optionsController.createOption);

// Increment the vote
Router.get('/:id/voteIncrement', optionsController.voteIncrement);

// delete the Option
Router.delete('/delete/:id', optionsController.deleteOption)

// export router
module.exports = Router