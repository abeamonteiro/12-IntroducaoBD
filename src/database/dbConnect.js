require('dotenv-safe').config()
const DATABASE_URI = process.env.DATABASE_URI
const mongoose = require("mongoose")

const connect = async () => {
    try {
        await mongoose.connect(DATABASE_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log("banco conectado!")
    } catch (error) {
        console.error(error)
    }
}

module.exports = {
    connect
}

/*const mongoose = require ('mongoose');

mongoose.connect ("mongodb+srv://abeamonteiro:dSKhet55xCUWmzQs@cluster0.nra9se5.mongodb.net/?retryWrites=true&w=majority")

let db = mongoose.connection; // usaremos para exportar o db

module.exports = db;*/