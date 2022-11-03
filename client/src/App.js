import { Button, Typography } from '@mui/material';
import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Navbar from './Components/Navbar';
import { Box, Stack } from '@mui/material';
import {v4 as uuid} from 'uuid'
function App() {
  const navigate= useNavigate();
  const handleClick=()=>{
     const roomId=uuid();
     return navigate('/room/'+roomId);
  }
  return (
    <Box
      component={'div'}
      sx={{
        backgroundImage: `url("https://images.unsplash.com/photo-1554050857-c84a8abdb5e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      height={window.innerHeight}
    >
      <Navbar textColor='white'/>

      <Typography
        align='center'
        variant='h2'
        fontWeight='800'
        fontSize={100}
        marginTop={`${window.innerHeight / 2 - 300}px`}
        color='#00008B'
        sx={{
           fontWeight:'800'
        }}
      >
        The Next
        Genration
        <br />
        Video Call
        <br />
        is Here
      </Typography>
      <Stack
        marginTop={'50px'}
        direction={'row'}
        justifyContent='center'
      >
        <Button
          onClick={handleClick}
          size='large'
          variant='contained'
          color='secondary'
        >
          Create A Video Call
        </Button>
      </Stack>
    </Box>
  )
}
export default App