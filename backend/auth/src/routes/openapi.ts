import { apiReference } from "@scalar/hono-api-reference";
import type { OpenAPIV3_1 } from "@scalar/openapi-types";
import { Hono } from "hono";
import { openAPISpecs } from "hono-openapi";
import { env } from "hono/adapter";
import { isErrorResult, merge } from "openapi-merge";
import { auth } from "~/auth.config";

const openAPI = new Hono();

openAPI.get("/specs", (c, next) => {
  return openAPISpecs(openAPI, {
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

openAPI.get("/references", async (c) => {
  const nonAuthRef = await fetch(`${env(c).APP_URL}/api/openapi/specs`).then(
    (res) => res.body,
  );
  let result = "";

  if (nonAuthRef) {
    const reader = nonAuthRef.getReader();
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

  const authRef =
    (await auth.api.generateOpenAPISchema()) as OpenAPIV3_1.Document;

  authRef.tags = [
    {
      name: "Auth",
      description:
        "Auth endpoints that are included with Better Auth by default. These endpoints are not part of any plugin.",
    },
  ];

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

openAPI.get(
  "/",
  apiReference({
    theme: "saturn",
    layout: "modern",
    spec: { url: "/api/openapi/references" },
  }),
);

export { openAPI };
