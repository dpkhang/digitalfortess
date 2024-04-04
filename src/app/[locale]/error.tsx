"use client";

import { Box } from "@mui/material";

type RootErrorProps = {
  error: Error;
  reset: () => void;
};

export default function RootError({} //   error,
//   reset ,
: RootErrorProps) {
  return <Box></Box>;
}
