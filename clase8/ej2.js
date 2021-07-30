/* eslint-disable no-console */
/* eslint-disable radix */
const express = require('express');

const port = 8080;
const app = express();

const server = app.listen(port, () => {
  console.log(`Server up on port ${port}`);
});

server.on('error', (error) => {
  console.log(`Error del servidor ${error}`);
});

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.get('/api/sumar/:n1/:n2', (req, res) => {
  const num1 = parseInt(req.params.n1);
  const num2 = parseInt(req.params.n2);

  res.json({ suma: num1 + num2 });
});

app.get('/api/sumar', (req, res) => {
  const n1 = parseInt(req.query.num1) || 0;
  const n2 = parseInt(req.query.num2) || 0;

  res.json({
    resultado: n1 + n2,
  });
});

app.post('/api/', (req, res) => {
  res.json({ ok: 'post' });
});

app.put('/api/', (req, res) => {
  res.json({ ok: 'put' });
});

app.delete('/api/', (req, res) => {
  res.json({ ok: 'delete' });
});
