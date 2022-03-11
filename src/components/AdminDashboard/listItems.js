import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import BarChartIcon from "@mui/icons-material/BarChart";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ListIcon from "@mui/icons-material/List";
import CompareIcon from "@mui/icons-material/Compare";

export const mainListItems = (
  <React.Fragment>
    {/* <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton> */}
    <ListItemButton>
      <ListItemIcon>
        <ListIcon />
      </ListItemIcon>
      <ListItemText primary="List View" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <CompareIcon />
      </ListItemIcon>
      <ListItemText primary="Compare" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Analytics" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    {/* <ListSubheader component="div" inset>
     
    </ListSubheader> */}
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
  </React.Fragment>
);
