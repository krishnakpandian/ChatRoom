const express = require('express');
const socket = require('socket.io');
const http = require('http');
const cors = require('cors');
const router = require('./router');
const roomFunction = require('./rooms.js');


const app = express();
const server = http.createServer(app);
const io = socket(server);
const PORT = process.env.PORT || 4000

app.use(router);
app.use(cors());

io.on('connect', socket => {
    console.log('A new connection has been made')

    socket.on('join', ({name, room}, callback) => {
        const {error, user} = roomFunction.joinRoom({id: socket.id, name, room});
        if (error) {
            return (callback(error));
        }
        socket.emit('message', {user: 'admin', text: 'Welcome to${user.room}'});
        socket.broadcast.to(user.room).emit('message', {user: 'admin', text: "A new user has joined"});
        socket.join(user.room);
        callback();
    })
    socket.on('sendMessage', (message, callback) => {
        const user  = roomFunction.findUser(socket.id);
        io.to(user.room).emit('message', {name: user.name, text: message});
        callback();
    })
    socket.on('disconnect', () => {
        console.log('User has disconnected');
    })
})
server.listen(PORT, () => {
    console.log('Server Running on Port ' + PORT)
})