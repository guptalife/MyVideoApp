import React from 'react'
import { Box } from '@mui/system'
import Video from '../../Video'
import { useSelector } from 'react-redux'
function Room() {
  const localStream = useSelector(state=>state.stream.localStream);
  const remoteStreams = useSelector(state=>state.stream.remoteStreams);
  return (
    <Box>
        <Video stream= {localStream} />
        {
            remoteStreams.map((stream)=>{
                return <Video stream= {stream} />
            })
        }
    </Box>
  )
}

export default Room