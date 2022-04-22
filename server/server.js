const io = require('socket.io')(3000, {
    cors: {
        origin: ['http://localhost:8080']
    }
});

io.on('connection', socket => {
    console.log(socket.id);
    //    RECEIVE DATA FROM CLIENT
    socket.on('send-message', (message) => {
        console.log(message);
        io.emit('received-message', message);
    });
});