import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
export default function TenderFeeDetail() {

    const [emdFee, setEmdFee] = React.useState("");
    const [emdPayableTo, setEmdPayableTo] = React.useState("");
    const [emdPercentage, setEmdPercentage] = React.useState("");
    const [emdPayableAt, setEmdPayableAt] = React.useState("");
    const [emdFeeType, setEmdFeeType] = React.useState("");

    const emdFeeHandler = (event) => {
      setEmdFee(event.target.value);
      };
      const emdPayableToHandler = (event) => {
        setEmdPayableTo(event.target.value);
      };
      const emdPercentageHandler = (event) => {
        setEmdPercentage(event.target.value);
      };
      const emdPayableAtHandler= (event) => {
        setEmdPayableAt(event.target.value);
      };
      const emdFeeTypeHandler = (event) => {
        setEmdFeeType(event.target.value);
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
            id="emdFee"
            name="EmdFee"
            label="EMD Fee in ruppee"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            type="number"
            value={emdFee}
            onChange={emdFeeHandler}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="emdPercentage"
            name="EmdPercentage"
            label="EMD Percentage"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            type="number"
            value={emdPercentage}
            onChange={emdPercentageHandler}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="emdPayableTo"
            name="EmdPayableTo"
            label="EMD payable to"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            value={emdPayableTo}
            onChange={emdPayableToHandler}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="emdPayableAt"
            name="emdPayableAt"
            label="EMD payable at"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            value={emdPayableAt}
            onChange={emdPayableAtHandler}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="emdFeeType"
            name="EmdFeeType"
            label="EMD Fee Type"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            value={emdFeeType}
            onChange={emdFeeTypeHandler}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
