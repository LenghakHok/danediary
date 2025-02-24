import type { OpenAPI } from "@scalar/openapi-types";
import { Hono } from "hono";

import { auth as authConfig } from "~/auth.config";

const auth = new Hono({ strict: true });

auth.get("/specs", async (c) => {
  const schema =
    (await authConfig.api.generateOpenAPISchema()) as OpenAPI.Document;

  schema.tags[0].name = "Auth";

  return c.json(schema);
});

auth.on(["POST", "GET"], "/*", (c) => authConfig.handler(c.req.raw));

export { auth };
