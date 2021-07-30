const { Router } = require('express');//importa a função Router do express, ela permite definir as rotas ou as redes do servidor
const router = Router();//guarda em um objeto pode ser com o mesmo nome do em minusculo

const { getUsers, createUser } = require('../controllers/index.controller')//importando la do controllers, poderia passar direto tbm mas assim é melhor

//rota de get usuarios -  cada vez que eu solicitar a rota users ele me responde com os usuarios da base de dados
router.get('/users', getUsers);
//rota de cadastro de usuarios (post)
router.post('/users', createUser);

module.exports = router;