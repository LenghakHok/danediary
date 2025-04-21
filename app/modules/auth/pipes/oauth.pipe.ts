import { createValidate } from "typia";
import type { authClient } from "~/lib/auth.client";

export type OAuthRequest = Pick<
  Parameters<typeof authClient.signIn.social>[0],
  "provider"
>;

export const validateOAuthRequest = createValidate<OAuthRequest>();
