const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
require('dotenv').config()

//routes

//
const server = express()

server.use(helmet())
server.use(cors())
server.use(express.json)

server.get('/', (req, res) => {
    res.send('<h1>I Think its working</h1>')
})

module.exports = server