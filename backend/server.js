
const express = require("express");
const app = express(); //nosso app é nossa API
const PORT = 3033;

const produtos = [
    {
        id: 1,
        nome: "Notebook",
        marca: "Samsumg",
        preco: 3500.00

    },
    {
        id: 2,
        nome: "Mouse",
        marca: "Redragon",
        preco: 199.90
    }
]

app.use(express.json()); // o use é uma função que está dentro da API

app.get("/produtos", (request, response) => {
    response.json(produtos)
});

app.get("/produtos/:id", (request, response) => { // os dois pontos(:) e do lado o nome da variável que você precisa pra ele encontrar exemplo : ("/produtos/:id")
    const id = request.params.id;
    const produto = produtos.find(produto => produto.id == id);

    if(!produto) {
        return response.status(404).json({
            mensagem: "Produto não encontrado"
        })
    }

    response.json(produto)
});

app.post("/produtos", (req, res) => {   // pra diferenciar um objeto de um json a diferenca é que o objeto não tem aspas("") e vazio exemplo:  nome: Notebook   , já o json seria com aspas exemplo: "nome": "Notebook",
    const novoProduto = {
        id: produtos.length + 1,
        nome: req.body.nome,
        marca: req.body.marca,
        preco: req.body.preco
    }

    produtos.push(novoProduto);

    res.status(201).json(novoProduto);
});

// app.put();

// app.patch();

// app.delete();

app.listen(PORT, () => {
    console.log(`servidor rodando em http://localhost:${PORT}`)
});