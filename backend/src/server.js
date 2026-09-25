const express = require("express");
const dotenv = require("dotenv");
const app = require("./app")


dotenv.config();

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta: ${PORT}\nhttp://localhost:${PORT}`)
});

// MVC Termo : separação de pastas, deixando as mais organizadas