const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json({ limit: "8kb" }))

module.exports = app