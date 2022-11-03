import React, { useState , useEffect } from 'react'
import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';
import { useSelector } from 'react-redux';
import { IconButton } from '@mui/material';
import {red} from '@mui/material/colors'
function Mic() {
  const [audio,setAudio] = useState(false);
  const localStream = useSelector(state=>state.stream.localStream);
  useEffect(() => {
    if (localStream && localStream.getAudioTracks()) {
        setAudio(localStream.getAudioTracks()[0].enabled)
    }
}, [localStream])
  const handleClick= ()=>{
    if(localStream && localStream.getAudioTracks()){
      localStream.getAudioTracks()[0].enabled = !audio;
      setAudio(!audio);
    }
  }
  return (
    <IconButton onClick={handleClick}>
         {
         audio ?
         <MicIcon
         sx={{
            color: red[900],
            fontSize:'40px'
        }}
         />:
         <MicOffIcon
         sx={{
            color: red[900],
            fontSize:'40px'
        }}
         />
         }
         </IconButton>
  )
}

export default Mic