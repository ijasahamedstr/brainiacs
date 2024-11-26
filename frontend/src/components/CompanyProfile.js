import React from "react";
import { Container, Typography, Box, Button } from "@mui/material";

function CompanyProfile() {
  return (
    <section
      style={{
        backgroundColor: "#f2f3f4",
        width: "100%",
        margin: "0 auto",
        marginBottom: "30px",
        display: "flex",
        justifyContent: "center", // Horizontally center the content
        alignItems: "center", // Vertically center the content
        height: "auto", // Adjust height to fit the content
        paddingTop: "40px", // More padding at the top for balance
        paddingBottom: "40px", // Padding for the bottom
        backgroundImage: 'url("https://your-image-url.com/image.jpg")', // Replace with your image URL
        backgroundSize: "cover", // Ensure the background covers the entire section
        backgroundPosition: "center", // Center the background image
        backgroundAttachment: "fixed", // Make the background stay fixed on scroll
        marginTop: '-30px'
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          paddingX: { xs: 2, sm: 3, md: 5 }, // Responsive padding for different screen sizes
          textAlign: "center", // Center text for all screen sizes
          marginTop: '30px',
          marginBottom:'30px'
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" }, // Stack vertically on small screens, horizontally on larger
            justifyContent: "space-between", // Space between the elements
            alignItems: "center", // Center items vertically
            gap: 4, // Add some space between elements
            boxShadow: "0 0 15px rgba(0, 0, 0, 0.1), 0 0 30px rgba(0, 0, 0, 0.15)", // Stronger shadow
            border: "1px solid #ddd", // Border effect to enhance the shadow effect
            borderRadius: "16px", // Increased border radius for a more rounded look
            backgroundColor: "#fff", // White background for the content section
            padding: "30px", // Add padding inside the section
          }}
        >
          {/* Heading Section */}
          <Box
            sx={{
              flex: "0 0 30%", // Set the width of the heading to 30%
              textAlign: { xs: "center", sm: "left" }, // Center text on small screens, left-align on larger screens
            }}
          >
            <Typography
              variant="h4"
              component="h1"
              gutterBottom
              sx={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                color: "#333", // Dark color for the heading
              }}
              className="section-heading section-heading--black section-heading--underline section-heading--underline--left"
            >
              Welcome to
            </Typography>
            <Typography
              variant="h4"
              component="h1"
              gutterBottom
              sx={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                color: "#0073e6", // Adding a nice blue color to the second heading
              }}
              className="section-heading section-heading--black section-heading--underline section-heading--underline--left"
            >
              Brainiacs Campus
            </Typography>
            {/* Horizontal Rule Under the Heading */}
            <hr
              style={{
                border: "none", 
                height: "4px", 
                backgroundColor: "#33b24c", 
                width: "30%", // Default width for larger screens
                alignSelf: "flex-start", // Right-align the horizontal rule for larger screens
                margin: "20px auto", // Center horizontally with some margin for spacing
              }}
              className="horizontal-line"
            />
          </Box>

          {/* Description Section */}
          <Box
            sx={{
              flex: 1, // The description takes the remaining space
              textAlign: { xs: "center", sm: "left" }, // Center text on small screens, left-align on larger screens
            }}
          >
            <Typography
              variant="h6"
              component="h3"
              sx={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                color: "#333",
                marginTop: "40px", // Margin top for spacing
              }}
            >
              Shaping Lives, Creating Futures
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{
                fontFamily: "Poppins, sans-serif", // Apply the Poppins font
                fontWeight: 400, // Regular weight for the description
                color: "#666", // Light gray color for the description
                lineHeight: 2, // Increase line height for better readability
              }}
            >
              Welcome to Brainiacs Campus, a leading educational platform designed to empower students at every stage of their academic journey. At Brainiacs Campus, we believe that education is the key to unlocking potential and creating opportunities. Our mission is to provide accessible, high-quality education to students from all walks of life, whether you’re beginning your journey with certificate-level courses or advancing towards a master’s degree.
            </Typography>
            {/* Call to Action Button with Linear Gradient */}
            <Button
              variant="contained"
              sx={{
                backgroundImage: "linear-gradient(to right, #0073e6, #005bb5)", // Linear gradient from blue to darker blue
                color: "#fff", // White text
                fontWeight: "bold",
                padding: "12px 24px", // Button padding
                borderRadius: "8px", // Rounded corners
                "&:hover": {
                  backgroundImage: "linear-gradient(to right, #005bb5, #003f8e)", // Darker gradient on hover
                },
              }}
            >
              About us
            </Button>
          </Box>
        </Box>
      </Container>
    </section>
  );
}

export default CompanyProfile;
