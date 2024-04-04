"use client";

import { SessionProvider } from "next-auth/react";
import React from "react";
import SWRProvider from "./SWRProvider";
import ThemeRegistry from "./ThemeRegistry";
import { LanguageType } from "@/types/language";

type Props = {
  children: React.ReactNode;
  lng?: LanguageType;
};

function AppProviders({ children, lng }: Props) {
  return (
    <ThemeRegistry
      options={{ key: "mui-css" }}
      lng={lng}
    >
      <SessionProvider>
        <SWRProvider>{children}</SWRProvider>
      </SessionProvider>
    </ThemeRegistry>
  );
}

export default AppProviders;
