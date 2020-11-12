//require('dotenv').config()
const mongoose = require('mongoose')

const connectionUrl = process.env.DB_URL

mongoose.connect(connectionUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})