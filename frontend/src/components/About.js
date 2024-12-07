import React, { useState } from "react";
import { Container, Grid, Breadcrumbs, Link, Typography, Box, Card, AppBar, Tabs, Tab } from "@mui/material";
import { keyframes } from "@emotion/react"; // Import keyframes

// Define hover animation using keyframes
const hoverAnimation = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  100% {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
`;

const Aboutus = () => {
  const newsData = [
    {
      image: "https://via.placeholder.com/100",
      headline: "Course Update: New Features!",
      description: "Learn about the exciting new features in our courses.",
    },
    {
      image: "https://via.placeholder.com/100",
      headline: "Upcoming Webinars",
      description: "Join our free webinars for exclusive insights.",
    },
    {
      image: "https://via.placeholder.com/100",
      headline: "Success Stories",
      description: "Read about the success stories of our students.",
    },
  ];

  const listItems = [
    {
      title: "Transforming lives",
      description: "Not everyone is talented for the same thing. That’s why we have the word “difference” in our dictionaries. Lanka Academy is there to give value to individual skills and push our students to the ladder of success through e-learning. Anyone, anywhere can join with us and transform their lives through quality education.",
    },
    {
      title: "Enhancing professionalism",
      description: "We believe that Lanka Academy will be an entry for both our students and instructors to tackle local and international market spaces.",
    },
    {
      title: "Our instructors",
      description: "Our instructors are enthusiastic and passionate where students get an opportunity to learn from well qualified and experienced instructors with value for money.",
    }
  ];

  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const tabContent = [
    {
      label: "Vision",
      content: "To provide quality education with value for money in an entertaining and interactive manner."
    },
    {
      label: "Mission",
      content: "To be the most respected and trusted online education provider in Sri Lanka."
    },
  ];

  return (
    <>
      {/* Section with Background Image */}
      <section
        style={{
          backgroundColor: "#8c837a",
          backgroundImage: "url(https://i.ibb.co/XjLtjVq/breadcrumb-bkg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          padding: "50px 0",
          height: "40vh",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5)",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            paddingTop: "50px",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Breadcrumbs
            aria-label="breadcrumb"
            sx={{
              marginBottom: 2,
              fontFamily: "Noto Kufi Arabic, sans-serif",
              fontSize: "1.5rem",
              color: "white",
            }}
          >
            <Link href="/" underline="hover" color="inherit">
              Home
            </Link>
            <Link href="/About" underline="hover" color="inherit">
              About-us
            </Link>
          </Breadcrumbs>
        </Container>
      </section>

      {/* Section with Content and Image */}
      <section
        style={{
          width: "100%",
          paddingTop: "40px",
          paddingBottom: "40px",
          backgroundImage: 'url("https://your-image-url.com/image.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          marginTop: "-30px",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            paddingX: { xs: 2, sm: 3, md: 5 },
            textAlign: "center",
            marginTop: "30px",
            marginBottom: "30px",
          }}
        >
          <Grid container spacing={4}>
            {/* Left Column (60%) - Heading and Description */}
            <Grid item xs={12} sm={7} md={7}>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 2 }}>
                <Card
                  sx={{
                    width: '100%',
                    maxWidth: 800,
                    padding: 4,
                    borderRadius: 4,
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    animation: `${hoverAnimation} 0.3s ease-in-out`,
                    '&:hover': {
                      transform: 'scale(1.05)',
                      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
                    },
                  }}
                >
                  <Typography
                    variant="h4"
                    component="h1"
                    gutterBottom
                    sx={{
                      fontFamily: 'Noto Kufi Arabic',
                      fontWeight: 600,
                      textAlign: 'left',
                      color: 'black',
                    }}
                  >
                    Welcome to <span style={{ color: '#0073e6' }}>Brainiacs Campus</span>
                  </Typography>
                </Card>
              </Box>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "18px",
                  color: "#333",
                  lineHeight: "1.6",
                  textAlign: "left",
                  fontFamily: 'Noto Kufi Arabic',
                  marginLeft: '20px',
                }}
              >
                Welcome to Brainiacs Campus, a leading educational platform designed to empower students at every stage of their academic journey. At Brainiacs Campus, we believe that education is the key to unlocking potential and creating opportunities. Our mission is to provide accessible, high-quality education to students from all walks of life, whether you’re beginning your journey with certificate-level courses or advancing towards a master’s degree.
              </Typography>

              {/* List of items with description */}
              <ul style={{ margin: 0, paddingLeft: '20px', listStyleType: 'none', marginTop: '30px', fontFamily: 'Noto Kufi Arabic' }}>
                {listItems.map((item, index) => (
                  <li
                    key={index}
                    style={{
                      marginBottom: '20px',
                      paddingLeft: '30px',
                      background: "url('https://i.ibb.co/qs6LQPR/thumb-up-like-icon-social-media-sign-technology-design.png') no-repeat left center",
                      backgroundSize: '20px 20px',
                      listStyleType: 'none',
                      textAlign: 'left',
                      color:'#17202a'
                    }}
                  >
                    <strong>{item.title}</strong>
                    <p style={{fontSize:'15px',color:'#34495e'}}>{item.description}</p>
                  </li>
                ))}
              </ul>
            </Grid>

            {/* Right Column (40%) - Image */}
            <Grid item xs={12} sm={5} md={5}>
              <img
                src="https://i.ibb.co/wRxy139/about-us-new-889x1024.jpg"
                alt="Description of Image"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
              />
            </Grid>
          </Grid>

          {/* Tab Section */}
          <Grid container spacing={4} sx={{ marginTop: '30px' }}>
          {/* Left Column (Image) */}
          <Grid item xs={12} sm={7} md={7}>
            <img
              src="https://i.ibb.co/6W4bmFX/about-us-02-1024x683.jpg"
              alt="Description of Image"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            />
          </Grid>

          {/* Right Column (Tabs) */}
          <Grid item xs={12} sm={5} md={5}>
            <AppBar position="static" sx={{ backgroundColor: "#fff", boxShadow: "none" }}>
              <Tabs
                value={tabValue}
                onChange={handleTabChange}
                textColor="primary"
                indicatorColor="primary"
                variant="fullWidth"
              >
                {tabContent.map((tab, index) => (
                  <Tab
                    key={index}
                    label={tab.label}
                    sx={{
                      backgroundColor: tabValue === index
                        ? '#17202a'  // Active tab color
                        : 'transparent',
                      color: tabValue === index ? '#17202a' : '#17202a',
                      fontWeight: 600,
                      '&:hover': {
                        backgroundColor: tabValue === index
                          ? '#17202a'  // Active tab remains the same on hover
                          : '#f0f0f0',  // Hover effect for inactive tabs
                      },
                    }}
                  />
                ))}
              </Tabs>
            </AppBar>
            <Box sx={{ padding: 2 }}>
              {tabContent[tabValue] && (
                <Typography
                  variant="h5"
                  sx={{
                    textAlign: "center",
                    fontFamily: 'Noto Kufi Arabic',
                    marginTop: '50px',
                    fontWeight: '600',
                  }}
                >
                  {tabContent[tabValue].content}
                </Typography>
              )}
            </Box>
          </Grid>
        </Grid>
        </Container>
      </section>
      <section
      style={{
        width: "100%",
        paddingTop: "40px",
        paddingBottom: "40px",
        backgroundImage: 'url("https://your-image-url.com/image.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        marginTop: "-30px",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          paddingX: { xs: 2, sm: 3, md: 5 },
          textAlign: "center",
          marginTop: "30px",
          marginBottom: "30px",
        }}
      >
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
          Strategic <span style={{ color: '#0073e6' }}>Team</span>
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

        <Typography
          variant="body1"
          sx={{
            fontSize: "18px",
            color: "#333",
            lineHeight: "1.6",
            textAlign: "center",
            fontFamily: 'Noto Kufi Arabic',
            marginLeft: '20px',
          }}
        >
          Unleash the potential of tomorrow with our visionary leadership team. Comprising seasoned leaders with a passion for education, they steer our institution towards new heights. Their strategic vision and unwavering commitment inspire a culture of excellence and innovation. Join us as we chart a course for success under their dynamic guidance!
        </Typography>

        {/* Team Cards Section */}
        <Grid container spacing={4} sx={{ marginTop: "40px", justifyContent: "center" }}>
          {/* Team Card 1 */}
          <Grid item xs={12} sm={6} md={3}>
            <Card
              sx={{
                maxWidth: 345,
                margin: "auto",
                padding: 2,
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <img
                src="https://via.placeholder.com/300"
                alt="Team Member"
                style={{
                  width: "150px",    // Set width to 150px
                  height: "150px",   // Set height to 150px
                  objectFit: "cover", // Ensure the image covers the area without distorting
                  borderRadius: "50%", // This makes the image rounded
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  textAlign: "center",
                  marginTop: 2,
                  fontFamily: 'Noto Kufi Arabic',
                  fontWeight: 600,
                  color: '#0073e6',
                }}
              >
                John Doe
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  textAlign: "center",
                  color: "#555",
                  fontFamily: 'Noto Kufi Arabic',
                }}
              >
                CEO & Founder
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  textAlign: "center",
                  color: "#333",
                  fontFamily: 'Noto Kufi Arabic',
                  marginTop: 2,
                }}
              >
                John leads with a vision to inspire innovation and excellence across the educational landscape. His leadership drives the growth and success of our institution.
              </Typography>
            </Card>
          </Grid>

          {/* Team Card 2 */}
          <Grid item xs={12} sm={6} md={3}>
            <Card
              sx={{
                maxWidth: 345,
                margin: "auto",
                padding: 2,
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <img
                src="https://via.placeholder.com/300"
                alt="Team Member"
                style={{
                  width: "150px",    // Set width to 150px
                  height: "150px",   // Set height to 150px
                  objectFit: "cover", // Ensure the image covers the area without distorting
                  borderRadius: "50%", // This makes the image rounded
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  textAlign: "center",
                  marginTop: 2,
                  fontFamily: 'Noto Kufi Arabic',
                  fontWeight: 600,
                  color: '#0073e6',
                }}
              >
                Jane Smith
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  textAlign: "center",
                  color: "#555",
                  fontFamily: 'Noto Kufi Arabic',
                }}
              >
                Chief Operating Officer
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  textAlign: "center",
                  color: "#333",
                  fontFamily: 'Noto Kufi Arabic',
                  marginTop: 2,
                }}
              >
                Jane manages operations, ensuring that all departments align with the strategic vision of the academy. Her dedication to operational excellence drives institutional success.
              </Typography>
            </Card>
          </Grid>

          {/* Team Card 3 */}
          <Grid item xs={12} sm={6} md={3}>
            <Card
              sx={{
                maxWidth: 345,
                margin: "auto",
                padding: 2,
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <img
                src="https://via.placeholder.com/300"
                alt="Team Member"
                style={{
                  width: "150px",    // Set width to 150px
                  height: "150px",   // Set height to 150px
                  objectFit: "cover", // Ensure the image covers the area without distorting
                  borderRadius: "50%", // This makes the image rounded
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  textAlign: "center",
                  marginTop: 2,
                  fontFamily: 'Noto Kufi Arabic',
                  fontWeight: 600,
                  color: '#0073e6',
                }}
              >
                Sarah Lee
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  textAlign: "center",
                  color: "#555",
                  fontFamily: 'Noto Kufi Arabic',
                }}
              >
                Director of Marketing
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  textAlign: "center",
                  color: "#333",
                  fontFamily: 'Noto Kufi Arabic',
                  marginTop: 2,
                }}
              >
                Sarah brings innovative strategies to expand the institution's reach. Her expertise in marketing ensures that we are always at the forefront of education trends.
              </Typography>
            </Card>
          </Grid>

          {/* Team Card 4 */}
          <Grid item xs={12} sm={6} md={3}>
            <Card
              sx={{
                maxWidth: 345,
                margin: "auto",
                padding: 2,
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <img
                src="https://via.placeholder.com/300"
                alt="Team Member"
                style={{
                  width: "150px",    // Set width to 150px
                  height: "150px",   // Set height to 150px
                  objectFit: "cover", // Ensure the image covers the area without distorting
                  borderRadius: "50%", // This makes the image rounded
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  textAlign: "center",
                  marginTop: 2,
                  fontFamily: 'Noto Kufi Arabic',
                  fontWeight: 600,
                  color: '#0073e6',
                }}
              >
                Alex Turner
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  textAlign: "center",
                  color: "#555",
                  fontFamily: 'Noto Kufi Arabic',
                }}
              >
                Chief Financial Officer
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  textAlign: "center",
                  color: "#333",
                  fontFamily: 'Noto Kufi Arabic',
                  marginTop: 2,
                }}
              >
                Alex ensures the financial health of the institution, managing resources and budgets to support growth and sustainable success.
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </section>
    </>
  );
};

export default Aboutus;
