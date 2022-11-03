import React, { useState } from 'react'
import { Stack, Box } from '@mui/system'
import { register} from '../Api/Api';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../store/userSlice';
import { useDispatch } from 'react-redux';
import PasswordInput from './PasswordInput';
import {
    Dialog, DialogTitle,
    useMediaQuery, TextField, Button,
    Container
    , Typography
}
    from '@mui/material'
function SignUp({ open, setOpen }) {
    const [email,setEmail] = useState('');
    const [password,setPassword]=useState('');
    const [username,setUsername] = useState('');
    const dispatch=useDispatch();
    const navigate = useNavigate();
    const handleSignUp= async()=>{
         console.log('sign up' + email + ' '+ password)
          try{
             const user = await register({email,password,username});
             localStorage.setItem('user',JSON.stringify(user));
             setUser(user);
          }
          catch(err){
             console.log(err);
          }
        }
    return (
        <Box
        >
            <Dialog
                open={open}
                onClose={() => setOpen(open => !open)}
            >
                <DialogTitle
                    sx={{
                        fontWeight: '800',
                        fontSize: '30px',
                    }}
                >
                    <Container >Video Call App</Container>
                </DialogTitle>
                <Box
                    height={500}
                    width={400}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-around'
                    }}
                >
                    <Stack
                        width={'80%'}
                        sx={{
                            margin: 'auto'
                        }}
                    >
                        <TextField
                            required
                            label="Email"
                            variant='filled'
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            margin='none'
                        />
                        <TextField
                            required
                            label="Username"
                            variant='filled'
                            margin='normal'
                            onChange={(e)=>setUsername(e.target.value)}
                            sx={{
                                marginTop:'8px'
                            }}
                        />
                        <PasswordInput
                           password={password}
                          setPassword={setPassword}
                        />
                        <Button
                            sx={{
                                marginTop: '10px'
                            }}
                            variant='contained'
                            onClick={handleSignUp}
                        >
                            Sign Up
                        </Button>
                    </Stack>
                    <Typography
                        component={'div'}
                        sx={{
                            display: 'block',
                            fontWeight: '100',
                            padding: '50px',
                        }}
                    >
                        This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
                    </Typography>
                </Box>
            </Dialog>
        </Box>
    )
}

export default SignUp