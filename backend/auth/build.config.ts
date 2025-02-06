import UnpluginTypia from "@ryoppippi/unplugin-typia/bun";
import Bun from "bun";

Bun.build({
  target: "bun",
  entrypoints: [`${__dirname}/src/index.ts`],
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
