import { Hono } from "hono";

import { auth as authConfig } from "~/auth.config";

const auth = new Hono({ strict: true });

auth.on(["POST", "GET"], "/*", (c) => authConfig.handler(c.req.raw));

export { auth };
