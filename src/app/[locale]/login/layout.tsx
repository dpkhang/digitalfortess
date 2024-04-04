"use client";
import LocaleSwitcher from "@/components/layout/LocaleSwitcher";
import SwitchMode from "@/components/layout/SwitchMode";
import { Box } from "@mui/material";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const LoginLayout = ({ children }: Props) => {
  const { status } = useSession();
  if (status === "authenticated") {
    redirect("/vi/dashboard");
  }
  return (
    <Box height="100vh">
      <Box
        height="100px"
        display="flex"
        justifyContent="flex-end"
        pt="32px"
        pr="32px"
      >
        <SwitchMode />
        <LocaleSwitcher />
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="80vh"
      >
        {children}
      </Box>
    </Box>
  );
};

export default LoginLayout;
