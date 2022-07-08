
const mongoose = require ('mongoose');

mongoose.connect ("mongodb+srv://abeamonteiro:dSKhet55xCUWmzQs@cluster0.nra9se5.mongodb.net/?retryWrites=true&w=majority")

let db = mongoose.connection; // usaremos para exportar o db

module.exports = db;