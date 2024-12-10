import React from 'react'; 
import { Container, Breadcrumbs, Link, Card, Typography, CardMedia, CardContent,Grid,Paper } from '@mui/material';
import 'swiper/css';  // Correct CSS import for Swiper
import 'swiper/css/navigation';
import 'swiper/css/pagination';


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
  
export default function DepartmentView() {
  return (
    <>
      {/* Breadcrumbs Section */}
      <section
        style={{
          backgroundColor: '#8c837a',
          backgroundImage: 'url(https://i.ibb.co/XjLtjVq/breadcrumb-bkg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '50px 0',
          height: '40vh',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)',
        }}
      >
        <Container
          maxWidth="xl"
          sx={{ paddingTop: '50px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',marginTop:'100px' }}
        >
          <Breadcrumbs aria-label="breadcrumb" sx={{ marginBottom: 2, fontFamily: 'Noto Kufi Arabic, sans-serif', fontSize: '1.5rem', color: 'white' }}>
            <Link href="/" underline="hover" color="inherit">Home</Link>
            <Link href="/blog" underline="hover" color="inherit">School of Computing</Link>
          </Breadcrumbs>
        </Container>
      </section>

      {/* Main News Section */}
      <section
        style={{
          width: '100%',
          paddingTop: '40px',
          paddingBottom: '40px',
          backgroundImage: 'url("https://your-image-url.com/image.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          marginTop: '-30px',
        }}
      >
        <Container maxWidth="xl" sx={{ textAlign: 'center', marginTop: '30px', marginBottom: '30px' }}>
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{ fontFamily: 'Noto Kufi Arabic', fontWeight: 600, textAlign: 'center', color: 'black', marginBottom: '30px' }}
          >
            School of <span style={{ color: '#0073e6' }}>Computing</span>
          </Typography>
        </Container>

        <Container maxWidth="xl" sx={{ paddingX: { xs: 2, sm: 3, md: 5 }, marginTop: '30px' }}>
          <Typography
            variant="body1"
            sx={{ fontSize: '18px', color: '#333', lineHeight: '1.6', textAlign: 'justify', fontFamily: 'Noto Kufi Arabic' }}
          >
            Welcome to the ESOFT School of Computing, where we breathe life into technology! Our comprehensive array of courses is designed to empower students to fearlessly navigate the rapidly evolving world of computing and beyond. Our highly qualified academic staff ensures a unique learning experience that stands out. We’re not just a school; we’re your gateway to transformative learning!
          </Typography>

          <Typography
            variant="body1"
            sx={{ fontSize: '18px', color: '#333', lineHeight: '1.6', textAlign: 'justify', fontFamily: 'Noto Kufi Arabic',marginTop:'30px' }}
          >
            Qualifications offered at the ESOFT School of Computing are not only endorsed by the UGC but also hold recognition from esteemed international entities. This affords students the flexibility to choose a pathway that aligns perfectly with their aspirations. Whether you’re seeking short courses or aiming for a Ph.D., our School of Computing equips you with the academic and practical knowledge crucial for a successful career in the dynamic field of computing.
          </Typography>

          <Typography
            variant="body1"
            sx={{ fontSize: '18px', color: '#333', lineHeight: '1.6', textAlign: 'justify', fontFamily: 'Noto Kufi Arabic',marginTop:'30px' }}
          >
            You can choose your preferred specialization from Software Engineering, Network Engineering, Data Science, Robotics, Multimedia, Business Computing Systems and more! In this school, education meets innovation and lets you embark on a journey that transforms your passion into professional prowess
          </Typography>

          <div style={{ padding: '20px' }}>
            <Grid container spacing={2}>
                {/* Left side - 30% width */}
                <Grid item xs={4}>
                <Paper
                    style={{
                    padding: '20px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center', // Center horizontally
                    justifyContent: 'center', // Center vertically
                    textAlign: 'center',
                    boxShadow: 'none', // Remove shadow from Paper component
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
                        color: "#555",
                        fontFamily: 'Noto Kufi Arabic',
                    }}
                    >
                    CEO & Founder
                    </Typography>
                </Paper>
                </Grid>

                {/* Right side - 70% width */}
                <Grid item xs={8}>
                <Paper
                    style={{
                    padding: '20px',
                    height: '100%',
                    boxShadow: 'none', // Remove shadow from Paper component
                    }}
                >
                    <h4 style={{fontFamily: 'Noto Kufi Arabic'}}>Message from Dean</h4>
                    <p style={{fontFamily: 'Noto Kufi Arabic',textAlign:'justify'}}>As the Dean of the School of Computing at ESOFT Metro Campus, I’m thrilled to share our commitment to offering a comprehensive range of computing courses, spanning from certificates to PhD levels. Our diverse portfolio reflects our dedication to providing accessible and top-quality education throughout the academic journey. Our focus on excellence and innovation, supported by experienced faculty and state-of-the-art facilities, aims to prepare students for the ever-evolving realm of computing. Join us in shaping the future of computing professionals and exploring impactful contributions to local and global technological advancements. Your journey in computing excellence begins at ESOFT Metro Campus.</p>
                </Paper>
                </Grid>
            </Grid>
            </div>

          {/* News Cards Section */}
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{
              fontFamily: 'Noto Kufi Arabic', // Custom font for Arabic style
              fontWeight: 600,               // Bold font weight
              textAlign: 'center',           // Center-aligned text
              color: 'black',                // Black text color
              paddingLeft: '20px',
              marginTop:'50px'           // Adding some left padding for spacing
            }}
          >
            student <span style={{ color: '#0073e6' }}>testimonials</span>
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
    </>
  );
}
