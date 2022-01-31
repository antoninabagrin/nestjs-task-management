import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router';
import { Link } from '@mui/material';
import useToken from './useToken';

// const pages = [
//   { id: '1', name: 'Home', path: '/home' },
//   { id: '2', name: 'SignIn', path: '/signin' },
//   { id: '3', name: 'SignUp', path: '/signup' },
// ];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export function Header(onLogout) {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const { token, setToken } = useToken();
  let navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (e) => {
    if (token) {
      navigate('/home');
    }
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (href) => {
    if (href === '/logout' && token) {
      setToken('');
      sessionStorage.clear();
      navigate('/signin');
    }
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    setToken(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Link href="/Home" underline="none">
                  {' '}
                  <Typography textAlign="center">Home</Typography>
                </Link>
              </MenuItem>

              <MenuItem onClick={handleCloseNavMenu}>
                <Link href="/signin" underline="none">
                  {' '}
                  <Typography textAlign="center">Sign In</Typography>
                </Link>
              </MenuItem>

              <MenuItem onClick={handleCloseNavMenu}>
                <Link href="/signup" underline="none">
                  {' '}
                  <Typography textAlign="center">Sign Up</Typography>
                </Link>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button onClick={handleCloseNavMenu}>
              <Link
                href="/Home"
                underline="none"
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Home
              </Link>
            </Button>

            <Button onClick={handleCloseNavMenu}>
              <Link
                href="/signin"
                underline="none"
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Sign In
              </Link>
            </Button>

            <Button onClick={handleCloseNavMenu}>
              <Link
                href="/signup"
                underline="none"
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Sign Up
              </Link>
            </Button>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Avatar" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Link href="/dashboard" underline="none">
                  <Typography textAlign="center">Dashboard</Typography>
                </Link>
              </MenuItem>
              {token && (
                <MenuItem onClick={handleCloseUserMenu} onLogout={handleLogout}>
                  <Link href="/logout" underline="none">
                    <Typography textAlign="center">Logout</Typography>
                  </Link>
                </MenuItem>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
