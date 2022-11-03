import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { display, height, textAlign } from '@mui/system';
import { Stack } from '@mui/material';
import Divider from '@mui/material/Divider';
import SignIn from './signIn';
import SignUp from './signUp';
import { useSelector } from 'react-redux';
import { selectUser } from '../store/userSlice';
const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = ({ textColor }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [signInOpen, setSignInOpen] = React.useState(false);
  const [signUpOpen, setSignUpOpen] = React.useState(false);
  const user = useSelector(selectUser);
  React.useEffect(()=>{
      console.log(user);
  },[user])
  const handleOpen = (e) => {
    setAnchorEl(e.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null);
  };


  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const open = Boolean(anchorEl);
  return (
    <Toolbar>
      <Typography
        sx={{
          color: textColor,
          fontWeight: '600',
          fontSize: { md: '40px', xs: '20px' },
          flexGrow: 1,
          marginLeft: '100px'
        }}
      >Video Call App</Typography>
      {
        user?
          <Typography 
           color={textColor}
           paddingRight={'15px'}
          >
            Hi! {user.username}
          </Typography>
          :
          <>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' }
              }}
            >
              <Button variant='outlined'
                sx={{
                  marginRight: '5px',
                  color: textColor
                }}
                onClick={() => setSignInOpen(open => !open)}
              > Sign In</Button>
              <Button
                variant='outlined'
                sx={{
                  marginRight: '20px',
                  color: textColor
                }}
                onClick={() => setSignUpOpen(open => !open)}

              > Sign Up</Button>
            </Box>
            <Box
              sx={{
                display: { sm: 'flex', md: 'none' }
              }}
            >
              <IconButton
                onClick={handleOpen}
              >
                <MenuIcon
                  color='secondary'
                  secondary
                />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
                color='black'
              >
                <MenuItem
                  dense
                  sx={{
                    height: { xs: '12px' }
                  }}
                >
                  Sign In
                </MenuItem>
                <MenuItem
                  dense
                >
                  Sign Up
                </MenuItem>
              </Menu>
            </Box>
            <SignIn
              open={signInOpen}
              setOpen={setSignInOpen}
            />
            <SignUp
              open={signUpOpen}
              setOpen={setSignUpOpen}
            />
          </>
      }
    </Toolbar>
  );
};
export default ResponsiveAppBar;
