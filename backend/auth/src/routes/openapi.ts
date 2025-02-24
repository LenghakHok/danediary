import { swaggerUI } from "@hono/swagger-ui";
import { apiReference } from "@scalar/hono-api-reference";
import { Hono } from "hono";
import { openAPISpecs } from "hono-openapi";
import { env } from "hono/adapter";

const openAPI = new Hono();

openAPI.get("/specs", (c, next) =>
  openAPISpecs(openAPI, {
    documentation: {
      info: {
        title: "DaneDiary API",
        version: "1.0.0",
        description: "API Specification",
      },
      components: {
        securitySchemes: {
          bearerAuth: {
            type: "http",
            scheme: "bearer",
            bearerFormat: "JWT",
          },
        },
      },
      servers: [
        {
          url: `${env(c).APP_HOST}:${env(c).APP_PORT}`,
          description: "Local Server",
        },
      ],
    },
  })(c, next),
);

openAPI.get(
  "/",
  apiReference({
    theme: "saturn",
    layout: "modern",
    spec: { url: "/api/openapi/specs" },
  }),
);

openAPI.get(
  "/auth",
  swaggerUI({
    url: "/api/auth/specs",
  }),
);

export { openAPI };
