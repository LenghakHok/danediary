import UnpluginTypia from "@ryoppippi/unplugin-typia/bun";
import Bun from "bun";

Bun.build({
  target: "bun",
  entrypoints: [`${__dirname}/src/index.ts`],
  minify: true,
  drop: ["console"],
  splitting: true,
  outdir: "./dist",
  plugins: [
    UnpluginTypia({
      log: true,
      cache: true,
      tsconfig: "./tsconfig.json",
    }),
  ],
});
