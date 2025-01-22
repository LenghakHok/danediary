import { env } from "@/confs/env";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { csrf } from "hono/csrf";
import { logger } from "hono/logger";
import { prettyJSON } from "hono/pretty-json";
import { requestId } from "hono/request-id";
import { secureHeaders } from "hono/secure-headers";
import { appendTrailingSlash } from "hono/trailing-slash";

const app = new Hono().basePath("/api");
app.use(secureHeaders());
app.use(requestId());
app.use(logger());
app.use(prettyJSON());
app.use(csrf());
app.use(appendTrailingSlash());
app.use(
  "*",
  cors({
    origin: env.CORS_ORIGIN_WHITELIST,
    allowHeaders: ["Content-Type", "Authorization"],
    maxAge: 600,
    credentials: true,
  }),
);

app.use(
  "/auth/**", // or replace with "*" to enable cors for all routes
  cors({
    origin: env.CORS_ORIGIN_WHITELIST, // replace with your origin
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["POST", "GET", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
    credentials: true,
  }),
);

// app.on(["POST", "GET"], "/auth/*", (c) => auth.handler(c.req.raw));

app.get("/", (c) => {
  return c.json({ message: "Hello, World!" });
});

export default {
  port: 8000,
  fetch: app.fetch,
};
