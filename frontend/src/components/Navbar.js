import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';

const pages1 = ['Courses', 'About','Blog','Contact']; // Pages

function ResponsiveAppBar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // Get current location

  const toggleDrawer = (open) => () => setDrawerOpen(open);

  const drawerList = () => (
    <Box
      sx={{ width: 250, fontFamily: 'Noto Kufi Arabic' }} // Apply font-family here
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      dir="ltr" // Explicitly setting direction to LTR for Drawer content
    >
      {/* Logo */}
      <Box sx={{ padding: 2, textAlign: 'center' }}>
        <img
          src='https://i.ibb.co/MCn6qHS/Asset-6-1.png'
          alt="Logo"
          style={{ height: '40px' }}
          onClick={() => navigate('/')} // Ensure logo click navigates home
        />
      </Box>

      {/* Navigation Pages 1 */}
      <Box sx={{ marginBottom: 2 }}>
        {pages1.map((page) => (
          <MenuItem
            key={page}
            component={Link}
            to={`/${page.toLowerCase()}`}  // Corrected the path interpolation
            onClick={toggleDrawer(false)}
            sx={{
              backgroundColor: location.pathname === `/${page.toLowerCase()}` ? '#06f9f3' : 'transparent',
              '&:hover': {
                backgroundColor: '#444',
              },
              color: location.pathname === `/${page.toLowerCase()}` ? 'white' : 'inherit',  // Active text color white
              padding: '10px', // Add padding for better click target
            }}
          >
            <Typography sx={{ textAlign: 'center', fontFamily: 'Noto Kufi Arabic', fontSize: '14px' }} >
              {page}
            </Typography> {/* Smaller font size */}
          </MenuItem>
        ))}
      </Box>
    </Box>
  );

  return (
    <AppBar position="fixed" sx={{ background: '#000', height: '100px' }} dir="ltr">
      <Container
        maxWidth="xxl"
        sx={{
          '@media (min-width: 1600px)': {
            maxWidth: '1900px', // Simulate XXL breakpoint for larger screens
          },
        }}
      >
        <Toolbar disableGutters sx={{ height: '100px', display: 'flex', justifyContent: 'space-between' }}> {/* Flex container */}

          {/* Logo */}
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
              fontSize: { xs: '16px', sm: '20px', md: '25px' },  // Reduced font size for the logo text
              paddingLeft: '16px',
            }}
          >
            <img
              src='https://i.ibb.co/MCn6qHS/Asset-6-1.png'
              alt="Logo"
              style={{
                height: 'auto',
                maxWidth: '100%',
                width: 'auto',
                maxHeight: '50px',
              }}
            />
          </Typography>

          {/* Desktop Menu (Navigation Pages) */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-start', paddingLeft: '40px' }} dir="ltr"> {/* Adjust left padding */}
            {pages1.map((page) => (
              <Button
                key={page}
                component={Link}
                to={`/${page.toLowerCase()}`}  // Corrected the path interpolation
                sx={{
                  my: 0.5,  // Reduced vertical margin to make buttons closer
                  mx: 2,    // Increased horizontal margin to spread items
                  color: location.pathname === `/${page.toLowerCase()}` ? 'white' : 'inherit',  // Active text color white
                  display: 'block',
                  fontFamily: 'Noto Kufi Arabic',
                  fontSize: { xs: '12px', sm: '14px', md: '16px' },  // Smaller font size
                  borderRadius: '50px',
                  backgroundColor: location.pathname === `/${page.toLowerCase()}` ? '#0b5097' : 'transparent',  // Active page background
                  '&:hover': {
                    backgroundColor: location.pathname !== `/${page.toLowerCase()}` ? '#444' : '#0b5097',
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* Register Online Button with Linear Gradient */}
          <Button
            component={Link}
            to="/register"  // Link to the register page or trigger a function
            sx={{
              color: 'white',
              backgroundImage: 'linear-gradient(to right, #0073e6, #005bb5)', // Linear gradient from blue to darker blue
              fontFamily: 'Noto Kufi Arabic',
              fontSize: { xs: '12px', sm: '14px', md: '16px' },
              borderRadius: '50px',
              padding: '10px 20px',  // Add padding to make it more prominent
              '&:hover': {
                backgroundImage: 'linear-gradient(to right, #005bb5, #003f8e)',  // Darker gradient on hover
              },
              ml: 2,  // Margin left to add space between this button and the others
              display: { xs: 'none', md: 'block' },  // Hide on mobile (xs) and show on medium (md) and up
            }}
          >
            Register Online
          </Button>

          {/* Mobile Menu (Drawer) */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} dir="rtl">
            <IconButton
              size="large"
              aria-label="open navigation menu"
              onClick={toggleDrawer(true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
              sx={{
                '& .MuiDrawer-paper': {
                  backgroundColor: '#000',
                  color: '#fff',
                },
              }}
            >
              {drawerList()}
            </Drawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
