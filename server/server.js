const io = require('socket.io')(3000, {
    cors: {
        origin: ['http://localhost:8080']
    }
});

io.on('connection', socket => {
    console.log(socket.id);
    //    RECEIVE DATA FROM CLIENT
    socket.on('send-message', (message, room) => {
        console.log(message);
        // io.emit('received-message', message); // will send this message to everyone event the sender
        // socket.broadcast.emit('received-message', message); // will send this message to everyone except the sender.
        socket.to(room).emit('received-message', message); // will send message to only a specific room.
    });

    socket.on('join-room', (room) => {
        socket.join(room);
    });
});