import type { OpenAPIV3_1 } from "@scalar/openapi-types";
import { Hono } from "hono";

import { auth } from "~/auth.config";

const route = new Hono({ strict: true });

route.get("/specs", async (c) => {
  // get the api scheme from the auth config's api
  const documentation =
    (await auth.api.generateOpenAPISchema()) as OpenAPIV3_1.Document;

  // replace the auth's `Default` tags to `Auth`
  documentation.tags = [
    {
      name: "Auth",
      description:
        "Auth endpoints that are included with Better Auth by default. These endpoints are not part of any plugin.",
    },
  ];

  // recursively replace the auth's `Default` tags to `Auth`
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

route.on(["POST", "GET"], "/*", (c) => auth.handler(c.req.raw));

export { route as auth };
