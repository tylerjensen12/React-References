//!All the imports are at the top
const express = require("express");
const cors = require("cors");
const db = require("./util/database");
const { User, Product, Cart } = require("./util/models");
const seed = require('./util/seed')

const server = express();

//!Middleware
server.use(express.json());
server.use(cors());

//!Associations
User.hasMany(Cart);
Cart.belongsTo(User);

Product.hasMany(Cart);
Cart.belongsTo(Product);

//!Endpoints
server.post("/api/addUser", async (req, res) => {
  const { username, password } = req.body;
  try {
    await User.create({ username, password });
    res.status(200).send("User Created!");
  } catch {
    res.status(401).send("could not create user");
  }
});

server.get('/api/user/:id', async(req, res) => {
    const {id} = req.params
    try{
        let info = await User.findOne({where: {id}})
        res.status(200).send(info)
    } catch {
        res.status(400).send('could not complete request')
    }
})

db
  .sync()
  // .sync({force: true})
  // .then(() => seed())
//!Listen statement
server.listen(4000, () => console.log("Server runs on 4000"));
