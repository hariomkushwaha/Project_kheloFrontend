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
            id="emdFee"
            name="EmdFee"
            label="EMD Fee in ruppee"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            type="number"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="emdPercentage"
            name="EmdPercentage"
            label="EMD Percentage"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            type="number"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="emdPayableTo"
            name="EmdPayableTo"
            label="EMD payable to"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="emdPayableAt"
            name="emdPayableAt"
            label="EMD payable at"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="emdFeeType"
            name="EmdFeeType"
            label="EMD Fee Type"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
