import { Container, Breadcrumbs, Link, Box, Typography,Grid } from '@mui/material';

export default function Contactus() {
  return (
    <>
      <section
        style={{
          backgroundColor: '#8c837a', // Updated background color
          backgroundImage: 'url(https://i.ibb.co/XjLtjVq/breadcrumb-bkg.jpg)', // Background image for the section
          backgroundSize: 'cover', // Ensures the background image covers the whole section
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          margin: '0 auto',
          padding: '50px 0', // Padding around the section
          height: '40vh', // 30% of the viewport height
          top: 0, // Ensures the section stays at the top when scrolling
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)', // Adds black shadow with transparency
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            padding: 3,
            paddingTop: '50px', // Adjusts the padding at the top
            height: '100%', // Ensures the container takes up the full height of the section
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center', // Centers the content vertically
            alignItems: 'center', // Centers the content horizontally
          }}
        >
          {/* Breadcrumbs */}
          <Breadcrumbs
            aria-label="breadcrumb"
            sx={{
              marginBottom: 2,
              fontFamily: 'Noto Kufi Arabic, sans-serif',
              fontSize: '1.5rem', // Increased font size for better visibility
              color: 'white', // Ensures breadcrumb text is visible
            }}
          >
            <Link href="/" underline="hover" color="inherit">
              Home
            </Link>
            <Link href="/contactus" underline="hover" color="inherit">
              Contact Us
            </Link>
          </Breadcrumbs>
        </Container>
      </section>
      <section
      style={{
        width: "100%",
        margin: "0 auto",
        marginBottom: "30px",
        display: "flex",
        justifyContent: "center", // Horizontally center the content
        alignItems: "center", // Vertically center the content
        height: "auto", // Adjust height to fit the content
        paddingTop: "40px", // More padding at the top for balance
        backgroundImage: 'url("https://your-image-url.com/image.jpg")', // Replace with your image URL
        backgroundSize: "cover", // Ensure the background covers the entire section
        backgroundPosition: "center", // Center the background image
        backgroundAttachment: "fixed", // Make the background stay fixed on scroll
        marginTop: '-30px',
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          paddingX: { xs: 2, sm: 3, md: 5 }, // Responsive padding for different screen sizes
          textAlign: "center", // Center text for all screen sizes
          marginTop: '30px',
          marginBottom: '30px',
        }}
      >
        {/* New Three-Column Layout */}
        <Grid container spacing={4}>
          {/* Column 1 */}
          <Grid item xs={12} sm={4}>
            <Box sx={{
              padding: 3,
              backgroundColor: "#fff",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Light shadow
              borderRadius: 2,
              minHeight: '200px', // Set minimum height for uniformity
              border: '1px solid #e0e0e0', // Add a subtle border
              transition: 'transform 0.3s ease-in-out', // Add transition for smooth zoom
              '&:hover': {
                transform: 'scale(1.05)', // Zoom in on hover
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', // Add shadow on hover for depth
              }
            }}>
              {/* Icon or Image */}
              <img
                src="https://i.ibb.co/zhMX1ZW/rb-53-Photoroom.png" // Replace with your icon/image URL
                alt="Contact"
                style={{
                  width: '100px',
                  height: '100px',
                  marginBottom: '20px',
                  objectFit: 'contain'
                }}
              />
              <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2, fontFamily: "Noto Kufi Arabic" }}>
                Our Location
              </Typography>
              <Typography variant="body1" sx={{ fontFamily: "Noto Kufi Arabic"}}>
                No. 100, Alivanniyar Road, Sammanthurai.
              </Typography>
            </Box>
          </Grid>

          {/* Column 2 */}
          <Grid item xs={12} sm={4}>
            <Box sx={{
              padding: 3,
              backgroundColor: "#fff",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Light shadow
              borderRadius: 2,
              minHeight: '200px', // Ensure equal height for the boxes
              border: '1px solid #e0e0e0', // Add a subtle border
              transition: 'transform 0.3s ease-in-out', // Add transition for smooth zoom
              '&:hover': {
                transform: 'scale(1.05)', // Zoom in on hover
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', // Add shadow on hover for depth
              }
            }}>
              {/* Icon or Image */}
              <img
                src="https://i.ibb.co/swSc6nt/89745909-Phone-icon-removebg-preview.png" // Replace with your icon/image URL
                alt="Map"
                style={{
                  width: '100px',
                  height: '100px',
                  marginBottom: '20px',
                  objectFit: 'contain'
                }}
              />
              <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2, fontFamily: "Noto Kufi Arabic" }}>
                Contact Us
              </Typography>
              <Typography variant="body1" sx={{ fontFamily: "Noto Kufi Arabic"}}>
                Mobile: (+094) 67 2260200
              </Typography>
            </Box>
          </Grid>

          {/* Column 3 */}
          <Grid item xs={12} sm={4}>
            <Box sx={{
              padding: 3,
              backgroundColor: "#fff",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Light shadow
              borderRadius: 2,
              minHeight: '200px', // Ensure equal height for the boxes
              border: '1px solid #e0e0e0', // Add a subtle border
              transition: 'transform 0.3s ease-in-out', // Add transition for smooth zoom
              '&:hover': {
                transform: 'scale(1.05)', // Zoom in on hover
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', // Add shadow on hover for depth
              }
            }}>
              {/* Icon or Image */}
              <img
                src="https://i.ibb.co/7WJ4tmX/email-icon-3d-render-illustration-removebg-preview.png" // Replace with your icon/image URL
                alt="Support"
                style={{
                  width: '100px',
                  height: '100px',
                  marginBottom: '20px',
                  objectFit: 'contain'
                }}
              />
              <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2 , fontFamily: "Noto Kufi Arabic",}}>
                Support
              </Typography>
              <Typography variant="body1" sx={{ fontFamily: "Noto Kufi Arabic"}}>
                info@brainiacs.edu.lk
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
    <section
      style={{
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
        marginTop: '-30px',
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          paddingX: { xs: 2, sm: 3, md: 5 }, // Responsive padding for different screen sizes
          textAlign: "center", // Center text for all screen sizes
          marginTop: '30px',
          marginBottom: '30px',
        }}
      >
        {/* New Two-Column Layout */}
        <Grid container spacing={4}>
          {/* Google Map Column */}
          <Grid item xs={12} sm={6}>
              {/* Google Map Embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15827.59436569327!2d81.804016!3d7.365263!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae515f138dba635%3A0x3e7d23653771920d!2s9R83%2B4J2%2C%20Sammanthurai%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1733393843235!5m2!1sen!2sus"
                width="100%" // Responsive width
                height="400" // Adjust height to fit container
                style={{ border: "0", borderRadius: "8px" }}
                allowFullScreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
          </Grid>
          {/* Contact Form Column */}
          <Grid item xs={12} sm={6}>
            {/* Contact Form */}
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                marginBottom: 2,
                textAlign: "left",
                fontFamily: "Noto Kufi Arabic", // Correct usage of font-family
              }}
            >
              Contact Us
            </Typography>

            <form>
              <Box sx={{ marginBottom: 2 }}>
                <input
                  type="text"
                  placeholder="Your Name"
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "10px", // Apply rounded corners to input
                    border: "1px solid #e0e0e0",
                    fontSize: "16px",
                    fontFamily: "Noto Kufi Arabic",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Box shadow for input
                    transition: "box-shadow 0.3s ease", // Smooth transition for shadow
                  }}
                  onFocus={(e) => e.target.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)"} // Darker shadow on focus
                  onBlur={(e) => e.target.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)"} // Reset shadow on blur
                />
              </Box>
              <Box sx={{ marginBottom: 2 }}>
                <input
                  type="email"
                  placeholder="Your Email"
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "10px", // Apply rounded corners to input
                    border: "1px solid #e0e0e0",
                    fontSize: "16px",
                    fontFamily: "Noto Kufi Arabic",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Box shadow for input
                    transition: "box-shadow 0.3s ease", // Smooth transition for shadow
                  }}
                  onFocus={(e) => e.target.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)"} // Darker shadow on focus
                  onBlur={(e) => e.target.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)"} // Reset shadow on blur
                />
              </Box>
              <Box sx={{ marginBottom: 2 }}>
                <input
                  type="tel" // Use type="tel" for mobile number
                  placeholder="Your Mobile Number"
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "10px", // Apply rounded corners to input
                    border: "1px solid #e0e0e0",
                    fontSize: "16px",
                    fontFamily: "Noto Kufi Arabic",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Box shadow for input
                    transition: "box-shadow 0.3s ease", // Smooth transition for shadow
                  }}
                  onFocus={(e) => e.target.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)"} // Darker shadow on focus
                  onBlur={(e) => e.target.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)"} // Reset shadow on blur
                />
              </Box>
              <Box sx={{ marginBottom: 2 }}>
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "10px", // Apply rounded corners to textarea
                    border: "1px solid #e0e0e0",
                    fontSize: "16px",
                    fontFamily: "Noto Kufi Arabic",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Box shadow for textarea
                    transition: "box-shadow 0.3s ease", // Smooth transition for shadow
                  }}
                  onFocus={(e) => e.target.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)"} // Darker shadow on focus
                  onBlur={(e) => e.target.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)"} // Reset shadow on blur
                />
              </Box>
              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "10px",
                  color: "white", // Text color
                  backgroundImage: "linear-gradient(to right, #0073e6, #005bb5)", // Linear gradient from blue to darker blue
                  borderRadius: "10px", // Rounded corners
                  border: "none",
                  fontSize: "16px",
                  cursor: "pointer",
                  fontFamily: "Noto Kufi Arabic", // Custom font
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Box shadow for button
                  transition: "box-shadow 0.3s ease", // Smooth transition for shadow
                }}
                onFocus={(e) => e.target.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)"} // Darker shadow on focus
                onBlur={(e) => e.target.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)"} // Reset shadow on blur
              >
                Send Message
              </button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </section>
    </>
  );
}
