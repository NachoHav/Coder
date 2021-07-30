/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-vars */
const express = require('express');

const app = express();

const port = 8080;

let frase = 'Frase inicial';

const server = app.listen(port, () => {
  console.log('Server up on port 8080');
});

// eslint-disable-next-line prefer-template
server.on('error', (error) => console.log('Error del servidor ' + error));

app.get('/api/leer', (req, res) => {
  res.json({ frase });
});

app.get('/api/leer/:pos', (req, res) => {
  const pos = req.params.pos;

  const palabras = frase.split(' ');

  if (pos <= 0 || pos > palabras.length) {
    res.json({
      error: 'Numero fuera de rango',
    });
  }

  res.json({ letra: palabras[pos - 1] });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/api/guardar/', (req, res) => {
  const body = req.body;

  frase += ` ${body.palabra}`;

  res.json({ frase });
});

app.put('/api/actualizar/:pos', (req, res) => {
  const pos = req.params.pos;
  const body = req.body;

  const newFrase = frase.split(' ');
  newFrase[pos - 1] = body.palabra;

  frase = newFrase.join(' ');

  res.json({ frase });
});

app.delete('/api/borrar/:pos', (req, res) => {
  const pos = req.params.pos;

  frase = frase.split(' ');
  frase.splice(pos - 1, 1);
  frase.join(' ');

  res.json({ frase });
});
