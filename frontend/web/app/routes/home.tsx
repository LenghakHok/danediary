import { authClient } from "@/utils/auth-client";
import { Button } from "@ui/shadcn/components/button";
import type { Route } from "./+types/home";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "DaneDiary" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        authClient.getSession();
      }}
    >
      <Button
        className="rounded-full font-bold"
        size="sm"
      >
        This is a button
      </Button>
    </form>
  );
}
