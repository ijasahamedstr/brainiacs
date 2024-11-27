import React from "react";
import {
  Container,
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  Grid, 
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css"; // Swiper default styles
import "swiper/css/pagination"; // Pagination styles (if used)
import "swiper/css/navigation"; // Navigation styles (if used)


function CouresMain() {
  const products = [
    {
      title: "School of Engineering",
      categories: "Level 4 Diploma in Software Engineering",
      description: "Foundation Year in IT – Kingston University (UK)",
      imageUrl: "https://via.placeholder.com/400", // Placeholder image URL
    },
    {
      title: "School of Engineering",
      categories: "Diploma Level",
      description: "Stylish and efficient laptop for professionals.",
      imageUrl: "https://via.placeholder.com/400", // Placeholder image URL
    },
    {
      title: "School of Engineering",
      categories: "Undergraduate Level",
      description: "Stylish and efficient laptop for professionals.",
      imageUrl: "https://via.placeholder.com/400", // Placeholder image URL
    },
    {
      title: "School of Engineering",
      categories: "Higher National Diploma Level",
      description: "Reliable and durable business laptop.",
      imageUrl: "https://via.placeholder.com/400", // Placeholder image URL
    },
    {
      title: "School of Engineering",
      categories: "Undergraduate Level",
      description: "Premium laptop for demanding tasks.",
      imageUrl: "https://via.placeholder.com/400", // Placeholder image URL
    },
    {
      title: "School of Engineering",
      categories: "Higher National Diploma Level",
      description: "Stylish and efficient laptop for professionals.",
      imageUrl: "https://via.placeholder.com/400", // Placeholder image URL
    },
  ];

  return (
    <section style={{ backgroundColor: '#f2f3f4', width: '100%', margin: '0 auto', marginTop: '-30px' }}>
      <Container maxWidth="xl" sx={{ padding: 3, paddingTop: '50px' }}>
        {/* Heading and Button on Same Line */}
        <Grid container spacing={2}>
          {/* Row 1 */}
          <Grid item xs={12} sm={4}>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontFamily: "Noto Kufi Arabic, sans-serif",
                fontWeight: "bold",
                color: "#333",
                fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
                textAlign: "center", // Center the title text
              }}
            >
              Explore Our <span style={{ color: "#0073e6" }}>Courses</span>
            </Typography>
            <hr
              style={{
                border: "none",
                height: "4px",
                backgroundColor: "#33b24c",
                width: "10%", // Default width for larger screens
                alignSelf: "center", // Center the horizontal rule
                margin: "20px auto", // Center horizontally with some margin for spacing
              }}
              className="horizontal-line"
            />
          </Grid>
          <Grid item xs={12} sm={4} container justifyContent="flex-end">
            <Button
              variant="contained"
              color="primary"
              sx={{
                fontFamily: "Noto Kufi Arabic, sans-serif",
                fontWeight: "bold",
                textTransform: "none",
                borderRadius: 2,
                padding: "10px 20px",
                backgroundColor: "#0073e6",
                "&:hover": {
                  backgroundColor: "#005bb5",
                },
                display: { xs: "none", sm: "inline-block" }, // Hide on mobile (xs)
                height:'50px'
              }}
            >
              All Courses
            </Button>
          </Grid>
        </Grid>

        {/* Swiper Section */}
        <Swiper
          spaceBetween={20}
          slidesPerView="auto"
          loop={true}
          centeredSlides={true}
          grabCursor={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            600: { slidesPerView: 2 },
            900: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <Card
                sx={{
                  position: 'relative',
                  transition: '0.3s',
                  '&:hover': {
                    boxShadow: 6,
                    transform: 'scale(1.05)',
                  },
                  borderRadius: 3,
                  border: '1px solid #ddd',
                  boxShadow: 2,
                  backgroundImage: `url(${product.imageUrl})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: 400,
                  width: '100%',
                }}
              >
                {/* Content Box at the Top */}
                <Box display="flex" justifyContent="space-between" p={2}>
                  <Typography
                    variant="h6"
                    component="span"
                    sx={{
                      fontFamily: 'Noto Kufi Arabic, sans-serif',
                      fontSize: { xs: '0.8rem', sm: '0.9rem' },
                      fontWeight: 'bold',
                      color: 'white',
                    }}
                  >
                    {product.title} | {product.categories}
                  </Typography>
                </Box>

                {/* CardContent at the bottom */}
                <CardContent
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: 2,
                    background: 'linear-gradient(to right, #0073e6, #005bb5)',
                    color: 'white',
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: 'Noto Kufi Arabic, sans-serif',
                      fontSize: { xs: '0.75rem', sm: '0.875rem' },
                    }}
                  >
                    {product.description}
                  </Typography>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
}

export default CouresMain;
