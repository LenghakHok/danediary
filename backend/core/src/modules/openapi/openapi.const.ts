import type { OpenApiSpecsOptions } from "hono-openapi";

export const openAPISpecOptions: OpenApiSpecsOptions = {
  documentation: {
    info: {
      title: "DaneDiary API",
      version: "1.0.0",
      description: "",
    },
    tags: [
      {
        name: "Medical",
        description: "This is medicals management endpoints",
      },
    ],
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
        url: `${process.env.APP_URL}`,
        description: "Local Server",
      },
    ],
  },
};
