const socket = io();

const chatForm = document.getElementById('chat-form');
const chatMessages = document.querySelector('.chat-messages');
const roomName = document.getElementById('room-name');
const roomUsers = document.getElementById('users');

//Get username and room from url
const { username, room } = Qs.parse(location.search, {
  ignoreQueryPrefix: true,
});

//Join chatroom
socket.emit('joinRoom', { username, room });

//Get room and users
socket.on('roomUsers', ({ room, users }) => {
  outputRoomName(room);
  outputRoomUsers(users);
});

socket.on('message', (message) => {
  console.log(message);
  outputMessage(message);

  //Scroll
  chatMessages.scrollTop = chatMessages.scrollHeight;
});

//Message submit
chatForm.addEventListener('submit', (e) => {
  e.preventDefault();

  //Get message text
  const msg = e.target.elements.msg.value;

  //Emit message to server
  socket.emit('chatMessage', msg);

  //Clear input
  e.target.elements.msg.value = '';
  e.target.elements.msg.focus();
});

//outputMessage
const outputMessage = (message) => {
  const div = document.createElement('div');
  div.classList.add('message');
  div.innerHTML = ` <p class="meta">${message.userName}<span> ${message.time}</span></p>
                    <p class="text">
                        ${message.text}
    </p>`;
  document.querySelector('.chat-messages').appendChild(div);
};

const outputRoomName = (room) => {
  roomName.innerText = room;
};

const outputRoomUsers = (users) => {
  roomUsers.innerHTML = `
        ${users.map((user) => `<li>${user.userName}</li>`).join('')}
    `;
};
