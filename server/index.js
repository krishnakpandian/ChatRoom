const express = require('express');
const socket = require('socket.io');
const http = require('http');
const cors = require('cors');
const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socket(server);
const PORT = process.env.PORT || 4000

app.use(router);
app.use(cors());

io.on('connect', socket => {
    console.log('A new connection has been made')
    socket.on('disconnect', () => {
        console.log('User has disconnected');
    })
})
server.listen(PORT, () => {
    console.log('Server Running on Port ' + PORT)
})