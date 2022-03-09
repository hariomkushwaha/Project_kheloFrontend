import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
export default function TenderFeeDetail() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Tender Fee Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="TenderFee"
            name="TenderFee"
            label="Tender Fee"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            type="number"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="emd"
            name="emd"
            label="EMD"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            type="number"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
