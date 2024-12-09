import React from 'react'; 
import { Container, Breadcrumbs, Link, Grid, Card, Typography, Box, CardMedia, CardContent, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';  // Import react-router Link for client-side navigation
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper and SwiperSlide
import 'swiper/css';  // Correct CSS import for Swiper
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Sample listItems array (add your actual content here)
const listItems = [
  { title: 'Comprehensive Courses', description: 'We offer a wide range of courses from basic to advanced levels that cater to every learning need.' },
  { title: 'Experienced Instructors', description: 'Learn from industry experts who bring practical knowledge and experience into the classroom.' },
  { title: 'Flexible Learning', description: 'Study at your own pace with flexible schedules that allow you to balance life and education.' },
];

const newsItems = [
  { title: "Latest Technology Trends in 2024", img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp", description: "Discover the latest trends in technology for 2024, including AI advancements, cybersecurity improvements, and more." },
  { title: "New AI Innovations and How They're Changing the World", img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/7.webp", description: "AI is revolutionizing industries. This article explores the top AI innovations and their global impact." },
  { title: "The Future of Remote Work Post-Pandemic", img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/5.webp", description: "Remote work is here to stay. Learn about the new trends and technologies that are shaping the future of work." },
  { title: "Climate Change and the Impact on Global Economies", img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/6.webp", description: "This article discusses the economic consequences of climate change and how businesses are adapting." },
];

export default function BlogView() {
  return (
    <>
      {/* Breadcrumbs Section */}
      <section
        style={{
          backgroundColor: '#8c837a',
          backgroundImage: 'url(https://i.ibb.co/XjLtjVq/breadcrumb-bkg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '50px 0',
          height: '40vh',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)',
        }}
      >
        <Container
          maxWidth="xl"
          sx={{ paddingTop: '50px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
        >
          <Breadcrumbs aria-label="breadcrumb" sx={{ marginBottom: 2, fontFamily: 'Noto Kufi Arabic, sans-serif', fontSize: '1.5rem', color: 'white' }}>
            <Link href="/" underline="hover" color="inherit">Home</Link>
            <Link href="/blog" underline="hover" color="inherit">News</Link>
            <Link href="/blog" underline="hover" color="inherit">NewsName</Link>
          </Breadcrumbs>
        </Container>
      </section>

      {/* Main News Section */}
      <section
        style={{
          width: '100%',
          paddingTop: '40px',
          paddingBottom: '40px',
          backgroundImage: 'url("https://your-image-url.com/image.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          marginTop: '-30px',
        }}
      >
        <Container maxWidth="xl" sx={{ textAlign: 'center', marginTop: '30px', marginBottom: '30px' }}>
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{ fontFamily: 'Noto Kufi Arabic', fontWeight: 600, textAlign: 'center', color: 'black', marginBottom: '30px' }}
          >
            Welcome to <span style={{ color: '#0073e6' }}>Brainiacs Campus</span>
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <img
                src="https://i.ibb.co/k05WNqr/IMG-6166.jpg"
                alt="Description of Image"
                style={{ width: '100%', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Typography
                variant="body1"
                sx={{ fontSize: '18px', color: '#333', lineHeight: '1.6', textAlign: 'justify', fontFamily: 'Noto Kufi Arabic' }}
              >
                Welcome to Brainiacs Campus, a leading educational platform designed to empower students at every stage of their academic journey. At Brainiacs Campus, we believe that education is the key to unlocking potential and creating opportunities. Our mission is to provide accessible, high-quality education to students from all walks of life.
              </Typography>

              <ul style={{ marginTop: '30px', paddingLeft: '20px', listStyleType: 'none', fontFamily: 'Noto Kufi Arabic' }}>
                {listItems.map((item, index) => (
                  <li
                    key={index}
                    style={{
                      marginBottom: '20px',
                      paddingLeft: '30px',
                      background: "url('https://i.ibb.co/qs6LQPR/thumb-up-like-icon-social-media-sign-technology-design.png') no-repeat left center",
                      backgroundSize: '20px 20px',
                      textAlign: 'justify',
                    }}
                  >
                    <strong>{item.title}</strong>
                    <p style={{ fontSize: '15px', color: '#34495e' }}>{item.description}</p>
                  </li>
                ))}
              </ul>
            </Grid>
          </Grid>
        </Container>

        <Container maxWidth="xl" sx={{ paddingX: { xs: 2, sm: 3, md: 5 }, marginTop: '30px' }}>
          <Typography
            variant="body1"
            sx={{ fontSize: '18px', color: '#333', lineHeight: '1.6', textAlign: 'justify', fontFamily: 'Noto Kufi Arabic' }}
          >
            ESOFT Metro Campus has signed a 5-year MoU with FITIS to support the Young Computer Scientist (YCS) competition, empowering the next generation of tech leaders. The YCS competition, organized annually by the FITIS Software Chapter in collaboration with the Ministry of Education, encourages school students to explore and innovate with ICT applications.
          </Typography>

          {/* News Cards Section */}
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{
              fontFamily: 'Noto Kufi Arabic', // Custom font for Arabic style
              fontWeight: 600,               // Bold font weight
              textAlign: 'center',           // Center-aligned text
              color: 'black',                // Black text color
              paddingLeft: '20px',           // Adding some left padding for spacing
            }}
          >
            Related <span style={{ color: '#0073e6' }}>News</span>
          </Typography>

          {/* Horizontal Rule (HR) */}
          <hr
            style={{
              width: "5%",  // Adjust the width of the line
              margin: "20px auto",  // Center the line with some margin
              border: "3px solid #0073e6", // Color of the line, can be customized
              borderStyle: "solid", // Solid line style
            }}
          />

          {/* Card Slider Section using Swiper */}
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              600: {
                slidesPerView: 2,
              },
              900: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
            }}
            loop={true} // Enable loop for continuous scrolling
            autoplay={{ delay: 3000 }} // Auto-slide every 3 seconds
          >
            {newsItems.map((news, index) => (
              <SwiperSlide key={index}>
                <Card
                  sx={{
                    transition: '0.3s',
                    '&:hover': {
                      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', // Enhanced shadow effect on hover
                      transform: 'scale(1.05)', // Smooth card scaling on hover
                    },
                    borderRadius: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%', // Ensures card stretches fully
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Soft default shadow
                    marginBottom: '20px',
                    border: '1px solid #ddd',
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
                    }}
                  />
                  <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flexGrow: 1, paddingBottom: '20px' }}>
                    <Typography variant="h6" component="span" sx={{ fontFamily: 'Noto Kufi Arabic, sans-serif', fontSize: '1rem', fontWeight: 'bold' }}>
                      {news.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'Noto Kufi Arabic, sans-serif', fontSize: '0.875rem', marginTop: '10px' }}>
                      {news.description}
                    </Typography>
                    <Box mt={2}>
                      <RouterLink to={`/BlogView`} style={{ textDecoration: 'none' }}>
                        <Button
                          variant="contained"
                          sx={{
                            background: 'linear-gradient(90deg, #2196F3, #21CBF3)',
                            color: '#fff',
                            '&:hover': { background: '#115293' },
                            padding: { xs: '8px 16px', sm: '10px 20px' },
                            fontSize: { xs: '0.875rem', sm: '1rem' },
                            borderRadius: '50px', // Rounded corners for the button
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
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </section>
    </>
  );
}
