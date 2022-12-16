//!All the imports are at the top
const express = require('express')
const cors = require('cors')
const db = require('./util/database')
const {User, Product, Cart} = require('./util/models')

const server = express()

//!Middleware
server.use(express.json())
server.use(cors())

//!Associations
User.hasMany(Cart)
Cart.belongsTo(User)

Product.hasMany(Cart)
Cart.belongsTo(Product)

//!Endpoints

db.sync()
//!Listen statement
server.listen(4000, () => console.log("Server runs on 4000"))