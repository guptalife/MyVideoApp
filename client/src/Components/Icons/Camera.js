import React, { useEffect, useState } from 'react'
import VideocamIcon from '@mui/icons-material/Videocam';
import VideocamOffIcon from '@mui/icons-material/VideocamOff';
import { useSelector } from 'react-redux';
import { IconButton } from '@mui/material';
import { red } from '@mui/material/colors';
function Camera() {
    const [video, setVideo] = useState(false);
    const localStream = useSelector(state => state.stream.localStream);
    useEffect(() => {
        if (localStream && localStream.getVideoTracks()) {
            setVideo(localStream.getVideoTracks()[0].enabled)
        }
    }, [localStream])
    const handleClick = () => {
        if(localStream && localStream.getVideoTracks()){
        localStream.getVideoTracks()[0].enabled = !video;
        setVideo(!video);
        }
    }
    return (
        <IconButton onClick={handleClick} >
            {video ? <VideocamIcon
                 sx={{
                     color: red[900],
                     fontSize:'40px'
                 }}
            /> : <VideocamOffIcon
            sx={{
                color: red[900],
                fontSize:'40px'
            }}
            />}
        </IconButton>

    )
}

export default Camera