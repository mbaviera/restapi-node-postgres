const express = require('express');
const app = express();

//middlewares => funções que executam antes que cheguem as rotas
app.use(express.json());
app.use(express.urlencoded({extended: false}));//função do express permite que envio dado atraves de formulario ele é capaz de processalo, o false significa so formato simples de formulario

//rotas
app.use(require('./routes/index'));

app.listen(4000);
console.log('Server on port 3000');