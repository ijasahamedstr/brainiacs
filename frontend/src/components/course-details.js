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
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const styles = {
  section: {
    backgroundColor: "#f2f3f4",
    width: "100%",
    margin: "0 auto",
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
  const [selectedTab, setSelectedTab] = useState(0);

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
                    <Typography sx={{fontFamily: "Noto Kufi Arabic, sans-serif"}}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                      malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
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
        <Grid item xs={12} style={{ paddingLeft: '20px'}}>
            <CardContent>
              <Typography
                variant="h6" // Heading style
                sx={{
                  fontFamily: "Noto Kufi Arabic, sans-serif",
                  color: "black", // Set text color to black for better readability
                  marginBottom: '8px', // Space below the heading
                }}
              >
                Entry Requirements
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
      </Grid>
      </Grid>
    </Grid>
  </Container>
</section>
  );
}

export default Coursedetails;
