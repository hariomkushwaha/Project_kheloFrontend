import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Grid from "@mui/material/Grid";
import ExpandableCard2 from "./ExpandableCard2";

import { DataGrid } from "@mui/x-data-grid";
import Stack from "@mui/material/Stack";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const rows = [
  {
    proponent: "Diamond",
    amount: 20000,
    completedProposals: 2,
    turnover: 100300,
    experience: 3,
    id: 1,
  },
  {
    proponent: "Luna",
    amount: 120000,
    completedProposals: 2,
    turnover: 400000,
    experience: 7,
    id: 2,
  },
  {
    proponent: "Hailie",
    amount: 100000,
    completedProposals: 5,
    turnover: 10000,
    experience: 2,
    id: 3,
  },
  {
    proponent: "Alexis Rowe",
    amount: 500000,
    completedProposals: 9,
    turnover: 1550000,
    experience: 12,
    id: 4,
  },
  {
    proponent: "Rowe",
    amount: 5000000,
    completedProposals: 9,
    turnover: 1550000,
    experience: 12,
    id: 5,
  },
];

const columns = [
  { field: "proponent", headerName: "Proponent", width: 200, type: "text" },
  {
    field: "amount",
    headerName: "Amount",
    type: "number",
    width: 200,
  },
  {
    field: "completedProposals",
    headerName: "Completed Proposals",
    type: "number",
    width: 200,
  },
  {
    field: "turnover",
    headerName: "Turnover (3yrs)",
    type: "number",
    width: 200,
  },
  {
    field: "experience",
    headerName: "Experience",
    type: "number",
    width: 200,
  },
];

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: "100%" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <CardContent>
            <Stack style={{ width: "100%" }} alignItems="center" spacing={2}>
              <div style={{ height: 400, width: "100%" }}>
                <DataGrid
                  rows={rows}
                  columns={columns}
                  // autoPageSize
                  autoHeight
                />
              </div>
            </Stack>
            {/* <Grid container spacing={4}>
              <Grid item xs={4}>
                <Typography variant="h6" component="div">
                  Proponent
                </Typography>
                <br />
                <Typography variant="subitle1" component="div">
                MRF Tyres
                </Typography>
                </Grid>
              <Grid item xs={3}>
                <Typography variant="h6" component="div">
                  Completed Proposals
                </Typography>
                <br />
                <Typography variant="subitle1" component="div">
                    5 (Govt.)
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="h6" component="div">
                  Turnover <sub>(3 yrs)</sub>
                </Typography>
                <br />
                <Typography variant="subitle1" component="div">
                    300.8 Crore
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="h6" component="div">
                    Experience
                </Typography>
                <br />
                <Typography variant="subitle1" component="div">
                    9 years
                </Typography>
              </Grid>
            </Grid> */}
          </CardContent>

          {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <ExpandableCard2 />
            </CardContent>
          </Collapse> */}
        </Grid>
        {/* <Grid
          item
          xs={1}
          style={{
            borderLeft: "1px solid rgba(0,0,0,0.15)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CardActions disableSpacing>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
        </Grid> */}
      </Grid>
    </Card>
  );
}
