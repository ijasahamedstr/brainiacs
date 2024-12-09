import React, { useState } from 'react';
import { Container, Box, Typography, Card, CardContent, CardMedia, AppBar, Tabs, Tab, Grid } from '@mui/material';

function VisionSection() {
  const [tabValue, setTabValue] = useState(0);

  const events = [
    {
      title: 'Our Vision',
      description: 'To emerge as the most sought-after education and training partner in the region by making a meaningful contribution towards building a knowledgeable society.',
      image: 'https://i.ibb.co/Ry1Zj2h/ban.png',
    },
  ];

  const tabContent = [
    { label: 'Vision', content: 'To emerge as the most sought-after education and training partner in the region.' },
    { label: 'Mission', content: 'Our mission is to build a knowledgeable society through impactful education and training.' },
    // Add more tabs as needed
  ];

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

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
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '50px',
        marginTop: '-30px',
        position: 'relative',
        marginBottom:'30px'
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
        {events.map((event, index) => (
          <Card
            key={index}
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column-reverse', sm: 'row' }, // Stack on mobile, row on larger screens
              borderRadius: '8px',
              boxShadow: 3,
              backgroundColor: 'transparent',
              border: 'none', // Ensure card has no border
              outline: 'none', // Ensure no outline
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
                border: 'none', // Ensure no border on the image
                outline: 'none', // Ensure no outline on the image
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
              {/* Tabbed Navigation */}
              <AppBar position="static" sx={{ backgroundColor: "#fff", boxShadow: "none" }}>
                <Tabs
                  value={tabValue}
                  onChange={handleTabChange}
                  textColor="primary"
                  indicatorColor="primary"
                  variant="fullWidth"
                >
                  {tabContent.map((tab, index) => (
                    <Tab
                      key={index}
                      label={tab.label}
                      sx={{
                        backgroundColor: tabValue === index
                          ? '#17202a'  // Active tab color
                          : 'transparent',
                        color: tabValue === index ? '#fff' : '#17202a',
                        fontWeight: 600,
                        '&:hover': {
                          backgroundColor: tabValue === index
                            ? '#17202a'  // Active tab remains the same on hover
                            : '#f0f0f0',  // Hover effect for inactive tabs
                        },
                      }}
                    />
                  ))}
                </Tabs>
              </AppBar>
              {/* Tab Content */}
              <Box sx={{ padding: 2 }}>
                {tabContent[tabValue] && (
                  <Typography
                    variant="h5"
                    sx={{
                      textAlign: "center",
                      fontFamily: 'Noto Kufi Arabic',
                      marginTop: '50px',
                      fontWeight: '600',
                      color:'#ffff'
                    }}
                  >
                    {tabContent[tabValue].content}
                  </Typography>
                )}
              </Box>
            </Box>
          </Card>
        ))}
      </Container>
    </section>
  );
}

export default VisionSection;
