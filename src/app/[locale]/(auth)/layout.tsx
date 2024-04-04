"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const AuthLayout = ({ children }: Props) => {
  const { status } = useSession();
  if (status === "unauthenticated") {
    redirect("/vi/login");
  }
  return <div>{children}</div>;
};

export default AuthLayout;
