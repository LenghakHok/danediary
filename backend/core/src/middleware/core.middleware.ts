import { every } from "hono/combine";
import { cors } from "hono/cors";
import { csrf } from "hono/csrf";
import { createFactory } from "hono/factory";
import { logger } from "hono/logger";
import { prettyJSON } from "hono/pretty-json";
import { requestId } from "hono/request-id";
import { secureHeaders } from "hono/secure-headers";
import { trimTrailingSlash } from "hono/trailing-slash";
import envConfig from "~/env.config";

const factory = createFactory();

export const core = factory.createMiddleware(
  every(
    secureHeaders(),
    requestId(),
    logger(),
    prettyJSON(),
    csrf(),
    trimTrailingSlash(),
    cors({
      origin: envConfig.CORS_ORIGIN_WHITELIST,
      allowHeaders: ["Content-Type", "Authorization"],
      allowMethods: ["POST", "GET", "OPTIONS"],
      exposeHeaders: ["Content-Length"],
      credentials: true,
      maxAge: 600,
    }),
  ),
);
