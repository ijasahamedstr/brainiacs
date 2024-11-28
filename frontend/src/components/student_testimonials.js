import React from "react";
import { Container, Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";

function StudentTestimonials() {
  const testimonials = [
    {
      name: "Gayasha Thilakarathna",
      program: "School of Management & Law",
      testimonial:
        "I got to know about the HND in Business (Management) at ESOFT Metro Campus Kurunegala from a suggestion of a good friend of mine. It was an amazing run since I started my degree at ESOFT.",
      imageUrl: "https://i.ibb.co/0m4mqn4/55582.jpg" 
    },
    {
      name: "Gayasha Thilakarathna",
      program: "School of Management & Law",
      testimonial:
        "I got to know about the HND in Business (Management) at ESOFT Metro Campus Kurunegala from a suggestion of a good friend of mine. It was an amazing run since I started my degree at ESOFT.",
      imageUrl: "https://i.ibb.co/0m4mqn4/55582.jpg" 
    },
    {
      name: "Gayasha Thilakarathna",
      program: "School of Management & Law",
      testimonial:
        "I got to know about the HND in Business (Management) at ESOFT Metro Campus Kurunegala from a suggestion of a good friend of mine. It was an amazing run since I started my degree at ESOFT.",
      imageUrl: "https://i.ibb.co/0m4mqn4/55582.jpg" 
    },
    {
      name: "Gayasha Thilakarathna",
      program: "School of Management & Law",
      testimonial:
        "I got to know about the HND in Business (Management) at ESOFT Metro Campus Kurunegala from a suggestion of a good friend of mine. It was an amazing run since I started my degree at ESOFT.",
      imageUrl: "https://i.ibb.co/0m4mqn4/55582.jpg" 
    }
  ];

  return (
    <section
      style={{
        backgroundColor: '#f2f3f4',
        backgroundImage: 'url(https://i.ibb.co/r2S2vg6/229509.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        margin: '0 auto',
        marginTop: '-30px',
        padding: '30px 0', // Reduced padding for a more compact layout
      }}
    >
      <Container maxWidth="xl" sx={{ padding: 3, paddingTop: '30px' }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontFamily: "Noto Kufi Arabic, sans-serif",
            fontWeight: "bold",
            color: "#333",
            fontSize: { xs: "1.25rem", sm: "1.75rem", md: "2rem" }, // Reduced font size
            textAlign: "center",
            marginBottom: "20px", // Reduced margin-bottom
          }}
        >
          Student <span style={{ color: "#0073e6" }}>testimonials</span>
        </Typography>

        <hr
          style={{
            border: "none",
            height: "2px", // Reduced height of the line
            backgroundColor: "#33b24c",
            width: "5%",
            alignSelf: "center",
            margin: "10px auto", // Reduced margin
          }}
        />

        {/* Testimonials Grid */}
        <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{marginTop:'30px'}}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ maxWidth: 345, boxShadow: 2, borderRadius: 2 }}>
                <CardContent sx={{ padding: '15px' }}> {/* Reduced padding */}
                  <Grid container spacing={1} sx={{ marginBottom: '15px' }}> {/* Reduced spacing */}
                    <Grid item xs={3} sm={3}>
                      <CardMedia
                        component="img"
                        image={testimonial.imageUrl}
                        alt="Profile"
                        sx={{
                          borderRadius: '50%',
                          width: '60px', // Smaller profile image
                          height: '60px',
                          objectFit: 'cover',
                          margin: 'auto',
                        }}
                      />
                    </Grid>
                    <Grid item xs={9} sm={9}>
                      <Typography variant="h6" component="div" sx={{ fontFamily: "Noto Kufi Arabic, sans-serif", fontWeight: 'bold' }}>
                        {testimonial.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ fontSize: '11px', fontFamily: "Noto Kufi Arabic, sans-serif" }}>
                        {testimonial.program}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "Noto Kufi Arabic, sans-serif", fontStyle: 'italic' }}>
                    "{testimonial.testimonial}"
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

export default StudentTestimonials;
