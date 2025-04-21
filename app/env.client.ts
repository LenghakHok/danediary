import { createAssert, type tags } from "typia";

export type IEnv = {
  VITE_PUBLIC_APP_NAME: string;
  VITE_PUBLIC_APP_URL: string & tags.Format<"uri">;

  VITE_PUBLIC_POSTHOG_KEY: string;
  VITE_PUBLIC_POSTHOG_HOST: string & tags.Format<"url">;
};

export const assertEnv = createAssert<IEnv>();

export const env = assertEnv({
  ...import.meta.env,
  // CORS_ORIGIN_WHITELIST: process.env.CORS_ORIGIN_WHITELIST?.split(","),
});
