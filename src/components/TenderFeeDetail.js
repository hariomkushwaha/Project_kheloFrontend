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
            label="Tender Fee in ruppee"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            type="number"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="feePayableTo"
            name="FeePayableTo"
            label="Fee payable to"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="tenderFeeExemption"
            name="TenderFeeExemption"
            label="Tender Fee Exemption"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="feePayableAt"
            name="FeePayableAt"
            label="Fee payable at"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
