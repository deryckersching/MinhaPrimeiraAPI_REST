const express = require("express");
const app = express(); //nosso app é nossa API
const PORT = 3033;

const produtosRoute = require("./routes/produtosRoute");
const clientesRoute = require("./routes/clientesRoute");

app.use(express.json()); // o use é uma função que está dentro da API
app.use(produtosRoute);
app.use(clientesRoute);

app.listen(PORT, () => {
    console.log(`servidor rodando em http://localhost:${PORT}`)
});

