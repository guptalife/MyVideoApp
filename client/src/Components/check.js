import React, { useEffect, useState } from 'react';
import { getLocalStream } from '../webRtc';
import { getSocketConnections, joinCall } from '../socketConnection';
import { useSelector } from 'react-redux';
import { selectLocalStream, selectRemoteStreams } from '../store/streamSlice';
import Navbar from './/Navbar'
import Video from '../Video';
import { Button, Link, Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import { Stack } from '@mui/system'
import Mic from './Icons/Mic';
import Camera from './Icons/Camera';
function App({ setJoin }) {
    const localStream = useSelector(selectLocalStream)
    const [joined, setJoined] = useState(false);
    const { roomId } = useParams();
    useEffect(() => {
        console.log(roomId);
        getLocalStream();
    }, [])
    return (
        <Stack
            height='100vh'
            boxSizing='border-box'
            spacing={5}
            sx={{
                borderWidth: '0px 30px 30px 30px',
                borderStyle: 'solid',
                borderColor: 'black'
            }}
            alignContent = 'center'
        >
            
            <Navbar />

            <Stack 
            direction = 'row'
            alignContent={'center'} justifyContent='center'
             >
                <Video
                    width='50%'
                    height='60vh'
                    stream={localStream} />
              
            </Stack>
            <Stack direction={'row'} justifyContent='center'>
                 <Mic/> 
                 <Camera/>
            </Stack>
            <Stack 
            direction = 'row'
            alignContent={'center'} justifyContent='center'
             >
            <Button
                   sx={{
                     width:'15%'
                   }}
                    variant='contained'
                    onClick={() => {
                        setJoin(true);
                        joinCall(setJoined, roomId)
                    }}
                    >Join</Button>
            </Stack>
           
    </Stack >
  )

}

export default App;