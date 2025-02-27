import Bun from "bun";

import { auth } from "@/modules/auth/route";
import { openAPI } from "@/modules/openapi/route";

import { Hono } from "hono";
import { cors } from "hono/cors";
import { csrf } from "hono/csrf";
import { logger } from "hono/logger";
import { prettyJSON } from "hono/pretty-json";
import { requestId } from "hono/request-id";
import { secureHeaders } from "hono/secure-headers";
import { trimTrailingSlash } from "hono/trailing-slash";

const app = new Hono()
  .basePath("/api")
  .use(secureHeaders())
  .use(requestId())
  .use(logger())
  .use(prettyJSON())
  .use(csrf())
  .use(trimTrailingSlash())
  .use(
    "*",
    cors({
      origin: Bun.env.CORS_ORIGIN_WHITELIST,
      allowHeaders: ["Content-Type", "Authorization"],
      maxAge: 600,
      credentials: true,
    }),
  );

app.route("/auth", auth);
app.route("/openapi", openAPI);

export default {
  port: Bun.env.APP_PORT,
  fetch: app.fetch,
} as Bun.Serve;
