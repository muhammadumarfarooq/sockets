import io from 'socket.io-client';

const socket = io('http://localhost:3000');

socket.on('connect', () => {
    console.log('You are connected with id', socket.id);
});

function sendMessage(msg) {
    //SEND EVENT FROM CLIENT TO SERVER
    socket.emit('send-message', msg);
}

window.sendMessage = sendMessage;