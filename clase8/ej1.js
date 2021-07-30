/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable radix */
const express = require('express');

const app = express();
const port = 8080;

const frase = 'Hola mundo como estan';

const server = app.listen(port, () => {
  console.log(`Escuchando desde puerto: ${port}`);
});

server.on('error', (error) => console.log(`Error del servidor ${error}`));

app.get('/api/getFrase', (req, res) => {
  res.json({ data: frase });
});

app.get('/api/getLetra/:num', (req, res) => {
  const numeroLetra = parseInt(req.params.num);

  if (numeroLetra <= 0 || numeroLetra > frase.length) {
    return res.status(400).json({
      error: 'El parámetro está fuera de rango',
    });
  }
  res.json({
    data: frase[numeroLetra - 1],
  });
});

app.get('/api/getPalabra/:num', (req, res) => {
  const numeroPalabra = parseInt(req.params.num);
  const palabras = frase.split(' ');

  if (numeroPalabra <= 0 || numeroPalabra > palabras.length) {
    res.status(400).json({
      error: 'El parametro esta fuera de rango',
    });
  }
  res.json({
    data: palabras[numeroPalabra - 1],
  });
});
