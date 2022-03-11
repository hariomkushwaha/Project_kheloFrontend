import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { OverlayTrigger } from "react-bootstrap";

export default function PersonalDetails() {
  const [fullName, setFullName] = useState("");
  const [orgName, setOrgName] = useState("");
  const [email, setEmail] = useState("");
  const [fullAddress, setFullAddress] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");

  useEffect(() => {
    localStorage.clear();
    localStorage.setItem(
      "personalDetails",
      JSON.stringify({
        fullName: fullName,
        orgName: orgName,
        email: email,
        fullAddress: fullAddress,
        state: state,
        zip: zip,
      })
    );
  }, [fullName, orgName, email, fullAddress, state, zip]);

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Basic Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="fullName"
            name="Full Name"
            label="Full Name"
            fullWidth
            // autoComplete="given-name"
            variant="standard"
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="organizationName"
            name="OrganizationName"
            label="Organization Name"
            fullWidth
            // autoComplete="given-name"
            variant="standard"
            value={orgName}
            onChange={(e) => setOrgName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="email"
            name="Email"
            label="Email"
            fullWidth
            // autoComplete="given-name"
            variant="standard"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="fullAddress"
            name="FullAddress"
            label="Full Address"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            value={fullAddress}
            onChange={(e) => {
              setFullAddress(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
            value={state}
            onChange={(e) => {
              setState(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            value={zip}
            onChange={(e) => {
              setZip(e.target.value);
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}
