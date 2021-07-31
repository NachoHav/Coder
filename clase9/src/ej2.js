import express from 'express';
import path from 'path';

const app = express();

const server = app.listen(8080, () => {
  console.log('serverup8080');
});

const publicPath = path.resolve(__dirname, '../public');
console.log(publicPath);
app.use(express.static(publicPath));
