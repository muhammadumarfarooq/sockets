import io from 'socket.io-client';

const socket = io('http://localhost:3000');

socket.on('connect', () => {
    console.log('You are connected with id', socket.id);
});

socket.on('received-message', (message) => {
    console.log(message);
});

function sendMessage(msg) {
    //SEND EVENT FROM CLIENT TO SERVER
    const room = prompt('Room');
    socket.emit('send-message', msg, room);
}

window.sendMessage = sendMessage;