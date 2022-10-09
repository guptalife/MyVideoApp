const joi= require('joi');

const loginSchema=joi.object().keys({
     email: joi.string().email()
            .required(),
    password:joi.string()
              .min(6)
              .max(15)
              .required()
   
})
const registerSchema=joi.object().keys({
    email: joi.string().email()
           .required(),
   password:joi.string()
             .min(6)
             .max(15)
             .required()
   ,
   username: joi.string()
           .min(4)
           .max(8)
           .required()
})
module.exports.validateLoginCredentials=(req,res,next)=>{
       const body=req.body;
       if(loginSchema.validate(body).error){
        return res.status(401).json({
            error:true,
            message:registerSchema.validate(body).error.details[0].message
        })
  }
       next();
}


module.exports.validateRegisterCredentials=async(req,res,next)=>{
    const body=req.body;
    if(registerSchema.validate(body).error){
          return res.status(401).json({
              error:true,
              message:registerSchema.validate(body).error.details[0].message
          })
    }
   return  next();
}

