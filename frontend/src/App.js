import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResponsiveAppBar from './components/Navbar';
import Home from './components/Home';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from './components/Footer';
import Aboutus from './components/About';
import Coures from './components/Coures';
import Coursedetails from './components/course-details';
import Contactus from './components/Contact';
import Blog from './components/Blog';


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
        <Route path="/Courses" element={<Coures/>} />
        <Route path="/About" element={<Aboutus/>} />
        <Route path="/course-details" element={<Coursedetails/>} />
        <Route path="/Contact" element={<Contactus/>} />
        <Route path="/Blog" element={<Blog/>} /> 
      </Routes>
      <Footer/>
    </Router>
    </ThemeProvider>
  );
}

export default App;
