import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Container from "@mui/material/Container";

export default function CustomizedInputBase() {
  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width:'100vw',
      }}
    >
      <Paper
        component="form"
        sx={{
          p: "5px 10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          width: '100%',
        }}
        elevation="4"
      >
        {/* 
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <MenuIcon />
      </IconButton>
    */}
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search.."
          inputProps={{ "aria-label": "search.." }}
        />
        <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </Container>
  );
}
