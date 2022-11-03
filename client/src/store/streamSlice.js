import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    localStream: null,
    localscreenStream: null,
    remoteStreams: []
};

const streamSlice = createSlice(
    {
        name: 'stream',
        initialState,
        reducers: {
            setLocalStream: (state, action) => {
                console.log('stream- came');
                console.log(action);
                console.log(action.payload);
                state.localStream = action.payload;
            },
            setLocalScreenStream: (state, action) => {
                state.localscreenStream = action.payload;
            },
            addRemoteStream: (state, action) => {
                state.remoteStreams.push(action.payload);
            },
            removeStreamOfId: (state, action) => {
                state.remoteStreams = state.remoteStreams.filter((obj) => {
                   return obj.socketId !== action.payload;
                })
            },
            setRemoteStreams:(state,action) =>{
                state.remoteStreams = action.payload
            }
        }
    }
)

export const 
{ 
setLocalStream,
setLocalScreenStream,
addRemoteStream,
removeStreamOfId,
setRemoteStreams
}
= streamSlice.actions;
export const selectLocalStream = (state) => state.stream.localStream
export const selectLocalScreenStream = (state) => state.stream.localscreenStream;
export const selectRemoteStreams = (state) => state.stream.remotestreams;
export default streamSlice.reducer;
