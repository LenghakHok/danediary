import UnpluginTypia from "@ryoppippi/unplugin-typia/bun";
import { plugin } from "bun";

plugin(
  UnpluginTypia({
    log: true,
    cache: false,
    tsconfig: "tsconfig.json",
    typia: { functional: true },
    exclude: ["node_modules", "dist", "data", "db", "^.*"],
  }),
);
