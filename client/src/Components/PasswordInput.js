import React, { useState } from 'react'
import { FormControl,InputLabel,FilledInput,InputAdornment,
   IconButton , 
 } from '@mui/material';
 import Visibility from '@mui/icons-material/Visibility';
 import VisibilityOff from '@mui/icons-material/VisibilityOff';
function PasswordInput({password,setPassword}){
  const [showPassword,setShowPassword] = useState(false);
  const handleClickShowPassword=()=>{
     setShowPassword(s=>!s)
  }
  return (
    <FormControl  variant="filled">
    <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
    <FilledInput
      id="filled-adornment-password"
      type={showPassword ? 'text' : 'password'}
      onChange={(e)=>setPassword(e.target.value)}
      value={password}
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            edge="end"
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </InputAdornment>
      }
    />
  </FormControl>
  )
}

export default PasswordInput