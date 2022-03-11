import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
export default function TenderFeeDetail() {
    const [title, setTitle] = React.useState("");
    const [workDescription, setWorkDescription] = React.useState("");
    const [prequalification, setPrequalification] = React.useState("");
    const [independentExternal, setIndependentExternal] = React.useState("");

    const titleHandler = (event) => {
        setTitle(event.target.value);
      };
      const workDescriptionHandler = (event) => {
        setWorkDescription(event.target.value);
      };
      const prequalificationHandler = (event) => {
        setPrequalification(event.target.value);
      };
      const independentExternalHandler = (event) => {
        setIndependentExternal(event.target.value);
      };
      
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
            value={title}
            onChange={titleHandler}
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
            value={workDescription}
            onChange={workDescriptionHandler}
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
            value={prequalification}
            onChange={prequalificationHandler}
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
            value={independentExternal}
            onChange={independentExternalHandler}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
