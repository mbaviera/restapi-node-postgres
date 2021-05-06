const {Pool } = require('pg');//importa o modulo do postgre

//as configs da base de dados pra conectar, nome, usuario, senha (paramentos de conexao)
const pool = new Pool ({//atribui a uma constante para usar ela
    host: 'localhost',
    user: 'postgres',
    password: '123456',
    database: 'firstapi',
    port: '5432'
});

const getUsers = async (req, res) => {
    const response = await pool.query('SELECT * FROM users');//salva uma consulta na variavel response
    console.log(response.rows);//mostra os user no console
    res.status(200).json(response.rows);//mostra os user no navegador
}

const createUser = async (req, res) => {

};

//exporta as funcoes pra enxerga la na outra classe
module.exports = {
    getUsers, createUser
}