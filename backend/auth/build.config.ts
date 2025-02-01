import UnpluginTypia from "@ryoppippi/unplugin-typia/bun";
import Bun from "bun";

Bun.build({
  entrypoints: ["./src/main.ts"],
  minify: true,
  outdir: "./dist",
  plugins: [
    UnpluginTypia({
      log: true,
      cache: false,
      tsconfig: "./tsconfig.json",
    }),
  ],
});
