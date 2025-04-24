import { memo, type ComponentPropsWithRef } from "react";
import { cn } from "~/lib/cn";

type Props = ComponentPropsWithRef<"main">;

export const AuthLayout = memo(function AuthLayout({
  className,
  children,
  ...props
}: Props) {
  return (
    <main
      className={cn(
        "relative flex size-full min-h-screen flex-col items-center justify-center overflow-hidden rounded-lg border bg-background",
        className,
      )}
      {...props}
    >
      {children}
    </main>
  );
});
