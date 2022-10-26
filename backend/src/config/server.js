// pasta de configuração relativa ao servidor

const port = 8080;

// faz o parser do body da req
const bodyParser = require("body-parser");
const express = require("express"); //servidor padrao de mercado
const cors = require('cors')

require('dotenv').config()
const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("MongoDB Atlas Connected"))
  .catch((error) => console.log(error));

// criando uma instancia do express e aplicando alguns middlewares
const server = express();
server.use(cors())
server.use(bodyParser.urlencoded({ extended: true })); // suporta mais tipos de dados

server.listen(port, () => {
  console.log(`BACKEND rodando na porta ${port}`);
});

module.exports = server
