const mongoose = require('mongoose')

const sessionSchema = new mongoose.Schema({
    startingDateTime: {type: Date, required: true},
    endingDateTime: {type: Date, required: true},
    notes: [{
        note: {
            type: String,
            trim: true
        }
    }]
}, {
    timestamps: true
})

const Session = mongoose.model('Session', sessionSchema)

module.exports = Session