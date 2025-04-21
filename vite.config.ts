import { reactRouter } from "@react-router/dev/vite";
import unpluginTypia from "@ryoppippi/unplugin-typia/vite";
import tailwindcss from "@tailwindcss/vite";
import millionCompiler from "million/compiler";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    millionCompiler.vite({
      auto: true,
    }),
    unpluginTypia({
      /* options */
      tsconfig: "tsconfig.json",
      typia: {
        functional: true,
        undefined: true,
        finite: true,
      },
    }),
    tailwindcss(),
    reactRouter(),
    tsconfigPaths(),
  ],
});
