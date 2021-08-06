import express from 'express';

const router = express.Router();

const mascotas = [
  {
    nombre: 'Thor',
    raza: 'Dogo',
    edad: 5,
  },
];

router.get('/listar', (req, res) => {
  res.json({ mascotas });
});

router.post('/guardar', (req, res) => {
  const data = req.body;
  mascotas.push(data);

  // //MEJOR USAR -----------------------------------------------------------------------------------------
  // const mascotaNueva = {
  //   nombre: body.nombre,
  //   raza: body.raza,
  //   edad: body.edad,
  // };           -----------------------------------------------------------------------------------------

  res.json({ mascotas });
});

export default router;
