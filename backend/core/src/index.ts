import type Bun from "bun";
import { Hono } from "hono";
import { openAPISpecs } from "hono-openapi";

import { core } from "@/middleware/core.middleware";

import { auth } from "@/modules/auth/auth.controller";
import { medicals } from "@/modules/medical/medical.controller";
import { openAPISpecOptions } from "@/modules/openapi/openapi.const";
import { openapi } from "@/modules/openapi/openapi.route";

import envConfig from "~/env.config";

const app = new Hono({ strict: true }).basePath("/api");

app.use("*", core);

app.route("/auth", auth);
app.route("/medical", medicals);
app.route("/docs", openapi);
app.get("/specs", (c, next) => openAPISpecs(app, openAPISpecOptions)(c, next));

export default {
  port: envConfig.APP_PORT,
  fetch: app.fetch,
} as Bun.Serve;
