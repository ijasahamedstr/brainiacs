import React, { useState } from 'react'; 
import { Container, Breadcrumbs, Link, Card, CardContent, CardMedia, Typography, Grid, Box, Button, Pagination } from '@mui/material';

export default function Blog() {
  const newsItems = [
    { 
      title: "Latest Technology Trends in 2024", 
      img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp",
      description: "Discover the latest trends in technology for 2024, including AI advancements, cybersecurity improvements, and more." 
    },
    { 
      title: "New AI Innovations and How They're Changing the World", 
      img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/7.webp",
      description: "AI is revolutionizing industries. This article explores the top AI innovations and their global impact." 
    },
    { 
      title: "The Future of Remote Work Post-Pandemic", 
      img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/5.webp", 
      description: "Remote work is here to stay. Learn about the new trends and technologies that are shaping the future of work." 
    },
    { 
      title: "Climate Change and the Impact on Global Economies", 
      img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/6.webp", 
      description: "This article discusses the economic consequences of climate change and how businesses are adapting." 
    },
    { 
      title: "Exploring the Growth of Electric Vehicles in 2024", 
      img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/8.webp", 
      description: "Electric vehicles are becoming mainstream. Find out how they are changing the automotive industry and the planet." 
    },
    { 
      title: "Space Exploration: New Milestones in the 21st Century", 
      img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/9.webp", 
      description: "Explore the exciting new milestones in space exploration, from Mars missions to private space travel." 
    },
    { 
        title: "The Future of Remote Work Post-Pandemic", 
        img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/5.webp", 
        description: "Remote work is here to stay. Learn about the new trends and technologies that are shaping the future of work." 
      },
      { 
        title: "Climate Change and the Impact on Global Economies", 
        img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/6.webp", 
        description: "This article discusses the economic consequences of climate change and how businesses are adapting." 
      },
      { 
        title: "Exploring the Growth of Electric Vehicles in 2024", 
        img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/8.webp", 
        description: "Electric vehicles are becoming mainstream. Find out how they are changing the automotive industry and the planet." 
      },
      { 
        title: "Space Exploration: New Milestones in the 21st Century", 
        img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/9.webp", 
        description: "Explore the exciting new milestones in space exploration, from Mars missions to private space travel." 
      },
  ];

  // Pagination states
  const [page, setPage] = useState(1);
  const itemsPerPage = 8; // Number of items per page

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
            <Link href="/blog" underline="hover" color="inherit">
              Blog
            </Link>
          </Breadcrumbs>
        </Container>
      </section>

      {/* Main Section for News Cards */}
      <section style={{ backgroundColor: '#f2f3f4', width: '100%', margin: '0 auto' }}>
        <Container maxWidth="xl" sx={{ padding: 3 }}>
          <Box display="flex" justifyContent="center" alignItems="center" sx={{ marginY: '20px' }}>
        
          </Box>
          <Grid container spacing={2}>
            {currentNewsItems.map((news, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Card
                  sx={{
                    transition: '0.3s',
                    '&:hover': {
                      boxShadow: 4,
                      transform: 'scale(1.02)',
                    },
                    borderRadius: 2,
                    display: 'flex',
                    flexDirection: 'column', // Ensure the content stretches vertically
                    height: '100%', // Allow the card to stretch to full height of its container
                  }}
                >
                  <CardMedia
                    component="img"
                    image={news.img}
                    alt={news.title}
                    sx={{
                      height: { xs: 150, sm: 200 },
                      objectFit: 'cover',
                      borderTopLeftRadius: 2,
                      borderTopRightRadius: 2,
                      paddingTop:'20px'
                    }}
                  />
                  <CardContent
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      flexGrow: 1, // Ensure the content stretches to fill available space
                    }}
                  >
                    <Typography variant="h6" component="span" sx={{ fontFamily: 'Noto Kufi Arabic, sans-serif', fontSize: '1rem' }}>
                      {news.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'Noto Kufi Arabic, sans-serif', fontSize: '0.875rem', marginTop: '10px' }}>
                      {news.description}
                    </Typography>
                    <Box mt={1}>
                      <Button
                        variant="contained"
                        sx={{
                          background: 'linear-gradient(90deg, #2196F3, #21CBF3)',
                          color: '#fff',
                          '&:hover': { background: '#115293' },
                          padding: { xs: '6px 12px', sm: '8px 16px' },
                          fontSize: { xs: '0.875rem', sm: '1rem' },
                          borderRadius: '50px', // Rounded button
                          fontFamily: 'Noto Kufi Arabic, sans-serif',
                        }}
                        fullWidth
                      >
                        Read More
                      </Button>
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
