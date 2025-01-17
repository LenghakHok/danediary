"use client";

import {
  Item as ToggleGroupItemPrimitive,
  Root as ToggleGroupRoot,
} from "@radix-ui/react-toggle-group";
import type { VariantProps } from "class-variance-authority";
import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  createContext,
  forwardRef,
  useContext,
} from "react";

import { toggleVariants } from "@ui/shadcn/components/toggle";
import { cn } from "@utils/cn";

const ToggleGroupContext = createContext<VariantProps<typeof toggleVariants>>({
  size: "default",
  variant: "default",
});

const ToggleGroup = forwardRef<
  ElementRef<typeof ToggleGroupRoot>,
  ComponentPropsWithoutRef<typeof ToggleGroupRoot> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, children, ...props }, ref) => (
  <ToggleGroupRoot
    className={cn("flex items-center justify-center gap-1", className)}
    ref={ref}
    {...props}
  >
    <ToggleGroupContext.Provider value={{ variant, size }}>
      {children}
    </ToggleGroupContext.Provider>
  </ToggleGroupRoot>
));

ToggleGroup.displayName = ToggleGroupRoot.displayName;

const ToggleGroupItem = forwardRef<
  ElementRef<typeof ToggleGroupItemPrimitive>,
  ComponentPropsWithoutRef<typeof ToggleGroupItemPrimitive> &
    VariantProps<typeof toggleVariants>
>(({ className, children, variant, size, ...props }, ref) => {
  const context = useContext(ToggleGroupContext);

  return (
    <ToggleGroupItemPrimitive
      className={cn(
        toggleVariants({
          variant: context.variant || variant,
          size: (context.size ?? -1 > 0) ? context.size : size,
        }),
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </ToggleGroupItemPrimitive>
  );
});

ToggleGroupItem.displayName = ToggleGroupItemPrimitive.displayName;

export { ToggleGroup, ToggleGroupItem };
