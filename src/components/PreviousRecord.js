import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

export default function PreviousRecord() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Your Previous Record
      </Typography>
      <Grid item xs={12} md={12}>
        <Button variant="contained" component="label">
          Upload Document
          <input type="file" hidden />
        </Button>
      </Grid>
    </React.Fragment>
  );
}
