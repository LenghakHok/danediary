import { betterAuth as createAuth } from "better-auth";

export const auth = createAuth({
  advanced: {
    crossSubDomainCookies: {
      enabled: true,
    },
  },
});
