import axios from 'axios';
import store from '../store/store';

const BASE_URL = "http://localhost:5000/api" 

const api = axios.create({
    baseURL:BASE_URL
})

api.interceptors.request.use((config)=>{
     const user = store.getState().user.user;
     console.log('user is '+user)
     if(user){
         config.headers.Authorization= 'bearer '+user.token;
     }
     return config;
},(err)=>{
     console.log('error is there')
     console.log(err);
})
export const login= async (loginCredentials)=>{
    try{
    const res = await api.post('/auth/login',loginCredentials  )
     return res.data;
    }
    catch(err){
         console.log(err.response.data);
         console.log(err);
    }
}

export const register= async (registerCredentials)=>{
    try{
        // const res1= await axios.post('http://localhost:5000/api/auth/register',registerCredentials);
        //  console.log(res1)
        const res= await api.post('/auth/register',registerCredentials);
        return res.data;
    }
    catch(err){
       console.log(err);
    }
}