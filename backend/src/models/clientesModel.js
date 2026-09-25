const clientesModel = [
    {
        id: 1,
        nome: "Alfredo",
        email: "alfredo@gmail.com",
        telefone: "(11) 11111-1111"
    },
    {
        id: 2,
        nome: "Bento",
        email: "bento@gmail.com",
        telefone: "(22) 22222-2222"
    }
]

module.exports = clientesModel;


// EXEMPLO DERYCK

const db = require("../config/database");

const buscarTodos = async () => {
    const [clientes] = await db.dbquery(
        "SELECT * FROM clientes"
    );

    return produtos;
}

const buscarPorId = async (id) => {
    const [clientes] = await db.dbquery(
        "SELECT * FROM clientes WHERE id = ?",
        [id]
    );

    return clientes[0];
}

const criar = async (nome, email, telefone) => {
    const cliente = await db.query(
        "INSERT INTO clientes (nome, email, telefone) VALUES (?, ?, ?);",
        [nome, email, telefone]
    );

    return {
        id:cliente.insertId,
        nome,
        email,
        telefone
    };
}

const editar = async (id, nome, email, telefone) => {
    await db.query(
        "UPTADE clientes SET nome=?, email=?, telefone=? WHERE id=?",
        [nome, email, telefone, id]
    );

    return {
        id,
        nome,
        email,
        telefone
    };
}

const excluir = async (id) => {
    const [resultado] = await db.query(
        "DELETE FROM cliente WHERE id=?",
        [id]
    );

    console.log("resultado.affectedRows")
    return resultado.affectedRows;
}

module.exports = {
    buscarTodos,
    buscarPorId,
    criar,
    editar,
    excluir
};