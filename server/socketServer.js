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
        socket.on('join-call', (roomId) => {
            socket.join(roomId);
            socket.to(roomId).emit('call-request', socket.id);
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
            socket.rooms.forEach((roomId)=>{
                 socket.to(roomId).emit('participant-left', socket.id);
            })
        })
        socket.on('leave-call',()=>{
            socket.rooms.forEach((roomId)=>{
                socket.to(roomId).emit('participant-left', socket.id);
           })
        })
    })
}

module.exports=getSocketServer