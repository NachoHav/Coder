const users = [];

export const userJoin = (id, userName, room) => {
  const user = { id, userName, room };

  users.push(user);
  return user;
};

export const getCurrentUser = (id) => {
  return users.find((user) => user.id === id);
};

export const userLeaves = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if (index != -1) {
    return users.splice(index, 1)[0];
  }
};

export const getRoomUsers = (room) => {
  return users.filter((user) => user.room === room);
};

export default users;
