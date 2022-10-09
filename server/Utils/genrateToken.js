const jwt=require('jsonwebtoken');

module.exports= genrateToken=(obj)=>{
     return jwt.sign(obj,process.env.JWT_SECRET,{
         expiresIn:'3h'
     })
}