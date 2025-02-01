import Bun from "bun";
import typia, { type AssertionGuard } from "typia";
import type { IEnv } from "~/types/env";

const checkEnv: AssertionGuard<IEnv> = typia.createAssertGuardEquals<IEnv>();

const env = {
  APP_NAME: Bun.env.APP_NAME,
  APP_PORT: Number.parseInt(Bun.env.APP_PORT as unknown as string),

  BETTER_AUTH_SECRET: Bun.env.BETTER_AUTH_SECRET,
  BETTER_AUTH_URL: Bun.env.BETTER_AUTH_URL,

  CORS_ORIGIN_WHITELIST: (Bun.env.CORS_ORIGIN_WHITELIST as unknown as string)
    .split(",")
    .map((origin) => origin.trim()),

  DISCORD_CLIENT_ID: Bun.env.DISCORD_CLIENT_ID,
  DISCORD_CLIENT_SECRET: Bun.env.DISCORD_CLIENT_SECRET,

  DATABASE_URL: Bun.env.DATABASE_URL,

  FACEBOOK_APP_ID: Bun.env.FACEBOOK_APP_ID,
  FACEBOOK_APP_SECRET: Bun.env.FACEBOOK_APP_SECRET,

  GITHUB_CLIENT_ID: Bun.env.GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET: Bun.env.GITHUB_CLIENT_SECRET,

  GOOGLE_CLIENT_ID: Bun.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: Bun.env.GOOGLE_CLIENT_SECRET,

  TWITTER_CLIENT_ID: Bun.env.TWITTER_CLIENT_ID,
  TWITTER_CLIENT_SECRET: Bun.env.TWITTER_CLIENT_SECRET,
};

checkEnv(env);
