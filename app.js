require('dotenv').config()
const express = require('express')
const mongoose = require('./db/mongoose.js')
const campaignRouter = require('./controllers/campaign.js')
const sessionRouter = require('./controllers/session.js')

const app = express()
const SERVER_PORT = process.env.SERVER_PORT || 3000

app.use(campaignRouter)
app.use(sessionRouter)

app.listen(SERVER_PORT, () => {
    console.log(`Server running on port ${SERVER_PORT}`);
});