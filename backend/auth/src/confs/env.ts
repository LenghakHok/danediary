import typia, { type AssertionGuard } from "typia";

declare const Bun: {
  env: IBunEnv;
};

interface IBunEnv {
  BETTER_AUTH_SECRET: string;
  BETTER_AUTH_URL: string;

  CORS_ORIGIN_WHITELIST: string;

  DISCORD_CLIENT_ID: string;
  DISCORD_CLIENT_SECRET: string;

  FACEBOOK_APP_ID: string;
  FACEBOOK_APP_SECRET: string;

  GITHUB_CLIENT_ID: string;
  GITHUB_CLIENT_SECRET: string;

  GOOGLE_CLIENT_ID: string;
  GOOGLE_CLIENT_SECRET: string;

  TWITTER_CLIENT_ID: string;
  TWITTER_CLIENT_SECRET: string;
}

interface IEnv extends Omit<IBunEnv, "CORS_ORIGIN_WHITELIST"> {
  CORS_ORIGIN_WHITELIST: string[];
}

const env: IEnv = {
  BETTER_AUTH_SECRET: Bun.env.BETTER_AUTH_SECRET,
  BETTER_AUTH_URL: Bun.env.BETTER_AUTH_URL,

  CORS_ORIGIN_WHITELIST: Bun.env.CORS_ORIGIN_WHITELIST.split(",").map(
    (origin) => origin.trim(),
  ),

  DISCORD_CLIENT_ID: Bun.env.DISCORD_CLIENT_ID,
  DISCORD_CLIENT_SECRET: Bun.env.DISCORD_CLIENT_SECRET,

  FACEBOOK_APP_ID: Bun.env.FACEBOOK_APP_ID,
  FACEBOOK_APP_SECRET: Bun.env.FACEBOOK_APP_SECRET,

  GITHUB_CLIENT_ID: Bun.env.GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET: Bun.env.GITHUB_CLIENT_SECRET,

  GOOGLE_CLIENT_ID: Bun.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: Bun.env.GOOGLE_CLIENT_SECRET,

  TWITTER_CLIENT_ID: Bun.env.TWITTER_CLIENT_ID,
  TWITTER_CLIENT_SECRET: Bun.env.TWITTER_CLIENT_SECRET,
};

const checkEnv: AssertionGuard<IEnv> = typia.createAssertGuardEquals<IEnv>();

checkEnv(env);

export { env };
