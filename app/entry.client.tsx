import { startTransition, StrictMode, useEffect } from "react";
import { hydrateRoot } from "react-dom/client";
import { HydratedRouter } from "react-router/dom";

import { env } from "~/env";

function PosthogInit() {
  useEffect(() => {
    async function init() {
      (await import("posthog-js").then((mod) => mod.posthog)).init(
        env.VITE_PUBLIC_POSTHOG_KEY,
        {
          api_host: env.VITE_PUBLIC_POSTHOG_HOST,
        },
      );
    }

    init();
  }, []);

  return null;
}

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <HydratedRouter />
      <PosthogInit />
    </StrictMode>,
  );
});
