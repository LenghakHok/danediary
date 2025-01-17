"use client";

import {
  Corner as ScrollAreaCorner,
  Root as ScrollAreaRoot,
  Scrollbar as ScrollAreaScrollbar,
  Thumb as ScrollAreaThumb,
  Viewport as ScrollAreaViewport,
} from "@radix-ui/react-scroll-area";
import React from "react";

import { cn } from "@utils/cn";

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaRoot>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaRoot>
>(({ className, children, ...props }, ref) => (
  <ScrollAreaRoot
    className={cn("relative overflow-hidden", className)}
    ref={ref}
    {...props}
  >
    <ScrollAreaViewport className="h-full w-full rounded-[inherit]">
      {children}
    </ScrollAreaViewport>
    <ScrollBar />
    <ScrollAreaCorner />
  </ScrollAreaRoot>
));
ScrollArea.displayName = ScrollAreaRoot.displayName;

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaScrollbar>
>(({ className, orientation = "vertical", ...props }, ref) => (
  <ScrollAreaScrollbar
    className={cn(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" &&
        "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" &&
        "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      className,
    )}
    orientation={orientation}
    ref={ref}
    {...props}
  >
    <ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
  </ScrollAreaScrollbar>
));
ScrollBar.displayName = ScrollAreaScrollbar.displayName;

export { ScrollArea, ScrollBar };
