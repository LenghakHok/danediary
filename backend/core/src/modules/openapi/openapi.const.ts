import type { OpenApiSpecsOptions } from "hono-openapi";
import envConfig from "~/env.config";

export const openAPISpecOptions: OpenApiSpecsOptions = {
  documentation: {
    info: {
      title: "DaneDiary API",
      version: "1.0.0",
      description: `This is the API document for ${envConfig.APP_NAME}`,
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
        url: `${envConfig.APP_URL}`,
        description: "Local Server",
      },
    ],
  },
};
