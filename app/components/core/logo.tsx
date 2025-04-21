import type { ComponentPropsWithRef } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { cn } from "~/lib/cn";

type Props = ComponentPropsWithRef<typeof Avatar>;

export function Logo({ className, ...props }: Props) {
  return (
    <Avatar
      className={cn("size-12 rounded-none", className)}
      {...props}
    >
      <AvatarImage src="/svg/logo.svg" />
      <AvatarFallback />
    </Avatar>
  );
}
