import { Carousel } from 'react-bootstrap';
import { Box } from '@mui/material';
import Container from '@mui/material/Container';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaSnapchat, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FadeCarousel = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${process.env.REACT_APP_API_HOST}/WebsiteSlider`);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching slider data:', error);
        setError('Failed to fetch slider data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Error or loading state rendering
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (data.length === 0) {
    return <div>No slider data available.</div>;
  }

  return (
    <Container maxWidth={false} sx={{ padding: 0 }} style={{ paddingLeft: '0px', paddingRight: '0px', paddingTop: '0px' }}>
      <Box sx={{ width: "100%", position: "relative", overflow: "hidden" }}>
        <Carousel
          fade
          nextIcon={<span className="carousel-control-next-icon" style={{ backgroundColor: "black" }} />}
          prevIcon={<span className="carousel-control-prev-icon" style={{ backgroundColor: "black" }} />}
        >
          {data.map((item) => (
            <Carousel.Item key={item.id}>
              <img
                className="d-block w-100"
                src={item.imgpath ? `${process.env.REACT_APP_API_HOST}/uploads/Slider/${item.imgpath}` : "https://img.freepik.com/premium-vector/no-photo-available-vector-icon-default-image-symbol-picture-coming-soon-web-site-mobile-app_87543-18055.jpg"}
                alt={item.imgpath || 'Slide'}
                style={{
                  height: "80vh",
                  objectFit: "cover",
                  boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.8)",
                  width: "100%",
                  maxWidth: "100%",
                  borderRadius: "8px",
                }}
                loading="lazy"
              />
            </Carousel.Item>
          ))}
        </Carousel>

        {/* Social Media Icons on the Left Side */}
        <Box sx={{
          position: "fixed",
          top: "50%",
          left: 0,
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          zIndex: 2,
          paddingLeft: 2
        }}>
          {/* List of Social Media Links */}
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <Box sx={{ ...iconStyle, backgroundColor: '#3b5998' }}>
              <FaFacebook size={25} />
            </Box>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <Box sx={{ ...iconStyle, backgroundColor: '#1DA1F2' }}>
              <FontAwesomeIcon icon={faXTwitter} size={25} />
            </Box>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <Box sx={{ ...iconStyle, backgroundColor: '#E4405F' }}>
              <FaInstagram size={25} />
            </Box>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <Box sx={{ ...iconStyle, backgroundColor: '#0077b5' }}>
              <FaLinkedin size={25} />
            </Box>
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
            <Box sx={{ ...iconStyle, backgroundColor: '#FF0000' }}>
              <FaYoutube size={25} />
            </Box>
          </a>
          <a href="https://www.snapchat.com/" target="_blank" rel="noopener noreferrer">
            <Box sx={{ ...iconStyle, backgroundColor: '#f7dc6f' }}>
              <FaSnapchat size={25} />
            </Box>
          </a>
          <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer">
            <Box sx={{ ...iconStyle, backgroundColor: '#000000' }}>
              <FaTiktok size={25} />
            </Box>
          </a>
          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
            <Box sx={{ ...iconStyle, backgroundColor: '#25D366' }}>
              <FaWhatsapp size={25} />
            </Box>
          </a>
        </Box>
      </Box>
    </Container>
  );
};

// Social media icon styles
const iconStyle = {
  width: 40,
  height: 40,
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#fff", // White color for the icon
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.2)",
  },
};

export default FadeCarousel;
