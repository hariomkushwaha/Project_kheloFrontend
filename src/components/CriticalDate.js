import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

export default function CriticalDate() {
  const [publish, setPublish] = React.useState(new Date().toLocaleDateString('en-IN'));
  const [bidOpening, setBidOpening] = React.useState(new Date().toLocaleDateString('en-IN'));
  const [bidSubmissionStart, setBidSubmissionStart] = React.useState(new Date().toLocaleDateString('en-IN'));
  const [bidSubmissionEnd, setBidSubmissionEnd] = React.useState(new Date().toLocaleDateString('en-IN'));

  const publishHandler = (newValue) => {
    setPublish(newValue);
      
  };
  const bidOpeningHandler = (newValue) => {
    setBidOpening(newValue);
  };
  const bidSubmissionStartHandler = (newValue) => {
    setBidSubmissionStart(newValue);
  };
  const bidSubmissionEndHandler = (newValue) => {
    setBidSubmissionEnd(newValue);
    console.log(publish , bidOpening , bidSubmissionStart , bidSubmissionEnd )
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
              value={publish}
              onChange={()=>publishHandler(publish)}
              renderInput={(params) => <TextField {...params} />}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <DatePicker
              label="Bid opening date"
              inputFormat="dd/MM/yyyy"
              value={bidOpening}
              onChange={()=>bidOpeningHandler(bidOpening)}
              renderInput={(params) => <TextField {...params} />}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <DatePicker
              label="Bid submission start date"
              inputFormat="dd/MM/yyyy"
              value={bidSubmissionStart}
              onChange={()=>bidSubmissionStartHandler(bidSubmissionStart)}
              renderInput={(params) => <TextField {...params} />}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <DatePicker
              label="Bid submission end date"
              inputFormat="dd/MM/yyyy"
              value={bidSubmissionEnd}
              onChange={()=>bidSubmissionEndHandler(bidSubmissionEnd)}
              renderInput={(params) => <TextField {...params} />}
            />
          </Grid>
        </Grid>
      </LocalizationProvider>
    </React.Fragment>
  );
}
