const express = require("express");

const categoriaModel = require("../model/Categoria");

const router = express.Router();

// ROTA DE INSERÇÃO DE CATEGORIA
router.post("/categoria/cadastrarCategoria", (req, res) => {
    res.send('Categoria cadastrado com sucesso');
});

router.get("/categoria/listarCategoria", (req, res) => {
    res.send('Categoria listado com sucesso');
});

router.put("/categoria/alterarCategoria", (req, res) => {
    res.send('Categoria alterado com sucesso');
});

router.delete("/categoria/excluirCategoria", (req, res) => {
    res.send('Categoria excluído com sucesso');
});

module.exports = router;