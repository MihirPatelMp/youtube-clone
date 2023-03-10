import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="centre"
      p={2}
      sx={{
        background: "#000",
        position: "sticky",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link
        to="/youtube-clone"
        style={{ display: "flex", alignItems: "center" }}
      >
        <img src={logo} alt="logo" height={45} />
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
