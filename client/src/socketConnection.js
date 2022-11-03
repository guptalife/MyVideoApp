import Peer from 'simple-peer';
import { io } from 'socket.io-client';
import store from './store/store';
import { addRemoteStream, setLocalStream, removeStreamOfId, setRemoteStreams } from './store/streamSlice';
const { dispatch } = store;
const peers = {

}
let socket;

export const joinCall = (setJoined, roomId) => {
      setJoined(true);
      socket.emit('join-call', roomId);
}

export const getSocketConnections = () => {
      socket = io('http://localhost:5000');

      socket.on('call-request', (from) => {
            console.log('request Came client', from);
            peers[from] = new Peer({
                  trickle: false,
                  stream: store.getState().stream.localStream,
                  initiator: true
            })
            peers[from].on('signal', (data) => {
                  console.log('signal client')
                  socket.emit('call-accepted', { data, from: socket.id, to: from });
            })
            peers[from].on('stream', (stream) => {
                  console.log('stream-client old ');
                  dispatch(addRemoteStream({ stream, socketId: from }));
            })
      })

      socket.on('recieve-data', ({ from, data }) => {
            if (peers[from] != null) {
                  peers[from].signal(data);
            }
      })

      socket.on('call-accepted', ({ from, data }) => {
            console.log('call accepted client');
            peers[from] = new Peer({
                  trickle: false,
                  stream: store.getState().stream.localStream,
                  initiator: false
            });
            peers[from].on('signal', (data) => {
                  socket.emit('recieve-data', { from: socket.id, to: from, data });
            })
            peers[from].on('stream', (stream) => {
                  console.log('stream-client new ');
                  dispatch(addRemoteStream({ stream, socketId: from }));
            })
            peers[from].signal(data);
      })
      socket.on('disconnect', () => {
            const localStream = store.getState().stream.localStream;
            localStream.getTracks().forEach(track => track.stop());
            setLocalStream(null);
            for (const socketId in peers) {
                  peers[socketId].destroy();
                  delete peers[socketId];
            }
      })
      socket.on('participant-left', (socketId) => {
            console.log('left ' + socketId);
            if (peers[socketId]) {
                  // peers[socketId].destroy();
                  delete peers[socketId];
            }
            store.dispatch(removeStreamOfId(socketId));
      })
}

export const endCall = () => {
      console.log('clicked')
      const localStream = store.getState().stream.localStream;
      localStream.getTracks().forEach(track => track.stop());
      store.dispatch(setLocalStream(null));
      store.dispatch(setRemoteStreams([]));
      for (const socketId in peers) {
            if (peers[socketId]) {
                  console.log(socketId)
                  // peers[socketId].destroy();
                  delete peers[socketId];
            }
      }
      if (socket)
            socket.emit('leave-call')
}
export default socket;