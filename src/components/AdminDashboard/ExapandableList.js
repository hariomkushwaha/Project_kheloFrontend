import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar from "@mui/material/AppBar";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ExapandableList = () => {

    const drawerWidth = 240;
    const cardHeight = 240;

    const AppBar = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== "open",
      })(({ theme, open }) => ({
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
          marginLeft: drawerWidth,
          width: `calc(100% - ${drawerWidth}px)`,
          transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        }),
      }));
      
    const Drawer = styled(MuiDrawer, {
        shouldForwardProp: (prop) => prop !== "open",
      })(({ theme, open }) => ({
        "& .MuiDrawer-paper": {
          position: "relative",
          whiteSpace: "nowrap",
          width: drawerWidth,
          transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
          boxSizing: "border-box",
          ...(!open && {
            overflowX: "hidden",
            transition: theme.transitions.create("width", {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
            width: theme.spacing(7),
            [theme.breakpoints.up("sm")]: {
              width: theme.spacing(9),
            },
          }),
        },
      }));

    const [expandCard, setExpandCard] = React.useState(true);
    
    const toggleDrawer = () => {
        setExpandCard(!expandCard);
    };
    

    return (
        <div className="ExpandableList">
            <h2>List</h2>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="Expand Card"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                position: "absolute",
                bottom: "0px",

                ...(expandCard && { display: "none" }),
              }}
            >
              <KeyboardArrowUpIcon />
            </IconButton>
            <IconButton onClick={toggleDrawer}>
              <KeyboardArrowDownIcon />
            </IconButton>
        </div>
    );
};

export default ExapandableList;
