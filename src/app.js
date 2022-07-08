const express = require("express")
const mongoose = require('./database/dbConnect')
const seriesRoutes = require("../src/routes/routes")
const app = express()

mongoose.connect()
app.use(express.json())
app.use("/series", seriesRoutes)



module.exports = app
