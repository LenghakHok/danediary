import type { ActionFunctionArgs, LoaderFunctionArgs } from "react-router";
import { auth } from "~/lib/auth.server";

export async function loader({ request }: LoaderFunctionArgs) {
  return await auth.handler(request);
}

export async function action({ request }: ActionFunctionArgs) {
  return await auth.handler(request);
}
