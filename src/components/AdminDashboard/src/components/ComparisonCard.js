import React from 'react'
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const ComparisonCard = (props) => {
    console.log(props)
  return (
        <React.Fragment>
          <CardContent>
            <Typography
              variant="h6"
              color="text.secondary"
              gutterBottom
            >
              License ID: {props.prod.LicenseID}
            </Typography>
            <Typography variant="body2" component="div">
              Full Name: {props.prod.FullName}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Organisation: {props.prod.Organization}
            </Typography>
            <Typography variant="h6">
              Total Cost: {props.prod.TotalCost}
              <br />
            </Typography>
            <Typography variant="body2">
              Duration (in Months): {props.prod.Duration}
              <br />
            </Typography>
            <Typography variant="body1">
              Category: {props.prod.Category}
              <br />
            </Typography>
          </CardContent>
        </React.Fragment>
  );
};

export default ComparisonCard;