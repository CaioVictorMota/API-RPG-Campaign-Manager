const mongoose = require('mongoose')

const campaignSchema = new mongoose.Schema({
    name: {type: String, required: true, trim: true},
    system: {type: String, required: true, trim: true},
    dm: {type: String, required: true, trim: true},
    description: {type: String, required: true, trim: true},
    players: [{
        player: {
            type: String,
            trim: true
        }
    }]
}, {
    timestamps: true
})

const Campaign = mongoose.model('Campaign', campaignSchema)

export default Campaign