const users = []

const joinRoom  = ({id, name, room}) => {
    name = name.trim();
    room = room.trim();

    const exists = users.find((user) => {
        (user.room === room && user.name == name);
    });
    if (!name || !room){
        return ({ error: 'Username and room are required.' });
    }
    else if (exists) {
        return ({error: 'Username is Taken'});
    }
    else {
        users.push({id, name, room});
        return {id, name, room};
    }
}

const leaveRoom = ({id, room}) => {
    const index = users.findIndex((user) => user.id === id);
    if(index !== -1) {
        return users.splice(index, 1)[0];
    }
}

const findUser = (id) => {
    users.find( (user) => {
        user.id === id
    })
};

const getAllUsers = (room) => users.filter((user) => user.room === room);


module.exports = {joinRoom, leaveRoom, findUser, getAllUsers}