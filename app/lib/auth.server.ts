import { db } from "~/db";
import * as schema from "~/db/schema";

import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { admin, multiSession, organization } from "better-auth/plugins";
import { env, type IEnvSever } from "~/env";

export const auth = betterAuth({
  advanced: { useSecureCookies: true },
  appName: env.VITE_PUBLIC_APP_NAME,
  database: drizzleAdapter(db, { provider: "pg", usePlural: true, schema }),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: (env as IEnvSever).GOOGLE_CLIENT_ID as string,
      clientSecret: (env as IEnvSever).GOOGLE_CLIENT_SECRET as string,
    },
    facebook: {
      clientId: (env as IEnvSever).FACEBOOK_APP_ID as string,
      clientSecret: (env as IEnvSever).FACEBOOK_APP_SECRET as string,
    },
    discord: {
      clientId: (env as IEnvSever).DISCORD_CLIENT_ID as string,
      clientSecret: (env as IEnvSever).DISCORD_CLIENT_SECRET as string,
    },
    github: {
      clientId: (env as IEnvSever).GITHUB_CLIENT_ID as string,
      clientSecret: (env as IEnvSever).GITHUB_CLIENT_SECRET as string,
    },
    twitter: {
      clientId: (env as IEnvSever).TWITTER_CLIENT_ID as string,
      clientSecret: (env as IEnvSever).TWITTER_CLIENT_SECRET as string,
    },
  },
  plugins: [admin(), multiSession(), organization()],
  trustedOrigins: (env as IEnvSever).CORS_ORIGIN_WHITELIST,
});
