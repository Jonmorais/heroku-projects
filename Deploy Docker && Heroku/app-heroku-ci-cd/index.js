const express = require('express');
// Importando bibliotecas
require('dotenv').config();

const app = express();
// eslint-disable-next-line no-undef
const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send(`<h1> Executando na porta: ${port} </h1>`));
app.listen(port, () => console.log(`Online: ${port}`));
