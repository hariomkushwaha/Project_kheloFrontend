import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

export default function PersonalDetails() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
       Basic Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="fullName"
            name="Full Name"
            label="Full Name"
            fullWidth
            // autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="organizationName"
            name="OrganizationName"
            label="Organization Name"
            fullWidth
            // autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="email"
            name="Email"
            label="Email"
            fullWidth
            // autoComplete="given-name"
            variant="standard"
            type="email"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="fullAddress"
            name="FullAddress"
            label="Full Address"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
          />
        </Grid>
       </Grid>
      
    </React.Fragment>
  );
}
