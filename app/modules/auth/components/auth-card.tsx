import { type ComponentPropsWithRef, type ReactNode, memo } from "react";
import { ModeToggle } from "~/components/core/mode-toggle";
import { Card, CardFooter } from "~/components/ui/card";
import { cn } from "~/lib/cn";

type Props = Omit<ComponentPropsWithRef<typeof Card>, "content"> & {
  hideLogo?: boolean;
  header?: ReactNode;
  content?: ReactNode;
  footer?: ReactNode;
};

export const AuthCard = memo(function AuthCard({
  header,
  content,
  footer,
  hideLogo = false,
  className,
  ...props
}: Props) {
  return (
    <Card
      className={cn(
        "relative z-10 w-full max-w-sm gap-0 overflow-hidden bg-accent p-1",
        className,
      )}
      {...props}
    >
      <Card className="flex flex-col rounded-lg shadow-none">
        <ModeToggle
          className="absolute top-1 right-1 rounded-lg rounded-tl-none rounded-br-none border-1 border-t-accent! border-r-accent! border-b-border! border-l-border! bg-accent! transition-none"
          mode="switch"
          variant="outline"
        />
        {header}
        {content}
      </Card>
      <CardFooter className="flex items-center justify-center">
        {footer}
      </CardFooter>
    </Card>
  );
});
