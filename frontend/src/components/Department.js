import React, { useState } from 'react';
import { Container, Breadcrumbs, Link, Card, CardContent, CardMedia, Typography, Grid, Box, Button, Pagination } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

export default function Department() {
  const newsItems = [
    {
      title: "School of Computing",
      img: "https://i.ibb.co/CH73tg0/0M8A4618.png",
      description: "Where we breathe life into technology! Our comprehensive array of courses is designed to empower students to fearlessly navigate the rapidly evolving world of computing and beyond. Our highly qualified academic staff ensures a unique learning experience that stands out. We're not just a school; we're your gateway to transformative learning!",
      icon: 'https://i.ibb.co/5YyZtXJ/Group-22.png',
      cardStyle: { boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)', backgroundColor: '#fafafa', borderRadius: '12px' },
      buttonColor: 'linear-gradient(90deg, #FF4081, #FF80AB)'
    },
    {
      title: "School of Management & Law",
      img: "https://i.ibb.co/pXgHM6v/0M8A5224.png",
      description: "Our commitment is to guide you through academic qualifications enriched with the latest industry knowledge and practical skills crucial for conquering the dynamic business landscape. Our highly qualified staff ensures a unique learning experience, employing advanced teaching techniques that foster your growth.",
      icon: 'https://i.ibb.co/2gtF03s/Group-35.png',
      cardStyle: { boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)', backgroundColor: '#e0f7fa', borderRadius: '12px' },
      buttonColor: 'linear-gradient(90deg, #00C853, #64DD17)'
    },
    {
      title: "School of Engineering",
      img: "https://i.ibb.co/MP51Nbn/R5-A8153-2.png",
      description: "Here, we offer a diverse range of specialized courses covering Civil Engineering, Mechanical Engineering, Electrical and Electronic Engineering and Quantity Surveying. Our skilled academic staff is dedicated to delivering a unique learning experience that encompasses both theoretical knowledge and practical skills.",
      icon: 'https://i.ibb.co/kShBMnT/Engennering-1.png',
      cardStyle: { boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)', backgroundColor: '#f0f4c3', borderRadius: '12px' },
      buttonColor: 'linear-gradient(90deg, #1976D2, #42A5F5)'
    },
    {
      title: "School of Languages",
      img: "https://i.ibb.co/2NcNtyq/0-M8-A4745-1.png",
      description: "Mastering an additional language is a major advantage in any sector, enhancing your skills and opening new doors to opportunities. Whether you're learning the basics or aiming to enhance your existing knowledge, our school offers a diverse range of courses in English, Tamil and French languages.",
      icon: 'https://i.ibb.co/VMmGjGN/Group-23.png',
      cardStyle: { boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)', backgroundColor: '#fff3e0', borderRadius: '12px' },
      buttonColor: 'linear-gradient(90deg, #D32F2F, #F44336)'
    },
    {
      title: "School of Life Science",
      img: "https://i.ibb.co/kHp8bth/R5-A8121-1.png",
      description: "In Biomedical Engineering, students tackle healthcare challenges through a multidisciplinary journey. The program prepares professionals to advance medical technology, healthcare delivery, and overall well-being. Our school bridges biology and Biomedical Engineering, exploring the intersection of biology and healthcare, fostering innovation.",
      icon: 'https://i.ibb.co/jZ8XdwN/Group-25.png',
      cardStyle: { boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)', backgroundColor: '#c8e6c9', borderRadius: '12px' },
      buttonColor: 'linear-gradient(90deg, #388E3C, #66BB6A)'
    },
    {
      title: "School of Art & Design",
      img: "https://i.ibb.co/GHZ7gqT/0-M8-A5220-1.png",
      description: "Fashion design is not just a career; it's an exhilarating journey that opens doors to a world of opportunities. At Campus One, we foster an environment where innovation, style and individuality are celebrated. Our programs are designed to equip aspiring designers with the skills, knowledge and industry insights needed.",
      icon: 'https://i.ibb.co/nDTGrxg/Group-4.png',
      cardStyle: { boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)', backgroundColor: '#e8eaf6', borderRadius: '12px' },
      buttonColor: 'linear-gradient(90deg, #0288D1, #039BE5)'
    },
  ];

  // Pagination states
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  // Calculate the current news items to display
  const indexOfLastNewsItem = page * itemsPerPage;
  const indexOfFirstNewsItem = indexOfLastNewsItem - itemsPerPage;
  const currentNewsItems = newsItems.slice(indexOfFirstNewsItem, indexOfLastNewsItem);
  const totalPages = Math.ceil(newsItems.length / itemsPerPage);

  // Handle page change
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <>
      {/* First Section - Breadcrumbs */}
      <section
        style={{
          backgroundColor: '#8c837a',
          backgroundImage: 'url(https://i.ibb.co/XjLtjVq/breadcrumb-bkg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          margin: '0 auto',
          padding: '50px 0',
          height: '40vh',
          top: 0,
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)',
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            padding: 3,
            paddingTop: '50px',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {/* Breadcrumbs */}
          <Breadcrumbs
            aria-label="breadcrumb"
            sx={{
              marginBottom: 2,
              fontFamily: 'Noto Kufi Arabic, sans-serif',
              fontSize: '1.5rem',
              color: 'white',
            }}
          >
            <Link href="/" underline="hover" color="inherit">
              Home
            </Link>
            <Link href="/Department" underline="hover" color="inherit">
              Department
            </Link>
          </Breadcrumbs>
        </Container>
      </section>

      {/* Main Section for News Cards */}
      <section style={{ width: '100%', marginTop: '20px' }}>
        <Container maxWidth="xl" sx={{ padding: 3 }}>
          <Grid container spacing={3}>
            {currentNewsItems.map((news, index) => (
              <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
                <Card
                  sx={{
                    transition: '0.4s',
                    '&:hover': {
                      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                      transform: 'scale(1.05)',
                    },
                    borderRadius: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    ...news.cardStyle,
                    marginBottom: '20px',
                    border: '1px solid #ddd',
                  }}
                >
                  <CardMedia
                    component="img"
                    image={news.img}
                    alt={news.title}
                    sx={{
                      height: { xs: 180, sm: 200, md: 220 },
                      objectFit: 'cover',
                      borderTopLeftRadius: 2,
                      borderTopRightRadius: 2,
                    }}
                  />
                  <CardContent
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      flexGrow: 1,
                      paddingBottom: '20px',
                    }}
                  >
                    <Typography
                      variant="h6"
                      component="span"
                      sx={{
                        fontFamily: 'Noto Kufi Arabic, sans-serif',
                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <Grid container spacing={2}>
                        <Grid item xs={2}>
                          <img
                            src={news.icon}
                            style={{
                              height: "40px",
                              objectFit: "contain",
                            }}
                          />
                        </Grid>
                        <Grid item xs={10}>
                          {news.title}
                        </Grid>
                      </Grid>
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        fontFamily: 'Noto Kufi Arabic, sans-serif',
                        fontSize: '0.875rem',
                        marginTop: '10px',
                        color: '#424242',
                      }}
                    >
                      {news.description}
                    </Typography>
                    <Box mt={2}>
                      <RouterLink to={`/BlogView`} style={{ textDecoration: 'none' }}>
                        <Button
                          variant="contained"
                          sx={{
                            background: news.buttonColor,
                            color: '#fff',
                            '&:hover': { background: '#115293' },
                            padding: { xs: '8px 16px', sm: '10px 20px' },
                            fontSize: { xs: '0.875rem', sm: '1rem' },
                            borderRadius: '50px',
                            fontFamily: 'Noto Kufi Arabic, sans-serif',
                          }}
                          fullWidth
                        >
                          Read More
                        </Button>
                      </RouterLink>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Pagination Component */}
          <Box display="flex" justifyContent="center" sx={{ marginTop: 3 }}>
            <Pagination
              count={totalPages}
              page={page}
              onChange={handlePageChange}
              color="primary"
              variant="outlined"
              shape="rounded"
            />
          </Box>
        </Container>
      </section>
    </>
  );
}
