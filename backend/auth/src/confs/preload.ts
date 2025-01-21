import UnpluginTypia from "@ryoppippi/unplugin-typia/bun";
import { plugin } from "bun";

plugin(
  UnpluginTypia({
    log: true,
    cache: true,
    tsconfig: "../../tsconfig.json",
  }),
);
