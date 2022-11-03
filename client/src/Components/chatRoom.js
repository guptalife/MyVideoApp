import React from 'react'
import { Stack } from '@mui/system'
import Video from '../Video'
import { useSelector } from 'react-redux'
import Grid from '@mui/material/Unstable_Grid2';
import Mic from './Icons/Mic';
import Camera from './Icons/Camera';
import CallEnd from './Icons/CallEnd';
function Room({setJoin}) {
  const localStream = useSelector(state=>state.stream.localStream);
  const remoteStreams = useSelector(state=>state.stream.remoteStreams);
  return (
    <Stack
    minHeight='100vh'
    boxSizing='border-box'
    sx={{
        borderWidth: '0px 30px 30px 30px',
        borderStyle: 'solid',
        borderColor: 'black'
    }}
    alignContent = 'center'
     >
        <Grid container spacing={0}>
        <Grid height='50vh'
          xs={6}><Video height = 'inherit'  stream= {localStream} />
        </Grid>
           {
            remoteStreams.map((remoteStream,index)=>{
                 return  <Grid height='50vh' xs ={6} key={index} ><Video height = 'inherit'   stream= {remoteStream.stream} /> </Grid>        
            })
        }
         </Grid>
         <Stack direction={'row'} justifyContent='center'
           sx={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom:'30px',
            margin: '0 auto'
           }}
         >
                 <Mic/> 
                 <Camera/>
                 <CallEnd/>
            </Stack>
        
    </Stack>
  )
}

export default Room