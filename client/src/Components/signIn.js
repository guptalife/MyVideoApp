import React, { useState } from 'react'
import { Stack, Box } from '@mui/system'
import store from '../store/store'
import {
    Dialog, DialogTitle,
    useMediaQuery, TextField, Button,
    Container
    , Typography
}
    from '@mui/material'
import { login } from '../Api/Api'
import { setUser } from '../store/userSlice'
import { useDispatch } from 'react-redux'
import PasswordInput from './PasswordInput'
const SignIn = ({ open, setOpen }) => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const dispatch = useDispatch();
    const handleSignIn = async () => {
        console.log(email + password);
        const user = await login({ email, password });
        console.log(user);
        localStorage.setItem('user', JSON.stringify(user))
        dispatch(setUser(user));
        console.log(store.getState().user.user);
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
                    height={400}
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
                            margin='normal'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <PasswordInput
                            password={password}
                            setPassword={setPassword}
                        />
                        <Button
                            onClick={handleSignIn}
                            sx={{
                                marginTop: '10px'
                            }}
                            variant='contained'
                        >
                            Sign In
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

export default SignIn