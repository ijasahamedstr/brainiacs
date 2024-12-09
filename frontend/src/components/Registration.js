import React, { useState } from 'react';
import { Container, Breadcrumbs, Link, TextField, Button, Box, Grid } from '@mui/material';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import Check from '@mui/icons-material/Check';

// Stepper styles
const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#784af4',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#784af4',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

const QontoStepIconRoot = styled('div')(({ theme }) => ({
  color: '#eaeaf0',
  display: 'flex',
  height: 22,
  alignItems: 'center',
  '& .QontoStepIcon-completedIcon': {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18,
  },
  '& .QontoStepIcon-circle': {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
}));

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

QontoStepIcon.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  completed: PropTypes.bool,
};

export default function Registration() {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    age: '',
    username: '',
    password: '',
  });

  const steps = ['Student Details', 'Course Registration', 'Document Verification', 'Batch Details & Fee Plan', 'Submit'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      alert('Form Submitted');
    } else {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  return (
    <>
      {/* First Section - Breadcrumbs */}
      <section
        style={{
          backgroundColor: '#8c837a',
          backgroundImage: 'url(https://i.ibb.co/XjLtjVq/breadcrumb-bkg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          margin: '0 auto',
          padding: '50px 0',
          height: '40vh',
          top: 0,
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)',
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            padding: 3,
            paddingTop: '50px',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: 'Noto Kufi Arabic, sans-serif',
          }}
        >
          <Breadcrumbs
            aria-label="breadcrumb"
            sx={{
              marginBottom: 2,
              fontFamily: 'Noto Kufi Arabic, sans-serif',
              fontSize: { xs: '1.2rem', sm: '1.5rem' },
              color: 'white',
            }}
          >
            <Link href="/" underline="hover" color="inherit">
              Home
            </Link>
            <Link href="/register" underline="hover" color="inherit">
              Register
            </Link>
          </Breadcrumbs>
        </Container>
      </section>

      {/* Main Section for Stepper and Form */}
      <section style={{ width: '100%', marginTop: '20px' }}>
        <Container maxWidth="xl" sx={{ padding: 3 }}>
          {/* Stepper Section */}
          <Stepper
            alternativeLabel
            activeStep={activeStep}
            connector={<QontoConnector />}
            sx={{
              paddingBottom: 2,
            }}
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel StepIconComponent={QontoStepIcon} sx={{fontFamily: 'Noto Kufi Arabic, sans-serif',color:'red'}}>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {/* Form Content based on active step */}
          <div style={{ marginTop: '30px' }}>
            {/* Step 1: Personal Information */}
            {activeStep === 0 && (
              <Box>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Full Name"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      sx={{ mb: 2 }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Age"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      name="age"
                      value={formData.age}
                      onChange={handleInputChange}
                      sx={{ mb: 2 }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Email"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      sx={{ mb: 2 }}
                    />
                  </Grid>
                </Grid>
              </Box>
            )}

            {/* Step 2: Account Details */}
            {activeStep === 1 && (
              <Box>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Username"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      sx={{ mb: 2 }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Password"
                      type="password"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      sx={{ mb: 2 }}
                    />
                  </Grid>
                </Grid>
              </Box>
            )}

            {/* Step 3: Confirm Details */}
            {activeStep === 2 && (
              <Box>
                <h3>Confirm your details:</h3>
                <p><strong>Full Name:</strong> {formData.fullName}</p>
                <p><strong>Age:</strong> {formData.age}</p>
                <p><strong>Email:</strong> {formData.email}</p>
                <p><strong>Username:</strong> {formData.username}</p>
                <p><strong>Password:</strong> {formData.password}</p>
              </Box>
            )}

            {/* Navigation Buttons */}
            <Box style={{ marginTop: '30px' }} sx={{ textAlign: 'center' }}>
              <Button
                variant="outlined"
                color="primary"
                onClick={handleBack}
                disabled={activeStep === 0}
                sx={{ marginRight: '10px', mb: 2 }}
              >
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                sx={{ mb: 2 }}
              >
                {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
              </Button>
            </Box>
          </div>
        </Container>
      </section>
    </>
  );
}
