import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResponsiveAppBar from './components/Navbar';
import Home from './components/Home';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from './components/Footer';
import LoginCard from './components/Login';
import Registration from './components/Registration';
import OTPlogin from './components/OTP';
import Products from './components/Products';
import Aboutus from './components/About';


const theme = createTheme({
  typography: {
    fontFamily: 'Changa, sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Courses" element={<Products/>} />
        <Route path="/about" element={<Aboutus/>} />
        <Route path="/Login" element={<LoginCard/>} />
        <Route path="/register" element={<Registration/>} />
        <Route path="/dashboard" element={<OTPlogin/>} />
      </Routes>
      <Footer/>
    </Router>
    </ThemeProvider>
  );
}

export default App;
