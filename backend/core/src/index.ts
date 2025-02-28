import Bun from "bun";
import { Hono } from "hono";
import { openAPISpecs } from "hono-openapi";

import { coreMiddlewares } from "@/middleware/core.middleware";

import { auth } from "@/modules/auth/auth.controller";
import { medicals } from "@/modules/medical/medical.controller";
import { openAPISpecOptions } from "@/modules/openapi/openapi.const";
import { openapi } from "@/modules/openapi/openapi.route";

const app = new Hono({ strict: true }).basePath("/api");

app.use(coreMiddlewares);

app.route("/auth", auth);
app.route("/medical", medicals);
app.route("/docs", openapi);
// OPENAPI -- Registeration of the Documentation
app.get("/openapi/specs", (c, next) =>
  openAPISpecs(app, openAPISpecOptions)(c, next),
);

export default {
  port: Bun.env.APP_PORT,
  fetch: app.fetch,
} as Bun.Serve;
