import React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

export default function NavBar() {
  const [auth, setAuth] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleLogin = (event) => {
    setAuth(true);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
      handleClose();
      setAuth(false);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <HomeIcon />
                </IconButton>
                <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                    Carpark-Where
                </Typography>
                {!auth && (
                    <div>
                        <IconButton
                            size="small"
                            color="inherit"
                            onClick={handleLogin}
                        >
                            Login
                        </IconButton>
                        <IconButton
                            size="small"
                            color="inherit"
                        >
                            Register
                        </IconButton>
                    </div>
                )}
                {auth && (
                    <div>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </Menu>
                    </div>
                )}
            </Toolbar>
        </AppBar>
    </Box>
  );
}