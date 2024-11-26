import React from "react";
import { Box, Typography, Container } from "@mui/material";

// Array of image URLs for the slider
function VisionandMission() {
  return (
    <Box
      sx={{
        backgroundColor: "#f2f3f4",
        backgroundImage: "url('https://i.ibb.co/3C0dxrq/5651.jpg')", // Replace with your image URL
        backgroundSize: "cover", // Ensures the image covers the full area
        backgroundPosition: "center", // Centers the image
        width: "100%",
        margin: "0 auto",
        marginBottom: "0px",
        display: "flex",
        justifyContent: "flex-start", // Align content to the left
        alignItems: "center", // Center items vertically
        minHeight: "40vh",
        paddingTop: "20px",
        paddingBottom: "20px",
        position: "relative",
        textAlign: "left", // Align text to the left
        "@media (max-width: 1200px)": {
          minHeight: "100vh", // Adjust minHeight for tablets
        },
        "@media (max-width: 900px)": {
          minHeight: "60vh", // Adjust minHeight for smaller screens
        },
        "@media (max-width: 600px)": {
          minHeight: "100vh", // Full screen on mobile
          marginTop: "0",
          padding: "10px",
          textAlign: "center", // Center the text for smaller screens
        },
        marginTop: '-30px',
      }}
    >
      {/* Container added for better layout */}
      <Container
        sx={{
          display: "flex", // Added flex display for better alignment control
          flexDirection: "column", // Ensure the content is stacked vertically
          alignItems: "flex-start", // Ensuring content aligns to the left
          textAlign: "left", // Left-align text on larger screens
          maxWidth: "50%", // This ensures the container takes up 50% of the width
          "@media (max-width: 900px)": {
            maxWidth: "80%", // On smaller screens, allow more width
          },
          "@media (max-width: 600px)": {
            maxWidth: "100%", // Full width on mobile
            textAlign: "center", // Center text for smaller screens
          },
        }}
      >
        <Typography
          variant="h4"
          component="h3"
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
            color: "#333",
            marginTop: "40px", // Margin top for spacing
            opacity: 0, // Start hidden
            animation: "slideIn 1s forwards", // Animation to slide in text
            "@keyframes slideIn": {
              "0%": {
                transform: "translateX(100%)", // Start offscreen to the right
                opacity: 0,
              },
              "100%": {
                transform: "translateX(0)", // End at original position
                opacity: 1,
              },
            },
          }}
        >
          Our Vision
        </Typography>

        <Typography
          variant="h6"
          sx={{
            marginTop:'15px',
            color: "white", // Ensuring the text is visible against the background
            fontWeight: "bold",
            textShadow:
              "2px 2px 4px rgba(0, 0, 0, 0.7), -2px -2px 4px rgba(0, 0, 0, 0.7), 2px -2px 4px rgba(0, 0, 0, 0.7), -2px 2px 4px rgba(0, 0, 0, 0.7)", // Adding a shadow to create a black outline effect
            maxWidth: "100%", // Limiting the width to make the text look better on large screens
            margin: "0 auto", // Center text on large screens
            opacity: 0, // Start hidden
            animation: "slideIn 1.5s forwards", // Slightly slower slide-in for the second line
            "@keyframes slideIn": {
              "0%": {
                transform: "translateX(100%)", // Start offscreen to the right
                opacity: 0,
              },
              "100%": {
                transform: "translateX(0)", // End at original position
                opacity: 1,
              },
            },
            "@media (max-width: 900px)": {
              fontSize: "1.75rem", // Reduce font size for tablets and smaller screens
              maxWidth: "90%", // Adjust max width for tablets and smaller screens
            },
            "@media (max-width: 600px)": {
              fontSize: "1.5rem", // Smaller font size for mobile
              maxWidth: "100%", // Take up more space on mobile
            },
          }}
        >
          To emerge as the most sought-after education and training partner in the region by making a meaningful contribution towards building a knowledgeable society.
        </Typography>
      </Container>
    </Box>
  );
}

export default VisionandMission;
