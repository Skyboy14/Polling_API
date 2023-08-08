const Question = require('../models/questions_models')
const Options = require('../models/options_model')


// create question
module.exports.createQuestion = async function (req, res) {
    await Question.create(req.body)
        .then((question) => {
            res.send(question);
        }).catch((err) => {
            console.log("error while creating the question", err)
        })
}

// Show question data
module.exports.QuestionData = async function (req, res) {
    const question = await Question.findById(req.params.id)
        .populate('options')

    if (question) {
        res.status(200).send(question);
    }
    // handling the bad requests if that id does not exist
    else {
        res.status(400).json({
            message: "Question id Invalid",
        });
    }

}

module.exports.deleteQuestion = async function (req, res) {
    // Error while finding question
    let question = await Question.findById(req.params.id)
        .clone()
        .catch((err) => { console.log('Error while finding question', err) })

    if (question) {
        question.deleteOne()
        await Options.deleteMany({ question: req.params.id })
        res.status(200).json({
            message: "question deleted along with all options",
        });

    }
    // question does not exists
    else {
        res.status(400).json({
            message: "question does not exists",
        });
    }
}
