import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

export default function CriticalDate() {
  const [value, setValue] = React.useState(new Date());

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Typography variant="h6" gutterBottom>
          Critical Dates
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <DatePicker
              label="Publish Date"
              inputFormat="dd/MM/yyyy"
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <DatePicker
              label="Bid opening date"
              inputFormat="dd/MM/yyyy"
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <DatePicker
              label="Bid submission start date"
              inputFormat="dd/MM/yyyy"
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <DatePicker
              label="Bid submission end date"
              inputFormat="dd/MM/yyyy"
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </Grid>
        </Grid>
      </LocalizationProvider>
    </React.Fragment>
  );
}
