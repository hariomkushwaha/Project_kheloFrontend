import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

export default function BasicDetail() {
  const [Category, setCategory] = React.useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Basic Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="ReferenceNumber"
            name="ReferenceNumber"
            label="Reference Number"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            type="number"
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <TextField
            required
            id="TenderId"
            name="TenderId"
            label="Tender Id"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={Category}
              label="Cateogory"
              onChange={handleChange}
            >
              <MenuItem value={10}>Service/Maintainence</MenuItem>
              <MenuItem value={20}>Product</MenuItem>
              <MenuItem value={30}>Infrastructure</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}