import clsx from "clsx";
import { useMemo } from "react";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  type LinksFunction,
  type LoaderFunctionArgs,
} from "react-router";
import {
  PreventFlashOnWrongTheme,
  ThemeProvider,
  useTheme,
} from "remix-themes";
import "./app.css";
import { RootLayout } from "./components/layouts/root-layout";
import { env } from "./env";
import { themeSessionResolver } from "./session.server";

// Return the theme from the session storage using the loader
export async function loader({ request }: LoaderFunctionArgs) {
  const { getTheme } = await themeSessionResolver(request);
  return {
    theme: getTheme(),
  };
}

export const links: LinksFunction = () => {
  return [
    {
      rel: "icon",
      href: "/svg/favicon.svg",
      type: "image/svg+xml",
    },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous",
    },
    {
      href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&family=Lora:ital,wght@0,400..700;1,400..700&family=Recursive:wght@300..1000&display=swap",
      rel: "stylesheet",
    },
  ];
};

export const App = function App() {
  const data = useLoaderData<typeof loader>();
  const [theme] = useTheme();

  return (
    <html
      className={clsx(theme)}
      lang="en"
    >
      <head>
        <title>{env.VITE_PUBLIC_APP_NAME}</title>
        <meta charSet="utf-8" />
        <meta
          content="width=device-width, initial-scale=1"
          name="viewport"
        />
        <PreventFlashOnWrongTheme ssrTheme={Boolean(data.theme)} />
        <Meta />
        <Links />
      </head>
      <body>
        <RootLayout>
          <Outlet />
        </RootLayout>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
};

export default function () {
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
