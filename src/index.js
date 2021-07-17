const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Se você chegou até aqui, você concluiu o exercicio. Parabéns!');
});

module.exports = app;
