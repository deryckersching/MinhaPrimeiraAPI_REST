const listaProdutos = [
    {
        id: 1,                // pra diferenciar um objeto de um json a diferenca é que o objeto não tem aspas("") e vazio exemplo:  nome: Notebook   , já o json seria com aspas exemplo: "nome": "Notebook",
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

module.exports = listaProdutos;
