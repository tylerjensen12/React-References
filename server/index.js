//All the imports are at the top
const express = require('express')
const cors = require('cors')

const server = express()

//Middleware
server.use(express.json())
server.use(cors())

//Endpoints


//Listen statement
server.listen(4000, () => console.log("Server runs on 4000"))