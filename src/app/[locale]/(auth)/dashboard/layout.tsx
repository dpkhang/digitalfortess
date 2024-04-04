import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default DashboardLayout;
