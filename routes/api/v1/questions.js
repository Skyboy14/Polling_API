
const express = require('express')
const Router = express.Router()
const question_controller = require('../../../controllers/QuestionsController')

// create Question
Router.post('/create', question_controller.createQuestion)

// get Question Data
Router.get('/view/:id', question_controller.QuestionData)

// delete Question
Router.delete('/delete/:id', question_controller.deleteQuestion)

// populate the options
Router.use('/options', require('./options'))

// export router
module.exports = Router