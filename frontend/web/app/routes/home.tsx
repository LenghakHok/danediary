import { Button } from "@ui/shadcn/components/button";
import type { Route } from "./+types/home";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <Button
      className="rounded-full font-bold font-mono"
      size="sm"
    >
      This is a button
    </Button>
  );
}
