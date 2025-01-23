import { betterAuth as createAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import Bun, { SQL } from "bun";

const bunDbClient = new SQL(Bun.env.DATABASE_URL as string);

export const auth = createAuth({
  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
    requireEmailVerification: true,
    minPasswordLength: 8,
  },
  appName: "DaneDiary",
  database: drizzleAdapter(
    { client: bunDbClient },
    { provider: "pg", usePlural: true },
  ),
  rateLimit: {
    enabled: true,
    storage: "memory",
  },
  socialProviders: {
    github: {
      clientId: Bun.env.GITHUB_CLIENT_ID as string,
      clientSecret: Bun.env.GITHUB_CLIENT_SECRET as string,
    },
    google: {
      clientId: Bun.env.GOOGLE_CLIENT_ID as string,
      clientSecret: Bun.env.GOOGLE_CLIENT_SECRET as string,
    },
    facebook: {
      clientId: Bun.env.FACEBOOK_APP_ID as string,
      clientSecret: Bun.env.FACEBOOK_APP_SECRET as string,
    },
    twitter: {
      clientId: Bun.env.TWITTER_CLIENT_ID as string,
      clientSecret: Bun.env.TWITTER_CLIENT_SECRET as string,
    },
    discord: {
      clientId: Bun.env.DISCORD_CLIENT_ID as string,
      clientSecret: Bun.env.DISCORD_CLIENT_SECRET as string,
    },
  },
  plugins: [],
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
