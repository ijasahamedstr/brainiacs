import React from "react";
import { Container, Typography, Grid, Card, CardContent } from "@mui/material";

// Sample news data (You can replace this with real API data or a different source)
const newsData = [
  {
    headline: "Breaking News: Major Event",
    description: "Details about the event and its impact on the world. Stay tuned for more updates.",
    image: "https://via.placeholder.com/150",
  },
  {
    headline: "Tech Innovation: New AI Revolution",
    description: "A breakthrough in AI technology could change how we interact with the digital world.",
    image: "https://via.placeholder.com/150",
  },
  {
    headline: "Global Economy Update",
    description: "A look at the recent shifts in the global economy and what it means for businesses worldwide.",
    image: "https://via.placeholder.com/150",
  },
  {
    headline: "Sports: Big Match Results",
    description: "Exciting finish in the championship game! Here's a breakdown of the top moments.",
    image: "https://via.placeholder.com/150",
  },
  {
    headline: "Health Alert: New Medical Findings",
    description: "New research shows surprising results in health studies. What this means for the future.",
    image: "https://via.placeholder.com/150",
  },
  {
    headline: "Health Alert: New Medical Findings",
    description: "New research shows surprising results in health studies. What this means for the future.",
    image: "https://via.placeholder.com/150",
  },
];

function News() {
  return (
    <section
      style={{
        backgroundColor: '#f2f3f4',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        margin: '0 auto',
        marginTop: '-50px',
        padding: '50px 0',
      }}
    >
      <Container maxWidth="xl" sx={{ padding: 3, paddingTop: '50px' }}>
        {/* Main Heading */}
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
          Latest <span style={{ color: "#0073e6" }}>News</span>
        </Typography>
        <hr
          style={{
            border: "none",
            height: "4px",
            backgroundColor: "#33b24c",
            width: "5%", // Default width for larger screens
            alignSelf: "center", // Center the horizontal rule
            margin: "20px auto", // Center horizontally with some margin for spacing
          }}
          className="horizontal-line"
        />

        <Grid container spacing={4} sx={{marginTop:'20px'}}>
          {/* Left - Big News Card */}
          <Grid item xs={12} md={8}>
            <Card
              sx={{
                backgroundColor: '#ffffff',
                padding: 2,
                boxShadow: 6, // Increase shadow for depth
                borderRadius: 2, // Rounded corners for the card
                '&:hover': { boxShadow: 10, transform: 'scale(1.05)' }, // Hover effect to zoom and increase shadow
                transition: 'all 0.3s ease', // Smooth transition for hover effect
              }}
            >
              <img
                src="https://via.placeholder.com/800x400"
                alt="Big News"
                style={{
                  width: '100%',
                  borderRadius: '8px', // Ensure border radius is applied here
                  height: 'auto', // Ensure aspect ratio is maintained
                }}
              />
              <CardContent>
                <Typography variant="h4" component="h2" gutterBottom style={{ fontFamily: "Noto Kufi Arabic, sans-serif" }}>
                  Big News Headline
                </Typography>
                <Typography variant="body1" paragraph style={{ fontFamily: "Noto Kufi Arabic, sans-serif" }}>
                  This is the detailed description of the big news. It is the most important
                  news item and takes the central focus on the page.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Right - News List Cards */}
          <Grid item xs={12} md={4}>
            <Grid container spacing={2}>
              {/* Dynamically generate the news list cards */}
              {newsData.map((news, index) => (
                <Grid item xs={12} sm={6} md={12} key={index}>
                  <Card
                    sx={{
                      display: 'flex',
                      boxShadow: 3,
                      borderRadius: 2, // Rounded corners
                      '&:hover': { boxShadow: 6, transform: 'scale(1.05)' }, // Hover effect to zoom and increase shadow
                      transition: 'all 0.3s ease', // Smooth transition for hover effect
                    }}
                  >
                    <img
                      src={news.image}
                      alt={`News ${index + 1}`}
                      style={{
                        width: '100px', // Adjust image size for better fit
                        height: '100px', // Maintain square aspect ratio for images
                        borderRadius: '8px', // Apply border-radius to images
                        marginRight: '16px', // Space between image and text
                        padding: '10px', // Add padding around the image
                        objectFit: 'cover', // Maintain aspect ratio of images
                      }}
                    />
                    <CardContent>
                      <Typography variant="h6" component="h5" style={{ fontFamily: "Noto Kufi Arabic, sans-serif", fontSize: '15px' }}>
                        {news.headline}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" style={{ fontFamily: "Noto Kufi Arabic, sans-serif", fontSize: '12px' }}>
                        {news.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default News;
