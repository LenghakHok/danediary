import { createAssert, type tags } from "typia";

export type IEnv = {
  NODE_ENV: string;

  VITE_PUBLIC_APP_NAME: string;
  VITE_PUBLIC_APP_URL: string & tags.Format<"uri">;

  VITE_PUBLIC_POSTHOG_KEY: string;
  VITE_PUBLIC_POSTHOG_HOST: string & tags.Format<"url">;

  THEME_SECRET: string;

  BETTER_AUTH_SECRET: string;
  BETTER_AUTH_URL: string & tags.Format<"uri">;

  CORS_ORIGIN_WHITELIST: (string & tags.Format<"uri">)[];

  DATABASE_URL: string & tags.Format<"uri">;
  VALKEY_URL: string & tags.Format<"uri">;

  GITHUB_CLIENT_ID: string;
  GITHUB_CLIENT_SECRET: string;

  GOOGLE_CLIENT_ID: string;
  GOOGLE_CLIENT_SECRET: string;

  FACEBOOK_APP_ID: string;
  FACEBOOK_APP_SECRET: string;

  DISCORD_CLIENT_ID: string;
  DISCORD_CLIENT_SECRET: string;

  RESEND_API_KEY: string;

  TWITTER_CLIENT_ID: string;
  TWITTER_CLIENT_SECRET: string;
};

export const assertEnv = createAssert<IEnv>();

export const env = assertEnv({
  ...process.env,

  APP_PORT: Number.parseInt(process.env.APP_PORT ?? ""),
  CORS_ORIGIN_WHITELIST: process.env.CORS_ORIGIN_WHITELIST?.split(","),
});
