const mongoose = require('mongoose')
const Session = require('./session.js')

const campaignSchema = new mongoose.Schema({
    name: {type: String, required: true, trim: true},
    system: {type: String, required: true, trim: true},
    dm: {type: String, required: true, trim: true},
    description: {type: String, required: true, trim: true},
    players: [{type: String, trim: true}],
    active: {type: Boolean, required: true, default: true},
    sessions: [Session.schema]
}, {
    timestamps: true
})

const Campaign = mongoose.model('Campaign', campaignSchema)

module.exports = Campaign