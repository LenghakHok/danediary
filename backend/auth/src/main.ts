import Bun from "bun";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { csrf } from "hono/csrf";
import { logger } from "hono/logger";
import { prettyJSON } from "hono/pretty-json";
import { requestId } from "hono/request-id";
import { secureHeaders } from "hono/secure-headers";
import { trimTrailingSlash } from "hono/trailing-slash";
import { auth } from "~/auth.config";

const app = new Hono().basePath("/api");

app.use(secureHeaders());
app.use(requestId());
app.use(logger());
app.use(prettyJSON());
app.use(csrf());
app.use(trimTrailingSlash());
app.use(
  "*",
  cors({
    origin: Bun.env.CORS_ORIGIN_WHITELIST,
    allowHeaders: ["Content-Type", "Authorization"],
    maxAge: 600,
    credentials: true,
  }),
);

app.use(
  "/auth/**", // or replace with "*" to enable cors for all routes
  cors({
    origin: Bun.env.CORS_ORIGIN_WHITELIST, // replace with your origin
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["POST", "GET", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
    credentials: true,
  }),
);

app.on(["POST", "GET"], "/auth/**", (c) => auth.handler(c.req.raw));

app.get("/", (c) => {
  return c.json({ message: "Hello, World!" });
});

export default {
  port: Bun.env.APP_PORT,
  fetch: app.fetch,
};
