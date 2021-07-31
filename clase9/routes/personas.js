import express from 'express';

const router = express.Router();

const personas = [
  {
    nombre: 'Carlos',
    apellido: 'Bossa',
    edad: 27,
  },
];

router.get('/listar', (req, res) => {
  res.json({ personas });
});

router.post('/guardar', (req, res) => {
  const data = req.body;

  personas.push(data);
  res.json(personas);
});

export default router;
