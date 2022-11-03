const { login , register} = require("../Api/Api");
const { setUser } = require("../store/userSlice");

const handleLogin= async (data)=>{
     try{
         const user = await login(data);
         setUser(user);
     }
     catch(err){
         console.log('error is coming');
     }
}

const handleRegister= async (data)=>{
     try{
        const user= await register(data);
        setUser(user);
     }
     catch(err){
         console.log('error is coming');
     }
}