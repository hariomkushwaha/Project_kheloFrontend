import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";

export default function TenderFeeDetail() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Tender Fee Datails
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <TextField
            required
            id="tenderFee"
            label="Tender Fee"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
            type="number"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            required
            id="emd"
            label="Earnest Money Deposit"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
            type="number"
          />
        </Grid>

        {/* <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid> */}
      </Grid>
    </React.Fragment>
  );
}
