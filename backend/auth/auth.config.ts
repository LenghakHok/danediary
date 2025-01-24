import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import Bun, { SQL } from "bun";
import Valkey from "iovalkey";
import schema from "~/db/schema";

const bunDbClient = new SQL(Bun.env.DATABASE_URL as string);
const valkey = new Valkey(Bun.env.VALKEY_URL as string);

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
    requireEmailVerification: true,
    minPasswordLength: 8,
  },
  appName: "DaneDiary",
  database: drizzleAdapter(
    { client: bunDbClient },
    { provider: "pg", schema, usePlural: true },
  ),
  rateLimit: {
    enabled: true,
    storage: "secondary-storage",
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
  emailVerification: {
    sendOnSignUp: true,
    autoSignInAfterVerification: true,
  },
  secondaryStorage: {
    get: async (key) => {
      const value = await valkey.get(key);
      return value ? value : null;
    },
    set: async (key, value, ttl) => {
      // or for valkey:
      if (ttl) {
        await valkey.set(key, value, "EX", ttl);
      } else {
        await valkey.set(key, value);
      }
    },
    delete: async (key) => {
      await valkey.del(key);
    },
  },
});
