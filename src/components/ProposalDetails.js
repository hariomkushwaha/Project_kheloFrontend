import { useState } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import Rating from '@mui/material/Rating';

export default function ProposalDetails() {
  const [category, setCategory] = useState("service");
  const [quality, setQuality] = useState("");
  const [durability, setDurability] = useState("");
  const [usability, setUsability] = useState("");
  
  const qualityHandler = (e) =>{
    setQuality(e.target.value)
  }
  const durabilityHandler = (e) =>{
    setDurability(e.target.value)
  }
  const usabilityHandler = (e) =>{
    setUsability(e.target.value);
  }

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Provide Information about your Proposal
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <Input fullWidth disabled defaultValue={category} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            fullWidth
            did="exp"
            label="General Experience"
            variant="standard"
            type="number"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            fullWidth
            did="exp"
            label="Sports Specific Experience"
            type="number"
            variant="standard"
          />
        </Grid>

        {category === "service" ? (
          <>
            <Grid item xs={12}>
              <Typography variant="button" color="primary">
                Team Details
              </Typography>
            </Grid>
            <>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  fullWidth
                  did="exp"
                  label="Project Manager Experience"
                  variant="standard"
                  type="number"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  fullWidth
                  did="exp"
                  label="Database Admin Experience"
                  variant="standard"
                  type="number"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  fullWidth
                  did="exp"
                  label="Coordinator Experience"
                  variant="standard"
                  type="number"
                />
              </Grid>
            </>
          </>
        ) : (
          ""
        )}
        <br />
        <Grid item xs={12}>
          <Typography variant="button" color="primary">
            Financial Details
          </Typography>
        </Grid>
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
        <Grid item xs={12}>
        <TextField
            required
            id="quality"
            name="Quality"
            label="Quality"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            type="number"
            onChange={qualityHandler}
            value={quality}
          />

</Grid>
<Grid item xs={12} >
<TextField
            required
            id="usability"
            name="Usability"
            label="Usability"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            type="number"
            onChange={usabilityHandler}
            value={usability}
          />
</Grid>
<Grid item xs={12}>
<TextField
            required
            id="durability"
            name="Durability"
            label="Durability"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            type="number"
            onChange={durabilityHandler}
            value={durability}
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
    </>
  );
}
