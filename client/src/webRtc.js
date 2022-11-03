import { setLocalStream } from "./store/streamSlice"
import store from "./store/store";
export const getLocalStream=()=>{
     navigator.mediaDevices.getUserMedia({
        audio:true,
        video:true
     }).then(stream=>{
          console.log('stream');
          store.dispatch(setLocalStream(stream));
     }).catch((err)=>{
         console.log('err ', err);
     })
}