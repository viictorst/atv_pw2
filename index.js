// Importação do módulo express
const express = require("express");

// Intancia do módulo express
const app = express();

// Configuração para o express manipular JSON
app.use(express.json());

const connection = require("./database/database");

// IMPORTAÇÃO DA CONTROLLER DE PRODUTO
const produtoController = require("./controller/Produto");
app.use("/", produtoController);

// IMPORTAÇÃO DA CONTROLLER DE CATEGORIA
const categoriaController = require("./controller/Categoria");
app.use("/", categoriaController);




app.listen(3000, ()=>{
    console.log('RODANDO EM: http://localhost:3000')
});