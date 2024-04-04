import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";
import appConfig from "@/config/env";
import { ApiResponse } from "@/types/shared";
import { User } from "next-auth";
import { jwtDecode } from "jwt-decode";
import { Login, TokenDecode } from "@/types/auth";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const refreshToken = async (refreshToken: string) => {
  const res = await fetch(appConfig.API_HOST + "/auth/refresh-token", {
    method: "POST",
    body: JSON.stringify({
      token: refreshToken,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json: Login = await res.json();

  if (json) {
    const user = json;
    if (user) return user;
    return null;
  } else return null;
};

const authOptions = NextAuth({
  secret: appConfig.NEXT_AUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email" },
        password: {
          label: "password",
        },
      },
      async authorize(credentials) {
        const res = await fetch(appConfig.API_HOST + "/auth/login", {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
        });
        if (res.status === 200) {
          const json: Login = await res.json();
          const user = json as any;
          if (user) return user;
          else return null;
        }
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.access_token = user.access_token;
        token.refresh_token = user.refresh_token;
        // const profile = await fetch(appConfig.API_HOST + "/users/admin-profile", {
        //   method: "GET",
        //   mode: "cors",
        //   headers: {
        //     "Content-Type": "application/json",
        //     Authorization: `Bearer ${token?.at}`,
        //   },
        // });
      }

      //   if (profile.status === 200) {
      //     // const profileJson: ApiResponse<Admin> = await profile.json();
      //     // if (profileJson.data) {
      //     //   token.name = profileJson.data.displayName;
      //     //   token.role = profileJson.data.role || "";
      //     // }
      //   }
      // }

      try {
        const payload = jwtDecode<TokenDecode>(token.access_token);
        if (Date.now() >= payload.exp * 1000) {
          const refresh = await refreshToken(token.refresh_token);
          if (refresh) {
            token.access_token = refresh.access_token;
            token.refresh_token = refresh.refresh_token;
          } else {
            token.access_token = "";
            token.refresh_token = "";
          }
        }
      } catch (err) {
        token.access_token = "";
        token.refresh_token = "";
      }

      return token;
    },

    async session({ session, token }) {
      session.access_token = token.access_token;
      session.refresh_token = token.refresh_token;
      if (!token.access_token) return { expires: "0", user: undefined };
      return Promise.resolve(session);
    },

    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },

    async signIn({ user }) {
      if (user.access_token) return true;
      return false;
    },
  },

  pages: {
    signOut: "/login",
    signIn: "/",
  },
});

export default authOptions;
