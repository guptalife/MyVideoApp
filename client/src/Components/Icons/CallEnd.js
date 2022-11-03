import React from 'react'
import { IconButton } from '@mui/material'
import CallEndIcon from '@mui/icons-material/CallEnd';
import { endCall } from '../../socketConnection';
import {red} from '@mui/material/colors'
import { useNavigate } from 'react-router-dom';
function CallEnd() {
const navigate = useNavigate();
const handleClick=()=>{
     endCall();
     navigate('/');
     console.log('clicked');
}
  return (
    <IconButton onClick={handleClick} >
         <CallEndIcon 
          sx={{
            color: red[900],
            fontSize:'40px'
          }}
         />
    </IconButton>
  )
}

export default CallEnd