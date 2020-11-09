require('dotenv').config()
import mongoose from 'mongoose'

const DB_HOST = process.env.DB_HOST
const DB_PORT = process.env.DB_PORT
const DB_NAME = process.env.DB_NAME

const connectionUrl = 'mongodb://' + DB_HOST + ':' + DB_PORT + '/' + DB_NAME

mongoose.connect(connectionUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true
})