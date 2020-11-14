const express = require("express")
const mongoose = require("mongoose")

const app = express()

mongoose.connect("mongodb://localhost:27017/musicas", { useNewUrlParser: true, useUnifiedTopology: true
})


let db = mongoose.connection;
db.on("error", console.log.bind(console, "connnection error:"))
db.once("open", function() {
  console.log("conexão feita com sucesso.")
})

//rotas
const musicas = require("./routes/musicasRoute")


app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
  })

app.use("/musicas", musicas)

module.exports = app
