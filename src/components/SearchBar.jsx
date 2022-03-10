import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Container from "@mui/material/Container";

export default function CustomizedInputBase() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width:'100vw',
      }}
    >
      <div
        style={{
          p: "5px 10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          width: '70%',
          boxShadow: '3px 3px 10px rgba(0,0,0,0.25)',
        }}
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
      </div>
    </div>
  );
}
