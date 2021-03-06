import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import BasicDetail from './BasicDetail';
import TenderFeeDetail from './TenderFeeDetail';
import CriticalDate from './CriticalDate';
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import EMDFeeDetail from './EMDFeeDetail';
import WorkItemDetail from './WorkItemDetail';
const steps = ["Basic Details","Tender Fee Details","EMD Fee Details","Work Item Details", "Critical Dates"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <BasicDetail/>;
    case 1:
      return <TenderFeeDetail/>;
    case 2:
        return <EMDFeeDetail/>;
    case 3:
          return <WorkItemDetail/>;
    case 4:
      return <CriticalDate />;
    default:
      throw new Error("Unknown step");
  }
}

const theme = createTheme();

export default function ProposalForm() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = (e) => {
    setActiveStep(activeStep + 1);
    if (activeStep === 4) {
      setTimeout((event) => {
        window.location.href = "/admin";
      }, 10000);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="primary"
        elevation={0}
        sx={{
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
      <Toolbar>
      <Typography
        component="h1"
        variant="h6"
        color="inherit"
        noWrap
        sx={{ flexGrow: 1 }}
      >
        KHELO INDIA
      </Typography>
      <IconButton color="inherit">
        <HomeIcon onClick={(event) => (window.location.href = "/")} />
      </IconButton>
    </Toolbar>
  
      </AppBar>
      <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
             Tender
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your proposal #123450 is successfully Posted on Server. You can see the applied candidates on your Dashboard Now.
                  </Typography>
                <Typography variant="caption">You'll be redirected to your Dashboard in 10 seconds.</Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1 ? "Submit" : "Next"}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
