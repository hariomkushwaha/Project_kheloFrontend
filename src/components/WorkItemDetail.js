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
            id="title"
            name="Title"
            label="Title"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="workDescription"
            name="WorkDescription"
            label="Work Description"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="prequalification"
            name="Prequalification"
            label="Pre-qualification"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="independentExternal"
            name="IndependentExternal"
            label="Independent External Monitor/Remarks"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
