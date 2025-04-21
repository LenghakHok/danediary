import clsx from "clsx";
import { memo, useMemo } from "react";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  type LoaderFunctionArgs,
} from "react-router";
import {
  PreventFlashOnWrongTheme,
  ThemeProvider,
  useTheme,
} from "remix-themes";
import "./app.css";
import { themeSessionResolver } from "./session.server";

// Return the theme from the session storage using the loader
export async function loader({ request }: LoaderFunctionArgs) {
  const { getTheme } = await themeSessionResolver(request);
  return {
    theme: getTheme(),
  };
}

export function links() {
  return [
    {
      rel: "icon",
      href: "/svg/logo.svg",
    },
  ];
}

export const App = memo(function App() {
  const data = useLoaderData<typeof loader>();
  const [theme] = useTheme();

  // Memoized components for better performance
  const memoizedMeta = useMemo(() => <Meta />, []);
  const memoizedFlashPrevention = useMemo(
    () => <PreventFlashOnWrongTheme ssrTheme={Boolean(data.theme)} />,
    [data.theme],
  );
  const memoizedLinks = useMemo(() => <Links />, []);
  const memoizedScripts = useMemo(() => <Scripts />, []);

  return (
    <html
      className={clsx(theme)}
      lang="en"
    >
      <head>
        <meta charSet="utf-8" />
        <meta
          content="width=device-width, initial-scale=1"
          name="viewport"
        />
        <link
          href="https://fonts.googleapis.com"
          rel="preconnect"
        />
        <link
          crossOrigin="anonymous"
          href="https://fonts.gstatic.com"
          rel="preconnect"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&family=Lora:ital,wght@0,400..700;1,400..700&family=Recursive:wght@300..1000&display=swap"
          rel="stylesheet"
        />

        <title>Le Insight</title>
        {memoizedMeta}
        {memoizedFlashPrevention}
        {memoizedLinks}
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        {memoizedScripts}
      </body>
    </html>
  );
});

export default function AppWithProviders() {
  const data = useLoaderData<typeof loader>();

  const memoizedThemeProvider = useMemo(
    () => (
      <ThemeProvider
        specifiedTheme={data.theme}
        themeAction="/themes/actions"
      >
        <App />
      </ThemeProvider>
    ),
    [data.theme],
  );

  return memoizedThemeProvider;
}
