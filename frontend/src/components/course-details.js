import React from "react";
import {
  Container,
  Card,
  CardContent,
  Grid,
  Breadcrumbs,
  Link,
  CardMedia,
  Button,
  Typography
} from "@mui/material";
import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const styles = {
  section: {
    width: "100%",
    marginTop:'150px'
  },
  breadcrumbs: {
    marginBottom: 2,
    fontFamily: "Noto Kufi Arabic, sans-serif",
  },
  container: {
    padding: 3,
    paddingTop: "50px",
  },
  card: {
    borderRadius: 2,
    boxShadow: 2,
  },
  cardMedia: {
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
  },
  button: {
    borderRadius: 2,
    fontFamily: "Noto Kufi Arabic, sans-serif",
  },
  registerButton: {
    backgroundColor: "#e74c3c",
    "&:hover": {
      backgroundColor: "#c0392b",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    },
  },
  inquireButton: {
    borderColor: "#0E072A",
    color: "#0E072A",
    "&:hover": {
      backgroundColor: "#0E072A",
      borderColor: "#0E072A",
      color: "white",
    },
  },
  newsCard: {
    display: "flex",
    boxShadow: 3,
    borderRadius: 2,
    backgroundColor: '#F8F9FF', 
    transition: "all 0.3s ease",
    "&:hover": {
      boxShadow: 6,
      transform: "scale(1.05)",
      backgroundColor: "#0E072A",
      "& .MuiTypography-root": {
        color: "white",
      },
    },
  },
  newsCardContent: {
    padding: 2,
  },
  heading: {
    fontFamily: "Noto Kufi Arabic, sans-serif",
    fontSize: "20px",
    marginBottom: "10px",
  },
  divider: {
    borderTop: "2px solid #0E072A",
    marginBottom: "20px",
  },
  newsHeadline: {
    fontFamily: "Noto Kufi Arabic, sans-serif",
    fontSize: "15px",
  },
  newsDescription: {
    fontFamily: "Noto Kufi Arabic, sans-serif",
    fontSize: "12px",
    color: "textSecondary",
  },
};

function Coursedetails() {
  const [ setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  // Sample news data, replace it with actual dynamic data.
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

  return (
    <section style={styles.section}>
      <Container maxWidth="xl" sx={styles.container}>
        {/* Breadcrumbs */}
        <Breadcrumbs aria-label="breadcrumb" sx={styles.breadcrumbs}>
          <Link href="/" underline="hover" color="inherit">
            Home
          </Link>
          <Link href="/courses" underline="hover" color="inherit">
            Courses
          </Link>
          <Link href="/course-details" underline="hover" color="inherit">
            Course Name
          </Link>
        </Breadcrumbs>

        {/* Grid for Content */}
        <Grid container spacing={2} sx={{ marginTop: "20px" }}>
          {/* Left Column - Offer/Event Card */}
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={styles.card}>
              <CardMedia
                component="img"
                width="200" // Set width to 200px
                height="500" // Set height to 500px
                image="https://via.placeholder.com/200x500" // Placeholder image
                alt="Image description"
                sx={styles.cardMedia}
              />
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Button
                      variant="contained"
                      fullWidth
                      sx={{ ...styles.button, ...styles.registerButton }}
                    >
                      Register Online
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button
                      variant="outlined"
                      color="secondary"
                      fullWidth
                      sx={{ ...styles.button, ...styles.inquireButton }}
                    >
                      Inquire Now
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

           {/* Related Courses Section */}
            <Grid container spacing={2} sx={{ marginTop: 0 }}>
            <Grid item xs={12}>
                <Typography variant="h4" component="h2" sx={styles.heading}>
                Related Courses
                </Typography>
                <hr style={styles.divider} />
            </Grid>

            {/* Dynamically generate the news list cards */}
            {newsData.map((news, index) => (
                <Grid item xs={12} sm={6} md={12} key={index}>
                <Card sx={styles.newsCard}>
                    <CardContent sx={styles.newsCardContent}>
                    <Typography variant="h6" component="h5" sx={styles.newsHeadline}>
                        {news.headline}
                    </Typography>
                    <Typography variant="body2" sx={styles.newsDescription}>
                        {news.description}
                    </Typography>
                    </CardContent>
                </Card>
                </Grid>
            ))}
            </Grid>

          </Grid>

          <Grid item xs={12} sm={8} md={9}>
          <Grid container spacing={3}>
            <Grid item xs={12} style={{ paddingLeft: '9px', paddingTop: '100px' }}>
              {/* Heading Card */}
              <Card sx={{ backgroundColor: "#0E072A", paddingLeft: '9px' }}>
                <CardContent>
                  <Typography
                    variant="body2"
                    component="div"
                    sx={{
                      fontFamily: "Noto Kufi Arabic, sans-serif",
                      color: "white", // Set text color to white
                    }}
                  >
                    School of Management & Law | Higher National Diploma Level
                  </Typography>
                  <Typography
                    variant="h4"
                    color="text.secondary"
                    sx={{
                      fontFamily: "Noto Kufi Arabic, sans-serif",
                      marginTop: "20px",
                      color: "white", // Set text color to white
                    }}
                  >
                    Pearson BTEC Level 5 HND in Business (Management)
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Course Description Card */}
            <Grid item xs={12} style={{ paddingLeft: '20px', marginTop: '20px' }}>
            <CardContent>
              <Typography
                variant="h6" // Heading style
                sx={{
                  fontFamily: "Noto Kufi Arabic, sans-serif",
                  color: "black", // Set text color to black for better readability
                  marginBottom: '8px', // Space below the heading
                }}
              >
                Course Overview
              </Typography>
              <hr style={{ margin: '10px 0', borderColor: '#ccc' }} />
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "Noto Kufi Arabic, sans-serif",
                  color: "black", // Set text color to black for better readability
                }}
              >
                This course provides learners with the knowledge, skills, and understanding necessary to work in management roles in the business sector. It covers key topics including business strategy, project management, marketing, and organizational behavior. The program is designed to prepare students for leadership positions in a wide range of industries, offering them the tools to make strategic decisions and manage teams effectively.
              </Typography>
            </CardContent>
          </Grid>
          <Grid item xs={12} style={{ paddingLeft: '20px', marginTop: '0px' }}>
            <CardContent>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Noto Kufi Arabic, sans-serif",
                  color: "black",
                  marginBottom: '8px',
                }}
              >
                Course Outline
              </Typography>
              <hr style={{ margin: '10px 0', borderColor: '#ccc' }} />
              <Typography
                  variant="body1"
                  sx={{
                    fontFamily: "Noto Kufi Arabic, sans-serif",
                    color: "black",
                    marginTop: '10px',
                  }}
                >
                <div style={{marginBottom:'20px'}}>
                  <Accordion
                    sx={{
                      backgroundColor: '#e5e8fa', 
                      borderRadius: '8px', 
                      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                      marginBottom: '8px', // Optional: Add spacing between accordions if needed
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ArrowDownwardIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      <Typography sx={{fontFamily: "Noto Kufi Arabic, sans-serif"}}>Semester 1</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <div style={{ flex: 1, marginRight: '10px', marginBottom: '20px' }}>
                      <Typography
                        variant="body1"
                        sx={{
                          fontFamily: "Noto Kufi Arabic, sans-serif",
                          color: "black", // Set text color to black for better readability
                          marginBottom: '16px', // Space between tables
                        }}
                      >
                        <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#f8f9ff' }}>
                          <thead>
                            <tr>
                              <th style={{ border: '1px solid #ccc', padding: '8px', textAlign: 'left', backgroundColor: '#f8f9ff' }}>Module</th>
                              <th style={{ border: '1px solid #ccc', padding: '8px', textAlign: 'left', backgroundColor: '#f8f9ff' }}>Mandatory/Optional</th>
                            </tr>
                          </thead>
                          <tbody style={{ backgroundColor: '#f8f9ff' }}>
                            <tr>
                              <td style={{ border: '1px solid #ccc', padding: '8px' }}>Project</td>
                              <td style={{ border: '1px solid #ccc', padding: '8px' }}>$500</td>
                            </tr>
                            <tr>
                              <td style={{ border: '1px solid #ccc', padding: '8px' }}>Big Data and Visualisation</td>
                              <td style={{ border: '1px solid #ccc', padding: '8px' }}>$100</td>
                            </tr>
                          </tbody>
                        </table>
                      </Typography>
                    </div>
                    </AccordionDetails>
                  </Accordion>
                </div>
                <div style={{marginBottom:'20px'}}>
                  <Accordion
                    sx={{
                      backgroundColor: '#e5e8fa', 
                      borderRadius: '8px', 
                      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                      marginBottom: '8px', // Optional: Add spacing between accordions if needed
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ArrowDownwardIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      <Typography sx={{fontFamily: "Noto Kufi Arabic, sans-serif"}}>Semester 2</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography sx={{fontFamily: "Noto Kufi Arabic, sans-serif"}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
                </Typography>       
            </CardContent>
          </Grid>
          <Grid item xs={12} style={{ paddingLeft: '20px' }}>
          <CardContent>
            <Typography
              variant="h6" // Heading style
              sx={{
                fontFamily: "Noto Kufi Arabic, sans-serif",
                color: "black", // Set text color to black for better readability
                marginBottom: '16px', // Increased space below the heading
              }}
            >
              Entry Requirements
            </Typography>
            <hr style={{ margin: '20px 0', borderColor: '#ccc' }} /> {/* Increased space around the separator */}
            <Typography
              variant="body1"
              sx={{
                fontFamily: "Noto Kufi Arabic, sans-serif",
                color: "black", // Set text color to black for better readability
                marginTop: '16px', // Added space above the list
              }}
            >
             <ul style={{ margin: 0, paddingLeft: '20px', marginBottom: '30px' }}>
                {/* Added padding to the left for the list */}
                <li
                  style={{
                    marginBottom: '10px',
                    paddingLeft: '30px', // Adds padding to the left for the image
                    background: "url('https://i.ibb.co/ZTbC4Sc/images-removebg-preview.png') no-repeat left center", // Custom image URL
                    backgroundSize: '20px 20px', // Size of the bullet image
                    listStyleType: 'none', // Remove default bullets
                  }}
                >
                  GCSE or O-Level in English and Mathematics at grade C or above
                </li>
                <li
                  style={{
                    marginBottom: '10px',
                    paddingLeft: '30px', // Adds padding to the left for the image
                    background: "url('https://i.ibb.co/ZTbC4Sc/images-removebg-preview.png') no-repeat left center", // Custom image URL
                    backgroundSize: '20px 20px', // Size of the bullet image
                    listStyleType: 'none', // Remove default bullets
                  }}
                >
                  240 credits with at least a Merit from a Higher National Diploma (HND), at least 2:2
                </li>
                <li
                  style={{
                    marginBottom: '10px',
                    paddingLeft: '30px', // Adds padding to the left for the image
                    background: "url('https://i.ibb.co/ZTbC4Sc/images-removebg-preview.png') no-repeat left center", // Custom image URL
                    backgroundSize: '20px 20px', // Size of the bullet image
                    listStyleType: 'none', // Remove default bullets
                  }}
                >
                  (or equivalent) from a Foundation Degree (FdA/FdSc) or equivalent international qualification in a relevant subject
                </li>
                <li
                  style={{
                    paddingLeft: '30px', // Adds padding to the left for the image
                    background: "url('https://i.ibb.co/ZTbC4Sc/images-removebg-preview.png') no-repeat left center", // Custom image URL
                    backgroundSize: '20px 20px', // Size of the bullet image
                    listStyleType: 'none', // Remove default bullets
                  }}
                >
                  240 credits at least 2:2 (or equivalent) from years 1 and 2 of an undergraduate degree (BA/BSc) in a relevant subject at a different institution
                </li>
              </ul>
            </Typography>
            <Typography
              variant="h6" // Heading style
              sx={{
                fontFamily: "Noto Kufi Arabic, sans-serif",
                color: "black", // Set text color to black for better readability
                marginBottom: '16px', // Increased space below the heading
              }}
            >
              Entry Requirements
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "Noto Kufi Arabic, sans-serif",
                color: "black", // Set text color to black for better readability
                marginTop: '16px', // Added space above the list
              }}
            >
              <ul style={{ margin: 0, paddingLeft: '20px', listStyleType: 'none' }}>
                <li
                  style={{
                    marginBottom: '10px',
                    paddingLeft: '30px', // Adds padding so the image is not too close to the text
                    background: "url('https://i.ibb.co/ZTbC4Sc/images-removebg-preview.png') no-repeat left center", // Custom image URL
                    backgroundSize: '20px 20px', // Size of the bullet image
                    listStyleType: 'none', // Remove default bullets
                  }}
                >
                  Curriculum Vitae
                </li>
                <li
                  style={{
                    marginBottom: '10px',
                    paddingLeft: '30px', // Adds padding so the image is not too close to the text
                    background: "url('https://i.ibb.co/ZTbC4Sc/images-removebg-preview.png') no-repeat left center", // Custom image URL
                    backgroundSize: '20px 20px', // Size of the bullet image
                    listStyleType: 'none', // Remove default bullets
                  }}
                >
                  Academic and professional qualifications
                </li>
                <li
                  style={{
                    marginBottom: '10px',
                    paddingLeft: '30px', // Adds padding so the image is not too close to the text
                    background: "url('https://i.ibb.co/ZTbC4Sc/images-removebg-preview.png') no-repeat left center", // Custom image URL
                    backgroundSize: '20px 20px', // Size of the bullet image
                    listStyleType: 'none', // Remove default bullets
                  }}
                >
                  Passport or National Identity Card
                </li>
                <li
                  style={{
                    marginBottom: '10px',
                    paddingLeft: '30px', // Adds padding so the image is not too close to the text
                    background: "url('https://i.ibb.co/ZTbC4Sc/images-removebg-preview.png') no-repeat left center", // Custom image URL
                    backgroundSize: '20px 20px', // Size of the bullet image
                    listStyleType: 'none', // Remove default bullets
                  }}
                >
                  Service letter
                </li>
                <li
                  style={{
                    marginBottom: '10px',
                    paddingLeft: '30px', // Adds padding so the image is not too close to the text
                    background: "url('https://i.ibb.co/ZTbC4Sc/images-removebg-preview.png') no-repeat left center", // Custom image URL
                    backgroundSize: '20px 20px', // Size of the bullet image
                    listStyleType: 'none', // Remove default bullets
                  }}
                >
                  Approval evidence for the non-standard app.
                </li>
              </ul>
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} style={{ paddingLeft: '20px' }}>
        <CardContent>
          <Typography
            variant="h6" // Heading style
            sx={{
              fontFamily: "Noto Kufi Arabic, sans-serif",
              color: "black", // Set text color to black for better readability
              marginBottom: '8px', // Space below the heading
            }}
          >
            Schedule
          </Typography>
          <hr style={{ margin: '10px 0', borderColor: '#ccc' }} />
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Noto Kufi Arabic, sans-serif",
              color: "black", // Set text color to black for better readability
            }}
          >
            <ul style={{ margin: 0, paddingLeft: '20px', listStyleType: 'none' }}>
              <li
                style={{
                  marginBottom: '10px',
                  paddingLeft: '30px', // Adds padding so the image is not too close to the text
                  background: "url('https://i.ibb.co/ZTbC4Sc/images-removebg-preview.png') no-repeat left center", // Add the image URL here
                  backgroundSize: '20px 20px', // Medium size for the bullet image
                  listStyleType: 'none', // Remove default bullets
                }}
              >
                Week 1: Introduction to Business Strategy
              </li>
              <li
                style={{
                  marginBottom: '10px',
                  paddingLeft: '30px',
                  background: "url('https://i.ibb.co/ZTbC4Sc/images-removebg-preview.png') no-repeat left center",
                  backgroundSize: '20px 20px', // Medium size for the bullet image
                  listStyleType: 'none',
                }}
              >
                Week 2: Project Management Fundamentals
              </li>
              <li
                style={{
                  marginBottom: '10px',
                  paddingLeft: '30px',
                  background: "url('https://i.ibb.co/ZTbC4Sc/images-removebg-preview.png') no-repeat left center",
                  backgroundSize: '20px 20px', // Medium size for the bullet image
                  listStyleType: 'none',
                }}
              >
                Week 3: Marketing and Consumer Behavior
              </li>
              <li
                style={{
                  marginBottom: '10px',
                  paddingLeft: '30px',
                  background: "url('https://i.ibb.co/ZTbC4Sc/images-removebg-preview.png') no-repeat left center",
                  backgroundSize: '20px 20px', // Medium size for the bullet image
                  listStyleType: 'none',
                }}
              >
                Week 4: Organizational Behavior and Leadership
              </li>
              <li
                style={{
                  paddingLeft: '30px',
                  background: "url('https://i.ibb.co/ZTbC4Sc/images-removebg-preview.png') no-repeat left center",
                  backgroundSize: '20px 20px', // Medium size for the bullet image
                  listStyleType: 'none',
                }}
              >
                Week 5: Exam Preparation and Final Project
              </li>
            </ul>
          </Typography>
        </CardContent>
      </Grid>
      <Grid item xs={12} style={{ paddingLeft: '20px' }}>
        <CardContent>
          <Typography
            variant="h6" // Heading style
            sx={{
              fontFamily: "Noto Kufi Arabic, sans-serif",
              color: "black", // Set text color to black for better readability
              marginBottom: '8px', // Space below the heading
            }}
          >
            Fees
          </Typography>
          <hr style={{ margin: '10px 0', borderColor: '#ccc' }} />

          {/* Wrapper for both tables to display in a row */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            {/* First Table */}
            <div style={{ flex: 1, marginRight: '10px', marginBottom: '20px' }}>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "Noto Kufi Arabic, sans-serif",
                  color: "black", // Set text color to black for better readability
                  marginBottom: '16px', // Space between tables
                }}
              >
                <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#f9f9f9' }}>
                  <thead>
                    <tr>
                      <th style={{ border: '1px solid #ccc', padding: '8px', textAlign: 'left', backgroundColor: '#e5e8fa' }}>Fee Type</th>
                      <th style={{ border: '1px solid #ccc', padding: '8px', textAlign: 'left', backgroundColor: '#e5e8fa' }}>Amount</th>
                    </tr>
                  </thead>
                  <tbody style={{ backgroundColor: '#f8f9ff' }}>
                    <tr>
                      <td style={{ border: '1px solid #ccc', padding: '8px' }}>Tuition</td>
                      <td style={{ border: '1px solid #ccc', padding: '8px' }}>$500</td>
                    </tr>
                    <tr>
                      <td style={{ border: '1px solid #ccc', padding: '8px' }}>Registration</td>
                      <td style={{ border: '1px solid #ccc', padding: '8px' }}>$100</td>
                    </tr>
                  </tbody>
                </table>
              </Typography>
            </div>

            {/* Second Table */}
            <div style={{ flex: 1, marginBottom: '20px' }}>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "Noto Kufi Arabic, sans-serif",
                  color: "black", // Set text color to black for better readability
                }}
              >
                <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#f9f9f9' }}>
                  <thead>
                    <tr>
                      <th style={{ border: '1px solid #ccc', padding: '8px', textAlign: 'left', backgroundColor: '#e5e8fa' }}>Service</th>
                      <th style={{ border: '1px solid #ccc', padding: '8px', textAlign: 'left', backgroundColor: '#e5e8fa' }}>Fee</th>
                    </tr>
                  </thead>
                  <tbody style={{ backgroundColor: '#f8f9ff' }}>
                    <tr>
                      <td style={{ border: '1px solid #ccc', padding: '8px' }}>Library Access</td>
                      <td style={{ border: '1px solid #ccc', padding: '8px' }}>$50</td>
                    </tr>
                    <tr>
                      <td style={{ border: '1px solid #ccc', padding: '8px' }}>Sports Facilities</td>
                      <td style={{ border: '1px solid #ccc', padding: '8px' }}>$30</td>
                    </tr>
                  </tbody>
                </table>
              </Typography>
            </div>
          </div>
        </CardContent>
      </Grid>
      <Grid item xs={12} style={{ paddingLeft: '20px' }}>
            <CardContent>
              <Typography
                variant="h6" // Heading style
                sx={{
                  fontFamily: "Noto Kufi Arabic, sans-serif",
                  color: "black", // Set text color to black for better readability
                  marginBottom: '8px', // Space below the heading
                }}
              >
                Our Lecture Panel
              </Typography>
              <hr style={{ margin: '10px 0', borderColor: '#ccc' }} />
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "Noto Kufi Arabic, sans-serif",
                  color: "black", // Set text color to black for better readability
                }}
              >
               At the heart of our commitment to knowledge is our esteemed academic panel. A group of accomplished educators, they bring a wealth of knowledge and experience to the classroom, creating an environment where academic curiosity flourishes. Together, they shape minds and nurture a passion for learning that lasts a lifetime. Join our academic community and explore a world of limitless intellectual possibilities!
              </Typography>
            </CardContent>
          </Grid>
      </Grid>
      </Grid>
    </Grid>
  </Container>
</section>
  );
}

export default Coursedetails;
