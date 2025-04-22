import { Link } from "react-router";

import { buttonVariants } from "~/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Muted } from "~/components/ui/typography";
import { env } from "~/env.client_";
import { cn } from "~/lib/cn";

import { AuthCard } from "~auth/components/auth-card";
import { OAuthForm } from "~auth/templates/oauth-form";

export default function SignUp() {
  return (
    <AuthCard
      content={
        <CardContent>
          <OAuthForm />
          {/* <SignUpForm /> */}
        </CardContent>
      }
      footer={
        <Muted className="text-center">
          Already have an account?
          <Link
            className={cn(
              buttonVariants({
                variant: "link",
              }),
              "font-bold",
            )}
            to="/auth/sign-in"
          >
            Sign In
          </Link>
        </Muted>
      }
      header={
        <CardHeader className="flex flex-col items-start justify-center">
          <CardTitle className="font-bold text-2xl">
            Create an Account
          </CardTitle>
          <CardDescription>
            Welcome to {env.VITE_PUBLIC_APP_NAME}. Let&apos;s get you started.
          </CardDescription>
        </CardHeader>
      }
    />
  );
}
