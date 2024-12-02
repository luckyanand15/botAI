import { Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useOutletContext } from "react-router-dom";

const Navbar = () => {
  const { handleMenu } = useOutletContext();
  const mobileSize = useMediaQuery("(max-width:768px)");
  return (
    <Stack 
    component={'header'}
    p={{ xs: 2, md: 3 }}
    direction={'row'}
    alignItems={'center'}
    justifyContent={'space-between'}>
      <Stack direction={"row"} alignItems={"center"} spacing={2}>
        {mobileSize && <MenuIcon onClick={() => handleMenu((prev) => !prev)} />}
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <Typography variant="h1">Bot AI</Typography>
        </Link>
      </Stack>
    </Stack>
  );
};

export default Navbar;
