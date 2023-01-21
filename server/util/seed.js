const {Product} = require('./models')

let allProducts = [
    {
        name: "Duck",
        price: 149.98,
        clearance: false
    },
    {
        name: "Door",
        price: 49.89,
        clearance: false
    },
    {
        name: "Dingo",
        price: 34995.47,
        clearance: false
    },
    {
        name: "Drywall",
        price: 4.56,
        clearance: true
    },
]

const seed = async() => {
    await Product.bulkCreate(allProducts)
}

module.exports = seed