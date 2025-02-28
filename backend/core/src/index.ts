import Bun from "bun";

import { apiReference } from "@scalar/hono-api-reference";
import { Hono } from "hono";
import { openAPISpecs } from "hono-openapi";

import { coreMiddlewares } from "@/middleware/core.middleware";

import auth from "@/modules/auth/auth.controller";
import medicals from "@/modules/medical/medical.controller";
import { openAPISpecOptions } from "@/modules/openapi/openapi.const";
import { referencesHandlers } from "@/modules/openapi/openapi.handler";

const app = new Hono({ strict: true }).basePath("/api");

app.use(coreMiddlewares);

app.route("/auth", auth);
app.route("/medical", medicals);

// OPENAPI -- Registeration of the Documentation
app.get("/openapi/specs", (c, next) =>
  openAPISpecs(app, openAPISpecOptions)(c, next),
);
app.get("/openapi/references", ...referencesHandlers);
app.get(
  "/openapi",
  apiReference({
    theme: "deepSpace",
    layout: "modern",
    spec: { url: "/api/openapi/references" },
  }),
);

export default {
  port: Bun.env.APP_PORT,
  fetch: app.fetch,
} as Bun.Serve;
