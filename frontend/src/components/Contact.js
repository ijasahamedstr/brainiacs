import { Container, Breadcrumbs, Link, Grid, Box, Typography } from '@mui/material';

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
    </>
  );
}
