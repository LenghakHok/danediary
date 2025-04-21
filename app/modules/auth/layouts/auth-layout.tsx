import { memo, useEffect, useState, type ComponentPropsWithRef } from "react";
import { useTheme } from "remix-themes";
import { Particles } from "~/components/magic/particle";
import { cn } from "~/lib/cn";

type Props = ComponentPropsWithRef<"main">;

export const AuthLayout = memo(function AuthLayout({
  className,
  children,
  ...props
}: Props) {
  const [themes] = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(themes === "dark" ? "#ffffff" : "#000000");
  }, [themes]);

  return (
    <main
      className={cn(
        "relative flex size-full min-h-screen flex-col items-center justify-center overflow-hidden rounded-lg border bg-background",
        className,
      )}
      {...props}
    >
      {children}
      <Particles
        className="absolute inset-0 z-0"
        color={color}
        ease={80}
        quantity={100}
        refresh={true}
      />
    </main>
  );
});
