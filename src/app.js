const express = require("express")
const mongoose = require('./database/dbConnect')
const seriesRoutes = require("../src/routes/routes")
const app = express()

mongoose.connect()
app.use(express.json())
app.use("/series", seriesRoutes)



module.exports = app

/*const express = require ("express");
const index = require ("./routes/index.js"); 
const livros = require ("./routes/livros.js");
const db = require ("./config/dbConnect.js")

db.on("error", console.log.bind(console, 'Erro de conexão com o banco de dados'))
db.once("open", () => {
    console.log('A conexão com o banco de dados foi feita com sucesso')
})

const app = express();

app.use(express.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*") 
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
})

app.use("/", index);
app.use("/livros", livros);

module.exports = app;*/