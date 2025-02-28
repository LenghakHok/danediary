import { Hono } from "hono";
import { describeRoute } from "hono-openapi";

const medicals = new Hono();

medicals.get(
  "/",
  describeRoute({
    tags: ["Medical"],
    description: "Say hello to the user",
  }),
  (c) => {
    return c.json("Hello World!");
  },
);

export default medicals;
