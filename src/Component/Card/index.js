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

const pages = ['New Post', 'Reels', 'IGTV'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="dynamic">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            INSTAGRAM
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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            IG 
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="data:image/jpeg;base64,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" />
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
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
