declare module "bun" {
  interface Env extends IEnv {}
}

export interface IEnv {
  APP_NAME: string;
  APP_PORT: number;
  APP_HOST: string;

  BETTER_AUTH_SECRET: string;
  BETTER_AUTH_URL: string;

  CORS_ORIGIN_WHITELIST: string[];

  DISCORD_CLIENT_ID: string;
  DISCORD_CLIENT_SECRET: string;

  DATABASE_URL: string;
  VALKEY_URL: string;

  FACEBOOK_APP_ID: string;
  FACEBOOK_APP_SECRET: string;

  GITHUB_CLIENT_ID: string;
  GITHUB_CLIENT_SECRET: string;

  GOOGLE_CLIENT_ID: string;
  GOOGLE_CLIENT_SECRET: string;

  TWITTER_CLIENT_ID: string;
  TWITTER_CLIENT_SECRET: string;
}
