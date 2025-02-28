import { env } from "hono/adapter";
import { every } from "hono/combine";
import { cors } from "hono/cors";
import { csrf } from "hono/csrf";
import { createFactory } from "hono/factory";
import { logger } from "hono/logger";
import { prettyJSON } from "hono/pretty-json";
import { requestId } from "hono/request-id";
import { secureHeaders } from "hono/secure-headers";
import { trimTrailingSlash } from "hono/trailing-slash";

const factory = createFactory();

export const coreMiddlewares = factory.createMiddleware(async (c, next) => {
  every(
    secureHeaders(),
    requestId(),
    logger(),
    prettyJSON(),
    csrf(),
    trimTrailingSlash(),
    cors({
      origin: env(c).CORS_ORIGIN_WHITELIST as string[],
      allowHeaders: ["Content-Type", "Authorization"],
      maxAge: 600,
      credentials: true,
    }),
  );
  await next();
});
