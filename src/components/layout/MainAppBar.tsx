"use client";

import { Box } from "@mui/material";
import * as React from "react";
import SwitchMode from "./SwitchMode";
import LocaleSwitcher from "./LocaleSwitcher";
import { Link } from "@/config/navigation";
import { signOut } from "next-auth/react";

MainAppBar.maxHeight = 70;

function MainAppBar() {
  return (
    <Box
      height="60px"
      display="flex"
      justifyContent="space-between"
      px="10px"
      boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
    >
      <Box
        display="flex"
        gap={4}
        alignItems="center"
      >
        <Link
          href={"/dashboard"}
          style={{ color: "black", textDecoration: "none" }}
        >
          Projects
        </Link>
        <Link
          href={"/"}
          style={{ color: "black", textDecoration: "none" }}
        >
          User
        </Link>
        <Box
          onClick={() => signOut()}
          sx={{ cursor: "pointer" }}
        >
          Logout
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems={"center"}
      >
        <SwitchMode />
        <LocaleSwitcher />
      </Box>
    </Box>
  );
}
export default MainAppBar;
