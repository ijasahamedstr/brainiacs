import React from "react";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Badge,
  Button,
} from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css"; // Swiper default styles
import "swiper/css/pagination"; // Pagination styles (if used)
import "swiper/css/navigation"; // Navigation styles (if used)

function CouresMain() {
  const products = [
    { title: "HP Notebook", img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp", combo: "x4", price: "$899" },
    { title: "HP Envy", img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/7.webp", combo: "x2", price: "$750" },
    { title: "Toshiba B77", img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/5.webp", combo: "x3", price: "$499" },
    { title: "Lenovo ThinkPad", img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/6.webp", combo: "x1", price: "$650" },
    { title: "Dell XPS 13", img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/8.webp", combo: "x2", price: "$999" },
    { title: "Asus ZenBook", img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/9.webp", combo: "x1", price: "$699" },
  ];

  return (
    <section style={{ backgroundColor: '#f2f3f4', width: '100%', margin: '0 auto', marginTop: '-30px' }}>
      <Container maxWidth="xl" sx={{ padding: 3 }}>
        {/* Heading Section */}
        <Box mb={4} textAlign="center">
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontFamily: 'Noto Kufi Arabic, sans-serif',
              fontWeight: 'bold',
              color: '#333',
              fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }
            }}
          >
            Explore Our Courses
          </Typography>
        </Box>

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
            900: { slidesPerView: 3 },  // Three cards for medium screens
            1024: { slidesPerView: 5 }, // Five cards for large screens
          }}
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <Card
                sx={{
                  transition: '0.3s',
                  '&:hover': {
                    boxShadow: 4,
                    transform: 'scale(1.02)',
                  },
                  borderRadius: 2,
                  border: '1px solid #ddd',
                  boxShadow: 3,
                }}
              >
                <Box display="flex" justifyContent="space-between" p={2}>
                  <Typography
                    variant="h6"
                    component="span"
                    sx={{
                      fontFamily: 'Noto Kufi Arabic, sans-serif',
                      fontSize: { xs: '0.8rem', sm: '0.9rem' },
                      fontWeight: 'bold',
                    }}
                  >
                    {product.title}
                  </Typography>
                  <Badge
                    badgeContent={product.combo}
                    color="info"
                    sx={{
                      borderRadius: "50%",
                      width: 35,
                      height: 35,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  />
                </Box>

                <CardMedia
                  component="img"
                  image={product.img}
                  alt={product.title}
                  sx={{
                    height: { xs: 150, sm: 200 },
                    objectFit: "cover",
                    borderTopLeftRadius: 2,
                    borderTopRightRadius: 2,
                    transition: '0.3s ease-in-out',
                    '&:hover': { opacity: 0.8 },
                  }}
                />

                <CardContent sx={{ padding: 2 }}>
                  <Typography
                    variant="h6"
                    color="primary"
                    sx={{
                      fontFamily: 'Noto Kufi Arabic, sans-serif',
                      fontWeight: 'bold',
                      fontSize: { xs: '0.875rem', sm: '1rem' }
                    }}
                  >
                    {product.price}
                  </Typography>

                  <Box mt={1}>
                    <Button
                      variant="contained"
                      startIcon={<AddShoppingCartIcon />}
                      sx={{
                        background: 'linear-gradient(90deg, #2196F3, #21CBF3)',
                        color: '#fff',
                        '&:hover': { background: '#115293' },
                        padding: { xs: '6px 12px', sm: '8px 16px' },
                        fontSize: { xs: '0.875rem', sm: '1rem' },
                      }}
                      fullWidth
                      style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}
                    >
                      أضف إلى السلة
                    </Button>
                  </Box>
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
