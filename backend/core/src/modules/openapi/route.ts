import { apiReference } from "@scalar/hono-api-reference";
import type { OpenAPIV3_1 } from "@scalar/openapi-types";
import { Hono } from "hono";
import { openAPISpecs } from "hono-openapi";
import { env } from "hono/adapter";
import { isErrorResult, merge } from "openapi-merge";

import { auth } from "~/auth.config";

const route = new Hono();

route.get("/specs", (c, next) => {
  return openAPISpecs(route, {
    documentation: {
      info: {
        title: "DaneDiary API",
        version: "1.0.0",
        description: "",
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
      security: [
        {
          bearerAuth: [],
        },
      ],
      servers: [
        {
          url: `${env(c).APP_URL}`,
          description: "Local Server",
        },
      ],
    },
  })(c, next);
});

route.get("/references", async (c) => {
  const docsRef = await fetch(`${env(c).APP_URL}/api/openapi/specs`).then(
    (res) => res.body,
  );
  let result = "";

  if (docsRef) {
    const reader = docsRef.getReader();
    const decoder = new TextDecoder();

    let done = false;
    while (!done) {
      const { value, done: isDone } = await reader.read();
      if (value) {
        result += decoder.decode(value, { stream: true });
      }
      done = isDone;
    }
  }

  // get the auth references from authConfig
  const authRef =
    (await auth.api.generateOpenAPISchema()) as OpenAPIV3_1.Document;

  // changed the main tag and its description of the auth tag
  authRef.tags = [
    {
      name: "Auth",
      description:
        "Auth endpoints that are included with Better Auth by default. These endpoints are not part of any plugin.",
    },
  ];

  // replace the tags in each path of auth
  if (authRef.paths !== undefined) {
    Object.entries(authRef.paths ?? {}).map(([path, pathObject]) => {
      Object.entries(pathObject ?? {}).map(([pathMethod, methodObject]) => {
        if (authRef.paths?.[path]) {
          methodObject.tags = ["Auth"];

          authRef.paths[path][pathMethod] =
            methodObject as OpenAPIV3_1.PathsObject;
        }
      });
      return path;
    });
  }

  const mergeResult = merge([
    {
      oas: JSON.parse(result),
    },
    {
      // @ts-ignore
      oas: authRef,
      pathModification: {
        prepend: "/api/auth",
      },
    },
  ]);

  if (isErrorResult(mergeResult)) {
    return c.body(JSON.stringify(c.error));
  }

  return c.body(JSON.stringify(mergeResult.output), 200);
});

route.get(
  "/",
  apiReference({
    theme: "deepSpace",
    layout: "modern",
    spec: { url: "/api/openapi/references" },
  }),
);

export { route as openAPI };
