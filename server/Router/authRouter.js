const express=require('express');
const router=express.Router();
const {register,login}=require('../controllers/authController')
const authValidation=require('../Utils/validation');
router.post('/login',authValidation.validateLoginCredentials,login)
router.post('/register',authValidation.validateRegisterCredentials,register);
module.exports= router;
