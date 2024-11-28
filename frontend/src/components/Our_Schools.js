import React from "react";
import { Container, Typography, Grid, Button } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'; // Import the right arrow icon

function OurSchools() {
  return (
    <section
      style={{
        backgroundColor: '#f2f3f4',
        backgroundImage: 'url(https://i.ibb.co/cTJ92rZ/16991932-1.jpg)', 
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        margin: '0 auto',
        marginTop: '-30px',
        padding: '50px 0',
      }}
    >
      <Container maxWidth="xl" sx={{ padding: 3, paddingTop: '50px' }}>
        <Grid container spacing={2} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          {/* Left Column (30% width) */}
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontFamily: "Noto Kufi Arabic, sans-serif",
                fontWeight: "bold",
                color: "#333",
                fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
              }}
            >
              Our <span style={{ color: "#0073e6" }}>Schools</span>
            </Typography>
            <hr
              style={{
                border: "none",
                height: "4px",
                backgroundColor: "#33b24c",
                width: "10%",
                marginTop: '10px',
              }}
            />
          </Grid>

          {/* Right Column (70% width) */}
          <Grid item xs={12} sm={8}>
            <Typography variant="body1" sx={{ marginTop: 2, fontFamily: "Noto Kufi Arabic", fontSize: { xs: '1rem', sm: '1.3rem' } }}>
              Join us in this diverse and enriching academic landscape, where each school is a gateway to a world of endless possibilities. Your journey to unparalleled excellence begins here!
            </Typography>

            {/* View Our Schools Button */}
            <Button
              variant="contained"
              color="primary"
              sx={{
                marginTop: 3,
                fontFamily: "Noto Kufi Arabic, sans-serif",
                fontWeight: "bold",
                textTransform: "none",
                borderRadius: 2,
                padding: "10px 20px",
                backgroundColor: "#0073e6",
                "&:hover": {
                  backgroundColor: "#005bb5",
                },
              }}
            >
              View Our Schools
            </Button>
          </Grid>
        </Grid>

        {/* Grid Layout for Cards (Responsive) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", // Responsive grid columns
            gap: "20px",
            width: "100%",
            padding: "0 20px",
            fontFamily: "Noto Kufi Arabic",
            marginTop: "30px",
          }}
        >
          {/* Cards */}
          {[
            { name: 'School of Computing', image: 'https://i.ibb.co/3mqPrqG/31193957-19927.jpg' },
            { name: 'School of Management & Law', image: 'https://i.ibb.co/nkDLjq4/1003-235.jpg' },
            { name: 'School of Engineering', image: 'https://i.ibb.co/vPvzhfP/174732726-ae9dfb56-e33c-481f-ac24-b091dfc1e2d7-removebg-preview.png' },
            { name: 'School of Languages', image: 'https://i.ibb.co/m6bNcv0/177733611-7034fbd0-14fb-43a5-93e4-d572bbe99e6a.jpg' },
            { name: 'School of Life Science', image: 'https://i.ibb.co/7CLJt3g/rb-6711.png' },
            { name: 'School of Art & Design', image: 'https://i.ibb.co/R7fv2dP/rb-2148506879.png' },
          ].map((school, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#fff",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                transition: "transform 0.3s ease-in-out, background-color 0.3s, color 0.3s",
                cursor: "pointer",
              }}
              className="icon-card"
            >
              {/* Display image for the school */}
              <img
                src={school.image} // Corrected image path
                alt={school.name}
                style={{
                  width: "60px",
                  height: "60px",
                  objectFit: "cover",
                  marginBottom: "10px",
                  transition: "transform 0.3s ease-in-out",
                }}
              />
              <p style={{ textAlign: "center", margin: 0, fontSize: "16px", fontWeight: "bold" }}>
                {school.name}
              </p>
              {/* Right Arrow */}
              <ArrowForwardIcon 
                sx={{
                  marginTop: "10px",
                  color: "#0073e6",
                  fontSize: "30px",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateX(5px)", // Add horizontal hover effect
                  },
                }}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default OurSchools;
