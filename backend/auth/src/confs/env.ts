import typia, { type AssertionGuard } from "typia";

declare const Bun: {
  env: {
    BETTER_AUTH_SECRET: string;
    BETTER_AUTH_URL: string;
    CORS_ORIGIN_WHITELIST: string;
  };
};

const checkEnv: AssertionGuard<IEnv> = typia.createAssertGuardEquals<IEnv>();

interface IEnv {
  BETTER_AUTH_SECRET: string;
  BETTER_AUTH_URL: string;
  CORS_ORIGIN_WHITELIST: string;
}

const env: IEnv = {
  BETTER_AUTH_SECRET: Bun.env.BETTER_AUTH_SECRET,
  BETTER_AUTH_URL: Bun.env.BETTER_AUTH_URL,
  CORS_ORIGIN_WHITELIST: Bun.env.CORS_ORIGIN_WHITELIST,
};

checkEnv({
  BETTER_AUTH_SECRET: env.BETTER_AUTH_SECRET,
  BETTER_AUTH_URL: env.BETTER_AUTH_URL,
  CORS_ORIGIN_WHITELIST: env.CORS_ORIGIN_WHITELIST,
});

export { env };
