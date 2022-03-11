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
              Tender ID: {props.prod.TenderID}
            </Typography>
            <Typography variant="body2" component="div">
              Tender Reference Number: {props.prod.TenderReferenceNumber}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Organisation: {props.prod.Organisation}
            </Typography>
            <Typography variant="h6">
              Tender Value: {props.prod.TenderValue}
              <br />
            </Typography>
            <Typography variant="body2">
              EMD Amount: {props.prod.EmdAmount}
              <br />
            </Typography>
            <Typography variant="body1">
              Tender Fee: {props.prod.TenderFee}
              <br />
            </Typography>
          </CardContent>
        </React.Fragment>
  );
};

export default ComparisonCard;