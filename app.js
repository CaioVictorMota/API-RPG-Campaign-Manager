require('dotenv').config()
require('./db/mongoose.js')
const express = require('express')
const campaignRouter = require('./controllers/campaign.js')
const sessionRouter = require('./controllers/session.js')

const app = express()
const SERVER_PORT = process.env.PORT || 3000

app.use(express.json())
app.use(campaignRouter.router)
app.use(sessionRouter.router)

app.listen(SERVER_PORT, () => {
    console.log(`Server running on port ${SERVER_PORT}`);
});