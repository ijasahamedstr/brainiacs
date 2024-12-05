import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Box, Typography } from '@mui/material';
import Container from '@mui/material/Container';

const carouselItems = [
  {
    id: 1,
    img: 'https://ehsanbaner.s3.me-south-1.amazonaws.com/Baners+-+Final/camp2.web.png',
    title: 'Welcome to Our Adventure',
    content: 'Explore the beauty of nature with us.'
  },
  {
    id: 2,
    img: 'https://ehsanbaner.s3.me-south-1.amazonaws.com/Baners+-+Final/moques5.web.jpg',
    title: 'Unforgettable Moments',
    content: 'Create memories that last a lifetime.'
  },
  {
    id: 3,
    img: 'https://ehsanbaner.s3.me-south-1.amazonaws.com/Baners+-+Final/moques5.web.jpg',
    title: 'Join Our Community',
    content: 'Be part of something special.'
  },
];

const FadeCarousel = () => {
  return (
    <Container maxWidth={false} sx={{ padding: 0 }} style={{ paddingLeft: '0px', paddingRight: '0px', paddingTop: '0px' }}>
      <Box sx={{ width: '100%', position: 'relative', overflow: 'hidden' }}>
        <Carousel fade>
          {carouselItems.map(item => (
            <Carousel.Item key={item.id}>
              <img
                className="d-block w-100"
                src={item.img}
                alt={item.title}
                style={{
                  width: '100%', // Ensure image takes the full width of its container
                  height: '80vh', // Adjust height as needed (you can also use '100%' or specific px values)
                  objectFit: 'cover', // Ensures image covers the area without distortion
                }}
              />
              <Carousel.Caption
                style={{
                  position: 'absolute',
                  top: '60%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  textAlign: 'center',
                  width: '100%',
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    color: 'white',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
                    fontSize: { xs: '24px', sm: '32px', md: '40px' }, // Larger font size
                    fontWeight: 'bold',
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'white',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
                    fontSize: { xs: '14px', sm: '16px', md: '20px' }, // Larger font size for content
                  }}
                >
                  {item.content}
                </Typography>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Box>
    </Container>
  );
};

export default FadeCarousel;
