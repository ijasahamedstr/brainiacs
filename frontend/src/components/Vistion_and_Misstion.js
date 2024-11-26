import React from "react";
import { Box, Container } from "@mui/material";

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

      </Container>
    </Box>
  );
}

export default VisionandMission;
