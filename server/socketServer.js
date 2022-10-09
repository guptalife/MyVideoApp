const { Server } = require('socket.io');

const getSocketServer = (server) => {
    const io = new Server(server, {
        cors: {
            origin: '*',
            methods: ['GET', 'POST']
        }

    })
    io.on('connection', (socket) => {
        console.log(socket.id);
        console.log(socket.rooms);
        const ROOM_ID = 400;
        socket.on('join-call', () => {
            socket.join(ROOM_ID);
            socket.to(ROOM_ID).emit('call-request', socket.id);
        })
        socket.on('call-accepted', ({ from, to, data }) => {
            console.log('call - accept');
            io.to(to).emit('call-accepted', { from, data });
        })
        socket.on('recieve-data', ({ from, to, data }) => {
            io.to(to).emit('recieve-data', { from, data });
        })
        socket.on('disconnecting', () => {
            console.log('disconnected');
            socket.to(ROOM_ID).emit('participant-left', socket.id);
        })
    })
}

module.exports=getSocketServer