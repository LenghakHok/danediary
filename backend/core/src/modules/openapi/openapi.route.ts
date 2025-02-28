import { apiReference } from "@scalar/hono-api-reference";
import { Hono } from "hono";
import { referencesHandlers } from "./openapi.handler";

const route = new Hono();

route.get("/references", ...referencesHandlers);
route.get(
  "/",
  apiReference({
    theme: "deepSpace",
    layout: "modern",
    spec: { url: "/api/docs/references" },
  }),
);

export { route as openapi };
