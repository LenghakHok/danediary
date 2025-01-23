import { env } from "@/confs/env";
import { betterAuth as createAuth } from "better-auth";
import { Client } from "cassandra-driver";
export const auth = createAuth({
  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
    requireEmailVerification: true,
    minPasswordLength: 8,
  },
  appName: "DaneDiary",
  database: new Client({}),
  socialProviders: {
    github: {
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
    },
    google: {
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    },
    facebook: {
      clientId: env.FACEBOOK_APP_ID,
      clientSecret: env.FACEBOOK_APP_SECRET,
    },
    twitter: {
      clientId: env.TWITTER_CLIENT_ID,
      clientSecret: env.TWITTER_CLIENT_SECRET,
    },
    discord: {
      clientId: env.DISCORD_CLIENT_ID,
      clientSecret: env.DISCORD_CLIENT_SECRET,
    },
  },
  advanced: {
    crossSubDomainCookies: {
      enabled: true,
    },
    useSecureCookies: true,
    defaultCookieAttributes: {
      secure: true,
      sameSite: "strict",
    },
  },
});
