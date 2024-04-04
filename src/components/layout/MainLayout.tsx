"use client";

import React from "react";
import MainAppBar from "./MainAppBar";

type MainLayoutProps = {
  children: React.ReactNode;
};

// MainLayout.innerPadding = MainAppBar.maxHeight + MainFooter.maxHeight;

function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <MainAppBar />
      <main style={{ minHeight: `calc(100vh - ${0}px)` }}>{children}</main>
    </>
  );
}

export default MainLayout;
