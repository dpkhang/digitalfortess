// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's postal address. */
      id: string;
      access_token: string;
      refresh_token: string;
    };
    access_token: string;
    refresh_token: string;
  }

  interface User {
    id: string;
    access_token: string;
    refresh_token: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    exp: number;
    access_token: string;
    refresh_token: string;
    error: string;
    role: string;
  }
}
