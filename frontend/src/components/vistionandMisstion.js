import React from 'react';
import { Container, Box, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Swiper core styles
import 'swiper/css/navigation'; // Navigation styles
import 'swiper/css/pagination'; // Pagination styles

function VisionSection() {
  // Array of event data
  const events = [
    {
      title: 'Our Vision',
      description: 'To emerge as the most sought-after education and training partner in the region by making a meaningful contribution towards building a knowledgeable society.',
      image: 'https://i.ibb.co/Ry1Zj2h/ban.png',
    },
    {
      title: 'الشاشة التفاعلية الجديدة',
      description: 'تجربة لنظام تشغيل الشاشة التفاعية الجديدة يجريها مدير قسم السوشيال ميديا قبل البدأ في تفعيل حملة تسويقية.',
      image: 'https://i.ibb.co/Ry1Zj2h/ban.png',
    },
  ];

  return (
    <section
      className="vision-section"
      style={{
        backgroundColor: '#f2f3f4',
        backgroundImage: 'url(https://i.ibb.co/qWtc5b8/Crop-1.jpg)', // Background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        margin: '0 auto',
        marginBottom: '30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '50px',
        marginTop: '-30px',
        position: 'relative',
      }}
    >
      {/* Background overlay */}
      <div
        style={{
          content: '""',
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          background: 'rgba(14, 8, 39, 0.71)', // Dark overlay with transparency
          zIndex: 1,
        }}
      />

      <Container
        maxWidth="xl"
        sx={{
          paddingX: { xs: 2, sm: 3, md: 5 },
          textAlign: 'center',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <Swiper spaceBetween={30} slidesPerView={1} loop>
          {/* SwiperSlide for each card */}
          {events.map((event, index) => (
            <SwiperSlide key={index}>
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column-reverse', sm: 'row' }, // Stack on mobile, row on larger screens
                  borderRadius: '8px',
                  boxShadow: 3,
                  backgroundColor: 'transparent',
                  border: 'none',
                  outline: 'none',
                  width: '100%',
                  margin: '0 auto',
                }}
              >
                {/* Image part */}
                <CardMedia
                  component="img"
                  sx={{
                    width: { xs: '100%', sm: '50%' }, // Full width on small screens, 50% on larger screens
                    height: { xs: 200, sm: 'auto' }, // Fixed height for small screens, auto for large
                    objectFit: 'cover',
                    border: 'none',
                    outline: 'none',
                    borderRadius: '8px',
                  }}
                  image={event.image}
                  alt={event.title}
                  loading="lazy"
                />
                {/* Text part */}
                <Box
                  sx={{
                    width: { xs: '100%', sm: '50%' },
                    textAlign: { xs: 'center', sm: 'left' }, // Center text on mobile, left-align on larger screens
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    paddingLeft: 2,
                    paddingRight: 2,
                    paddingTop: { xs: 2, sm: 0 },
                  }}
                >
                  <CardContent sx={{ height: '100%' }}>
                    {/* Title with larger and customized font */}
                    <Typography
                      sx={{
                        fontSize: { xs: '0.8rem', sm: '1rem', md: '1.5rem' },
                        fontWeight: 'bold',
                        color: '#0073e6',
                        fontFamily: '"Poppins", sans-serif',
                        textTransform: 'uppercase',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Black outline shadow for title
                      }}
                      gutterBottom
                    >
                      {event.title}
                    </Typography>
                    {/* Description with responsive font size */}
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: { xs: '1rem', sm: '1.5rem', md: '2rem' },
                        color: '#fff',
                        fontFamily: '"Roboto", sans-serif',
                        lineHeight: '1.6',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Black outline shadow for description
                      }}
                      paragraph
                    >
                      {event.description}
                    </Typography>
                  </CardContent>
                </Box>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
}

export default VisionSection;
