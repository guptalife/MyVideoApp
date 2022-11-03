import React, { useRef, useEffect } from 'react'
import { Box } from '@mui/system';
function Video(props) {
  const videoRef = React.useRef();
  React.useEffect(() => {
    const video = videoRef.current;
    console.log(props.stream)
    if (props.stream)
      video.srcObject = props.stream;
  }, [props.stream]);
  return (
    
      <video
       style={{
        width : props.width?props.width:'100%',
        height :props.height?props.height:'100%',
        padding :props.padding?props.padding:0,
         border:'1px solid red',
         objectFit:'cover'
       }}
       ref={videoRef} autoPlay />
  )
}

export default Video;