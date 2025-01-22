import UnpluginTypia from "@ryoppippi/unplugin-typia/bun";
import Bun, { plugin } from "bun";

Bun.env.NODE_ENV === "production" &&
  plugin(
    UnpluginTypia({
      log: true,
      cache: false,
      tsconfig: "tsconfig.json",
    }),
  );
