import type { OpenAPIV3_1 } from "@scalar/openapi-types";
import { Hono } from "hono";

import { auth as authConfig } from "~/auth.config";

const auth = new Hono({ strict: true });

auth.get("/specs", async (c) => {
  const documentation =
    (await authConfig.api.generateOpenAPISchema()) as OpenAPIV3_1.Document;

  documentation.components = {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  };

  documentation.security = [
    {
      bearerAuth: [],
    },
  ];

  documentation.tags = [
    {
      name: "Auth",
      description:
        "Auth endpoints that are included with Better Auth by default. These endpoints are not part of any plugin.",
    },
  ];

  if (documentation.paths !== undefined) {
    Object.entries(documentation.paths ?? {}).map(([path, pathObject]) => {
      Object.entries(pathObject ?? {}).map(([pathMethod, methodObject]) => {
        if (documentation.paths?.[path]) {
          methodObject.tags = ["Auth"];

          documentation.paths[path][pathMethod] =
            methodObject as OpenAPIV3_1.PathsObject;
        }
      });
      return path;
    });
  }

  return c.json(documentation);
});

auth.on(["POST", "GET"], "/*", (c) => authConfig.handler(c.req.raw));

export { auth };
