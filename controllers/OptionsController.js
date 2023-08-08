const Question = require('../models/questions_models');
const Options = require('../models/options_model');

// create options for given question 
module.exports.createOption = async function (req, res) {
    const option = await Options.create({
        option: req.body.content,
        question: req.params.id,
    })
    // it is for adding the vote
    const updateOptions = await Options.findByIdAndUpdate(option._id, { "voteIncrement": `http://localhost:8081/api/v1/options/${option._id}/voteIncrement` })
    updateOptions.save()
    const questions = await Question.findById(req.params.id);
    if (questions) {
        questions.options.push(updateOptions)
        questions.save()
        res.status(200).send(questions)
    }
    else {
        res.status(400).json({
            message: "option not found",
        });
    }
}

module.exports.voteIncrement = async function (req, res) {

    console.log('!!!', req.params)
    try {
        // find option and increase its vote count
        const option = await Options.findOneAndUpdate({
            _id: req.params.id
        }, { $inc: { votes: 1 } });

        if (!option) {
            return res.status(404).json({
                message: "No option found."
            });
        }
        return res.status(200).json({
            message: "Vote added!",
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: error
        });
    }
}


module.exports.deleteOption = async function (req, res) {
    // delete the id option 
    const option = await Options.findById(req.params.id);
    if (option) {
        const question_id = option.question;
        // updating question option data in database
        const questions = await Question.findByIdAndUpdate(question_id, { $pull: { options: req.params.id } });
        await Options.findByIdAndDelete(req.params.id)
        res.status(200).json({
            message: "option deleted successfully",
        });
    }
    else {
        res.status(400).json({
            message: "option id not found",
        });
    }
}
