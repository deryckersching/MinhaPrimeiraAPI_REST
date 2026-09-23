const listaProdutos = require("../models/produtosModel")

const buscarProduto = (req, res) => {
    res.json(listaProdutos)
}

const buscarProdutoPorId = (req, res) => { 
}

const criarProdutos = (req, res) => { 
}

const criarProduto = (req,res) => {
const novoProduto = {
        id: produtos.length + 1,
        nome: req.body.nome,
        marca: req.body.marca,
        preco: req.body.preco
    }

    produtos.push(novoProduto);

    res.status(201).json(novoProduto);
}

const editarProduto = (req,res) => {
const id = req.params.id;
const produto = editarProduto.find(produto => produto.id == id);

if(!produto) {
    return res.status(404).json({
        mensagem: "Produto não encontrado!"
    });
}

produto.nome = req.body.nome;
produto.marca = req.body.marca;
produto.preco = req.body.preco;
    
    res.status(200).json(produto);
}


const excluirProduto = (req,res) => {
const id = Number(req.params.id);
const produto = excluirProduto.find(produto => produto.id == id);

if(!produto) {
    return res.status(404).json({
        mensagem: "Produto não encontrado!"
    });
}

const indice = produto.indexOf(produto);
produto.splice(indice, 1);

    res.status(200).json({
        mensagem: "Produto deletado com sucesso",
        produto: produto
    });
}

module.exports = {
    buscarProduto,
    buscarProdutoPorId,
    criarProduto,
    editarProduto,
    excluirProduto
}