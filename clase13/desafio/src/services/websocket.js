import socketIo from 'socket.io';
import { guardarFromForm, guardarNewMessage } from '../modules/guardar.js';
import { productos, messages } from '../modules/data.js';

export const initWsServer = (server) => {
  const io = socketIo(server);

  io.on('connection', (socket) => {
    console.log('Nueva Conexion establecida!');

    socket.on('new-product', (data) => {
      let res = guardarFromForm(data);

      if (res === 400) {
        socket.emit('messages', 'Datos invalidos en form');
      } else {
        let product = [productos[productos.length - 1]];
        io.emit('update', product);
      }
    });

    socket.on('askProducts', () => {
      console.log('Envie los productos');
      if (productos.length > 0) {
        socket.emit('update', productos);
      }
    });

    socket.on('new-message', (data) => {
      guardarNewMessage(data);
      let message = [messages[messages.length - 1]];
      io.emit('updateChat', message);
    });

    socket.on('askMessages', () => {
      console.log('Envie los mensajes');
      if (messages.length > 0) {
        socket.emit('updateChat', messages);
      }
    });
  });
  return io;
};
