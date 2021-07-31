import express from 'express';
import mascotas from '../routes/mascotas.js';
import personas from '../routes/personas.js';

const app = express();

app.listen(8080, () => {
  console.log('Server up - Port: 8080');
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/mascotas', mascotas);
app.use('/api/personas', personas);
