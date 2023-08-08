const mongoose = require('mongoose')

const optionsSchema = new mongoose.Schema({

    option: {
        type: String,
        required: true
    },
    question: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    votes: {
        type: Number,
        default: 0
    },
    voteIncrement: {
        type: String,
    }
})

module.exports = mongoose.model('Options', optionsSchema);