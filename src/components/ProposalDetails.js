import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";

export default function ProposalDetails() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Provide Information about you Proposal
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <TextField
            required
            id="cost"
            label="Total Cost"
            fullWidth
            // autoComplete="cc-name"
            variant="standard"
            type="number"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            required
            id="duration"
            label="Duration (months)"
            fullWidth
            // autoComplete="cc-number"
            variant="standard"
            type="number"
          />
        </Grid>

        <Grid item xs={12} md={12}>
          <Button variant="contained" component="label">
            Upload Document
            <input type="file" hidden />
          </Button>
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="I have checked the above details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
