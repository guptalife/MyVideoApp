import { Button, Typography } from '@mui/material';
import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Navbar from './Navbar';
import { Box, Stack } from '@mui/material';
import Check from './check';
import ChatRoom from './chatRoom'
function Room() {
  const [joined,setJoined] = React.useState(false);
  return (
    <div>
        {joined?
         <ChatRoom setJoin={setJoined}/>:
        <Check setJoin={setJoined}/>
        }
    </div>
  )
}
export default Room