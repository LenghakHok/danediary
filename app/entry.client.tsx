import posthog from "posthog-js";
import { startTransition, StrictMode, useEffect } from "react";
import { hydrateRoot } from "react-dom/client";
import { HydratedRouter } from "react-router/dom";

import { env } from "~/env.client_";

function PosthogInit() {
  useEffect(() => {
    posthog.init(env.VITE_PUBLIC_POSTHOG_KEY, {
      api_host: env.VITE_PUBLIC_POSTHOG_HOST,
    });
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
