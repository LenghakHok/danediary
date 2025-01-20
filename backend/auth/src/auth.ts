import { betterAuth as createAuth } from "better-auth";

export const auth = createAuth({
  database: {},
  advanced: {
    crossSubDomainCookies: {
      enabled: true,
    },
  },
});
