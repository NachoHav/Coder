import express from 'express';
import path from 'path';
import http from 'http';
import socketio from 'socket.io';
import formatMessage from './utils/messages.js';
import {
  userJoin,
  getCurrentUser,
  userLeaves,
  getRoomUsers,
} from './utils/users.js';

const app = express();
const publicPath = path.resolve(__dirname, './public');
const server = http.createServer(app);
const io = socketio(server);

app.use(express.static(publicPath));
const botName = 'Apolo-BOT';

server.listen(8080, () => {
  console.log('Server up, Port: 8080');
});

//New client connection
io.on('connection', (socket) => {
  socket.on('joinRoom', ({ username, room }) => {
    const user = userJoin(socket.client.id, username, room);
    socket.join(user.room);
    //Welcome current user
    socket.emit('message', formatMessage(botName, "Bienvenido a Apolo's Chat"));

    //Broadcast new user
    socket.broadcast
      .to(user.room)
      .emit(
        'message',
        formatMessage(botName, `${user.userName} se ha unido a la sala`)
      );

    //Users/Room info
    io.to(user.room).emit('roomUsers', {
      room: user.room,
      users: getRoomUsers(user.room),
    });
  });

  //Listen chatMessage
  socket.on('chatMessage', (msg) => {
    const user = getCurrentUser(socket.client.id);
    io.to(user.room).emit('message', formatMessage(user.userName, msg));
  });

  //Client comes out
  socket.on('disconnect', () => {
    const user = userLeaves(socket.client.id);
    if (user) {
      io.to(user.room).emit(
        'message',
        formatMessage(botName, `${user.userName} se ha ido de la sala`)
      );
    }
  });
});
